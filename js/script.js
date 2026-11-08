/**
 * ASTROVISTA - Astronomy Discovery & Observation Platform
 * Software Engineering Session 7 Individual Project | Universitas Nusa Putra
 * Master Client-Side JavaScript Application
 */

// ==========================================
// 1. DATASETS & STATIC KNOWLEDGE BASES
// ==========================================

const PLANETS_DATA = [
  {
    id: "mercury",
    name: "Mercury",
    category: "terrestrial",
    categoryLabel: "Terrestrial Planet",
    colorClass: "planet-mercury",
    image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=800&q=80",
    distanceSunAU: "0.39 AU",
    distanceSunKm: "57.9 Million km",
    diameter: "4,879 km",
    mass: "3.30 × 10²³ kg (0.055 Earths)",
    gravity: "3.7 m/s² (0.38 g)",
    orbitalPeriod: "88 Earth days",
    rotationPeriod: "58.6 Earth days",
    surfaceTemp: "-180°C to 430°C",
    moons: 0,
    rings: false,
    atmosphere: "Trace exosphere (Oxygen, Sodium, Hydrogen, Helium)",
    summary: "The smallest planet in our solar system and closest to the Sun, Mercury is only slightly larger than Earth's Moon. Its cratered surface resembles our Moon.",
    interestingFacts: [
      "Mercury experiences the most extreme temperature swings in the Solar System.",
      "Despite being closest to the Sun, Venus is hotter due to greenhouse gases.",
      "A year on Mercury is just 88 days, but a single solar day lasts 176 Earth days."
    ],
    missions: ["Mariner 10 (1974-1975)", "MESSENGER (2011-2015)", "BepiColombo (In transit)"]
  },
  {
    id: "venus",
    name: "Venus",
    category: "terrestrial",
    categoryLabel: "Terrestrial Planet",
    colorClass: "planet-venus",
    image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=800&q=80",
    distanceSunAU: "0.72 AU",
    distanceSunKm: "108.2 Million km",
    diameter: "12,104 km",
    mass: "4.87 × 10²⁴ kg (0.815 Earths)",
    gravity: "8.87 m/s² (0.90 g)",
    orbitalPeriod: "224.7 Earth days",
    rotationPeriod: "243 Earth days (Retrograde)",
    surfaceTemp: "465°C average",
    moons: 0,
    rings: false,
    atmosphere: "96.5% Carbon Dioxide, 3.5% Nitrogen, Sulfuric acid clouds",
    summary: "Often called Earth's twin due to similar size and structure, Venus has a runaway greenhouse atmosphere that makes it the hottest planet in the Solar System.",
    interestingFacts: [
      "Venus rotates backwards (retrograde) compared to most other planets.",
      "Atmospheric pressure at the surface is 92 times greater than Earth's.",
      "The Sun rises in the west and sets in the east on Venus."
    ],
    missions: ["Venera Program (USSR)", "Magellan (NASA)", "Akatsuki (JAXA)", "DAVINCI & VERITAS (Upcoming)"]
  },
  {
    id: "earth",
    name: "Earth",
    category: "terrestrial",
    categoryLabel: "Terrestrial Planet",
    colorClass: "planet-earth",
    image: "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&w=800&q=80",
    distanceSunAU: "1.00 AU",
    distanceSunKm: "149.6 Million km",
    diameter: "12,742 km",
    mass: "5.97 × 10²⁴ kg (1.0 Earth)",
    gravity: "9.81 m/s² (1.0 g)",
    orbitalPeriod: "365.25 Earth days",
    rotationPeriod: "23 hours 56 minutes",
    surfaceTemp: "-89°C to 58°C (15°C avg)",
    moons: 1,
    rings: false,
    atmosphere: "78% Nitrogen, 21% Oxygen, 0.9% Argon, 0.04% CO2",
    summary: "Our home planet is the only known astronomical body to harbor life, with liquid oceans covering 71% of its surface and a protective magnetosphere.",
    interestingFacts: [
      "Earth is the densest major planet in the Solar System.",
      "Its magnetic field protects life from damaging solar radiation.",
      "Liquid water exists stably due to our position in the circumstellar habitable zone."
    ],
    missions: ["Thousands of orbital satellites", "ISS (International Space Station)", "Terra, Aqua, Landsat"]
  },
  {
    id: "mars",
    name: "Mars",
    category: "terrestrial",
    categoryLabel: "Terrestrial Planet",
    colorClass: "planet-mars",
    image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=800&q=80",
    distanceSunAU: "1.52 AU",
    distanceSunKm: "227.9 Million km",
    diameter: "6,779 km",
    mass: "6.42 × 10²³ kg (0.107 Earths)",
    gravity: "3.72 m/s² (0.38 g)",
    orbitalPeriod: "687 Earth days",
    rotationPeriod: "24 hours 37 minutes",
    surfaceTemp: "-125°C to 20°C (-62°C avg)",
    moons: 2,
    rings: false,
    atmosphere: "95% Carbon Dioxide, 2.6% Molecular Nitrogen, 1.9% Argon",
    summary: "The Red Planet gets its iconic hue from iron oxide (rust) on its surface. It hosts the largest volcano (Olympus Mons) and deepest canyon (Valles Marineris).",
    interestingFacts: [
      "Olympus Mons stands over 21 km high, nearly three times Mount Everest.",
      "Mars has two small irregular moons: Phobos and Deimos.",
      "Evidence points to ancient lakes, rivers, and an ocean billions of years ago."
    ],
    missions: ["Viking 1 & 2", "Curiosity Rover", "Perseverance Rover & Ingenuity", "Hope Probe (UAE)"]
  },
  {
    id: "jupiter",
    name: "Jupiter",
    category: "gas",
    categoryLabel: "Gas Giant",
    colorClass: "planet-jupiter",
    image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=800&q=80",
    distanceSunAU: "5.20 AU",
    distanceSunKm: "778.5 Million km",
    diameter: "139,820 km",
    mass: "1.90 × 10²⁷ kg (317.8 Earths)",
    gravity: "24.79 m/s² (2.53 g)",
    orbitalPeriod: "11.86 Earth years",
    rotationPeriod: "9 hours 55 minutes",
    surfaceTemp: "-110°C (Cloud tops)",
    moons: 95,
    rings: true,
    atmosphere: "90% Hydrogen, 10% Helium, traces of methane & ammonia",
    summary: "Jupiter is by far the largest planet, containing more mass than all other planets combined. Its iconic Great Red Spot is a persistent anticyclonic storm.",
    interestingFacts: [
      "Jupiter possesses the strongest planetary magnetic field in the solar system.",
      "The four Galilean moons (Io, Europa, Ganymede, Callisto) are worlds of their own.",
      "Ganymede is larger than Mercury and is the largest moon in the Solar System."
    ],
    missions: ["Pioneer 10 & 11", "Voyager 1 & 2", "Galileo", "Juno", "JUICE (ESA, In transit)"]
  },
  {
    id: "saturn",
    name: "Saturn",
    category: "gas",
    categoryLabel: "Gas Giant",
    colorClass: "planet-saturn",
    image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=800&q=80",
    distanceSunAU: "9.58 AU",
    distanceSunKm: "1.43 Billion km",
    diameter: "116,460 km",
    mass: "5.68 × 10²⁶ kg (95.2 Earths)",
    gravity: "10.44 m/s² (1.06 g)",
    orbitalPeriod: "29.45 Earth years",
    rotationPeriod: "10 hours 33 minutes",
    surfaceTemp: "-140°C (Cloud tops)",
    moons: 146,
    rings: true,
    atmosphere: "96% Hydrogen, 3% Helium, traces of methane & ammonia",
    summary: "Renowned for its spectacular ring system composed of billions of chunks of ice and rock, Saturn is the second-largest planet and has the lowest density.",
    interestingFacts: [
      "Saturn's average density is lower than liquid water (it would theoretically float).",
      "Its rings span up to 282,000 km across, yet are only tens of meters thick.",
      "Titan, Saturn's largest moon, has a dense atmosphere and liquid methane lakes."
    ],
    missions: ["Pioneer 11", "Voyager 1 & 2", "Cassini-Huygens (13-year mission)", "Dragonfly (Upcoming)"]
  },
  {
    id: "uranus",
    name: "Uranus",
    category: "ice",
    categoryLabel: "Ice Giant",
    colorClass: "planet-uranus",
    image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=800&q=80",
    distanceSunAU: "19.22 AU",
    distanceSunKm: "2.87 Billion km",
    diameter: "50,724 km",
    mass: "8.68 × 10²⁵ kg (14.5 Earths)",
    gravity: "8.69 m/s² (0.89 g)",
    orbitalPeriod: "84.01 Earth years",
    rotationPeriod: "17 hours 14 minutes (Retrograde)",
    surfaceTemp: "-195°C (-224°C record)",
    moons: 28,
    rings: true,
    atmosphere: "83% Hydrogen, 15% Helium, 2% Methane (gives cyan hue)",
    summary: "The seventh planet rotates on its side with an axial tilt of 97.77 degrees, causing the most extreme seasons in the Solar System.",
    interestingFacts: [
      "Uranus was the first planet discovered with a telescope (William Herschel, 1781).",
      "Its axial tilt is nearly parallel to its orbital plane (rolls like a ball).",
      "Holds the record for the coldest recorded atmospheric temperature (-224°C)."
    ],
    missions: ["Voyager 2 (1986 flyby)", "Uranus Orbiter and Probe (NASA Flagship proposed)"]
  },
  {
    id: "neptune",
    name: "Neptune",
    category: "ice",
    categoryLabel: "Ice Giant",
    colorClass: "planet-neptune",
    image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=800&q=80",
    distanceSunAU: "30.05 AU",
    distanceSunKm: "4.50 Billion km",
    diameter: "49,244 km",
    mass: "1.02 × 10²⁶ kg (17.1 Earths)",
    gravity: "11.15 m/s² (1.14 g)",
    orbitalPeriod: "164.8 Earth years",
    rotationPeriod: "16 hours 6 minutes",
    surfaceTemp: "-200°C average",
    moons: 16,
    rings: true,
    atmosphere: "80% Hydrogen, 19% Helium, 1.5% Methane",
    summary: "Dark, cold, and whipped by supersonic winds exceeding 2,100 km/h, Neptune is the most distant major planet, predicted mathematically before direct observation.",
    interestingFacts: [
      "Neptune's winds are the fastest measured anywhere in the Solar System.",
      "Completed its first full orbit since discovery (1846) in 2011.",
      "Its largest moon, Triton, has active nitrogen geysers and a retrograde orbit."
    ],
    missions: ["Voyager 2 (1989 flyby)"]
  },
  {
    id: "pluto",
    name: "Pluto",
    category: "dwarf",
    categoryLabel: "Dwarf Planet (Bonus)",
    colorClass: "planet-pluto",
    image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=800&q=80",
    distanceSunAU: "39.48 AU",
    distanceSunKm: "5.91 Billion km",
    diameter: "2,377 km",
    mass: "1.30 × 10²² kg (0.002 Earths)",
    gravity: "0.62 m/s² (0.06 g)",
    orbitalPeriod: "248.0 Earth years",
    rotationPeriod: "6.39 Earth days",
    surfaceTemp: "-230°C",
    moons: 5,
    rings: false,
    atmosphere: "Thin, seasonal Nitrogen, Methane, Carbon Monoxide",
    summary: "Discovered in 1930 and reclassified as a dwarf planet in 2006, Pluto is the king of the Kuiper Belt with vast nitrogen glaciers including Tombaugh Regio.",
    interestingFacts: [
      "Pluto has a heart-shaped nitrogen ice plain called Sputnik Planitia.",
      "Its moon Charon is so massive that the two co-orbit a common barycenter in space.",
      "Pluto's orbit is tilted 17 degrees and occasionally comes closer than Neptune."
    ],
    missions: ["New Horizons (July 2015 Historic Flyby)"]
  }
];

