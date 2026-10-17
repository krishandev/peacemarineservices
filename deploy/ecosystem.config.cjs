/**
 * PM2 process file for the Next.js standalone server.
 *
 * Review before use:
 * - Confirm PORT 3001 is free on the VPS (`ss -tlnp`).
 * - Point cwd at the standalone directory that contains server.js.
 * - Load production env from the shared env file, not from git.
 */
module.exports = {
  apps: [
    {
      name: "pms-next",
      cwd: "/var/www/pms-next/current",
      script: "/var/www/pms-next/current/server.js",
      interpreter: "node",
      instances: 1,
      exec_mode: "fork",
      watch: false,
      max_memory_restart: "512M",
      env: {
        NODE_ENV: "production",
        PORT: "3001",
        HOSTNAME: "127.0.0.1",
      },
    },
  ],
};
