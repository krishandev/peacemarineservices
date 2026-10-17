# Nginx samples — review before installing

These files are templates. Do **not** copy them over a live Hostinger vhost until:

1. You have identified the current web server (live production currently sends `Server: LiteSpeed`).
2. You have backed up existing vhosts, certificates, and the WordPress document root.
3. Staging on `127.0.0.1:3001` has passed.
4. You have an explicit cutover approval.

If OpenLiteSpeed / LiteSpeed is serving the current site, do not uninstall it to install Nginx. Use the LiteSpeed notes in `deploy/HOSTINGER.md` instead, or add Nginx beside it only after confirming no port 80/443 clash.