const SKY_EVENTS_DATA = [
  {
    id: "evt-01",
    title: "Perseid Meteor Shower Peak",
    category: "meteor",
    categoryLabel: "Meteor Shower",
    badgeClass: "tag-meteor",
    date: "2027-08-12",
    displayDate: "August 12-13, 2027",
    target: "Swift-Tuttle Comet Debris",
    constellation: "Perseus",
    difficulty: "Easy (Naked Eye)",
    visibilityScore: "95% (Dark Sky)",
    summary: "One of the brightest and most beloved annual meteor showers, producing up to 100 fast, luminous meteors per hour during its peak under moonless skies.",
    tips: "Best observed between midnight and dawn away from city light pollution. No telescope needed; wide-field viewing with a recliner chair is recommended.",
    sampleNotice: "Illustrative schedule data for academic interface demonstration."
  },
  {
    id: "evt-02",
    title: "Total Solar Eclipse: The Great Corona",
    category: "eclipse",
    categoryLabel: "Solar Eclipse",
    badgeClass: "tag-eclipse",
    date: "2027-08-02",
    displayDate: "August 02, 2027",
    target: "Sun & Moon Alignment",
    constellation: "Leo",
    difficulty: "Moderate (Solar Filter Required)",
    visibilityScore: "100% in Totality Path",
    summary: "A spectacular total solar eclipse offering over 6 minutes of totality along its central path, revealing the Sun's ghostly white corona and prominences.",
    tips: "Certified ISO 12312-2 solar eclipse glasses are strictly mandatory for all partial phases. Totality can be viewed safely with naked eye.",
    sampleNotice: "Illustrative schedule data for academic interface demonstration."
  },
  {
    id: "evt-03",
    title: "Great Planetary Conjunction: Jupiter & Venus",
    category: "conjunction",
    categoryLabel: "Conjunction",
    badgeClass: "tag-conjunction",
    date: "2027-05-18",
    displayDate: "May 18, 2027",
    target: "Venus & Jupiter",
    constellation: "Taurus",
    difficulty: "Very Easy (Naked Eye & Binoculars)",
    visibilityScore: "90% (Dusk Horizon)",
    summary: "The two brightest planets in the night sky will appear separated by less than 0.5 degrees in the western sky shortly after sunset, resembling a double beacon.",
    tips: "Look low in the western sky 45 minutes after sunset. A small telescope will reveal Venus's phase and Jupiter's four Galilean moons in the same field of view.",
    sampleNotice: "Illustrative schedule data for academic interface demonstration."
  },
  {
    id: "evt-04",
    title: "Super Blood Flower Moon: Total Lunar Eclipse",
    category: "eclipse",
    categoryLabel: "Lunar Eclipse",
    badgeClass: "tag-eclipse",
    date: "2027-05-20",
    displayDate: "May 20, 2027",
    target: "Earth Umbral Shadow",
    constellation: "Scorpius",
    difficulty: "Easy (Naked Eye)",
    visibilityScore: "88%",
    summary: "As Earth passes directly between the Sun and Moon, our natural satellite is bathed in copper-red refracted sunlight, known poetically as a Blood Moon.",
    tips: "Completely safe to view with naked eye, binoculars, or any telescope. Try photographing the Moon with telephoto lenses against stars of Scorpius.",
    sampleNotice: "Illustrative schedule data for academic interface demonstration."
  },
  {
    id: "evt-05",
    title: "Saturn at Prime Opposition",
    category: "opposition",
    categoryLabel: "Planetary Opposition",
    badgeClass: "tag-opposition",
    date: "2027-09-21",
    displayDate: "September 21, 2027",
    target: "Saturn & Ring System",
    constellation: "Pisces",
    difficulty: "Easy / Telescope for Rings",
    visibilityScore: "92%",
    summary: "Saturn reaches opposition, placing it opposite the Sun in our sky. It will be at its closest approach to Earth, shining brightest and visible all night long.",
    tips: "A 4-inch telescope or larger easily resolves the Cassini Division in Saturn's rings and its giant moon Titan glowing at 8th magnitude.",
    sampleNotice: "Illustrative schedule data for academic interface demonstration."
  },
  {
    id: "evt-06",
    title: "Geminid Meteor Shower",
    category: "meteor",
    categoryLabel: "Meteor Shower",
    badgeClass: "tag-meteor",
    date: "2027-12-14",
    displayDate: "December 13-14, 2027",
    target: "3200 Phaethon Asteroid",
    constellation: "Gemini",
    difficulty: "Easy (Naked Eye)",
    visibilityScore: "94% (Cold Night)",
    summary: "Often considered the king of annual meteor showers, the Geminids provide up to 120 multicolored, slow-moving fireballs per hour.",
    tips: "Dress warmly for winter stargazing. Radiates from Gemini high overhead around 2:00 AM local time.",
    sampleNotice: "Illustrative schedule data for academic interface demonstration."
  },
  {
    id: "evt-07",
    title: "Super Blue Moon Perigee",
    category: "moon",
    categoryLabel: "Moon Phase",
    badgeClass: "tag-moon",
    date: "2027-08-31",
    displayDate: "August 31, 2027",
    target: "Perigee Full Moon",
    constellation: "Aquarius",
    difficulty: "Easy (Naked Eye)",
    visibilityScore: "100%",
    summary: "The second full moon in a single calendar month coinciding with perigee (closest point to Earth), appearing up to 14% larger and 30% brighter.",
    tips: "Watch moonrise over the eastern horizon to experience the famous 'Moon Illusion' where foreground objects make it appear gargantuan.",
    sampleNotice: "Illustrative schedule data for academic interface demonstration."
  },
  {
    id: "evt-08",
    title: "Jupiter at Opposition",
    category: "opposition",
    categoryLabel: "Planetary Opposition",
    badgeClass: "tag-opposition",
    date: "2027-11-24",
    displayDate: "November 24, 2027",
    target: "Jupiter & Cloud Belts",
    constellation: "Taurus",
    difficulty: "Easy / Telescope recommended",
    visibilityScore: "96%",
    summary: "Jupiter shines at its maximum magnitude (-2.9), remaining visible from sunset until sunrise. Excellent window for high-magnification planetary observation.",
    tips: "Look for transits and shadow transits of Io, Europa, Ganymede, or Callisto across Jupiter's cloud deck with moderate aperture telescopes.",
    sampleNotice: "Illustrative schedule data for academic interface demonstration."
  }
];

