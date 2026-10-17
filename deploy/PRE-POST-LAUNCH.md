# Pre-launch and post-launch checklists

## Pre-launch (staging on 127.0.0.1:3001)

- [ ] Live WordPress files, database, and vhost backed up under `/srv/backups/pms`
- [ ] Current web server identified (LiteSpeed vs Nginx vs Apache)
- [ ] Node `>=20.9.0` installed
- [ ] `/var/www/pms-next` isolated from the WordPress document root
- [ ] `.env.production` present on the server, not in git
- [ ] `npm run build` succeeded on the VPS
- [ ] PM2 `pms-next` is online and bound to `127.0.0.1:3001`
- [ ] `/api/health/` returns ok
- [ ] Homepage, 12 services, location pages, contact Jotform, blog list + article
- [ ] Images, canonical tags, sitemap, robots.txt
- [ ] WordPress `/wp-json/wp/v2` still works on the live domain
- [ ] Rollback archive tested (you know how to restore the old vhost)
- [ ] Cutover explicitly approved

## Post-launch (public domain)

- [ ] `https://peacemarineservices.com.au/` is the Next.js site
- [ ] `https://www.peacemarineservices.com.au/` redirects to apex HTTPS
- [ ] `http://` redirects to HTTPS
- [ ] `/contact/` Jotform loads
- [ ] `/blog/` still reads WordPress
- [ ] `/wp-json/` still answers
- [ ] `/wp-admin/` still reachable for CMS editors
- [ ] PM2 has no restart loop
- [ ] TLS certificate valid
- [ ] GA4 snippet present in view-source (`G-DKZ9H681E2`)
- [ ] Search Console verification meta present
- [ ] Watch logs for 30–60 minutes
