# 💙 Gazelle — A Love Letter Website

A beautiful, mobile-first love letter website built for **Khalil & Reem**. Features a blooming heart animation, an elegant poem with scroll-triggered fade-ins, and a soft baby-blue & pink theme.

## ✨ Features

- **Blooming Heart** — A canvas-drawn heart made of animated flower petals
- **Live Counter** — Days, hours, minutes, and seconds since October 3, 2025
- **Romantic Poem** — Lines fade in as you scroll, with cursive highlights
- **Photo Overlay** — Tap the heart icon to view a couple photo in a blurred overlay
- **Floating Hearts** — Soft emoji hearts float up across the screen
- **Fully Responsive** — Mobile-first design optimized for phones (375px+)

## 🎨 Design

| Token | Color |
|-------|-------|
| Baby Blue | `#89CFF0` |
| Pink | `#FFB6C1` |
| Text | `#4A3545` |
| Background | Gradient from `#FFF0F5` → `#E8F4FD` → `#FFD6DE` |

**Fonts:** [Quicksand](https://fonts.google.com/specimen/Quicksand) (body) + [Dancing Script](https://fonts.google.com/specimen/Dancing+Script) (highlights)

## 📁 Project Structure

```
gazelle/
├── index.html          — Main page
├── US.jpg              — Couple photo
├── css/
│   ├── default.css     — Custom styles (baby blue & pink theme)
│   └── all.min.css     — Font Awesome (local)
├── js/
│   ├── functions.js    — Heart animation, timer, poem reveal
│   ├── garden.js       — Canvas bloom/petal engine
│   └── jquery.js       — jQuery
└── webfonts/           — Font Awesome woff2 files
```

## 🚀 Usage

Just open `index.html` in a browser — no build step needed. For the best experience, view on a phone or use Chrome DevTools mobile emulation (375×812).

## 📝 Personalization

To adapt this for your own use, edit these values in `index.html`:

| What | Where |
|------|-------|
| Names | `<h1>` in `#messages`, poem text, `.signature` |
| Start date | `new Date(2025, 9, 3, ...)` — month is 0-indexed (9 = October) |
| Photo | Replace `US.jpg` with your image |

## 🙏 Credits

Originally inspired by [LoveProject](https://github.com/ritvikbhatia/LoveProject) by Ritvik Bhatia. Redesigned and personalized with a new theme, mobile-first layout, and modern code practices.
