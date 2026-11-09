import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'archetype-kaizen',
    title: 'ARCHETYPE KAIZEN',
    subtitle: 'Tactile Monolithic Packaging & Rigid Stationery System',
    category: 'packaging',
    categoryLabel: 'Packaging & Art Direction',
    year: '2026',
    isConceptual: true,
    heroImage: '/src/assets/images/brand_identity_packaging_1794223720043.jpg',
    galleryImages: [
      '/src/assets/images/brand_identity_packaging_1794223720043.jpg',
      '/src/assets/images/hero_sculpture_artwork_1794223720531.jpg',
    ],
    clientHypothesis: 'An ultra-luxury architectural fragrance and private atelier concept seeking physical brand materiality with zero plastic and pure tactile paper engineering.',
    challenge: 'How can an artisanal luxury marque convey weight, permanence, and silence without relying on noisy branding or ornamental graphics?',
    solution: 'Engineered a monolithic matte black packaging system featuring deep blind debossing, custom wax sigil, raw volcanic slate display trays, and micro-embossed metallic typography.',
    deliverables: [
      'Rigid Box Structural Engineering',
      'Custom Uncoated Cotton Stock Specification',
      'Blind Deboss Metal Die Tooling',
      'Bespoke Brass Wax Seal Tooling',
      'Editorial Print Collateral Guidelines'
    ],
    colorPalette: [
      { hex: '#121214', name: 'Obsidian Matte', role: 'Primary Container' },
      { hex: '#26262b', name: 'Charcoal Cotton', role: 'Stationery Stock' },
      { hex: '#c5a059', name: 'Aged Brass Foil', role: 'Refined Micro-Accent' },
      { hex: '#d4d4d8', name: 'Stone Gray', role: 'Secondary Typography' }
    ],
    typographySpecs: [
      { role: 'Wordmark / Display', fontFamily: 'Cormorant Garamond', weight: '600 SemiBold', sample: 'ARCHETYPE ATELIER' },
      { role: 'Technical Hierarchy', fontFamily: 'Plus Jakarta Sans', weight: '500 Medium', sample: 'LOT NO. 09-KAIZEN // 100ML' }
    ],
    aspectRatio: '4:3',
    featuredQuote: 'The physical weight of packaging is the first sensory contract between an artisan and a collector.',
    stats: [
      { label: 'Paper Substrate', value: '700 GSM' },
      { label: 'Deboss Depth', value: '1.2 mm' },
      { label: 'Plastic Free', value: '100%' }
    ]
  },
  {
    id: 'chrono-fluidum',
    title: 'CHRONO FLUIDUM',
    subtitle: 'Kinetic Liquid Chrome Sculpture & Generative Spatial Motion',
    category: 'three-d-motion',
    categoryLabel: '3D & Motion',
    year: '2026',
    isConceptual: true,
    heroImage: '/src/assets/images/hero_sculpture_artwork_1794223720531.jpg',
    galleryImages: [
      '/src/assets/images/hero_sculpture_artwork_1794223720531.jpg',
      '/src/assets/images/three_d_motion_render_1794223720534.jpg'
    ],
    clientHypothesis: 'A premier European horology and avant-garde watchmaker exploring the fluid physics of temporal perception for a global flagship installation.',
    challenge: 'Translating non-Newtonian temporal movement into a high-frame-rate 3D visual language that balances industrial metallurgical precision with natural organic grace.',
    solution: 'Designed and simulated continuous Navier-Stokes fluid viscosity meshes with realistic mirror raytracing, chromatic refraction caustics, and sound-synchronized acceleration curves.',
    deliverables: [
      '8K Generative Fluid Particle Simulation',
      'Spatial 3D Installation Sequences',
      'Raytraced Chrome & Obsidian Shaders',
      'Audiovisual Micro-synchronization Map',
      'Interactive WebGL Shaders for Flagship'
    ],
    colorPalette: [
      { hex: '#09090b', name: 'Dark Void', role: 'Atmospheric Canvas' },
      { hex: '#e4e4e7', name: 'Liquid Mercury', role: 'Primary Reflective Surface' },
      { hex: '#27272a', name: 'Smoked Obsidian', role: 'Viscous Core' },
      { hex: '#38bdf8', name: 'Refracted Caustic', role: 'Spectral Glint' }
    ],
    typographySpecs: [
      { role: 'Curated Title', fontFamily: 'Space Grotesk', weight: '700 Bold', sample: 'CHRONO · FLUIDUM' },
      { role: 'Technical Numerals', fontFamily: 'Space Grotesk', weight: '400 Regular', sample: 'Δt = 0.0016s // 120 FPS' }
    ],
    aspectRatio: '16:9',
    featuredQuote: 'Time is neither linear nor static; it behaves like a dense metallurgical fluid caught between momentum and stillness.',
    stats: [
      { label: 'Render Fidelity', value: '8K Native' },
      { label: 'Mesh Resolution', value: '4.8M Polys' },
      { label: 'Frame Fluidity', value: '120 FPS' }
    ]
  },
  {
    id: 'prisma-dynamics',
    title: 'PRISMA DYNAMICS',
    subtitle: 'Polyhedral Dispersion & Geometric Caustic Studies',
    category: 'three-d-motion',
    categoryLabel: '3D & Motion',
    year: '2026',
    isConceptual: true,
    heroImage: '/src/assets/images/three_d_motion_render_1794223720534.jpg',
    galleryImages: [
      '/src/assets/images/three_d_motion_render_1794223720534.jpg',
      '/src/assets/images/web_experience_interface_1794223720162.jpg'
    ],
    clientHypothesis: 'An advanced optics and photonics research venture requiring an artistic visual identity to demystify spectral wave modulation for international collectors.',
    challenge: 'Generating mathematically pure platonic polyhedra whose internal facet angles bend light into vivid, non-synthetic chromatic spectral dispersion.',
    solution: 'Crafted complex glass dielectric shaders featuring Abbe dispersion formulas, interior specular refraction bounces, and floor caustic projection maps.',
    deliverables: [
      'Platonic Polyhedra 3D Motion System',
      'Spectral Caustic Waveform Assets',
      'Interactive Canvas Kinetic Showcase',
      'Brand Mark & Optical Geometry Tokens',
      'Ultra-HD Exhibition Video Loops'
    ],
    colorPalette: [
      { hex: '#050507', name: 'Abyssal Black', role: 'Background Canvas' },
      { hex: '#f43f5e', name: 'Dispersion Crimson', role: 'Spectral Refraction 1' },
      { hex: '#06b6d4', name: 'Refracted Cyan', role: 'Spectral Refraction 2' },
      { hex: '#facc15', name: 'Prism Gold', role: 'Spectral Refraction 3' }
    ],
    typographySpecs: [
      { role: 'Display Monogram', fontFamily: 'Space Grotesk', weight: '600 SemiBold', sample: 'PRISMA // SYSTEM 04' },
      { role: 'Prose', fontFamily: 'Plus Jakarta Sans', weight: '400 Regular', sample: 'Spectroscopic refraction across 12 facets' }
    ],
    aspectRatio: '4:3',
    featuredQuote: 'When transparent matter achieves mathematical perfection, it decomposes pure white light into its celestial constituent wavelengths.',
    stats: [
      { label: 'Polyhedron Facets', value: '20 Icosa' },
      { label: 'Refraction Index', value: '1.5168 η' },
      { label: 'Light Bounces', value: '8 Internal' }
    ]
  },
  {
    id: 'aeterna-digital',
    title: 'AETERNA DIGITAL',
    subtitle: 'Spatial Web Flagship & Micro-Typographic Design System',
    category: 'web-experience',
    categoryLabel: 'Web Experience',
    year: '2026',
    isConceptual: true,
    heroImage: '/src/assets/images/web_experience_interface_1794223720162.jpg',
    galleryImages: [
      '/src/assets/images/web_experience_interface_1794223720162.jpg',
      '/src/assets/images/brand_identity_packaging_1794223720043.jpg'
    ],
    clientHypothesis: 'A contemporary architecture firm seeking a spatial, floating web experience that mirrors the stillness and tactile weight of concrete monoliths.',
    challenge: 'Overcoming the flat, predictable constraints of typical web layouts while preserving instantaneous load times and 60fps gesture navigation.',
    solution: 'Built an elevated spatial interface with frosted glass typography panels, dynamic perspective tilt, and balanced architectural whitespace.',
    deliverables: [
      'Responsive Static Web Flagship',
      'Spatial Perspective Tilt Engine',
      'Micro-Typographic Design Tokens',
      'Global Edge CDN Architecture & Sub-10ms TTFB',
      'Full Keyboard Accessibility Map'
    ],
    colorPalette: [
      { hex: '#0a0d14', name: 'Night Glass', role: 'Surface Background' },
      { hex: '#1e293b', name: 'Slate Translucent', role: 'Frosted Panels' },
      { hex: '#38bdf8', name: 'Electric Cyan', role: 'Active State Anchor' },
      { hex: '#f8fafc', name: 'Pure Titanium', role: 'Display Typography' }
    ],
    typographySpecs: [
      { role: 'Architectural Headline', fontFamily: 'Cormorant Garamond', weight: '600 SemiBold', sample: 'SHAPING THE FUTURE' },
      { role: 'Interface Labels', fontFamily: 'Plus Jakarta Sans', weight: '500 Medium', sample: 'VIEW ARCHIVES' }
    ],
    aspectRatio: '4:3',
    featuredQuote: 'The best digital interfaces do not demand attention; they provide a calm architectural space where ideas can be encountered clearly.',
    stats: [
      { label: 'Lighthouse Score', value: '100 / 100' },
      { label: 'First Contentful Paint', value: '0.4s' },
      { label: 'Runtime Overhead', value: '0KB Backend' }
    ]
  },
  {
    id: 'monolith-identity',
    title: 'MONOLITH ACOUSTICS',
    subtitle: 'Minimalist Sound Identity & Sculptural Brand Language',
    category: 'brand-identity',
    categoryLabel: 'Brand Identity',
    year: '2026',
    isConceptual: true,
    heroImage: '/src/assets/images/hero_sculpture_artwork_1794223720531.jpg',
    galleryImages: [
      '/src/assets/images/hero_sculpture_artwork_1794223720531.jpg',
      '/src/assets/images/brand_identity_packaging_1794223720043.jpg'
    ],
    clientHypothesis: 'An ultra-high-fidelity acoustic transducer research lab needing a brand identity that reflects silence and acoustic dampening.',
    challenge: 'Creating a visual identity for an intangible sonic medium that speaks to both audiophiles and minimalist interior architects.',
    solution: 'Conceived a stark typographic identity utilizing negative space to represent frequency silence, accompanied by sculpted anechoic chamber graphics.',
    deliverables: [
      'Comprehensive Brand Style Guide',
      'Bespoke Acoustic Wordmark Suite',
      'Subtractive Monogram Geometry',
      'Hardware Laser Etching Spec',
      'Sonic Signature Audio Logo'
    ],
    colorPalette: [
      { hex: '#0c0c0e', name: 'Anechoic Black', role: 'Primary Canvas' },
      { hex: '#27272a', name: 'Baffle Gray', role: 'Structural Lines' },
      { hex: '#fafafa', name: 'Sonic Pure White', role: 'Wordmark' },
      { hex: '#f59e0b', name: 'Resonance Amber', role: 'Acoustic Focal' }
    ],
    typographySpecs: [
      { role: 'Brand Wordmark', fontFamily: 'Space Grotesk', weight: '700 Bold', sample: 'MONOLITH // 0Hz' },
      { role: 'Body System', fontFamily: 'Plus Jakarta Sans', weight: '400 Regular', sample: 'Precision acoustic engineering' }
    ],
    aspectRatio: '16:9',
    featuredQuote: 'True acoustic fidelity is not about adding frequencies; it is the discipline of eliminating distortion until only pure sound remains.',
    stats: [
      { label: 'Acoustic Silence', value: '-120 dB' },
      { label: 'Grid Geometry', value: '1.618 Ratio' },
      { label: 'Logo Variations', value: '12 Systems' }
    ]
  },
  {
    id: 'aurora-botanica',
    title: 'AURORA BOTANICA',
    subtitle: 'Bio-Cellular Packaging & Sustainable Botanical Art Direction',
    category: 'packaging',
    categoryLabel: 'Packaging & Art Direction',
    year: '2026',
    isConceptual: true,
    heroImage: '/src/assets/images/brand_identity_packaging_1794223720043.jpg',
    galleryImages: [
      '/src/assets/images/brand_identity_packaging_1794223720043.jpg',
      '/src/assets/images/web_experience_interface_1794223720162.jpg'
    ],
    clientHypothesis: 'A conceptual Nordic bio-cellular skincare research collective requiring carbon-negative packaging crafted from mycelium and algae ink.',
    challenge: 'Balancing raw organic compostable substrates with the crisp luxury expectations of medical-grade dermatological formulation.',
    solution: 'Engineered molded agricultural byproduct containers with tactile blind debossed typography, natural mineral pigments, and tamper-evident linen ribbons.',
    deliverables: [
      'Mycelium Mold CAD Architecture',
      'Algae Ink Formulation Spec',
      'Zero-Glue Origami Folding Pattern',
      'Dermatological Container Suite',
      'Visual Art Direction & Lookbook'
    ],
    colorPalette: [
      { hex: '#111411', name: 'Forest Obsidian', role: 'Primary Container' },
      { hex: '#222923', name: 'Lichen Moss', role: 'Substrate Surface' },
      { hex: '#86efac', name: 'Chlorophyll Mint', role: 'Bio Accent' },
      { hex: '#e2e8f0', name: 'Alpine Frost', role: 'Legibility Copy' }
    ],
    typographySpecs: [
      { role: 'Monograph Title', fontFamily: 'Cormorant Garamond', weight: '600 SemiBold', sample: 'AURORA BOTANICA' },
      { role: 'Formulation Tag', fontFamily: 'Plus Jakarta Sans', weight: '500 Medium', sample: 'PEPTIDE COMPLEX · BATCH 04' }
    ],
    aspectRatio: '4:3',
    featuredQuote: 'Luxury and circular ecology are not opposing forces; true prestige lies in leaving no toxic trace upon the earth.',
    stats: [
      { label: 'Compostability', value: '45 Days' },
      { label: 'Recycled Fiber', value: '100%' },
      { label: 'Synthetic Glue', value: '0%' }
    ]
  }
];

