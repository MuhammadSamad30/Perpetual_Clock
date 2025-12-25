Development Instructions
Project Stack & Standards

This project must be developed using the following technologies, rules, and best practices:

🧱 Core Framework

Use Next.js (latest stable version)

App Router (/app directory) is mandatory

Use TypeScript for all files (.ts, .tsx)

Prefer Server Components by default

Use Client Components only when browser APIs or interactivity are required

🟦 TypeScript Standards

TypeScript is mandatory — no JavaScript files allowed

🎨 Styling

Use Tailwind CSS for all styling

No inline styles or external CSS frameworks

Maintain consistent spacing, typography, and color scales

Use Tailwind configuration for theme customization

📱 Responsiveness

Fully responsive across:

Mobile

Tablet

Laptop

Desktop

Mobile-first approach required

Use Tailwind responsive utilities (sm, md, lg, xl, 2xl)

Layouts must adapt cleanly without overflow or breaking

🧩 Component Architecture

Build reusable, modular components

Follow single-responsibility principle

Shared components must live in components/

Use typed props with clear interfaces

Example:

interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
}

🔔 Icons

Use React Icons exclusively

No image-based icons unless explicitly required

Import icons selectively to optimize bundle size

Example:

import { FiArrowRight } from "react-icons/fi";

⚡ Performance & Optimization

Use next/image for images

Use next/links

Use next/font for fonts

Prefer server-side data fetching when possible

Use dynamic imports (next/dynamic) when necessary

Avoid unnecessary client-side JavaScript

🧠 Code Quality

Clean, readable, and maintainable code

Consistent naming conventions

Avoid over-engineering

Comment only when logic is complex or non-obvious

♿ Accessibility

Use semantic HTML

Ensure keyboard navigation works correctly

Maintain accessible color contrast

Use aria-* attributes where appropriate

🚫 Restrictions

No JavaScript files (.js, .jsx)

No jQuery

No Bootstrap or other UI frameworks

No inline CSS

No hard-coded responsiveness hacks

✅ Goal

Deliver a modern, scalable, type-safe, responsive, and production-ready web application using:

Next.js App Router

TypeScript

Tailwind CSS

React Icons

with clean architecture, strong typing, high performance, and accessibility in mind.