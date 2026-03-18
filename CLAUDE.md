# CLAUDE.md - WinFitness_website

> **Last Updated**: 2026-03-18
> **Project**: WinFitness_website
> **Description**: Single-page marketing website for Win Fitness Factory (Klang's best gym) — built with Next.js 14, TypeScript, Tailwind CSS, Shadcn/UI, and Framer Motion.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/UI
- **Animations**: Framer Motion (all animations)
- **Fonts**: Bebas Neue (display) + DM Sans (body) via Google Fonts

## Brand Colors
- Navy `#0d1040` — base background
- Blue `#1a1f6e` — secondary bg, navbar
- Accent `#e8401c` — CTAs, price tags (orange-red)
- Neon `#00c2ff` — glow effects, highlights (cyan)
- White `#ffffff` — headings, body text
- Muted `#8892b0` — secondary text

## Project Structure
```
/app/          — Next.js App Router pages & layout
/components/   — All page section components
/public/       — Static assets (logo, images)
```

## Commands
```bash
npm run dev     # Start dev server
npm run build   # Production build
npm run lint    # Run ESLint
```

## Key Rules
- Use `framer-motion` for ALL animations (no CSS keyframes except simple hover)
- All images via `next/image` with proper alt text
- Mobile-first responsive design (breakpoints at `md` and `lg`)
- Image placeholders use `bg-gray-800` divs with TODO comments for easy swap
- Logo uses text fallback (`WinFit`) until actual logo is provided

## GitHub
- Remote: https://github.com/TCF1209/win_fitness_victory_website.git
- Branch: main
