# PRD — The Waterfall Restaurant Indore
### Official Website · Frontend Preview Build

---

## 🔍 WEBSITE STATUS VERDICT

**No official website exists.** Only JustDial, Zomato, and an Instagram presence. You're walking in with zero digital competition from their own side. The boss will see this and immediately feel the gap you're filling.

---

## 01 · PROJECT SNAPSHOT

| Field | Value |
|---|---|
| Client | The Waterfall Restaurant, Indore |
| Build Type | Frontend Preview → Production Handoff |
| Delivery | 3 days post-approval |
| Pricing | ₹3,000 one-time + ₹100/month maintenance |
| Frontend Stack | React + Tailwind + Framer Motion + 21st.dev |
| Backend (Phase 2) | Supabase (DBMS) |
| Primary CTAs | WhatsApp · Digital Menu · Directions |
| Design Language | Nature + Water · Teal · Slate · Flowing Motion |

---

## 02 · DESIGN SYSTEM

### Color Palette
```
Primary:    #0D9488  → Teal 600      (water, CTA buttons)
Secondary:  #134E4A  → Teal 900      (dark sections, nav)
Accent:     #5EEAD4  → Teal 300      (highlights, hover states)
Surface:    #F0FDFA  → Teal 50       (light section BG)
Dark BG:    #042F2E  → near-black    (hero, footer)
Text:       #1C1917  → Stone 900     (body)
Muted:      #78716C  → Stone 500     (subtext)
Gold:       #D4AF37                  (ratings, stars, price badge)
```

### Typography
```
Display:    'Playfair Display' → headings, hero title (Google Fonts)
Body:       'Inter'            → paragraphs, nav, UI labels
Accent:     'Cormorant Garamond' → taglines, quotes, menu section labels
```

### Motion Language
```
Parallax:        Hero background scrolls at 0.4x speed
Section Entry:   Fade-up + Y(40px → 0) on scroll, staggered children
Water Shimmer:   CSS keyframe on decorative elements (opacity pulse)
Card Hover:      Scale(1.03) + shadow deepens + teal border appears
CTA Pulse:       WhatsApp button soft glow loop
Menu Items:      Horizontal slide-in alternating left/right per row
Gallery:         Masonry grid, hover reveals overlay with category tag
Nav:             Blur backdrop on scroll, teal underline slide animation
```

---

## 03 · PAGE ARCHITECTURE

```
/
├── Hero Section              ← Parallax BG + animated headline
├── About Section             ← Story + USP cards (waterfall, pool, BBQ)
├── Menu Section              ← Category tabs + card grid
├── Gallery Section           ← Masonry photo grid (Google Maps photos)
├── Events / Special Dining   ← Birthday, anniversary, corporate cards
├── Reviews Section           ← 4.8★ badge + 3 featured reviews carousel
├── Visit Us Section          ← Map embed + hours + contact info
└── Footer                    ← Links + WhatsApp CTA + social

Route: Single scroll page with smooth anchor navigation
Mobile: Fully responsive, hamburger nav, touch-optimized
```

---

## 04 · SECTION-BY-SECTION SPEC

---

### 🟦 SECTION 1 — HERO

**Goal:** First impression. Make them feel the waterfall before they even read anything.

```
Layout:        Full viewport height (100vh)
Background:    Parallax image (waterfall/pool ambiance from Google Maps)
               + dark gradient overlay (bottom 60%)
Overlay:       Linear gradient: transparent → #042F2E (80%)

Content:
  - Small badge top:  ⭐ 4.8 · 10,742 Reviews · Est. 2020
  - H1:               "Dine Where the Water Falls"
  - Subtext:          "Indore's most immersive dining experience.
                       Tables by the waterfall. BBQ at your seat.
                       Memories every time."
  - CTAs (2 buttons):
      [WhatsApp Us]  → wa.me/917000359623
      [View Menu]    → scrolls to #menu

Animation:
  - H1 word-by-word fade-up with stagger (Framer Motion)
  - Badge slides in from left (0.3s delay)
  - Buttons pop in last (0.8s delay)
  - Parallax: background moves at scrollY * 0.4
  - Floating water ripple SVG decorative element (CSS animation)
```

---

### 🟦 SECTION 2 — ABOUT / USP

**Goal:** Tell the story. 3 unique selling points as visual cards.

```
Layout:        2-col (text left, image right) on desktop
               Stacked on mobile

Left Side:
  H2: "More Than a Restaurant"
  Para: The waterfall experience, established 2020, near Medicaps...
  
Right Side: Image with teal border + subtle drop shadow

USP Cards (3 cards, icon + title + text):
  1. 🌊 Waterfall Dining    → "Sit beside a real cascading waterfall"
  2. 🔥 BBQ At Your Table   → "Individual grills, cook your own feast"
  3. 🏊 Poolside Evenings   → "Poolside seating for the perfect evening"

Animation:
  - Section fades up on scroll entry
  - USP cards stagger in with 0.15s delay each
  - Left/right content slides in from respective sides
```

