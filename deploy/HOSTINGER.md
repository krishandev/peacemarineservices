# Hostinger VPS deployment — PMS Peace Marine Services

Production domain: `https://peacemarineservices.com.au/`  
New app: Next.js 16.3.8 App Router (this repository)  
Blog CMS: existing WordPress REST API  
**Do not change DNS, replace the live vhost, or delete WordPress until cutover is approved.**

This guide assumes Ubuntu 24.04 on a Hostinger VPS. Commands below are for an operator with SSH access. They were **not** executed against the live server from this workspace.

## 0. What was verified locally

| Item | Result |
|---|---|
| Next.js | 16.3.8 (requires Node `>=20.9.0`) |
| React | 19.2.8 |
| Production commands | `npm run build` then `npm run start` or `npm run start:standalone` |
| Canonical / metadata | `https://peacemarineservices.com.au` in `lib/seo.ts` |
| GA4 | `G-DKZ9H681E2` |
| Search Console verification | `7V8_LK0TzWE8YVHJBPoNPGSNu1OWVmzsmZeFj-F0zZE` |
| WordPress API (public) | `https://peacemarineservices.com.au/wp-json/wp/v2` responds |
| Live origin | `Server: LiteSpeed`, WordPress (`rel="https://api.w.org/"`) |
| Jotform | Client embed on `/contact/` (`form.jotform.com/jsform/262871341651457`) |

## 1. Protect the live site first

The current public site is WordPress behind LiteSpeed. Keep its files, database, uploads, and REST API.

```bash
# Identify the live stack — do not stop anything yet
uname -a
node -v || true
ss -tlnp
systemctl list-units --type=service --state=running | grep -Ei 'lsws|lshttpd|nginx|apache|httpd|php|mysql|mariadb|pm2'
sudo nginx -T 2>/dev/null | head
sudo /usr/local/lsws/bin/lshttpd -v 2>/dev/null || true
ls -la /etc/nginx/sites-enabled 2>/dev/null
ls -la /usr/local/lsws/conf/vhosts 2>/dev/null
ls -la /var/www /home 2>/dev/null
```

Record:

- Document root of the current WordPress site
- PHP / LiteSpeed / Apache listener
- TLS certificate paths
- Whether `www` already redirects to apex

### Backup (run on the VPS)

Replace `WP_ROOT` and database credentials after inspection. Do not delete the backups.

```bash
STAMP=$(date +%Y%m%d-%H%M)
sudo mkdir -p /srv/backups/pms
sudo tar -czf /srv/backups/pms/wordpress-files-$STAMP.tgz -C WP_ROOT .
# If MariaDB/MySQL is used by WordPress:
# sudo mysqldump -u WP_USER -p WP_DATABASE | gzip > /srv/backups/pms/wordpress-db-$STAMP.sql.gz
sudo tar -czf /srv/backups/pms/web-config-$STAMP.tgz \
  /etc/nginx 2>/dev/null \
  /usr/local/lsws/conf 2>/dev/null \
  /etc/letsencrypt 2>/dev/null \
  /etc/apache2 2>/dev/null
ls -lh /srv/backups/pms
```

Rollback later means restoring these archives and the previous vhost, not deleting the Next.js app.

## 2. Isolated application directories

Keep Next.js away from the live WordPress document root.

```bash
sudo mkdir -p /var/www/pms-next/releases /var/www/pms-next/shared
sudo chown -R "$USER":"$USER" /var/www/pms-next
```

Copy `.env.example` to `/var/www/pms-next/shared/.env.production` and fill values. Never commit that file.

## 3. Node.js 22 on Ubuntu 24.04

```bash
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs
node -v   # expect v22.x
npm -v
sudo npm install -g pm2
```

If Hostinger already provides Node, use that as long as it is `>=20.9.0`.

## 4. Staging deploy (no public DNS change)

From your workstation, rsync the repository (excluding `node_modules` and `.next`):

```bash
rsync -az --delete \
  --exclude node_modules --exclude .next --exclude .git \
  ./ USER@VPS:/var/www/pms-next/releases/$(date +%Y%m%d-%H%M)/
```

On the VPS:

```bash
REL=/var/www/pms-next/releases/REPLACE_STAMP
cd "$REL"
cp /var/www/pms-next/shared/.env.production .env.production
npm ci
npm run build
test -f .next/standalone/server.js
# Point current at the standalone output
ln -sfn "$REL/.next/standalone" /var/www/pms-next/current
cp /var/www/pms-next/shared/.env.production /var/www/pms-next/current/.env.production

# Confirm nothing public is bound to 3001
ss -tlnp | grep 3001 || true

cd /var/www/pms-next
pm2 start deploy/ecosystem.config.cjs
# If ecosystem was not copied into standalone, start explicitly:
# HOSTNAME=127.0.0.1 PORT=3001 NODE_ENV=production \
#   pm2 start /var/www/pms-next/current/server.js --name pms-next
pm2 save
pm2 startup
```

Copy `deploy/ecosystem.config.cjs` to `/var/www/pms-next/` if you start via that file. `prepare-standalone.mjs` already copies `public/` and `.next/static` into the standalone folder during `npm run build`.

### Health checks (SSH only; Node is bound to localhost)

```bash
curl -sS http://127.0.0.1:3001/api/health/
curl -sI http://127.0.0.1:3001/
curl -sI http://127.0.0.1:3001/contact/
curl -sI http://127.0.0.1:3001/blog/
curl -sI http://127.0.0.1:3001/sitemap.xml
curl -sI http://127.0.0.1:3001/robots.txt
ss -tlnp | grep 3001    # must show 127.0.0.1:3001, not 0.0.0.0
```