const LIBRARY_ARTICLES = [
  {
    id: "lib-01",
    title: "Stargazing 101: Navigating the Night Sky for Beginners",
    category: "beginner",
    categoryName: "Beginner Guides",
    readTime: "7 min read",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
    summary: "Learn essential orientation techniques, how to read planispheres, understand celestial coordinates (Right Ascension & Declination), and preserve night vision.",
    content: `
      <h4>1. The Foundations of Night Vision</h4>
      <p>Human eyes take approximately 20 to 30 minutes to fully adapt to deep darkness through the production of rhodopsin. Any exposure to bright white light destroys this adaptation in seconds. Always use a dim red flashlight when consulting star charts or operating telescope mounts.</p>
      
      <h4>2. Finding True North and Cardinal Directions</h4>
      <p>In the Northern Hemisphere, locate the 'Pointer Stars' (Merak and Dubhe) at the outer bowl of the Big Dipper (Ursa Major). Draw an imaginary line extending through them by five times the distance between them, directly intersecting Polaris (the North Star). In the Southern Hemisphere, use the Southern Cross (Crux) and pointer stars Alpha and Beta Centauri to determine the South Celestial Pole.</p>
      
      <h4>3. Celestial Coordinates Decoded</h4>
      <p>Astronomers map the sky using a spherical coordinate grid projected onto the celestial sphere:</p>
      <ul>
        <li><strong>Right Ascension (RA):</strong> Equivalent to longitude, measured in hours, minutes, and seconds eastward from the vernal equinox.</li>
        <li><strong>Declination (Dec):</strong> Equivalent to latitude, measured in degrees, arcminutes, and arcseconds north (+) or south (-) from the celestial equator.</li>
        <li><strong>Altitude & Azimuth:</strong> Local coordinates indicating height above the horizon (0° to 90°) and compass bearing (0° to 360°).</li>
      </ul>
      
      <h4>4. Beginner Stargazing Etiquette</h4>
      <p>Always respect dark-sky observation sites, avoid laser pointers near airports or astrophotographers doing long exposures, and dress for temperatures 10°C colder than forecast.</p>
    `
  },
  {
    id: "lib-02",
    title: "The Bortle Dark-Sky Scale: Measuring Light Pollution",
    category: "beginner",
    categoryName: "Beginner Guides",
    readTime: "5 min read",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=800&q=80",
    summary: "A nine-level numerical system that measures the astronomical observability of celestial objects and the impact of artificial light pollution.",
    content: `
      <h4>Understanding the 9 Bortle Classes</h4>
      <p>Devised by John E. Bortle in 2001, the Bortle scale provides amateur astronomers with a standardized way to gauge sky clarity and background brightness.</p>
      
      <div class="table-responsive my-3">
        <table class="table table-dark table-sm border-secondary">
          <thead>
            <tr>
              <th>Class</th>
              <th>Environment</th>
              <th>Naked-Eye Limiting Mag</th>
              <th>Milky Way Visibility</th>
            </tr>
          </thead>
          <tbody>
            <tr><td><strong>Class 1</strong></td><td>Truly Pristine Dark Sky</td><td>7.6 – 8.0</td><td>Scorpius & Sagittarius cast shadows</td></tr>
            <tr><td><strong>Class 2</strong></td><td>Typical Truly Dark Site</td><td>7.1 – 7.5</td><td>Highly structured, complex airglow</td></tr>
            <tr><td><strong>Class 3</strong></td><td>Rural Sky</td><td>6.6 – 7.0</td><td>Complex structure easily seen</td></tr>
            <tr><td><strong>Class 4</strong></td><td>Rural/Suburban Transition</td><td>6.1 – 6.5</td><td>Impressive overhead, washed out at horizons</td></tr>
            <tr><td><strong>Class 5</strong></td><td>Suburban Sky</td><td>5.6 – 6.0</td><td>Faint or washed out toward light sources</td></tr>
            <tr><td><strong>Class 6</strong></td><td>Bright Suburban Sky</td><td>5.1 – 5.5</td><td>Only visible near zenith</td></tr>
            <tr><td><strong>Class 7</strong></td><td>Suburban/Urban Transition</td><td>4.6 – 5.0</td><td>Nearly or totally invisible</td></tr>
            <tr><td><strong>Class 8</strong></td><td>City Sky</td><td>4.1 – 4.5</td><td>Milky Way completely invisible</td></tr>
            <tr><td><strong>Class 9</strong></td><td>Inner-City Sky</td><td>4.0 or worse</td><td>Only Moon, planets, few bright stars visible</td></tr>
          </tbody>
        </table>
      </div>
      
      <h4>How to Optimize Observations in High Bortle Zones</h4>
      <p>In suburban Bortle 6-8 zones, shift observational focus to high-surface-brightness targets: the Moon, Venus, Jupiter, Saturn, double stars (like Albireo), and use narrowband light pollution or UHC/OIII nebula filters.</p>
    `
  },
  {
    id: "lib-03",
    title: "Telescope Optics Primer: Refractors, Reflectors, and Catadioptrics",
    category: "telescopes",
    categoryName: "Telescopes & Optics",
    readTime: "9 min read",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?auto=format&fit=crop&w=800&q=80",
    summary: "An optical engineering comparison of lenses vs mirrors, focal ratios, collimation, mount stability, and selecting the best instrument for your budget.",
    content: `
      <h4>1. Refracting Telescopes (Dioptrics)</h4>
      <p>Refractors utilize objective lenses at the front to bend (refract) incoming parallel light rays into a focal point at the rear. Modern achromats and apochromats (using ED fluorite glass) correct chromatic aberration, delivering pin-sharp contrast on planetary disks and lunar crater walls.</p>
      
      <h4>2. Reflecting Telescopes (Newtonians & Dobsonians)</h4>
      <p>Invented by Sir Isaac Newton, reflectors use a parabolic primary mirror at the bottom of an open tube to focus light back to a flat diagonal secondary mirror. Newtonian optics eliminate chromatic aberration entirely and provide the highest aperture-per-dollar ratio in amateur astronomy. Dobsonians are Newtonians mounted on simple alt-azimuth rocker boxes, ideal for deep-sky faint fuzzies.</p>
      
      <h4>3. Compound Telescopes (Catadioptrics)</h4>
      <p>Schmidt-Cassegrain (SCT) and Maksutov-Cassegrain (Maks) designs fold the light path using both a corrector lens and curved mirrors. This creates long focal lengths in remarkably compact, portable tubes—making them versatile workhorses for planetary imaging and automated GoTo tracking.</p>
      
      <h4>Key Optical Formulas:</h4>
      <ul>
        <li><strong>Magnification:</strong> \( \text{Magnification} = \frac{F_{\text{telescope}}}{F_{\text{eyepiece}}} \)</li>
        <li><strong>Focal Ratio:</strong> \( f/\text{number} = \frac{\text{Focal Length}}{\text{Aperture}} \) (e.g., f/4 is 'fast' for wide fields, f/10 is 'slow' for planets).</li>
      </ul>
    `
  },
  {
    id: "lib-04",
    title: "The Stellar Life Cycle: From Molecular Clouds to Black Holes",
    category: "stars",
    categoryName: "Stars & Galaxies",
    readTime: "8 min read",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    summary: "Trace how gravitational collapse inside giant molecular clouds ignites hydrogen fusion, leading through the Main Sequence to planetary nebulae or supernovae.",
    content: `
      <h4>1. Stellar Nurseries & Gravitational Collapse</h4>
      <p>Stars are born within cold, dense interstellar molecular clouds (such as the Orion Nebula, M42). When shockwaves from nearby supernovae or density perturbations trigger Jean's Instability, localized gas clumps collapse under their own gravity, forming spinning protostars.</p>
      
      <h4>2. The Main Sequence & Hydrostatic Equilibrium</h4>
      <p>When the core temperature reaches ~10 million Kelvin, hydrogen nuclei fuse into helium via the proton-proton chain or CNO cycle. Outward thermal radiation pressure balances inward gravitational pull, establishing hydrostatic equilibrium for millions to billions of years.</p>
      
      <h4>3. Stellar End States by Initial Mass</h4>
      <ul>
        <li><strong>Low to Medium Mass (0.08 to 8 \( M_\odot \)):</strong> Expands into a Red Giant, sheds outer envelopes into a luminous Planetary Nebula (like the Ring Nebula M57), leaving behind a carbon-oxygen White Dwarf supported by electron degeneracy pressure.</li>
        <li><strong>High Mass (8 to 20 \( M_\odot \)):</strong> Undergoes successive fusion stages up to iron (Fe-56), suffers core collapse, rebounds in a Type II Supernova, leaving a Neutron Star / Pulsar supported by neutron degeneracy pressure.</li>
        <li><strong>Extreme Mass (> 20 \( M_\odot \)):</strong> Core collapse overcomes neutron degeneracy pressure, collapsing infinitely beyond the Schwarzschild radius to form a stellar-mass Black Hole.</li>
      </ul>
    `
  },
  {
    id: "lib-05",
    title: "Black Holes and Spacetime Curvature: Physics of the Event Horizon",
    category: "blackholes",
    categoryName: "Black Holes",
    readTime: "10 min read",
    level: "Advanced",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=800&q=80",
    summary: "Einstein's General Relativity, gravitational lensing, frame dragging, gravitational redshift, Hawking radiation, and the anatomy of supermassive black holes.",
    content: `
      <h4>1. The Geometry of Extreme Spacetime</h4>
      <p>In Einstein's General Theory of Relativity (1915), gravity is not an attractive Newtonian force across empty space, but the curvature of four-dimensional spacetime caused by mass and energy. When a mass is compressed within its Schwarzschild radius (\( r_s = \frac{2GM}{c^2} \)), escape velocity equals the speed of light.</p>
      
      <h4>2. The Anatomy of a Kerr (Rotating) Black Hole</h4>
      <ul>
        <li><strong>Event Horizon:</strong> The boundary of no return. Any matter, light, or information crossing inward is forever causally disconnected from the outside universe.</li>
        <li><strong>Ergosphere:</strong> An oblate region outside the outer event horizon where spacetime itself is dragged in the direction of rotation (frame dragging). Matter can theoretically lose energy here to yield net positive energy to escape (the Penrose Process).</li>
        <li><strong>Accretion Disk & Relativistic Jets:</strong> Plasma spiraling inward at fraction-of-c speeds reaches millions of degrees Kelvin due to viscous dissipation, emitting intense X-rays and synchrotron radiation.</li>
      </ul>
      
      <h4>3. Direct Imaging Milestone</h4>
      <p>In April 2019, the Event Horizon Telescope (EHT) collaboration synthesized a planet-scale interferometer to produce the first direct shadow image of the supermassive black hole at the center of galaxy M87 (6.5 billion solar masses), followed by Sagittarius A* in our own Milky Way in 2022.</p>
    `
  },
  {
    id: "lib-06",
    title: "Cosmology and the Expanding Universe: Dark Matter & Dark Energy",
    category: "cosmology",
    categoryName: "Cosmology",
    readTime: "9 min read",
    level: "Advanced",
    image: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?auto=format&fit=crop&w=800&q=80",
    summary: "Examine Hubble's law, cosmic microwave background radiation (CMB), the Lambda-CDM cosmological model, and the mysterious 95% of cosmic energy density.",
    content: `
      <h4>1. The Standard Lambda-CDM Cosmological Paradigm</h4>
      <p>Precision astrophysical measurements (Planck satellite, WMAP, and Type Ia supernovae) reveal a shocking cosmic inventory:</p>
      <ul>
        <li><strong>Baryonic (Normal) Matter (~5%):</strong> All the stars, planets, nebulae, gas clouds, and living organisms we see.</li>
        <li><strong>Cold Dark Matter (~27%):</strong> Non-baryonic, collisionless matter that does not emit or absorb electromagnetic radiation, deduced from galaxy rotation curves (Vera Rubin) and gravitational lensing.</li>
        <li><strong>Dark Energy (~68%):</strong> An intrinsic vacuum energy density or cosmological constant (\( \Lambda \)) causing the accelerated expansion of the universe.</li>
      </ul>
      
      <h4>2. The Cosmic Microwave Background (CMB)</h4>
      <p>Dating back to recombination 380,000 years after the Big Bang, the CMB is the oldest observable light in the universe. Its nearly isotropic 2.725 Kelvin blackbody spectrum contains micro-Kelvin temperature anisotropies that represent the primordial seeds of all galaxies and cosmic filaments.</p>
    `
  }
];

// Default sample observations for starter state
const SAMPLE_OBSERVATIONS = [
  {
    id: "obs-" + Date.now() + "-1",
    title: "Jupiter & Galilean Moons Alignment",
    objectName: "Jupiter",
    category: "Planets",
    date: "2026-11-04",
    time: "21:30",
    location: "Mount Ciremai Basecamp, West Java",
    equipment: "Celestron NexStar 8SE + 9mm Plössl",
    seeingRating: "5",
    skyConditions: "Bortle 3 - Transparent, exceptional seeing",
    notes: "Remarkable visibility tonight. Great Red Spot clearly transiting the southern equatorial belt. All 4 Galilean moons (Io, Europa, Ganymede, Callisto) arrayed in a stunning linear configuration west of the planetary disk. Shadow of Io visible crossing the northern hemisphere.",
    createdAt: new Date().toISOString()
  },
  {
    id: "obs-" + Date.now() + "-2",
    title: "Orion Nebula (Messier 42) Core Detail",
    objectName: "Orion Nebula (M42)",
    category: "Deep Sky",
    date: "2026-10-28",
    time: "23:45",
    location: "Observatorium Bosscha Grounds, Lembang",
    equipment: "Sky-Watcher 200P Dobsonian (8-inch) + Baader UHC Filter",
    seeingRating: "4",
    skyConditions: "Bortle 4 - Good transparency, moderate dew",
    notes: "Trapezium cluster stars (A, B, C, D) resolved crisply at 133x magnification. The green-blue hue of doubly ionized oxygen [O III] glow was unmistakable across the broad sweeping wings. Distinct dark absorption lane of the Fish's Mouth dividing M42 and M43.",
    createdAt: new Date().toISOString()
  },
  {
    id: "obs-" + Date.now() + "-3",
    title: "Perseid Fireball Burst & Meteor Count",
    objectName: "Perseid Meteor Shower",
    category: "Meteor Showers",
    date: "2026-08-12",
    time: "02:15",
    location: "Pelabuhan Ratu Coastal Dark Site, Sukabumi",
    equipment: "Naked Eye + Nikon 7x50 Marine Binoculars",
    seeingRating: "5",
    skyConditions: "Bortle 2 - Truly dark, pristine southern horizon",
    notes: "Counted 47 distinct meteors during a 60-minute window between 02:00 and 03:00 local time. Three exceptional bolides produced luminous ionization trains lingering for over 12 seconds in the upper atmosphere. Milky Way core in Sagittarius cast subtle glow on sea.",
    createdAt: new Date().toISOString()
  }
];

// ==========================================
// 2. CORE ASTROVISTA CONTROLLER
// ==========================================

