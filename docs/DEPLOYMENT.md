# KeySplera deployment

Host: GitHub Pages, Actions build from master. Custom domain: keysplera.mosuzo.com.
DNS CNAME audited 2026-11-18: mosuzo-studio.github.io (already configured).

Run npm ci, npm run check, npm run build, npm run verify. In repository Settings → Pages choose GitHub Actions, set the custom domain, then enforce HTTPS when the certificate is ready. public/CNAME must be included in dist.

New commits use command-scoped git -c user.name="Mosuzo Studio" -c user.email="mosuzo.studio@gmail.com" commit. No global identity changes or history rewrites.

The verified v0.1.0 installer is linked directly. Existing README and docs/images are retained.