Browse from your laptop without publishing DNS:

```bash
ssh -L 3001:127.0.0.1:3001 USER@VPS
# then open http://127.0.0.1:3001/
```

Optional Nginx loopback proxy: `deploy/nginx/staging-localhost.conf` (listen `127.0.0.1:8088` only). Review before install.

## 5. Staging verification checklist

Use the SSH tunnel. Do not treat this as a public launch.

- [ ] Homepage, header, footer, mobile menu
- [ ] All 12 service pages
- [ ] Location pages: Perth, Fremantle, Kwinana, Bunbury, Albany, Esperance, Geraldton, Port Hedland, Dampier, Karratha, Pilbara, Service Areas
- [ ] `/contact/` shows one Jotform (submit only if you intend a real enquiry)
- [ ] `/blog/` lists WordPress posts; open an article
- [ ] Client photographs via `/_next/image` (no broken images)
- [ ] View-source: canonical `https://peacemarineservices.com.au/...`, GA4 `G-DKZ9H681E2`, Search Console verification meta
- [ ] `/sitemap.xml` and `/robots.txt`
- [ ] JSON-LD present
- [ ] Known redirects (Karratha / Geraldton / Pilbara legacy paths)
- [ ] Unknown path returns Next.js 404, not the old WP theme
- [ ] `pm2 logs pms-next --lines 50` has no crash loop

Jotform, GA4 events, and Search Console indexing are **not** claimed here unless you complete those tests in the browser.

## 6. WordPress must keep serving the API after cutover

The Next.js blog fetches:

`https://peacemarineservices.com.au/wp-json/wp/v2`

If Next.js takes port 443 for the whole host without proxying WordPress, the blog will break. Keep at least:

- `/wp-json/`
- `/wp-admin/`
- `/wp-content/` (featured images)
- `/wp-includes/`
- `wp-login.php`

on the existing WordPress stack. The Nginx template uses placeholders (`WORDPRESS_BACKEND`) until you inspect the real upstream.

## 7. Production cutover (approval required)

Do this only after staging passes and backups exist.

1. Confirm `curl -sS http://127.0.0.1:3001/api/health/` returns `{"ok":true,...}`.
2. Confirm `curl -sS https://peacemarineservices.com.au/wp-json/wp/v2/posts?per_page=1` still works.
3. Snapshot the live vhost one more time.
4. If the VPS is **LiteSpeed** (current public header): add a reverse-proxy vhost/context to `127.0.0.1:3001` for `/` while leaving WordPress locations on PHP. Do not remove LiteSpeed.
5. If the VPS is **Nginx** and nothing else owns 443: enable `deploy/nginx/peacemarineservices.com.au.conf` **after** filling SSL paths and `WORDPRESS_BACKEND`.
6. Canonical host: apex `peacemarineservices.com.au`. Redirect `www` and HTTP → HTTPS.
7. Reload the web server: `sudo nginx -t && sudo systemctl reload nginx` **or** LiteSpeed graceful restart — only the one you identified.
8. Do not change DNS unless the domain already points at this VPS (it currently does for the live site).

### Post-cutover checks

```bash
curl -sI https://peacemarineservices.com.au/
curl -sI https://www.peacemarineservices.com.au/
curl -sI http://peacemarineservices.com.au/
curl -sI https://peacemarineservices.com.au/contact/
curl -sI https://peacemarineservices.com.au/blog/
curl -sI https://peacemarineservices.com.au/wp-json/wp/v2/
curl -sI https://peacemarineservices.com.au/sitemap.xml
pm2 status
pm2 logs pms-next --lines 80
```

Browser: homepage, one service page, one location page, contact Jotform, one blog post, HTTPS padlock on apex and www.

## 8. Rollback

Keep WordPress files and the previous vhost backup.

```bash
pm2 stop pms-next
# Restore the previous web-server vhost from /srv/backups/pms/web-config-*.tgz
# Reload LiteSpeed or Nginx
# Confirm https://peacemarineservices.com.au/ is the old site again
# Leave /var/www/pms-next in place for a later retry
```

Do not delete WordPress, its database, or `/wp-content/uploads`.

## 9. Environment-variable checklist

| Name | Public? | Required | Notes |
|---|---|---|---|
| `NODE_ENV` | no | yes | `production` |
| `PORT` | no | yes | `3001` (localhost only) |
| `HOSTNAME` | no | yes | `127.0.0.1` |
| `NEXT_PUBLIC_WORDPRESS_API_URL` | yes | yes | Existing WP REST base |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | yes | yes | `G-DKZ9H681E2` |
| `REVALIDATE_SECRET` | **secret** | optional | Only for `POST /api/revalidate-blog/` |

Search Console verification is compiled into the app (`lib/analytics.ts`). It is not an env var.

## 10. Public routes that must keep working

Homepage `/`, About, Our Services, 12 service URLs, location URLs, `/contact/`, `/faq/`, `/privacy-policy/`, `/blog/`, `/blog/[slug]/`, `/sitemap.xml`, `/robots.txt`. Legacy redirects in `next.config.ts` for Karratha, Geraldton, and Pilbara stay in the Next.js app.

## LiteSpeed alternative (likely on this VPS)

If `ss -tlnp` shows OpenLiteSpeed/LiteSpeed on 80/443:

1. Do not install Nginx on those ports.
2. Create an External Application pointing to `127.0.0.1:3001`.
3. Proxy `/` to that app.
4. Keep existing WordPress contexts for `/wp-admin`, `/wp-json`, `/wp-content`.
5. Graceful restart only after a config backup.

Exact LiteSpeed UI labels vary by Hostinger image; inspect before editing.