---

### 🟦 SECTION 3 — MENU

**Goal:** Digital menu that replaces a PDF. Browsable, filterable.

```
Category Tabs (horizontal scroll on mobile):
  All | Starters | Main Course | Beverages | Desserts | Sizzlers | Noodles & Rice

Menu Items (from Google Maps data):
  Starters:
    - Crispy Corn
    - Chicken Tikka
    - Fish Tikka Masala
    - Chilli Paneer

  Main Course:
    - Butter Chicken + Naan
    - Lachha Paratha
    - Hakka Noodles

  Sizzlers:
    - Western Sizzler

  Beverages:
    - Virgin Mojito
    - Blue Lagoon

  Desserts:
    - Sizzling Brownie

Card Design per Item:
  - Placeholder food image (teal gradient if no photo)
  - Item name (Playfair Display)
  - Short description (1 line)
  - Veg/Non-Veg dot indicator (green/red FSSAI standard)
  - Price: "₹ —" (you can ask boss to fill exact prices later)

Animation:
  - Tab switch: items fade out → fade in (Framer Motion AnimatePresence)
  - Cards stagger animate on first view
  - Active tab: teal underline slide
```

---

### 🟦 SECTION 4 — GALLERY

**Goal:** Sell the vibe visually. Photos are the strongest conversion tool.

```
Layout:        CSS Masonry grid (3 cols desktop, 2 cols tablet, 1 mobile)
Source:        Screenshots/downloads from Google Maps listing photos

Hover State:
  - Dark overlay appears
  - Category label: "Ambiance" / "Food" / "Pool" / "Waterfall"
  - Scale(1.02) subtle zoom

Lightbox:      Click opens full image modal (react-image-lightbox or similar)

Animation:
  - Images fade in staggered as they enter viewport
  - Smooth masonry load with layout animation
```

---

### 🟦 SECTION 5 — EVENTS & SPECIAL DINING

**Goal:** Upsell private/special occasions. High margin for the restaurant.

```
3 Event Cards:
  🎂 Birthday & Anniversary    → "We set the scene. You bring the love."
  💼 Corporate Dinners         → "Premium setting for your business moments."
  🌙 Poolside Special Evening  → "500/person pool access · Redeemable in bill"

Each Card:
  - Background image (teal gradient overlay)
  - Title + short description
  - [WhatsApp to Book] CTA button → direct WhatsApp

Animation:
  - Cards slide up staggered on scroll
  - Hover: border glow effect (teal)
```

---

### 🟦 SECTION 6 — REVIEWS

**Goal:** Social proof. 4.8★ with 10K+ reviews is a massive trust signal.

```
Top:
  Big centered badge: ⭐ 4.8 / 5  ·  "Based on 10,742+ Google Reviews"

3 Featured Review Cards (carousel / auto-scroll):
  - Quote icon
  - Review text (from Google Maps — pick 3 positive ones)
  - Reviewer name
  - Star rating
  - "Google Review" tag

CTA below:
  [Read All Reviews on Google] → links to Google Maps URL

Animation:
  - Badge counter animates up: 0 → 4.8 on scroll entry
  - Review cards auto-cycle every 4s (pause on hover)
  - Fade transition between cards
```

---

### 🟦 SECTION 7 — VISIT US

**Goal:** Remove all friction to visiting. Map + hours + phone + WhatsApp.

```
Left: Google Maps Embed (iframe, location pinned)
Right:
  📍 Address:   Near MITM College / Medicaps, Caps Town, Indore - 453331
  🕐 Hours:     11:00 AM – 11:30 PM · Open 7 days
  📞 Phone:     070003 59623 (click-to-call on mobile)
  💬 WhatsApp:  [Chat Now] → wa.me/917000359623
  🚗 Directions: [Get Directions] → Google Maps link

Animation:
  - Left map slides in from left
  - Right info slides from right
  - Info items stagger with icons
```

---

### 🟦 FOOTER

```
Logo/Name (left)
Quick Links (center): Home · Menu · Gallery · Events · Contact
Social Icons (right): Instagram · WhatsApp
Bottom bar: "© 2024 The Waterfall Restaurant · Indore"
Floating WhatsApp Button: Fixed bottom-right, always visible, pulse animation
```

---

## 05 · TECH STACK DECISIONS

