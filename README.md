# AstroVista — Astronomy Discovery & Observation Platform

**Software Engineering (Rekayasa Perangkat Lunak) – Session 7 Individual Project**  
**Institution:** Universitas Nusa Putra  
**Course Assignment:** Session 7 – Software Interface Design (Perancangan Antarmuka Perangkat Lunak)  
**Lecturer:** Anggun Fergina, M.Kom.  
**Platform Type:** Responsive Multi-Page Astronomy Web Application (Vanilla Frontend Architecture)  

---

## 1. Project Overview

**AstroVista** is an interactive, scientific-grade astronomy discovery and observation management platform. Engineered specifically for astronomy students, beginner stargazers, amateur astrophotographers, and space science enthusiasts, the application delivers a centralized digital cockpit for exploring celestial bodies, tracking astronomical phenomena, configuring night-sky observing sessions, and curating persistent observation journals.

The user interface is crafted to satisfy the rigorous visual demands of nighttime optical observations while showcasing modern Human-Computer Interaction (HCI) interface design principles.

---

## 2. Problem Statement

Amateur astronomers and university astronomy students frequently encounter fragmented, poorly designed tools:
1. **Disjointed Workflows:** Beginners have to juggle separate star charts, ephemeris tables, equipment field books, and weather logs across multiple disconnected websites and paper notebooks.
2. **Poor Night Adaptation (Interface Glare):** Most academic portals use blinding white interfaces that destroy ocular rhodopsin adaptation in dark field conditions.
3. **Complex Scientific Jargon:** Traditional astronomical data sources present raw numerical telemetry without scannable visual hierarchy or explanatory context.
4. **Data Loss & Heavy Framework Overhead:** Simple observation trackers often require bulky backend databases, mandatory user accounts, and heavy server infrastructure just to record a backyard observation.

**AstroVista solves this** by offering a client-side, zero-dependency, dark-adapted web platform that couples rich educational visual models with client-side `localStorage` data persistence and intuitive session planning.

---

## 3. Project Objectives

- **Solar System Cartography:** Provide high-fidelity, interactive representations and comparative data for all eight planets in the Solar System, plus dwarf planet Pluto.
- **Astronomical Phenomena Scheduling:** Present a structured calendar of meteor showers, planetary conjunctions, eclipses, and lunar cycles with transparent academic sample disclaimers.
- **Observation Session Architecture:** Offer an intuitive planning module featuring live synchronous card preview, form constraint validation, and quick observational presets.
- **Local-First Scientific Journaling:** Enable comprehensive CRUD (Create, Read, Update, Delete) capability for observational field notes, equipment records, and seeing ratings persisted entirely via browser `localStorage`.
- **Educational Repository:** Deliver peer-reviewed-style educational primers spanning telescope optics, stellar evolution, black holes, and cosmology.
- **Exemplary Software Interface Design:** Implement all 10 core interface design heuristics (consistency, simplicity, visibility, feedback, user control, accessibility, navigation, error prevention, readability, and user-centered design).

---

## 4. Target Users

| User Persona | Profile | Primary Operational Needs |
| :--- | :--- | :--- |
| **Rian Pratama** | Beginner Stargazer (Age 19, CS Student) | Intuitive sky orientation, naked-eye event schedules, plain-English Bortle scale references, and starter sample logs. |
| **Siti Nurhaliza** | Academic Astronomy Student (Age 21, Physics Major) | Side-by-side planetary metric comparisons (diameter, orbital period, gravity, moons), verified physical units, and historical exploration mission logs. |
| **Hendra Wijaya** | Amateur Astrophotographer (Age 28, Field Observer) | Synchronous session planner, equipment/optics tracker, atmospheric seeing ratings, and one-click JSON export for offline data backup. |

---

## 5. Functional & Non-Functional Requirements

### Functional Requirements (FR)
- **FR-01: Multi-Page Navigation:** Seamless, consistent navigation across all 7 pages with dynamic active-page highlighting and responsive mobile drawer toggle.
- **FR-02: Solar System Explorer:** Interactive cards for 8 planets (+ Pluto), category filtering (terrestrial, gas, ice, dwarf), search filter, planetary details modal, and side-by-side comparative analysis tool.
- **FR-03: Sky Events Dashboard:** Filterable astronomical event schedule (meteor showers, eclipses, conjunctions, oppositions, moon phases), keyword search, detailed observation guide modals, and direct prefill transfer into the observation planner.
- **FR-04: Lunar Phase Sequence:** Visual status widget illustrating all 8 synodic lunar phases and illumination percentages.
- **FR-05: Observation Planner:** Form with fields for title, celestial object, category, date, time, site location, optics/equipment, seeing scale (1-5), and field notes. Features real-time synchronous preview, form validation, and preset loaders.
- **FR-06: Local Observation Journal:** Dashboard displaying stored observation logs from `localStorage`, summary statistics (total logs, unique targets, primary equipment), category filters, keyword search, date sorting, edit modal, delete confirmation safeguards, JSON file export, and printable layout.
- **FR-07: Astronomy Library:** Filterable knowledge repository with 6 in-depth articles and interactive full-text reading modals.
- **FR-08: Academic Documentation Page:** Dedicated About page detailing institutional metadata (Universitas Nusa Putra), course specifications, and an in-depth evaluation of the 10 interface design principles.

