# Win Fitness Factory — Website Project Description
> DuoCode Technology | Single-Page Landing Page

---

## 1. Project Overview

- **Client:** Win Fitness Factory — Best Gym in Klang
- **Type:** Single-page marketing website (brochure site)
- **Goal:** High-impact, premium, high-conversion landing page that turns visitors into gym members
- **Rating:** 4.9 ⭐ · 435 Google Reviews

---

## 2. Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Shadcn/UI
- Framer Motion (all animations)

---

## 3. Brand & Colors

**Logo file:** `win_fit_fitness_factory_logo.jpg` → place in `/public/`

**CSS Variables:**
```css
--color-navy:   #0d1040   /* deep base background */
--color-blue:   #1a1f6e   /* secondary bg, navbar */
--color-accent: #e8401c   /* orange-red — CTAs, price tags */
--color-neon:   #00c2ff   /* neon cyan — glow effects, highlights */
--color-white:  #ffffff   /* headings, body text */
--color-muted:  #8892b0   /* secondary text */
```

---

## 4. Design Direction — Cyber / Athletic Dark

- Base: near-black navy (`#0d1040`) throughout
- Accent: orange-red (`#e8401c`) for CTAs, prices, key highlights
- Neon cyan (`#00c2ff`) for glow effects, borders, hover states
- Typography: **Bebas Neue** (display/headings) + **DM Sans** (body) via Google Fonts
- Subtle noise texture overlay on hero background
- Neon glow via `box-shadow` / `text-shadow` — only on key elements, not overused
- Decorative diagonal slash / grid line background details
- No purple gradients — strictly dark navy + orange-red + cyan only

---

## 5. Animations (Framer Motion)

> Use Framer Motion for ALL animations — no CSS keyframes except simple hover transitions.

1. **Page load stagger** — Navbar, hero heading, subtext, CTA buttons fade+slide in sequentially on mount
2. **Hero parallax** — Background image scrolls slower than content (`useScroll` + `useTransform` on `y`)
3. **Section fade-in + slide up** — Every section: `initial={{ opacity: 0, y: 40 }}` → `whileInView={{ opacity: 1, y: 0 }}`, `viewport={{ once: true }}`
4. **Counter animation** — Stats numbers count up from 0 on scroll-in using `useEffect` + `setInterval`
5. **Service card hover glow** — `translateY(-8px)` lift + `box-shadow: 0 0 20px #00c2ff40` neon border on hover

---

## 6. Page Sections

### 6.1 Navbar
- Sticky, transparent → dark blur (`backdrop-filter: blur`) on scroll
- Logo left, nav links right: Home · About · Classes · Contact
- "Join Now" CTA button in orange-red (`#e8401c`)

### 6.2 Hero — Full-width Cinematic
- Full viewport height, gym background image + dark overlay `rgba(13,16,64,0.75)`
- Bebas Neue heading: **"FORGE YOUR LIMITS"**
- Subheading: "Klang's Premier Fitness Club — Bandar Botanik"
- Rating badge: ⭐ 4.9 · 435 Google Reviews
- Two CTAs: "Join Now" (orange-red filled) + "Explore Classes" (neon cyan outline)
- Parallax scroll on background image
- Stagger animation on page load

### 6.3 Stats Bar
- Full-width dark strip, counters animate on scroll
- `500+` Members · `4.9★` Google Rating · `435` Reviews · `8+` Classes

### 6.4 About
- Two-column layout: left = text, right = gym image
- **Copy:**
  > WinFit Fitness Factory is a luxury concept fitness club at Bandar Botanik, Klang — equipped with state-of-the-art cardio machines, free weights, kettlebells, TRX, and two dedicated studios for aerobic and dance classes. With certified trainers on-site, we offer specialized programs for scoliosis, autism athletes, seniors, and exercise therapy — because fitness is for everyone.
- Amenities icon list: 🏋️ State-of-the-art Equipment · 🧖 Sauna · 🚿 Individual Washrooms · 📊 InBody Analysis · 👨‍🏫 Certified Trainers

### 6.5 Services / Classes
3-column card grid (1 col mobile). Each card: icon, class name, short description, price tag in orange-red. Hover glow effect (neon cyan).

| Class / Service | Price |
|---|---|
| Personal Training 1:1 | RM 88 |
| HIIT (Beginner-Friendly) | RM 80 |
| Muay Thai & Kickboxing | RM 88 |
| Zumba | RM 20 |
| Yoga | RM 20 |
| Boot Camp | — |
| Aerobic / Stretching & Strength | — |
| InBody Body Composition Analysis | RM 15 |

### 6.6 Trainers
- 3 placeholder trainer cards: photo, name, specialization
- Same hover lift effect as service cards

### 6.7 Testimonials
- 3 placeholder reviews with star rating, quote, name
- Dark card style, muted background

### 6.8 Contact / Location
- Two-column: left = info + CTA, right = Google Maps embed
- **Address:** KS7, No. 16-1, 16-2, 18-1 & 18-2, 20, Jalan Kasuarina 11, Bandar Botanik, 41200 Klang, Selangor
- **Phone:** 03-3318 0999
- **WhatsApp CTA:** https://wa.me/60333180999
- **Facebook:** (client to confirm URL)

**Opening Hours:**

| Day | Hours |
|---|---|
| Monday | 7:30 am – 10:00 pm |
| Tuesday | 7:45 am – 10:00 pm |
| Wednesday | 8:00 am – 10:00 pm |
| Thursday | 7:45 am – 10:00 pm |
| Friday | 8:00 am – 10:00 pm |
| Saturday | 7:30 am – 7:00 pm |
| Sunday | Closed |

### 6.9 Footer
- Logo, nav links, Facebook icon (placeholder link)
- Copyright: © 2025 Win Fitness Factory
- Thin neon cyan (`#00c2ff`) top border

---

## 7. File Structure

```
/public/
  win_fit_fitness_factory_logo.jpg

/app/
  page.tsx
  layout.tsx
  globals.css

/components/
  Navbar.tsx
  Hero.tsx
  Stats.tsx
  About.tsx
  Services.tsx
  Trainers.tsx
  Testimonials.tsx
  Contact.tsx
  Footer.tsx
```

---

## 8. Notes for Claude Code

- Use `framer-motion` for ALL animations
- Scroll animations: `whileInView={{ opacity: 1, y: 0 }}` + `initial={{ opacity: 0, y: 40 }}` + `viewport={{ once: true }}`
- Parallax hero: `useScroll` + `useTransform` on background `y` position
- Counter: `useEffect` + `setInterval` triggered by `useInView`
- All images via `next/image` with proper `alt` text
- Mobile-first, breakpoints at `md` and `lg`
- Write realistic gym copy in English — no lorem ipsum
- Google Maps embed for: `KS7, Jalan Kasuarina 11, Bandar Botanik, 41200 Klang`

### Image Placeholders
**Client will provide all actual image assets later. For now:**
- Use placeholder divs with a dark background (`bg-gray-800`) and appropriate aspect ratio for all images
- This includes: logo, hero background, gym interior photos, trainer profile photos
- Mark every image placeholder with a comment so it's easy to swap later:
  ```tsx
  {/* TODO: Replace with actual image — [description e.g. "Hero background gym photo"] */}
  <div className="w-full h-full bg-gray-800" />
  ```
- For the logo in Navbar and Footer, use a plain text fallback: `<span>WinFit</span>` styled in brand colors until logo is provided
