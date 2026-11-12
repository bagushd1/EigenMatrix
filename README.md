# EigenMatrix

> Standalone 3D geometric network visualizer powered by Three.js, React Three Fiber, and Bun.

EigenMatrix is an interactive, text-free 3D graph visualizer grounded in graph theory and spatial geometry. It represents interrelated systems, core domains, and projects as faceted crystal polyhedra (Platonic solids: icosahedron, dodecahedron, and octahedron) interconnected via quadratic Bézier laser vectors and bounded within an ethereal geodesic polytope.

## Key Features

- **Pure Geometric Aesthetic:** Zero UI chrome or text overlays; communication is handled purely through spatial relationships, orbital rotation, and color-coded topology.
- **Physical Specular Materials:** Powered by `MeshPhysicalMaterial` featuring clearcoat varnish, iridescence, and dynamic colored self-illumination.
- **Interactive Orbit:** Full 3D orbital controls with smooth damping and hover-activated laser paths.
- **Modern Lightweight Stack:** Built with React 19, Three.js (r170), `@react-three/fiber`, and Vite, running natively on **Bun**.

## Tech Stack

- **Runtime & Package Manager:** [Bun](https://bun.sh) (v1.4+)
- **3D Engine:** [Three.js](https://threejs.org/) + [@react-three/fiber](https://r3f.docs.pmnd.rs/) + [@react-three/drei](https://github.com/pmndrs/drei)
- **Framework & Bundler:** React 19 + TypeScript + Vite

## Getting Started

### Prerequisites
Make sure [Bun](https://bun.sh) is installed on your machine.

### Installation & Development
```bash
# Install dependencies
bun install

# Start development server
bun dev

# Build for production
bun run build

# Preview production build locally
bun run preview
```

## Deployment

The project builds to static assets in `dist/` and can be deployed with zero configuration on **Vercel**, **Cloudflare Pages**, or any static host:

1. Initialize repository:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit for EigenMatrix"
   ```
2. Push to GitHub and connect to your hosting provider of choice.
