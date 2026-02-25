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

## Contact form

The contact form uses [EmailJS](https://www.emailjs.com/). Set your credentials in `js/main.js`:

- `EMAILJS_PUBLIC_KEY`
- `EMAILJS_SERVICE_ID`
- `EMAILJS_TEMPLATE_ID`

## Hero video

Place your hero background video as `media/video-bg.mp4`. If the file is missing, the hero section will still render; the video element will simply not load a source.