export const CAPABILITIES = [
  {
    id: 'brand-identity',
    title: 'Brand Identity & Systematic Typography',
    description: 'Distinctive brand foundations built with rigorous typographic proportion, bespoke logotypes, comprehensive design manuals, and timeless physical-digital symbiosis.',
    deliverables: [
      'Comprehensive Brand Guidelines',
      'Custom Wordmarks & Insignias',
      'Typographic Scales & Pairings',
      'Color Semantics & Material Finishes',
      'Digital & Physical Brand Collateral'
    ],
    turnaround: '3–5 Weeks'
  },
  {
    id: 'three-d-motion',
    title: '3D Artwork & Kinetic Motion Direction',
    description: 'High-frame-rate spatial motion, Navier-Stokes fluid simulations, refractive glass optics, and cinematic visual loops engineered to mesmerize and communicate value.',
    deliverables: [
      'Photorealistic 3D Product Renders',
      'Generative Motion Graphic Loops',
      'Fluid & Particle Physics Simulations',
      'Dynamic Event & Keynote Visuals',
      'Real-Time WebGL & Three.js Assets'
    ],
    turnaround: '2–4 Weeks'
  },
  {
    id: 'web-experience',
    title: 'High-Performance Web & Digital Experiences',
    description: 'Production-grade static web flagships engineered for global edge networks. Built with zero backend bloat, instantaneous loading, sub-16ms transitions, and pristine accessibility.',
    deliverables: [
      'Tailored Static Web Architecture',
      'Micro-Interactions & Fluid Motion',
      'Full Responsive Viewport Adaptation',
      'Edge CDN Performance Optimization',
      'Zero-Maintenance Serverless Build'
    ],
    turnaround: '3–6 Weeks'
  },
  {
    id: 'packaging-art',
    title: 'Packaging & Tactile Art Direction',
    description: 'Tangible brand experiences celebrating physical weight: structural rigid boxes, blind debossing, custom stock curation, and uncompromising sustainable craftsmanship.',
    deliverables: [
      'Structural Box CAD & Die-lines',
      'Substrate & Cotton Stock Sourcing',
      'Blind Deboss & Foil Tooling Specs',
      'Custom Unboxing Choreography',
      'High-Fidelity Studio Mockups'
    ],
    turnaround: '2–5 Weeks'
  }
];
