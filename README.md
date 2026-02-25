# XG Football Group

Static website for [XG Football Group](https://xgfootballgroup.com), built for GitHub Pages.

## Structure

```
.
├── index.html          # Homepage
├── 404.html            # Custom 404 page for GitHub Pages
├── .nojekyll           # Disable Jekyll processing (optional, for static sites)
├── README.md
├── css/
│   └── main.css        # Site styles
├── js/
│   └── main.js         # Site scripts (nav, form, scroll reveal)
├── images/
│   └── xg-logo-blue.svg
└── media/
    └── video-bg.mp4    # Hero background video (add your file here)
```

## GitHub Pages setup

1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Under **Source**, choose **Deploy from a branch**.
4. Select the branch (e.g. `main`) and folder **/ (root)**.
5. Save. The site will be at `https://<username>.github.io/<repo-name>/` (or `https://<username>.github.io/` if the repo is named `username.github.io`).

## Custom domain (xgfootballgroup.com)

To serve the site at **https://xgfootballgroup.com** using **A records** and **domain verification** (recommended for security):

### 1. Add the domain on GitHub first

- Repo **Settings → Pages → Custom domain**: enter `xgfootballgroup.com` and click **Save**.
- This reserves the domain and avoids takeover; add DNS at your provider next.

### 2. A records (apex domain)

At your DNS provider, create **four A records** for the apex domain:

| Type | Name/Host | Value |
|------|-----------|--------|
| A    | `@`       | `185.199.108.153` |
| A    | `@`       | `185.199.109.153` |
| A    | `@`       | `185.199.110.153` |
| A    | `@`       | `185.199.111.153` |

*(If your provider uses “Host” instead of “Name”, use `@` or leave blank for the root domain.)*

### 3. CNAME for `www` (required for HTTPS)

GitHub checks **both** the apex and **www** when provisioning the HTTPS certificate. If you see *“www.xgfootballgroup.com is improperly configured”* or *“Domain's DNS record could not be retrieved (InvalidDNSError)”*, add a **CNAME** for `www`:

| Type  | Name/Host | Value                    |
|-------|-----------|--------------------------|
| CNAME | `www`     | `YOUR_USERNAME.github.io` |

Use your real GitHub username; no `https://`, repo name, or trailing slash. After DNS propagates (a few minutes), the error should clear and **Enforce HTTPS** can be enabled.

### 4. HTTPS

Once the apex A records and the `www` CNAME are correct, GitHub will issue a certificate from Let’s Encrypt. If the DNS check shows successful but **“Enforce HTTPS”** is unavailable with *“your domain is not properly configured to support HTTPS”*:

1. **CAA records (most common blocker)**  
   If your DNS has any **CAA** records, Let’s Encrypt cannot issue a cert unless one allows it. At your DNS provider, add a CAA record: Name `@`, Value `0 issue "letsencrypt.org"` (or add `letsencrypt.org` to your existing CAA policy). If you’re not sure, list CAA with: `dig xgfootballgroup.com CAA +short` — if you see records but none mention `letsencrypt.org`, add one or temporarily remove CAA until HTTPS works.

2. **Restart certificate provisioning**  
   **Repo** → **Settings → Pages → Custom domain**: click **Remove**, then type `xgfootballgroup.com` again and **Save**. Wait at least 15–30 minutes (GitHub says up to an hour). Try **Enforce HTTPS** again.

3. **Check if HTTPS already works**  
   Open `https://xgfootballgroup.com` and `https://www.xgfootballgroup.com` in a browser. Sometimes the certificate is ready and the checkbox updates later; if both load over HTTPS, you can use the site and re-check **Enforce HTTPS** after 24 hours.

4. **If it still fails**  
   Wait up to 24 hours after the last DNS or domain change. If nothing changes, consider [GitHub Support](https://support.github.com/) — provisioning can occasionally get stuck on their side.

### 6. TXT record (optional – domain verification)

TXT verification is **optional**. It prevents other GitHub users from using your domain with their Pages site (takeover protection). It does **not** affect HTTPS.

**Where the TXT value comes from:** GitHub only shows it in **your account’s** Pages settings, not in the repo.

1. Go to **https://github.com/settings/pages** (or: profile picture → **Settings** → left sidebar **Pages** under “Code, planning, and automation”).
2. Under **“Custom domain verification”**, click **Add a domain**.
3. Type `xgfootballgroup.com` and click **Add domain**.
4. **Only after** you add the domain, GitHub shows **“Add a DNS TXT record”** with:
   - **Host:** e.g. `_github-pages-challenge-YOUR_USERNAME.xgfootballgroup.com`
   - **Value:** a long token — copy it exactly (including quotes if shown).
5. Add that **TXT** record at your DNS provider, wait for propagation, then on GitHub click **Verify**.

If you don’t see “Add a domain” or the TXT instructions, try another browser or incognito; the option can be easy to miss in the profile sidebar.

### 7. Check DNS (optional)

```bash
# A records
dig xgfootballgroup.com +short A

# TXT record (use the exact host GitHub showed you)
dig _github-pages-challenge-YOUR_USERNAME.xgfootballgroup.com +short TXT
```

## Contact form

The contact form uses [EmailJS](https://www.emailjs.com/). Set your credentials in `js/main.js`:

- `EMAILJS_PUBLIC_KEY`
- `EMAILJS_SERVICE_ID`
- `EMAILJS_TEMPLATE_ID`

## Hero video

Place your hero background video as `media/video-bg.mp4`. If the file is missing, the hero section will still render; the video element will simply not load a source.