### Non-Functional Requirements (NFR)
- **NFR-01: Framework Restrictions:** Built strictly with HTML5, CSS3, Bootstrap 5.3, Vanilla JavaScript (ES6+), Bootstrap Icons, and Google Fonts. No React, Vue, Angular, or backend frameworks.
- **NFR-02: Performance & Zero Latency:** Fast loading with minimal assets, self-contained CSS starfield generator, and optimized SVG icons.
- **NFR-03: Dark-Adapted Visual Identity:** Deep navy space canvas (`#070B19`), translucent glassmorphic surfaces (`backdrop-filter: blur(14px)`), and vibrant electric blue (`#38BDF8`) / purple (`#6366F1`) accents to preserve night vision.
- **NFR-04: Responsive Breakpoints:** Flawless rendering on desktop (1920×1080, 1440×900), laptops (1280×800), tablets (768×1024), and mobile smartphones (375×667, 390×844, 412×915).
- **NFR-05: Accessibility (a11y):** Semantic markup, WCAG AAA contrast compliance on body text, distinct focus rings, and explicit button labels.
- **NFR-06: Local-First Reliability:** Client-side data persistence surviving page reloads, tab closes, and network disconnection.

---

## 6. Technologies Used

- **Markup:** HTML5 (Semantic elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- **Styling:** CSS3 (Custom properties / CSS variables, CSS grid, flexbox, glassmorphic filters, CSS-generated starfield)
- **UI Toolkit:** Bootstrap 5.3.3 (Responsive grid, modal framework, form styles, dropdowns, toasts)
- **Iconography:** Bootstrap Icons 1.11.3 & Custom Scalable Vector Graphics (`logo.svg`, `favicon.svg`)
- **Typography:** Google Fonts (`Space Grotesk` for headings & scientific telemetry, `Inter` for prose readability, `JetBrains Mono` for time tickers)
- **Scripting:** Pure Vanilla JavaScript (ES6+ classes, DOM manipulation, custom event handling, regex validation, URLSearchParams)
- **Client Storage:** Browser `localStorage` API for journal persistence.

---

## 7. Project Structure

```
AstroVista/
│
├── index.html                  # Home Dashboard (Hero, counters, featured targets, events preview)
├── planets.html                # Solar System Explorer (8 planets + Pluto, modal, comparison tool)
├── sky-events.html             # Astronomy Events (Phenomena calendar, lunar phases, planner prefill)
├── planner.html                # Observation Planner (Form validation, live preview card, presets)
├── journal.html                # Observation Journal (LocalStorage CRUD, search, filter, JSON export)
├── library.html                # Astronomy Library (6 educational articles, reader modal)
├── about.html                  # About Page (Academic metadata, personas, 10 UI/UX principles)
│
├── css/
│   └── style.css               # Unified design system, glassmorphism, responsive media queries
│
├── js/
│   └── script.js               # Master controller, datasets, CRUD logic, modals, toast system
│
├── images/
│   ├── logo.svg                # Stylized AstroVista orbital telescope vector logo
│   └── favicon.svg             # Browser tab icon
│
├── README.md                   # Project overview, installation, architecture, and test checklist
└── PROJECT_DOCUMENTATION.md    # Formal academic software interface design report
```

---

## 8. Features & Functionality Walkthrough

1. **Top Telemetry Cosmic Bar:**
   - Real-time live UTC clock, dynamic current date, calculated Julian Date (JD), and telemetry status running on every page.
2. **Solar System Interactive Explorer:**
   - 9 interactive planet cards with spherical CSS visual models, key metrics, and an "Explore Details" modal showing atmospheric makeup, mass, orbital periods, moons, and historic NASA/ESA missions.
   - Interactive comparison tool allowing side-by-side evaluation of any two planets.
3. **Sky Events Calendar & Lunar Sequence:**
   - Illustrative schedule of upcoming meteor showers, solar/lunar eclipses, and planetary conjunctions.
   - "Add to My Planner" action button that forwards parameters via URL queries directly into the observation planner.
   - 8-phase lunar synodic sequence with visual illumination models.
4. **Interactive Observation Session Planner:**
   - Form fields with live input validation.
   - Synchronous Live Card Preview updating in real time as the user types.
   - Quick-fill presets (Jupiter Moons, Orion Nebula, Perseid Meteor Shower).
   - Form submission automatically saves into `localStorage` and triggers feedback toasts.
5. **Observation Journal:**
   - Visual dashboard with key metrics (Total Logs, Unique Targets, Primary Equipment).
   - Live search filter by keyword across title, target, location, optics, and notes.
   - Category filtering and sorting (newest/oldest).
   - Edit modal allowing live updates of recorded observations.
   - Delete confirmation dialog protecting against accidental record loss.
   - One-click JSON data export and printable PDF layout.
   - Empty-state graphics with a "Load Sample Records" fallback.
6. **Educational Library:**
   - Searchable articles across 6 scientific categories with difficulty badges and estimated reading times.
   - Interactive reader modal displaying diagrams, historical milestones, and mathematical formulas.
7. **About & Academic Profile:**
   - Comprehensive university accreditation card (Universitas Nusa Putra, Session 7).
   - Detailed rationale and code implementations for all 10 software interface design principles.

---

## 9. How to Run the Application

Because AstroVista is built using pure vanilla web standards, no compilation, npm installations, or backend servers are required!

### Method 1: Direct Browser Launch
1. Navigate to the `AstroVista` root folder on your computer.
2. Double-click `index.html` to open it in Google Chrome, Mozilla Firefox, Microsoft Edge, or Safari.

### Method 2: Local HTTP Server (Python)
If you prefer running through a local web server:
```bash
# Open terminal inside the AstroVista folder
python -m http.server 8080
```
Open your browser and navigate to: `http://localhost:8080/`

### Method 3: Local HTTP Server (Node.js)
```bash
npx serve .
# or
npx http-server .
```

---

## 10. Verification & Testing Checklist

The following tests were systematically executed to ensure compliance:

| Test ID | Test Description | Expected Result | Status |
| :--- | :--- | :--- | :--- |
| **TC-01** | Navigation Bar Links Verification | Clicking any link in the navbar routes to the matching page without 404 errors. | **PASS** |
| **TC-02** | Active Navigation Highlighting | The currently opened page displays the glowing active pill and aria-current attribute. | **PASS** |
| **TC-03** | Mobile Hamburger Collapse | Navigation collapses into a responsive hamburger toggle on screens < 992px. | **PASS** |
| **TC-04** | Live UTC & Julian Date Clock | Cosmic ticker updates seconds continuously and calculates the Julian date accurately. | **PASS** |
| **TC-05** | Planet Cards & Filters | Filtering by Terrestrial, Gas, Ice, or Dwarf displays the exact matching planets. | **PASS** |
| **TC-06** | Planet Detail Modal | Clicking "Explore Details" opens the modal with orbital specs, atmosphere, and missions. | **PASS** |
| **TC-07** | Planet Comparison Tool | Selecting two planets updates the comparative specification matrix side-by-side. | **PASS** |
| **TC-08** | Sky Events Category Filters | Filtering events displays correct categories with clear illustrative data badges. | **PASS** |
| **TC-09** | Event to Planner Integration | Clicking "Add to Planner" opens planner.html with title, target, and date prefilled. | **PASS** |
| **TC-10** | Planner Form Live Preview | Typing in planner inputs synchronously updates the preview card on the right column. | **PASS** |
| **TC-11** | Planner Preset Fillers | Clicking Jupiter, Orion, or Perseids fills the form fields with realistic observation data. | **PASS** |
| **TC-12** | Form Validation Feedback | Submitting empty required fields triggers custom validation styles and feedback toast. | **PASS** |
| **TC-13** | LocalStorage Journal Persistence | Saving a plan stores record in `astrovista_observations`; persists after page refresh. | **PASS** |
| **TC-14** | Journal Edit Modal | Modifying observation notes in the edit modal updates the record in storage and UI. | **PASS** |
| **TC-15** | Journal Delete Safeguard | Deleting an entry prompts confirmation; confirming removes entry and updates metrics. | **PASS** |
| **TC-16** | Journal JSON Export | Clicking "Export JSON" downloads a valid formatted `.json` file containing all logs. | **PASS** |
| **TC-17** | Library Article Reader Modal | Clicking "Read Full Guide" opens an educational article modal with formatted sections. | **PASS** |
| **TC-18** | Back to Top Floating Action | Scrolling down > 350px reveals button; clicking smoothly scrolls to page top. | **PASS** |
| **TC-19** | Zero Horizontal Scrollbar | Testing at 375px, 768px, 1024px, and 1920px widths confirms zero horizontal overflow. | **PASS** |

---

## 11. Academic Attribution

- **University:** Universitas Nusa Putra (Sukabumi, Indonesia)
- **Faculty:** Computer Science & Engineering
- **Course:** Software Engineering (Rekayasa Perangkat Lunak)
- **Session:** Session 7 – Software Interface Design (Perancangan Antarmuka Perangkat Lunak)
- **Lecturer:** Anggun Fergina, M.Kom.
- **Academic Year:** 2026/2027