const AstroVista = {
  // Storage Keys
  STORAGE_KEY: "astrovista_observations",
  PREF_KEY: "astrovista_preferences",

  // Init
  init() {
    this.setupNavbarScroll();
    this.setupBackToTop();
    this.setupTelemetryTicker();
    this.setupDynamicActiveNav();
    
    // Page-specific initializers based on present DOM elements
    if (document.getElementById("planetsGrid")) this.initPlanetsPage();
    if (document.getElementById("skyEventsGrid")) this.initSkyEventsPage();
    if (document.getElementById("plannerForm")) this.initPlannerPage();
    if (document.getElementById("journalGrid")) this.initJournalPage();
    if (document.getElementById("libraryGrid")) this.initLibraryPage();
    if (document.getElementById("homeHeroStats")) this.initHomePage();
  },

  // Navbar Scroll Transition
  setupNavbarScroll() {
    const navbar = document.querySelector(".navbar-astrovista");
    if (!navbar) return;

    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  },

  // Back To Top Button
  setupBackToTop() {
    let btn = document.getElementById("btnBackToTop");
    if (!btn) {
      btn = document.createElement("button");
      btn.id = "btnBackToTop";
      btn.className = "btn-back-to-top";
      btn.setAttribute("aria-label", "Scroll back to top");
      btn.innerHTML = `<i class="bi bi-chevron-up"></i>`;
      document.body.appendChild(btn);
    }

    window.addEventListener("scroll", () => {
      if (window.scrollY > 350) {
        btn.classList.add("show");
      } else {
        btn.classList.remove("show");
      }
    });

    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  },

  // Dynamic Active Navbar Detection
  setupDynamicActiveNav() {
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll(".nav-link-astro");
    navLinks.forEach(link => {
      const href = link.getAttribute("href");
      if (href === currentPath || (currentPath === "" && href === "index.html")) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
      }
    });
  },

  // Realtime Cosmic Clock & Julian Date
  setupTelemetryTicker() {
    const tickerContainer = document.getElementById("cosmicTickerTime");
    if (!tickerContainer) return;

    const updateTimes = () => {
      const now = new Date();
      // UTC String
      const utcString = now.toUTCString().replace("GMT", "UTC");
      
      // Calculate approximate Julian Date
      const timeMs = now.getTime();
      const julianDate = (timeMs / 86400000) + 2440587.5;

      tickerContainer.innerHTML = `
        <span class="cosmic-ticker-item">
          <span class="ticker-dot"></span>
          <strong>UTC:</strong> ${now.toISOString().substring(11, 19)} UTC
        </span>
        <span class="cosmic-ticker-item d-none d-md-inline">
          <i class="bi bi-calendar3 me-1 text-info"></i>
          <strong>Date:</strong> ${now.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}
        </span>
        <span class="cosmic-ticker-item d-none d-lg-inline">
          <i class="bi bi-compass me-1 text-warning"></i>
          <strong>Julian Date:</strong> JD ${julianDate.toFixed(3)}
        </span>
        <span class="cosmic-ticker-item">
          <i class="bi bi-shield-check me-1 text-success"></i>
          <strong>Telemetry:</strong> Nominal (Univ. Nusa Putra)
        </span>
      `;
    };

    updateTimes();
    setInterval(updateTimes, 1000);
  },

  // Toast Notification Helper
  showToast(message, type = "info", icon = "bi-info-circle") {
    let container = document.getElementById("astroToastContainer");
    if (!container) {
      container = document.createElement("div");
      container.id = "astroToastContainer";
      container.className = "toast-container position-fixed bottom-0 end-0 p-3";
      container.style.zIndex = "1090";
      document.body.appendChild(container);
    }

    const toastId = "toast-" + Date.now();
    let borderAccent = "border-info";
    let iconColor = "text-info";
    if (type === "success") { borderAccent = "border-success"; iconColor = "text-success"; }
    if (type === "danger") { borderAccent = "border-danger"; iconColor = "text-danger"; }
    if (type === "warning") { borderAccent = "border-warning"; iconColor = "text-warning"; }

    const toastHtml = `
      <div id="${toastId}" class="toast toast-astro ${borderAccent}" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header bg-transparent text-white border-bottom-0 pb-0">
          <i class="bi ${icon} ${iconColor} me-2 fs-5"></i>
          <strong class="me-auto font-space text-capitalize">AstroVista ${type}</strong>
          <small class="text-muted">Just now</small>
          <button type="button" class="btn-close btn-close-astro" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body text-light pt-2 pb-3">
          ${message}
        </div>
      </div>
    `;

    container.insertAdjacentHTML("beforeend", toastHtml);
    const toastEl = document.getElementById(toastId);
    if (window.bootstrap && bootstrap.Toast) {
      const bsToast = new bootstrap.Toast(toastEl, { delay: 4500 });
      bsToast.show();
      toastEl.addEventListener("hidden.bs.toast", () => toastEl.remove());
    }
  },

  // ==========================================
  // 3. PLANETS EXPLORER (planets.html)
  // ==========================================
  initPlanetsPage() {
    const grid = document.getElementById("planetsGrid");
    const filterBtns = document.querySelectorAll(".planet-filter-btn");
    const searchInput = document.getElementById("planetSearchInput");
    const compareBtn = document.getElementById("btnComparePlanets");

    let currentFilter = "all";
    let searchQuery = "";

    const renderPlanets = () => {
      grid.innerHTML = "";

      const filtered = PLANETS_DATA.filter(p => {
        const matchesCat = currentFilter === "all" || p.category === currentFilter;
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              p.summary.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCat && matchesSearch;
      });

      if (filtered.length === 0) {
        grid.innerHTML = `
          <div class="col-12 text-center py-5">
            <div class="empty-state-box">
              <i class="bi bi-search empty-icon"></i>
              <h4 class="font-space">No Celestial Bodies Found</h4>
              <p class="text-muted">No planets match your search criteria "${searchQuery}".</p>
              <button class="btn btn-astro-outline btn-astro-sm" id="btnResetPlanetSearch">Reset Filters</button>
            </div>
          </div>
        `;
        document.getElementById("btnResetPlanetSearch")?.addEventListener("click", () => {
          if (searchInput) searchInput.value = "";
          searchQuery = "";
          currentFilter = "all";
          filterBtns.forEach(b => b.classList.toggle("active", b.dataset.filter === "all"));
          renderPlanets();
        });
        return;
      }

      filtered.forEach(planet => {
        const col = document.createElement("div");
        col.className = "col-lg-3 col-md-6 mb-4";
        col.innerHTML = `
          <div class="card card-astro h-100">
            <div class="planet-visual-container">
              <div class="planet-sphere ${planet.colorClass}">
                ${planet.id === "saturn" ? '<div class="saturn-ring"></div>' : ''}
              </div>
              <span class="position-absolute top-0 start-0 m-3 badge bg-dark bg-opacity-75 border border-secondary text-info font-space" style="font-size: 0.7rem;">
                ${planet.categoryLabel}
              </span>
            </div>
            <div class="card-astro-body d-flex flex-column">
              <div class="d-flex justify-content-between align-items-center mb-2">
                <h4 class="font-space mb-0 text-white">${planet.name}</h4>
                <span class="badge bg-primary bg-opacity-25 text-primary border border-primary border-opacity-50">
                  <i class="bi bi-moon me-1"></i>${planet.moons} Moons
                </span>
              </div>
              <p class="text-muted small mb-3 flex-grow-1" style="line-height: 1.5;">${planet.summary.substring(0, 115)}...</p>
              
              <div class="row g-2 mb-3">
                <div class="col-6">
                  <div class="spec-pill">
                    <span class="spec-key">Distance</span>
                    <span class="spec-val">${planet.distanceSunAU}</span>
                  </div>
                </div>
                <div class="col-6">
                  <div class="spec-pill">
                    <span class="spec-key">Diameter</span>
                    <span class="spec-val">${planet.diameter}</span>
                  </div>
                </div>
                <div class="col-6">
                  <div class="spec-pill">
                    <span class="spec-key">Orbit Year</span>
                    <span class="spec-val">${planet.orbitalPeriod}</span>
                  </div>
                </div>
                <div class="col-6">
                  <div class="spec-pill">
                    <span class="spec-key">Gravity</span>
                    <span class="spec-val">${planet.gravity}</span>
                  </div>
                </div>
              </div>

              <button class="btn btn-astro-outline btn-astro-sm w-100 btn-view-planet mt-auto" data-planet-id="${planet.id}">
                <i class="bi bi-info-circle me-1"></i> Explore Details
              </button>
            </div>
          </div>
        `;
        grid.appendChild(col);
      });

      // Attach click events
      document.querySelectorAll(".btn-view-planet").forEach(btn => {
        btn.addEventListener("click", () => {
          const planetId = btn.getAttribute("data-planet-id");
          this.openPlanetModal(planetId);
        });
      });
    };

    filterBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentFilter = btn.dataset.filter;
        renderPlanets();
      });
    });

    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value.trim();
        renderPlanets();
      });
    }

    renderPlanets();

    // Populate comparison dropdowns if modal exists
    this.setupPlanetComparisonModal();
  },

  openPlanetModal(planetId) {
    const planet = PLANETS_DATA.find(p => p.id === planetId);
    if (!planet) return;

    let modalEl = document.getElementById("planetDetailModal");
    if (!modalEl) {
      // Create dynamically if not in DOM
      const modalHtml = `
        <div class="modal fade" id="planetDetailModal" tabindex="-1" aria-labelledby="planetModalTitle" aria-hidden="true">
          <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content modal-content-astro">
              <div class="modal-header modal-header-astro">
                <div class="d-flex align-items-center gap-3">
                  <div class="planet-sphere ${planet.colorClass}" style="width: 44px; height: 44px; min-width: 44px;"></div>
                  <div>
                    <h4 class="modal-title font-space mb-0 text-white" id="planetModalTitle">${planet.name}</h4>
                    <span class="badge bg-primary bg-opacity-25 text-info border border-primary border-opacity-25">${planet.categoryLabel}</span>
                  </div>
                </div>
                <button type="button" class="btn-close btn-close-astro" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body p-4" id="planetModalBody">
                <!-- Content inserted dynamically -->
              </div>
              <div class="modal-footer modal-footer-astro">
                <a href="planner.html?object=${encodeURIComponent(planet.name)}" class="btn btn-astro-primary btn-astro-sm">
                  <i class="bi bi-calendar-plus me-1"></i> Plan Observation of ${planet.name}
                </a>
                <button type="button" class="btn btn-astro-outline btn-astro-sm" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      `;
      document.body.insertAdjacentHTML("beforeend", modalHtml);
      modalEl = document.getElementById("planetDetailModal");
    }

    // Populate modal body
    const modalBody = document.getElementById("planetModalBody");
    const modalTitle = document.getElementById("planetModalTitle");
    if (modalTitle) modalTitle.textContent = planet.name;

    modalBody.innerHTML = `
      <div class="row g-4 mb-4">
        <div class="col-md-5 text-center">
          <div class="p-4 rounded-4 bg-dark bg-opacity-50 border border-secondary border-opacity-25 d-flex flex-column align-items-center justify-content-center h-100">
            <div class="planet-sphere ${planet.colorClass} mb-3" style="width: 140px; height: 140px;">
              ${planet.id === "saturn" ? '<div class="saturn-ring" style="width: 200px; height: 48px;"></div>' : ''}
            </div>
            <h5 class="font-space text-info mb-1">${planet.name}</h5>
            <p class="text-muted small mb-2">${planet.distanceSunKm} from Sun</p>
            <div class="d-flex gap-2 justify-content-center">
              <span class="badge bg-secondary bg-opacity-25 text-light">${planet.moons} Moons</span>
              <span class="badge bg-info bg-opacity-25 text-info">${planet.rings ? 'Has Rings' : 'No Rings'}</span>
            </div>
          </div>
        </div>
        <div class="col-md-7">
          <h6 class="font-space text-white mb-2"><i class="bi bi-info-circle text-info me-2"></i>Astrophysical Overview</h6>
          <p class="text-light" style="line-height: 1.6;">${planet.summary}</p>
          
          <h6 class="font-space text-white mb-2 mt-3"><i class="bi bi-speedometer2 text-warning me-2"></i>Core Planetary Metrics</h6>
          <div class="table-responsive">
            <table class="table table-dark table-sm border-secondary border-opacity-25 small mb-0">
              <tbody>
                <tr><td class="text-muted">Equatorial Diameter</td><td class="fw-bold text-end">${planet.diameter}</td></tr>
                <tr><td class="text-muted">Mass (Earths)</td><td class="fw-bold text-end">${planet.mass}</td></tr>
                <tr><td class="text-muted">Surface Gravity</td><td class="fw-bold text-end">${planet.gravity}</td></tr>
                <tr><td class="text-muted">Orbital Period (Year)</td><td class="fw-bold text-end">${planet.orbitalPeriod}</td></tr>
                <tr><td class="text-muted">Rotation Period (Day)</td><td class="fw-bold text-end">${planet.rotationPeriod}</td></tr>
                <tr><td class="text-muted">Surface Temperatures</td><td class="fw-bold text-end">${planet.surfaceTemp}</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="mb-4">
        <h6 class="font-space text-white mb-2"><i class="bi bi-wind text-info me-2"></i>Atmospheric Composition</h6>
        <div class="p-3 rounded-3 bg-dark bg-opacity-50 border border-secondary border-opacity-25 text-light small">
          ${planet.atmosphere}
        </div>
      </div>

      <div class="mb-4">
        <h6 class="font-space text-white mb-2"><i class="bi bi-lightbulb text-warning me-2"></i>Notable Astronomical Facts</h6>
        <ul class="list-unstyled mb-0">
          ${planet.interestingFacts.map(fact => `
            <li class="d-flex align-items-start gap-2 mb-2 text-light small">
              <i class="bi bi-stars text-cyan mt-1" style="color: #38bdf8;"></i>
              <span>${fact}</span>
            </li>
          `).join("")}
        </ul>
      </div>

      <div>
        <h6 class="font-space text-white mb-2"><i class="bi bi-rocket-takeoff text-danger me-2"></i>Key Space Exploration Missions</h6>
        <div class="d-flex flex-wrap gap-2">
          ${planet.missions.map(m => `
            <span class="badge bg-dark border border-secondary border-opacity-50 text-light py-2 px-3 small">
              <i class="bi bi-geo-alt-fill text-danger me-1"></i>${m}
            </span>
          `).join("")}
        </div>
      </div>
    `;

    const bsModal = new bootstrap.Modal(modalEl);
    bsModal.show();
  },

  setupPlanetComparisonModal() {
    const sel1 = document.getElementById("compareSelect1");
    const sel2 = document.getElementById("compareSelect2");
    const container = document.getElementById("comparisonResultsContainer");
    if (!sel1 || !sel2 || !container) return;

    // Fill options
    sel1.innerHTML = PLANETS_DATA.map((p, idx) => `<option value="${p.id}" ${idx === 2 ? 'selected' : ''}>${p.name}</option>`).join("");
    sel2.innerHTML = PLANETS_DATA.map((p, idx) => `<option value="${p.id}" ${idx === 4 ? 'selected' : ''}>${p.name}</option>`).join("");

    const updateComparison = () => {
      const p1 = PLANETS_DATA.find(p => p.id === sel1.value) || PLANETS_DATA[2];
      const p2 = PLANETS_DATA.find(p => p.id === sel2.value) || PLANETS_DATA[4];

      container.innerHTML = `
        <div class="table-responsive">
          <table class="table table-dark table-hover border-secondary border-opacity-25 text-center align-middle">
            <thead>
              <tr class="font-space text-info">
                <th style="width: 35%;">${p1.name}</th>
                <th style="width: 30%;" class="text-muted">Metric / Property</th>
                <th style="width: 35%;">${p2.name}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><div class="planet-sphere ${p1.colorClass} mx-auto" style="width: 50px; height: 50px;"></div></td>
                <td class="text-muted small">Visual Model</td>
                <td><div class="planet-sphere ${p2.colorClass} mx-auto" style="width: 50px; height: 50px;"></div></td>
              </tr>
              <tr>
                <td class="fw-bold">${p1.categoryLabel}</td>
                <td class="text-muted small">Classification</td>
                <td class="fw-bold">${p2.categoryLabel}</td>
              </tr>
              <tr>
                <td class="fw-bold text-info">${p1.diameter}</td>
                <td class="text-muted small">Diameter</td>
                <td class="fw-bold text-info">${p2.diameter}</td>
              </tr>
              <tr>
                <td>${p1.distanceSunAU} (${p1.distanceSunKm})</td>
                <td class="text-muted small">Distance from Sun</td>
                <td>${p2.distanceSunAU} (${p2.distanceSunKm})</td>
              </tr>
              <tr>
                <td>${p1.orbitalPeriod}</td>
                <td class="text-muted small">Orbital Period</td>
                <td>${p2.orbitalPeriod}</td>
              </tr>
              <tr>
                <td>${p1.rotationPeriod}</td>
                <td class="text-muted small">Day Length</td>
                <td>${p2.rotationPeriod}</td>
              </tr>
              <tr>
                <td class="fw-bold text-warning">${p1.gravity}</td>
                <td class="text-muted small">Surface Gravity</td>
                <td class="fw-bold text-warning">${p2.gravity}</td>
              </tr>
              <tr>
                <td>${p1.moons}</td>
                <td class="text-muted small">Moons Count</td>
                <td>${p2.moons}</td>
              </tr>
              <tr>
                <td class="small">${p1.surfaceTemp}</td>
                <td class="text-muted small">Surface Temperature</td>
                <td class="small">${p2.surfaceTemp}</td>
              </tr>
            </tbody>
          </table>
        </div>
      `;
    };

    sel1.addEventListener("change", updateComparison);
    sel2.addEventListener("change", updateComparison);
    updateComparison();
  },

  // ==========================================
  // 4. SKY EVENTS (sky-events.html)
  // ==========================================
  initSkyEventsPage() {
    const grid = document.getElementById("skyEventsGrid");
    const filterBtns = document.querySelectorAll(".event-filter-btn");
    const searchInput = document.getElementById("eventSearchInput");

    let currentFilter = "all";
    let searchQuery = "";

    const renderEvents = () => {
      grid.innerHTML = "";

      const filtered = SKY_EVENTS_DATA.filter(evt => {
        const matchesCat = currentFilter === "all" || evt.category === currentFilter;
        const matchesSearch = evt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              evt.constellation.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              evt.target.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              evt.summary.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCat && matchesSearch;
      });

      if (filtered.length === 0) {
        grid.innerHTML = `
          <div class="col-12 text-center py-5">
            <div class="empty-state-box">
              <i class="bi bi-calendar-x empty-icon"></i>
              <h4 class="font-space">No Astronomical Events Found</h4>
              <p class="text-muted">No sky events matched your query "${searchQuery}".</p>
              <button class="btn btn-astro-outline btn-astro-sm" id="btnResetEvents">Reset Search</button>
            </div>
          </div>
        `;
        document.getElementById("btnResetEvents")?.addEventListener("click", () => {
          if (searchInput) searchInput.value = "";
          searchQuery = "";
          currentFilter = "all";
          filterBtns.forEach(b => b.classList.toggle("active", b.dataset.filter === "all"));
          renderEvents();
        });
        return;
      }

      filtered.forEach(evt => {
        const col = document.createElement("div");
        col.className = "col-lg-4 col-md-6 mb-4";
        col.innerHTML = `
          <div class="card card-astro h-100 d-flex flex-column">
            <div class="card-astro-header d-flex justify-content-between align-items-center">
              <span class="category-tag ${evt.badgeClass}">${evt.categoryLabel}</span>
              <span class="event-date-badge"><i class="bi bi-clock me-1"></i>${evt.displayDate}</span>
            </div>
            <div class="card-astro-body flex-grow-1 d-flex flex-column">
              <h5 class="font-space text-white mb-2">${evt.title}</h5>
              <div class="d-flex align-items-center gap-2 mb-3 small text-muted">
                <span><i class="bi bi-compass text-info me-1"></i>${evt.constellation}</span>
                <span>•</span>
                <span><i class="bi bi-bullseye text-warning me-1"></i>${evt.target}</span>
              </div>
              <p class="text-light small mb-3 flex-grow-1" style="line-height: 1.6;">${evt.summary}</p>
              
              <div class="p-2 rounded-3 bg-dark bg-opacity-60 border border-secondary border-opacity-25 small mb-3">
                <div class="d-flex justify-content-between text-muted mb-1">
                  <span>Difficulty:</span>
                  <span class="text-light font-space">${evt.difficulty}</span>
                </div>
                <div class="d-flex justify-content-between text-muted">
                  <span>Observability:</span>
                  <span class="text-info font-space">${evt.visibilityScore}</span>
                </div>
              </div>

              <div class="d-flex gap-2 mt-auto">
                <button class="btn btn-astro-outline btn-astro-sm flex-grow-1 btn-view-event" data-event-id="${evt.id}">
                  <i class="bi bi-eye me-1"></i> View Guide
                </button>
                <a href="planner.html?title=${encodeURIComponent(evt.title)}&object=${encodeURIComponent(evt.target)}&date=${evt.date}" class="btn btn-astro-primary btn-astro-sm" title="Add to Observation Planner">
                  <i class="bi bi-calendar-plus"></i>
                </a>
              </div>
            </div>
            <div class="card-astro-footer small text-muted py-2 d-flex align-items-center justify-content-between">
              <span class="text-dim" style="font-size: 0.72rem;"><i class="bi bi-info-circle me-1"></i>Illustrative Schedule</span>
              <span class="badge bg-secondary bg-opacity-25" style="font-size: 0.7rem;">Academic Sample</span>
            </div>
          </div>
        `;
        grid.appendChild(col);
      });

      // Attach event detail modal clicks
      document.querySelectorAll(".btn-view-event").forEach(btn => {
        btn.addEventListener("click", () => {
          const eventId = btn.getAttribute("data-event-id");
          this.openEventModal(eventId);
        });
      });
    };

    filterBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentFilter = btn.dataset.filter;
        renderEvents();
      });
    });

    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value.trim();
        renderEvents();
      });
    }

    renderEvents();
  },

  openEventModal(eventId) {
    const evt = SKY_EVENTS_DATA.find(e => e.id === eventId);
    if (!evt) return;

    let modalEl = document.getElementById("eventDetailModal");
    if (!modalEl) {
      const modalHtml = `
        <div class="modal fade" id="eventDetailModal" tabindex="-1" aria-labelledby="eventModalTitle" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content modal-content-astro">
              <div class="modal-header modal-header-astro">
                <div>
                  <span class="category-tag ${evt.badgeClass} mb-1 d-inline-block" id="eventModalCategory">${evt.categoryLabel}</span>
                  <h5 class="modal-title font-space text-white" id="eventModalTitle">${evt.title}</h5>
                </div>
                <button type="button" class="btn-close btn-close-astro" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body p-4" id="eventModalBody">
                <!-- Injected content -->
              </div>
              <div class="modal-footer modal-footer-astro">
                <a href="planner.html?title=${encodeURIComponent(evt.title)}&object=${encodeURIComponent(evt.target)}&date=${evt.date}" class="btn btn-astro-primary btn-astro-sm" id="eventModalPlanBtn">
                  <i class="bi bi-calendar-plus me-1"></i> Add to My Planner
                </a>
                <button type="button" class="btn btn-astro-outline btn-astro-sm" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      `;
      document.body.insertAdjacentHTML("beforeend", modalHtml);
      modalEl = document.getElementById("eventDetailModal");
    }

    // Populate
    document.getElementById("eventModalCategory").className = `category-tag ${evt.badgeClass} mb-1 d-inline-block`;
    document.getElementById("eventModalCategory").textContent = evt.categoryLabel;
    document.getElementById("eventModalTitle").textContent = evt.title;
    document.getElementById("eventModalPlanBtn").href = `planner.html?title=${encodeURIComponent(evt.title)}&object=${encodeURIComponent(evt.target)}&date=${evt.date}`;

    document.getElementById("eventModalBody").innerHTML = `
      <div class="alert alert-info bg-info bg-opacity-10 border-info border-opacity-25 text-info py-2 px-3 small rounded-3 mb-3">
        <i class="bi bi-exclamation-circle me-1"></i>
        <strong>Academic Demonstration:</strong> ${evt.sampleNotice}
      </div>

      <div class="p-3 rounded-3 bg-dark bg-opacity-50 border border-secondary border-opacity-25 mb-3">
        <div class="row g-2 small">
          <div class="col-6"><span class="text-muted">Observation Window:</span><br><strong class="text-white">${evt.displayDate}</strong></div>
          <div class="col-6"><span class="text-muted">Target / Object:</span><br><strong class="text-cyan" style="color:#38bdf8;">${evt.target}</strong></div>
          <div class="col-6"><span class="text-muted">Constellation / Location:</span><br><strong class="text-white">${evt.constellation}</strong></div>
          <div class="col-6"><span class="text-muted">Visibility Difficulty:</span><br><strong class="text-warning">${evt.difficulty}</strong></div>
        </div>
      </div>

      <h6 class="font-space text-white mb-2"><i class="bi bi-binoculars text-info me-2"></i>Event Overview</h6>
      <p class="text-light small mb-3" style="line-height: 1.6;">${evt.summary}</p>

      <h6 class="font-space text-white mb-2"><i class="bi bi-stars text-warning me-2"></i>Stargazing Field Recommendation</h6>
      <div class="p-3 rounded-3 bg-dark bg-opacity-70 border border-secondary border-opacity-25 small text-light" style="line-height: 1.6;">
        ${evt.tips}
      </div>
    `;

    const bsModal = new bootstrap.Modal(modalEl);
    bsModal.show();
  },

  // ==========================================
  // 5. OBSERVATION PLANNER (planner.html)
  // ==========================================
  initPlannerPage() {
    const form = document.getElementById("plannerForm");
    const previewCard = document.getElementById("livePreviewCard");
    const btnReset = document.getElementById("btnResetPlanner");
    const btnPresetJupiter = document.getElementById("btnPresetJupiter");
    const btnPresetOrion = document.getElementById("btnPresetOrion");
    const btnPresetPerseids = document.getElementById("btnPresetPerseids");

    // Form Fields
    const titleInput = document.getElementById("planTitle");
    const objectInput = document.getElementById("planObject");
    const categoryInput = document.getElementById("planCategory");
    const dateInput = document.getElementById("planDate");
    const timeInput = document.getElementById("planTime");
    const locationInput = document.getElementById("planLocation");
    const equipmentInput = document.getElementById("planEquipment");
    const seeingInput = document.getElementById("planSeeing");
    const notesInput = document.getElementById("planNotes");

    // Check URL parameters for prefill (e.g. from Sky Events or Planets)
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("title") && titleInput) titleInput.value = urlParams.get("title");
    if (urlParams.has("object") && objectInput) objectInput.value = urlParams.get("object");
    if (urlParams.has("date") && dateInput) dateInput.value = urlParams.get("date");
    if (!dateInput.value) {
      // Default to today
      const today = new Date().toISOString().split("T")[0];
      dateInput.value = today;
    }
    if (!timeInput.value) {
      timeInput.value = "21:00";
    }

    // Live Preview Updater
    const updateLivePreview = () => {
      if (!previewCard) return;

      const title = titleInput.value.trim() || "Untitled Stargazing Mission";
      const objectName = objectInput.value.trim() || "Deep Sky Target";
      const category = categoryInput.value || "General";
      const date = dateInput.value || "Scheduled Date";
      const time = timeInput.value || "20:00";
      const location = locationInput.value.trim() || "Observation Site";
      const equipment = equipmentInput.value.trim() || "Naked Eye / Standard Optics";
      const seeing = seeingInput.value || "3";
      const notes = notesInput.value.trim() || "Enter your observational goals, stellar coordinates, or equipment notes in the form...";

      previewCard.innerHTML = `
        <div class="d-flex justify-content-between align-items-center mb-3">
          <span class="badge bg-primary bg-opacity-25 text-info border border-primary border-opacity-50">
            <i class="bi bi-tag me-1"></i>${category}
          </span>
          <span class="badge bg-warning bg-opacity-25 text-warning">
            Seeing: ${seeing}/5 Rating
          </span>
        </div>

        <h4 class="font-space text-white mb-2">${title}</h4>
        <h6 class="text-cyan mb-3" style="color: #38bdf8;">
          <i class="bi bi-bullseye me-1"></i>${objectName}
        </h6>

        <div class="row g-2 small mb-3">
          <div class="col-6">
            <div class="spec-pill">
              <span class="spec-key">Scheduled Window</span>
              <span class="spec-val">${date} • ${time}</span>
            </div>
          </div>
          <div class="col-6">
            <div class="spec-pill">
              <span class="spec-key">Site Location</span>
              <span class="spec-val text-truncate">${location}</span>
            </div>
          </div>
          <div class="col-12">
            <div class="spec-pill">
              <span class="spec-key">Optics & Equipment</span>
              <span class="spec-val">${equipment}</span>
            </div>
          </div>
        </div>

        <div class="p-3 rounded-3 bg-dark bg-opacity-60 border border-secondary border-opacity-25 small text-light mb-3">
          <strong class="text-white d-block mb-1 font-space">Field Notes & Objectives:</strong>
          <p class="mb-0 text-muted" style="white-space: pre-line;">${notes}</p>
        </div>

        <div class="d-flex align-items-center gap-2 text-muted" style="font-size: 0.75rem;">
          <i class="bi bi-eye text-info"></i>
          <span>Live Synchronous Preview (Updates dynamically as you type)</span>
        </div>
      `;
    };

    // Attach input listeners
    [titleInput, objectInput, categoryInput, dateInput, timeInput, locationInput, equipmentInput, seeingInput, notesInput].forEach(elem => {
      if (elem) elem.addEventListener("input", updateLivePreview);
    });

    // Preset Handlers
    if (btnPresetJupiter) {
      btnPresetJupiter.addEventListener("click", () => {
        titleInput.value = "Jupiter Cloud Belts & Moons Observation";
        objectInput.value = "Jupiter";
        categoryInput.value = "Planets";
        locationInput.value = "Backyard Observatory (Bortle 4)";
        equipmentInput.value = "8-inch Dobsonian + 9mm Eyepiece + Barlow 2x";
        seeingInput.value = "4";
        notesInput.value = "Target: Great Red Spot transit and timing Galilean moon transits across the equatorial band. Check atmospheric dispersion and test blue filter.";
        updateLivePreview();
        AstroVista.showToast("Loaded Jupiter Observation Preset!", "info", "bi-magic");
      });
    }

    if (btnPresetOrion) {
      btnPresetOrion.addEventListener("click", () => {
        titleInput.value = "Orion Nebula (M42) Trapezium Deep Dive";
        objectInput.value = "Messier 42 (Orion Nebula)";
        categoryInput.value = "Deep Sky";
        locationInput.value = "Mount Ciremai Foothills (Bortle 2)";
        equipmentInput.value = "Sky-Watcher 200P + Baader UHC Filter + 25mm Wide Field";
        seeingInput.value = "5";
        notesInput.value = "Sketch the ionization glow of the outer gas wings and resolve all 4 Trapezium stars. Compare contrast with and without narrowband UHC filter.";
        updateLivePreview();
        AstroVista.showToast("Loaded Orion Nebula Preset!", "info", "bi-magic");
      });
    }

    if (btnPresetPerseids) {
      btnPresetPerseids.addEventListener("click", () => {
        titleInput.value = "Perseid Meteor Shower Peak Count";
        objectInput.value = "Perseids (Comet Swift-Tuttle)";
        categoryInput.value = "Meteor Showers";
        locationInput.value = "Pelabuhan Ratu Coastal Site, Sukabumi";
        equipmentInput.value = "Naked Eye + Recliner + Voice Recorder + 7x50 Binoculars";
        seeingInput.value = "5";
        notesInput.value = "Log meteor counts per 15-minute interval between midnight and 04:00 AM. Record magnitude, color, and train duration for all bolides brighter than -2.";
        updateLivePreview();
        AstroVista.showToast("Loaded Perseids Meteor Preset!", "info", "bi-magic");
      });
    }

    // Reset Form
    if (btnReset) {
      btnReset.addEventListener("click", () => {
        form.reset();
        const today = new Date().toISOString().split("T")[0];
        dateInput.value = today;
        timeInput.value = "21:00";
        updateLivePreview();
        AstroVista.showToast("Form cleared to defaults.", "info", "bi-arrow-counterclockwise");
      });
    }

    // Submit & Save Form to LocalStorage
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Basic validation
      if (!form.checkValidity()) {
        e.stopPropagation();
        form.classList.add("was-validated");
        AstroVista.showToast("Please complete all required fields correctly.", "danger", "bi-exclamation-triangle");
        return;
      }

      const newObservation = {
        id: "obs-" + Date.now(),
        title: titleInput.value.trim(),
        objectName: objectInput.value.trim(),
        category: categoryInput.value,
        date: dateInput.value,
        time: timeInput.value,
        location: locationInput.value.trim(),
        equipment: equipmentInput.value.trim(),
        seeingRating: seeingInput.value,
        skyConditions: `Seeing ${seeingInput.value}/5 - Field Observation`,
        notes: notesInput.value.trim(),
        createdAt: new Date().toISOString()
      };

      // Retrieve existing logs
      const logs = AstroVista.getStoredObservations();
      logs.unshift(newObservation); // newest first
      AstroVista.saveObservations(logs);

      // Feedback
      AstroVista.showToast(`Observation "${newObservation.title}" saved successfully to your Journal!`, "success", "bi-check-circle-fill");

      // Reset and trigger modal or redirect prompt
      form.reset();
      form.classList.remove("was-validated");
      const today = new Date().toISOString().split("T")[0];
      dateInput.value = today;
      timeInput.value = "21:00";
      updateLivePreview();

      // Show action banner
      const banner = document.getElementById("saveSuccessBanner");
      if (banner) {
        banner.classList.remove("d-none");
        banner.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    });

    updateLivePreview();
  },

  // ==========================================
  // 6. OBSERVATION JOURNAL (journal.html)
  // ==========================================
  initJournalPage() {
    const grid = document.getElementById("journalGrid");
    const emptyState = document.getElementById("journalEmptyState");
    const searchInput = document.getElementById("journalSearchInput");
    const categorySelect = document.getElementById("journalCategoryFilter");
    const sortSelect = document.getElementById("journalSortSelect");
    const btnLoadSamples = document.getElementById("btnLoadSamples");
    const btnClearAll = document.getElementById("btnClearAllJournal");
    const btnExportJson = document.getElementById("btnExportJournalJson");
    const btnPrintJournal = document.getElementById("btnPrintJournal");

    // Metrics elements
    const metricTotal = document.getElementById("metricTotalObservations");
    const metricTargets = document.getElementById("metricUniqueTargets");
    const metricTopEquip = document.getElementById("metricTopEquipment");

    let searchQuery = "";
    let categoryFilter = "all";
    let sortOrder = "newest";

    const updateMetrics = (logs) => {
      if (metricTotal) metricTotal.textContent = logs.length;
      if (metricTargets) {
        const unique = new Set(logs.map(l => l.objectName.toLowerCase()));
        metricTargets.textContent = unique.size;
      }
      if (metricTopEquip) {
        metricTopEquip.textContent = logs.length > 0 ? logs[0].equipment.split("+")[0].trim() : "None";
      }
    };

    const renderJournal = () => {
      const logs = AstroVista.getStoredObservations();
      updateMetrics(logs);

      let filtered = logs.filter(log => {
        const matchesCat = categoryFilter === "all" || log.category === categoryFilter;
        const matchesSearch = log.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              log.objectName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              log.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              log.notes.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              log.equipment.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCat && matchesSearch;
      });

      // Sort
      filtered.sort((a, b) => {
        const dateA = new Date(a.date + " " + (a.time || "00:00")).getTime();
        const dateB = new Date(b.date + " " + (b.time || "00:00")).getTime();
        return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
      });

      if (logs.length === 0) {
        if (emptyState) emptyState.classList.remove("d-none");
        if (grid) grid.innerHTML = "";
        return;
      } else {
        if (emptyState) emptyState.classList.add("d-none");
      }

      if (filtered.length === 0) {
        grid.innerHTML = `
          <div class="col-12 text-center py-5">
            <div class="empty-state-box">
              <i class="bi bi-search empty-icon"></i>
              <h4 class="font-space">No Matching Observation Records</h4>
              <p class="text-muted">No journal entries match your filter "${searchQuery}".</p>
              <button class="btn btn-astro-outline btn-astro-sm" id="btnResetJournalFilter">Clear Search Filters</button>
            </div>
          </div>
        `;
        document.getElementById("btnResetJournalFilter")?.addEventListener("click", () => {
          if (searchInput) searchInput.value = "";
          searchQuery = "";
          categoryFilter = "all";
          if (categorySelect) categorySelect.value = "all";
          renderJournal();
        });
        return;
      }

      grid.innerHTML = "";
      filtered.forEach(log => {
        const col = document.createElement("div");
        col.className = "col-lg-6 mb-4";
        col.innerHTML = `
          <div class="journal-item-card h-100 d-flex flex-column">
            <div class="d-flex justify-content-between align-items-start mb-2">
              <div>
                <span class="badge bg-primary bg-opacity-25 text-info border border-primary border-opacity-50 me-2">
                  <i class="bi bi-tag me-1"></i>${log.category || 'General'}
                </span>
                <span class="badge bg-warning bg-opacity-25 text-warning">
                  Seeing: ${log.seeingRating || 4}/5
                </span>
              </div>
              <div class="dropdown">
                <button class="btn btn-sm btn-link text-muted p-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="bi bi-three-dots-vertical fs-5"></i>
                </button>
                <ul class="dropdown-menu dropdown-menu-dark dropdown-menu-end">
                  <li><button class="dropdown-item btn-edit-journal" data-id="${log.id}"><i class="bi bi-pencil me-2 text-info"></i>Edit Entry</button></li>
                  <li><hr class="dropdown-divider border-secondary border-opacity-25"></li>
                  <li><button class="dropdown-item text-danger btn-delete-journal" data-id="${log.id}"><i class="bi bi-trash3 me-2"></i>Delete Entry</button></li>
                </ul>
              </div>
            </div>

            <h5 class="font-space text-white mb-1">${log.title}</h5>
            <h6 class="text-cyan mb-3" style="color: #38bdf8;">
              <i class="bi bi-bullseye me-1"></i>Target: ${log.objectName}
            </h6>

            <div class="row g-2 small mb-3">
              <div class="col-sm-6">
                <div class="spec-pill">
                  <span class="spec-key">Date & Time</span>
                  <span class="spec-val"><i class="bi bi-calendar-event me-1"></i>${log.date} at ${log.time || 'N/A'}</span>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="spec-pill">
                  <span class="spec-key">Observing Site</span>
                  <span class="spec-val text-truncate" title="${log.location}"><i class="bi bi-geo-alt me-1"></i>${log.location}</span>
                </div>
              </div>
              <div class="col-12">
                <div class="spec-pill">
                  <span class="spec-key">Optics / Instrument</span>
                  <span class="spec-val text-truncate" title="${log.equipment}"><i class="bi bi-binoculars me-1"></i>${log.equipment}</span>
                </div>
              </div>
            </div>

            <div class="p-3 rounded-3 bg-dark bg-opacity-60 border border-secondary border-opacity-25 small text-light flex-grow-1 mb-3">
              <strong class="text-white d-block mb-1 font-space">Field Notes:</strong>
              <p class="mb-0 text-muted" style="white-space: pre-line; line-height: 1.5;">${log.notes}</p>
            </div>

            <div class="d-flex justify-content-between align-items-center pt-2 border-top border-secondary border-opacity-25 text-muted small mt-auto">
              <span style="font-size: 0.75rem;">Recorded: ${new Date(log.createdAt || log.date).toLocaleDateString()}</span>
              <div class="d-flex gap-2">
                <button class="btn btn-astro-outline btn-astro-sm btn-edit-journal" data-id="${log.id}">
                  <i class="bi bi-pencil me-1"></i>Edit
                </button>
                <button class="btn btn-outline-danger btn-astro-sm btn-delete-journal" data-id="${log.id}">
                  <i class="bi bi-trash3 me-1"></i>Delete
                </button>
              </div>
            </div>
          </div>
        `;
        grid.appendChild(col);
      });

      // Attach edit and delete handlers
      document.querySelectorAll(".btn-delete-journal").forEach(btn => {
        btn.addEventListener("click", () => {
          const id = btn.getAttribute("data-id");
          this.promptDeleteJournalEntry(id, renderJournal);
        });
      });

      document.querySelectorAll(".btn-edit-journal").forEach(btn => {
        btn.addEventListener("click", () => {
          const id = btn.getAttribute("data-id");
          this.openEditJournalModal(id, renderJournal);
        });
      });
    };

    // Filter & Search events
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value.trim();
        renderJournal();
      });
    }

    if (categorySelect) {
      categorySelect.addEventListener("change", (e) => {
        categoryFilter = e.target.value;
        renderJournal();
      });
    }

    if (sortSelect) {
      sortSelect.addEventListener("change", (e) => {
        sortOrder = e.target.value;
        renderJournal();
      });
    }

    // Load Samples
    if (btnLoadSamples) {
      btnLoadSamples.addEventListener("click", () => {
        AstroVista.saveObservations(SAMPLE_OBSERVATIONS);
        AstroVista.showToast("Loaded 3 realistic astronomy journal entries!", "success", "bi-check2-all");
        renderJournal();
      });
    }

    // Clear All Logs
    if (btnClearAll) {
      btnClearAll.addEventListener("click", () => {
        if (confirm("Are you sure you want to clear ALL observation records? This action cannot be undone.")) {
          AstroVista.saveObservations([]);
          AstroVista.showToast("All journal records have been cleared.", "warning", "bi-trash3");
          renderJournal();
        }
      });
    }

    // Export as JSON file
    if (btnExportJson) {
      btnExportJson.addEventListener("click", () => {
        const logs = AstroVista.getStoredObservations();
        if (logs.length === 0) {
          AstroVista.showToast("No journal entries to export.", "warning", "bi-info-circle");
          return;
        }

        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(logs, null, 2));
        const dlAnchor = document.createElement("a");
        dlAnchor.setAttribute("href", dataStr);
        dlAnchor.setAttribute("download", `AstroVista_Journal_Export_${new Date().toISOString().split("T")[0]}.json`);
        document.body.appendChild(dlAnchor);
        dlAnchor.click();
        dlAnchor.remove();
        AstroVista.showToast("Journal exported to JSON file successfully!", "success", "bi-download");
      });
    }

    // Print / PDF
    if (btnPrintJournal) {
      btnPrintJournal.addEventListener("click", () => {
        window.print();
      });
    }

    // Initial check: if storage is completely uninitialized, load samples so the platform is immediately engaging
    if (localStorage.getItem(this.STORAGE_KEY) === null) {
      AstroVista.saveObservations(SAMPLE_OBSERVATIONS);
    }

    renderJournal();
  },

  promptDeleteJournalEntry(id, callback) {
    const logs = AstroVista.getStoredObservations();
    const target = logs.find(l => l.id === id);
    if (!target) return;

    if (confirm(`Are you sure you want to delete observation "${target.title}"?`)) {
      const remaining = logs.filter(l => l.id !== id);
      AstroVista.saveObservations(remaining);
      AstroVista.showToast(`Deleted observation "${target.title}".`, "info", "bi-trash3");
      if (callback) callback();
    }
  },

  openEditJournalModal(id, callback) {
    const logs = AstroVista.getStoredObservations();
    const target = logs.find(l => l.id === id);
    if (!target) return;

    let modalEl = document.getElementById("editJournalModal");
    if (!modalEl) {
      const modalHtml = `
        <div class="modal fade" id="editJournalModal" tabindex="-1" aria-labelledby="editJournalModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg modal-dialog-centered">
            <div class="modal-content modal-content-astro">
              <div class="modal-header modal-header-astro">
                <h5 class="modal-title font-space text-white" id="editJournalModalLabel">
                  <i class="bi bi-pencil-square text-info me-2"></i>Edit Observation Record
                </h5>
                <button type="button" class="btn-close btn-close-astro" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <form id="editJournalForm">
                <div class="modal-body p-4">
                  <input type="hidden" id="editLogId">
                  <div class="row g-3">
                    <div class="col-md-8">
                      <label class="form-astro-label">Observation Title *</label>
                      <input type="text" class="form-control form-control-astro" id="editTitle" required>
                    </div>
                    <div class="col-md-4">
                      <label class="form-astro-label">Category *</label>
                      <select class="form-select form-select-astro" id="editCategory" required>
                        <option value="Planets">Planets</option>
                        <option value="Deep Sky">Deep Sky</option>
                        <option value="Meteor Showers">Meteor Showers</option>
                        <option value="Lunar">Lunar & Eclipses</option>
                        <option value="Solar">Solar Observation</option>
                        <option value="Constellations">Constellations</option>
                      </select>
                    </div>
                    <div class="col-md-6">
                      <label class="form-astro-label">Target Celestial Object *</label>
                      <input type="text" class="form-control form-control-astro" id="editObject" required>
                    </div>
                    <div class="col-md-3">
                      <label class="form-astro-label">Date *</label>
                      <input type="date" class="form-control form-control-astro" id="editDate" required>
                    </div>
                    <div class="col-md-3">
                      <label class="form-astro-label">Time *</label>
                      <input type="time" class="form-control form-control-astro" id="editTime" required>
                    </div>
                    <div class="col-md-6">
                      <label class="form-astro-label">Observing Location *</label>
                      <input type="text" class="form-control form-control-astro" id="editLocation" required>
                    </div>
                    <div class="col-md-6">
                      <label class="form-astro-label">Equipment / Optics *</label>
                      <input type="text" class="form-control form-control-astro" id="editEquipment" required>
                    </div>
                    <div class="col-md-6">
                      <label class="form-astro-label">Seeing Quality (1-5)</label>
                      <select class="form-select form-select-astro" id="editSeeing">
                        <option value="5">5/5 - Perfect Transparency</option>
                        <option value="4">4/5 - Good Seeing</option>
                        <option value="3">3/5 - Moderate / Average</option>
                        <option value="2">2/5 - Poor / Hazy</option>
                        <option value="1">1/5 - Severely Degraded</option>
                      </select>
                    </div>
                    <div class="col-12">
                      <label class="form-astro-label">Observation Field Notes *</label>
                      <textarea class="form-control form-control-astro" id="editNotes" rows="4" required></textarea>
                    </div>
                  </div>
                </div>
                <div class="modal-footer modal-footer-astro">
                  <button type="submit" class="btn btn-astro-primary btn-astro-sm">
                    <i class="bi bi-save me-1"></i>Save Changes
                  </button>
                  <button type="button" class="btn btn-astro-outline btn-astro-sm" data-bs-dismiss="modal">Cancel</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      `;
      document.body.insertAdjacentHTML("beforeend", modalHtml);
      modalEl = document.getElementById("editJournalModal");
    }

    // Populate form
    document.getElementById("editLogId").value = target.id;
    document.getElementById("editTitle").value = target.title;
    document.getElementById("editCategory").value = target.category || "Planets";
    document.getElementById("editObject").value = target.objectName;
    document.getElementById("editDate").value = target.date;
    document.getElementById("editTime").value = target.time || "21:00";
    document.getElementById("editLocation").value = target.location;
    document.getElementById("editEquipment").value = target.equipment;
    document.getElementById("editSeeing").value = target.seeingRating || "4";
    document.getElementById("editNotes").value = target.notes;

    const bsModal = new bootstrap.Modal(modalEl);
    bsModal.show();

    // Form submit
    const editForm = document.getElementById("editJournalForm");
    editForm.onsubmit = (e) => {
      e.preventDefault();
      const idToUpdate = document.getElementById("editLogId").value;
      const allLogs = AstroVista.getStoredObservations();
      const index = allLogs.findIndex(l => l.id === idToUpdate);
      if (index !== -1) {
        allLogs[index] = {
          ...allLogs[index],
          title: document.getElementById("editTitle").value.trim(),
          category: document.getElementById("editCategory").value,
          objectName: document.getElementById("editObject").value.trim(),
          date: document.getElementById("editDate").value,
          time: document.getElementById("editTime").value,
          location: document.getElementById("editLocation").value.trim(),
          equipment: document.getElementById("editEquipment").value.trim(),
          seeingRating: document.getElementById("editSeeing").value,
          notes: document.getElementById("editNotes").value.trim(),
          updatedAt: new Date().toISOString()
        };
        AstroVista.saveObservations(allLogs);
        AstroVista.showToast("Observation record updated successfully!", "success", "bi-check-circle");
        bsModal.hide();
        if (callback) callback();
      }
    };
  },

  // Storage Handlers
  getStoredObservations() {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error("Failed to parse localStorage observations:", e);
      return [];
    }
  },

  saveObservations(logs) {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(logs));
    } catch (e) {
      console.error("Failed to save observations to localStorage:", e);
    }
  },

  // ==========================================
  // 7. ASTRONOMY LIBRARY (library.html)
  // ==========================================
  initLibraryPage() {
    const grid = document.getElementById("libraryGrid");
    const filterBtns = document.querySelectorAll(".library-filter-btn");
    const searchInput = document.getElementById("librarySearchInput");

    let currentFilter = "all";
    let searchQuery = "";

    const renderLibrary = () => {
      grid.innerHTML = "";

      const filtered = LIBRARY_ARTICLES.filter(art => {
        const matchesCat = currentFilter === "all" || art.category === currentFilter;
        const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              art.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              art.content.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCat && matchesSearch;
      });

      if (filtered.length === 0) {
        grid.innerHTML = `
          <div class="col-12 text-center py-5">
            <div class="empty-state-box">
              <i class="bi bi-book empty-icon"></i>
              <h4 class="font-space">No Articles Found</h4>
              <p class="text-muted">No educational guides match your query "${searchQuery}".</p>
              <button class="btn btn-astro-outline btn-astro-sm" id="btnResetLibrary">Reset Search</button>
            </div>
          </div>
        `;
        document.getElementById("btnResetLibrary")?.addEventListener("click", () => {
          if (searchInput) searchInput.value = "";
          searchQuery = "";
          currentFilter = "all";
          filterBtns.forEach(b => b.classList.toggle("active", b.dataset.filter === "all"));
          renderLibrary();
        });
        return;
      }

      filtered.forEach(art => {
        const col = document.createElement("div");
        col.className = "col-lg-4 col-md-6 mb-4";
        col.innerHTML = `
          <div class="card card-astro h-100 d-flex flex-column">
            <div class="position-relative overflow-hidden" style="height: 190px;">
              <img src="${art.image}" alt="${art.title}" class="library-card-img" onerror="this.src='https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=800&q=80'">
              <div class="position-absolute top-0 start-0 m-3">
                <span class="badge bg-dark bg-opacity-80 text-info border border-secondary border-opacity-50 font-space">
                  ${art.categoryName}
                </span>
              </div>
              <div class="position-absolute bottom-0 end-0 m-2">
                <span class="badge bg-dark bg-opacity-80 text-light border border-secondary border-opacity-50 small">
                  <i class="bi bi-clock me-1 text-warning"></i>${art.readTime}
                </span>
              </div>
            </div>
            <div class="card-astro-body flex-grow-1 d-flex flex-column">
              <div class="d-flex align-items-center gap-2 mb-2">
                <span class="badge bg-secondary bg-opacity-25 text-light" style="font-size: 0.7rem;">Level: ${art.level}</span>
              </div>
              <h5 class="font-space text-white mb-2">${art.title}</h5>
              <p class="text-muted small mb-3 flex-grow-1" style="line-height: 1.6;">${art.summary}</p>
              
              <button class="btn btn-astro-primary btn-astro-sm w-100 btn-read-article mt-auto" data-id="${art.id}">
                <i class="bi bi-book-half me-1"></i> Read Full Guide
              </button>
            </div>
          </div>
        `;
        grid.appendChild(col);
      });

      // Attach article reader modal
      document.querySelectorAll(".btn-read-article").forEach(btn => {
        btn.addEventListener("click", () => {
          const id = btn.getAttribute("data-id");
          this.openArticleModal(id);
        });
      });
    };

    filterBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentFilter = btn.dataset.filter;
        renderLibrary();
      });
    });

    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value.trim();
        renderLibrary();
      });
    }

    renderLibrary();
  },

  openArticleModal(articleId) {
    const art = LIBRARY_ARTICLES.find(a => a.id === articleId);
    if (!art) return;

    let modalEl = document.getElementById("articleReaderModal");
    if (!modalEl) {
      const modalHtml = `
        <div class="modal fade" id="articleReaderModal" tabindex="-1" aria-labelledby="articleModalTitle" aria-hidden="true">
          <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content modal-content-astro">
              <div class="modal-header modal-header-astro">
                <div>
                  <span class="badge bg-primary bg-opacity-25 text-info border border-primary border-opacity-50 mb-1" id="articleModalCat">Category</span>
                  <h4 class="modal-title font-space text-white" id="articleModalTitle">Article Title</h4>
                  <small class="text-muted" id="articleModalMeta"><i class="bi bi-clock me-1"></i>5 min read • Level: Beginner</small>
                </div>
                <button type="button" class="btn-close btn-close-astro" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body p-4" id="articleModalBody">
                <!-- Injected content -->
              </div>
              <div class="modal-footer modal-footer-astro">
                <button type="button" class="btn btn-astro-outline btn-astro-sm" data-bs-dismiss="modal">Close Guide</button>
                <a href="planner.html" class="btn btn-astro-primary btn-astro-sm">
                  <i class="bi bi-calendar-plus me-1"></i> Apply in Planner
                </a>
              </div>
            </div>
          </div>
        </div>
      `;
      document.body.insertAdjacentHTML("beforeend", modalHtml);
      modalEl = document.getElementById("articleReaderModal");
    }

    // Populate
    document.getElementById("articleModalCat").textContent = art.categoryName;
    document.getElementById("articleModalTitle").textContent = art.title;
    document.getElementById("articleModalMeta").innerHTML = `<i class="bi bi-clock text-warning me-1"></i>${art.readTime} • <i class="bi bi-bar-chart text-info ms-2 me-1"></i>Level: ${art.level}`;

    document.getElementById("articleModalBody").innerHTML = `
      <div class="mb-4 rounded-4 overflow-hidden" style="max-height: 280px;">
        <img src="${art.image}" alt="${art.title}" class="w-100 object-fit-cover" style="height: 280px;" onerror="this.src='https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=800&q=80'">
      </div>
      <div class="lead text-light mb-4 pb-3 border-bottom border-secondary border-opacity-25 font-space">
        ${art.summary}
      </div>
      <div class="text-light" style="line-height: 1.8;">
        ${art.content}
      </div>
    `;

    const bsModal = new bootstrap.Modal(modalEl);
    bsModal.show();
  },

  // ==========================================
  // 8. HOME DASHBOARD (index.html)
  // ==========================================
  initHomePage() {
    // Quick statistics counter animation
    const counters = document.querySelectorAll(".stat-number");
    counters.forEach(counter => {
      const target = +counter.getAttribute("data-target");
      if (!target) return;
      let count = 0;
      const speed = target / 40;
      const updateCount = () => {
        count += speed;
        if (count < target) {
          counter.innerText = Math.ceil(count).toLocaleString();
          requestAnimationFrame(updateCount);
        } else {
          counter.innerText = target.toLocaleString() + (counter.getAttribute("data-suffix") || "");
        }
      };
      updateCount();
    });

    // Handle newsletter / subscribe button in footer or hero
    const newsletterForm = document.getElementById("newsletterForm");
    if (newsletterForm) {
      newsletterForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const input = newsletterForm.querySelector("input[type='email']");
        if (input && input.value) {
          AstroVista.showToast(`Thank you! Subscription confirmed for ${input.value}.`, "success", "bi-envelope-check");
          input.value = "";
        }
      });
    }
  }
};

// Auto-run on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  AstroVista.init();
});
