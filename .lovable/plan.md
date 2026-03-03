

## Adding 3D Motion Animations to Your Portfolio

I'll enhance your portfolio with premium 3D motion effects using **Framer Motion's 3D transforms** and subtle parallax-style animations. No heavy 3D libraries needed — we'll use CSS 3D transforms with Framer Motion for smooth, performant effects.

### What will be added:

1. **3D Tilt Cards** — Skill cards, certification cards, and portfolio cards will tilt in 3D toward the cursor on hover (like Apple product cards)

2. **3D Perspective Hero** — The profile image will have a subtle 3D rotation on scroll, creating depth

3. **Parallax Depth Layers** — Background floating elements will move at different speeds on scroll, creating a layered 3D feel

4. **3D Flip Animation** — Certification cards will have a subtle 3D flip/rotation entrance when they scroll into view

5. **Magnetic Button Effect** — Buttons will subtly follow the cursor when hovering near them

### Technical approach:
- Create a reusable `Tilt3DCard` component using Framer Motion's `useMotionValue` and CSS `perspective`/`rotateX`/`rotateY`
- Add scroll-based parallax using Framer Motion's `useScroll` and `useTransform`
- All animations will be GPU-accelerated and mobile-friendly (3D tilt disabled on touch devices for performance)

### Files to create/modify:
- **Create** `src/components/motion/Tilt3DCard.tsx` — Reusable 3D tilt wrapper
- **Create** `src/components/motion/MagneticButton.tsx` — Magnetic hover button wrapper
- **Update** `src/components/Hero.tsx` — Add parallax depth to profile image
- **Update** `src/components/Skills.tsx` — Wrap cards with 3D tilt
- **Update** `src/components/Certifications.tsx` — Add 3D entrance animations
- **Update** `src/components/Portfolio.tsx` — Add 3D tilt to project cards
- **Update** `src/components/Contact.tsx` — Magnetic effect on submit button