| Tech | Why | Not Using |
|---|---|---|
| React + Vite | Fast HMR, modern, 21st.dev compatible | CRA (dead) |
| Tailwind CSS v3 | Utility-first, consistent design tokens | Styled-components (verbose) |
| Framer Motion | Best-in-class React animation, scroll triggers | GSAP (overkill for this scope) |
| 21st.dev components | Pre-built premium UI, saves 2 days of component work | shadcn (less animated) |
| react-parallax / useScroll | Clean parallax without fighting Framer | Pure CSS parallax (buggy on iOS) |
| Vercel | Free tier, instant deploy, custom domain ready | Netlify (slower cold starts) |

---

## 06 · COMPONENT FILE STRUCTURE

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Menu.jsx
│   │   ├── Gallery.jsx
│   │   ├── Events.jsx
│   │   ├── Reviews.jsx
│   │   └── VisitUs.jsx
│   └── ui/
│       ├── MenuCard.jsx
│       ├── ReviewCard.jsx
│       ├── EventCard.jsx
│       ├── WhatsAppButton.jsx
│       └── StarRating.jsx
├── data/
│   ├── menuData.js       ← all menu items array
│   ├── reviewData.js     ← 3 curated reviews
│   └── galleryData.js    ← image paths/URLs
├── assets/
│   └── images/           ← downloaded Google Maps photos
├── App.jsx
└── main.jsx


## PRD ADDENDUM — Section 8.1
### Real Image Asset Mapping + AI Food Photos Strategy

---

### 8.1.A — Your 3 Real Images → Placement Map

```
FILE: Screenshot_2026-04-11_142552.png  (Night lit waterfall)
→ HERO background (primary)
→ Parallax scroll layer
→ Reviews section background (darkened overlay)

FILE: Screenshot_2026-04-11_142423.png  (Floating tray + pool)
→ Events section — "Poolside Special Evening" card BG
→ OR Hero secondary slide (if hero becomes a slider)

FILE: Screenshot_2026-04-11_142400.png  (Daytime waterfall + chairs)
→ About section — right column image
→ Gallery grid — featured/large card (top-left)
```

---

### 8.1.B — AI Food Photos (5-6 Items)

**Tool:** Midjourney / DALL-E 3 / Adobe Firefly (free)

**Prompts to generate — copy paste exactly:**

```
1. SIZZLER
"western sizzler plate with grilled chicken vegetables on hot iron 
plate with smoke rising, dark moody restaurant background, 
professional food photography, top angle, 8k"

2. BUTTER CHICKEN
"butter chicken in black bowl with naan bread on side, 
dark wooden table, warm lighting, indian fine dining, 
professional food photography, bokeh background"

3. CHILLI PANEER
"chilli paneer dry in black plate garnished with spring onion 
and chillies, restaurant plating, moody dark background, 
food photography 8k"

4. VIRGIN MOJITO
"virgin mojito in tall glass with mint leaves lime wedge 
condensation on glass, dark premium bar background, 
food photography studio lighting"

5. SIZZLING BROWNIE
"sizzling brownie with vanilla ice cream on hot iron plate 
with smoke, dark background, warm restaurant lighting, 
close up food photography"

6. CRISPY CORN
"crispy corn in black bowl with seasoning garnish, 
dark moody background, indian restaurant, 
professional food photography overhead shot"
```



---

### 8.1.C — Updated Gallery Section Spec

```
GRID LAYOUT (Masonry - 3 cols desktop):

Row 1:
  [LARGE - col span 2] Night waterfall photo (Image 3) ← hero of gallery
  [SMALL] AI Butter Chicken photo

Row 2:
  [SMALL] Floating tray photo (Image 2)
  [SMALL] AI Sizzler photo
  [SMALL] AI Virgin Mojito photo

Row 3:
  [LARGE - col span 2] Daytime waterfall photo (Image 1)
  [SMALL] AI Sizzling Brownie photo

Row 4:
  [SMALL] AI Crispy Corn photo
  [SMALL] AI Chilli Paneer photo
  [SMALL] (reserve for future real photo)

HOVER OVERLAY TAGS:
  Image 3    → "Night Ambiance 🌙"
  Image 2    → "Floating Dining 🏊"
  Image 1    → "Waterfall Seating 🌊"
  AI photos  → respective dish names
```

---

### 8.1.D — File Naming Convention (Save exactly like this)

```
/src/assets/images/

ambiance/
  hero-night-waterfall.png      ← Image 3
  about-day-waterfall.png       ← Image 1
  events-floating-tray.png      ← Image 2

menu/
  sizzler-western.jpg           ← AI generated
  butter-chicken-naan.jpg       ← AI generated
  chilli-paneer.jpg             ← AI generated
  virgin-mojito.jpg             ← AI generated
  sizzling-brownie.jpg          ← AI generated
  crispy-corn.jpg               ← AI generated
```

