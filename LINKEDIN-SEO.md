# LinkedIn SEO Optimization Guide

## ✅ Current Setup

Your portfolio is optimized for LinkedIn with:

### 1. **OpenGraph Tags** (LinkedIn's Primary Source)
```typescript
og:type: "profile"           // Changed from "website" to "profile" for personal portfolio
og:title: "Harsh Keshari | Full Stack Developer"
og:description: "Full Stack Developer passionate about..."
og:image: "/og-image.png"    // 1200x630px (LinkedIn recommended size)
og:url: "https://hrshkshri.me"
og:site_name: "Harsh Keshari Portfolio"
og:profile:first_name: "Harsh"
og:profile:last_name: "Keshari"
og:profile:username: "hrshkshri"
```

### 2. **Image Requirements for LinkedIn**
- ✅ Size: 1200x630px (optimal for LinkedIn preview)
- ✅ Format: PNG or JPG
- ✅ Alt text: Included for accessibility
- ⚠️ Ensure `/public/og-image.png` exists and is high quality

### 3. **Twitter Cards** (LinkedIn fallback)
LinkedIn also reads Twitter card tags as fallback:
```typescript
twitter:card: "summary_large_image"
twitter:title: "Harsh Keshari | Full Stack Developer"
twitter:description: "..."
twitter:image: "/og-image.png"
twitter:creator: "@hrshkshri"
```

## 🎨 Creating Your OG Image (`/public/og-image.png`)

Your image should include:
- Your name in large, readable font
- Title: "Full Stack Developer"
- Key tech stack icons (React, Node.js, TypeScript)
- Professional photo or avatar
- Your domain: hrshkshri.me
- Background matching your brand colors (amber/yellow theme)

**Tools to create:**
- [Canva](https://canva.com) - Use "LinkedIn Post" template (1200x630)
- [Figma](https://figma.com) - Custom design
- [OG Image Generator](https://og-image.vercel.app/)

## 📋 LinkedIn Preview Testing

Test how your site appears on LinkedIn:

### Method 1: LinkedIn Post Inspector
1. Go to: https://www.linkedin.com/post-inspector/
2. Enter: `https://hrshkshri.me`
3. Click "Inspect"
4. LinkedIn will show the preview and cache it

### Method 2: Share and Preview
1. Create a new LinkedIn post
2. Paste your URL: `https://hrshkshri.me`
3. LinkedIn auto-generates preview
4. Don't post yet - just check the preview
5. If it looks wrong, update metadata and re-test

## 🔄 Cache Busting

If LinkedIn shows old preview after updates:

1. **LinkedIn Post Inspector** (recommended)
   - Use the Post Inspector tool
   - It forces LinkedIn to re-fetch

2. **Add Query Parameter**
   - Share: `https://hrshkshri.me?v=2`
   - Forces new cache

3. **Wait**
   - LinkedIn cache expires after ~7 days

## 📊 What LinkedIn Shows

When someone shares `https://hrshkshri.me` on LinkedIn:

```
┌─────────────────────────────────────────┐
│  [Image: og-image.png - 1200x630px]    │
│                                          │
│  Harsh Keshari | Full Stack Developer   │ ← og:title
│                                          │
│  Full Stack Developer passionate...     │ ← og:description
│                                          │
│  hrshkshri.me                           │ ← og:url
└─────────────────────────────────────────┘
```

## 🎯 Best Practices

### DO:
✅ Use high-quality, professional image
✅ Keep title under 60 characters
✅ Keep description under 155 characters
✅ Use absolute URLs for images
✅ Include your full name in title
✅ Mention your job title/role
✅ Test preview before sharing

### DON'T:
❌ Use image smaller than 1200x630px
❌ Put too much text in image
❌ Use low-resolution images
❌ Use relative URLs ("/image.png" instead of full URL)
❌ Forget to test on LinkedIn Post Inspector
❌ Use generic descriptions

## 🚀 Advanced: Profile-Specific Pages

For profile pages like `/about`:

```typescript
// Already implemented in your about page
openGraph: {
  type: "profile",
  url: "https://hrshkshri.me/about",
  title: "About Harsh Keshari | Full Stack Developer",
  profile: {
    firstName: "Harsh",
    lastName: "Keshari",
  }
}
```

## 📱 Mobile LinkedIn Preview

LinkedIn mobile app requirements:
- Same 1200x630px image works
- Text should be readable on small screens
- Test on LinkedIn mobile app after caching

## 🔍 SEO + LinkedIn Synergy

Your structured data (JSON-LD) helps:
```json
{
  "@type": "Person",
  "name": "Harsh Keshari",
  "jobTitle": "Full Stack Developer",
  "sameAs": [
    "https://www.linkedin.com/in/hrshkshri/",
    "https://github.com/hrshkshri"
  ]
}
```

This creates a connection between:
- Your portfolio → LinkedIn profile
- Improves discoverability
- Rich results in search

## ✅ Checklist

- [x] OpenGraph tags configured
- [x] Image size: 1200x630px
- [x] Profile type for personal portfolio
- [x] Twitter cards as fallback
- [ ] Create `/public/og-image.png` (if not exists)
- [ ] Test on LinkedIn Post Inspector
- [ ] Share on LinkedIn to verify
- [ ] Update when you change job/role

## 🔗 Useful Links

- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
- [OpenGraph Protocol](https://ogp.me/)
- [LinkedIn Sharing Best Practices](https://www.linkedin.com/help/linkedin/answer/a521928)
- [Your LinkedIn Profile](https://www.linkedin.com/in/hrshkshri/)
