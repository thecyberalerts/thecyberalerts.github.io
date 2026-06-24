# The Cyber Alerts - Cybersecurity Blog

Welcome to **The Cyber Alerts**, a cybersecurity blog built with Jekyll and GitHub Pages.

🌐 **Live Site**: https://thecyberalerts.github.io

## Features

✅ **Jekyll-powered** - Fast, static site generation  
✅ **GitHub Pages** - Free hosting with automatic deployment  
✅ **Responsive Design** - Works on all devices  
✅ **Dark Theme** - Cybersecurity aesthetic  
✅ **SEO Optimized** - Automatic sitemap and meta tags  
✅ **Comments Ready** - Add Disqus or Utterances  

## Local Development

### Prerequisites
- Ruby 3.0+
- Bundler

### Setup & Run

```bash
# Clone the repository
git clone https://github.com/thecyberalerts/thecyberalerts.github.io.git
cd thecyberalerts.github.io

# Install dependencies
bundle install

# Start the Jekyll development server
bundle exec jekyll serve

# Open http://localhost:4000 in your browser
```

## Creating New Posts

1. Create a file in `_posts/` folder with format: `YYYY-MM-DD-title.md`
2. Add front matter (metadata)
3. Write your post in Markdown

Example:
```markdown
---
layout: post
title: "Your Post Title"
date: 2026-06-24
categories: [cybersecurity, threats]
tags: [security, analysis]
---

Your post content here...
```

## Folder Structure

```
├── _config.yml          # Jekyll configuration
├── _posts/              # Blog posts
├── _layouts/            # Page layouts
├── assets/              # CSS, images, media
├── about.md             # About page
├── index.md             # Homepage
└── Gemfile              # Ruby dependencies
```

## Customization

- **Site Title**: Edit `title` in `_config.yml`
- **Colors**: Modify CSS variables in `assets/css/style.css`
- **Author Info**: Update `author` and `email` in `_config.yml`
- **Social Links**: Add your GitHub/Twitter usernames in `_config.yml`

## GitHub Pages Setup

Your site should automatically deploy when you push to the `main` branch. If not:

1. Go to **Settings** → **Pages**
2. Select **Deploy from a branch**
3. Choose `main` branch, `/root` folder
4. Save

Your site will be live at: `https://thecyberalerts.github.io`

## Adding More Features

### Enable Comments (Disqus)
Add to `_config.yml`:
```yaml
disqus:
  shortname: your-disqus-shortname
```

### Enable Analytics (Google Analytics)
Add to `_config.yml`:
```yaml
google_analytics: your-tracking-id
```

## Content Ideas

- Vulnerability analysis and CVE reviews
- Threat intelligence reports
- Security best practices
- Incident response case studies
- Tool reviews and comparisons
- Security news commentary
- Compliance frameworks explanation

## Support

For issues or improvements, open an issue or PR in this repository.

## License

This blog is open source and available under the MIT License.

---

**Stay Secure. Stay Informed. Stay Ahead of Threats.** 🛡️