---
name: design-to-frontend
description: Use this skill whenever the user provides a design reference — an HTML file, a screenshot, a Figma export, a mockup image, or any visual reference — and wants it turned into working frontend code (React/TSX, Vue, or similar). This includes requests like "build the frontend for this", "convert this design/screenshot into code", "implement this page", or "make this UI". ALWAYS use this skill before writing any component or page code from a design reference, even if the user doesn't explicitly mention folder structure or planning — the skill enforces a mandatory plan-first step and a consistent pages/components folder architecture. Do not skip straight to code generation when a design input is provided.
---

# Design to Frontend

Converts a provided design (HTML file, screenshot, or mockup) into clean, production-ready
frontend code, following a consistent and dynamic folder architecture — and always shows a
implementation plan for approval BEFORE writing any code.

## Core Rule: Plan Before Code

**Never jump straight to implementation.** Every time a design is provided, follow this order:

1. **Analyze** the provided design input(s)
2. **Present a plan** (pages + components breakdown) as a checklist — no code yet
3. **Wait for user confirmation** or edits to the plan
4. **Only then** scaffold files and implement

If the user has already approved a plan earlier in the conversation and is now asking for
edits/additions to the same project, you can skip back to step 4 — the plan-first rule applies
to new designs or new scopes of work, not to every follow-up tweak.

---

## Step 1: Analyze the Design Input

Depending on what's provided:

- **Screenshot/image** — Inspect it directly (already visible in context, no tool needed unless
  the user wants precise pixel/color extraction, in which case use the computer/view tool).
- **HTML file** — Read the file directly to understand structure, existing classes, and
  inline styles.
- **Figma or design tool link/file** — If a Figma connector is available, use it to pull exact
  design tokens, spacing, and component structure rather than estimating from a screenshot.

While analyzing, identify:

- Distinct **pages/screens** (e.g., landing page, contact page, dashboard, login)
- **Repeating UI patterns** that should become shared components (navbar, footer, card, button
  variants, modal, form fields)
- **Layout structure** (header/sidebar/main/footer regions)
- Any visible **design tokens**: color palette, font choices, spacing rhythm, border radius,
  shadow style

Also consult `/mnt/skills/public/frontend-design/SKILL.md` for styling/aesthetic guidance —
read it in combination with this skill, not instead of it.

---

## Step 2: Present the Implementation Plan

Show the user a concise breakdown **before writing any code**. Format:

```
Based on the design, here's what I'll build:

📄 Pages (src/pages/)
- LandingPage.tsx     — Hero, features, CTA section
- Contact.tsx         — Contact form + map section
- About.tsx           — Team + mission section

🧩 Components (src/components/)
- layout/
  - Navbar.tsx
  - Footer.tsx
- ui/
  - Button.tsx
  - Card.tsx
  - Input.tsx
- sections/
  - HeroSection.tsx
  - FeatureGrid.tsx
  - ContactForm.tsx

Let me know if this matches what you had in mind, or if you'd like to add/remove/rename
anything before I start building.
```

Adjust the categories/names to match the actual design — this is just the format to follow.
Keep it scannable: emoji headers or bold labels, one line per file, short description of what
each contains. Do not add explanation paragraphs around it — the checklist should speak for
itself.

If the design is small (single page, no reusable pattern), the plan can be short — don't
manufacture a components folder if there's genuinely nothing to share. If the design is large,
group pages/components with brief sub-headers to keep the list scannable.

**Wait for the user's go-ahead before proceeding to Step 3.**

---

## Styling Convention: Tailwind CSS (Inline Only)

This project uses **Tailwind CSS**. Styling is always applied via **inline utility classes**
directly in the component's JSX (`className="..."`) — never extracted into separate `.css`,
`.module.css`, or `styled-components` files.

Rules:

- **No separate stylesheets per component.** Do not create `Button.module.css`,
  `Navbar.css`, or similar files alongside components.
- **No `@apply` extraction into custom classes** unless the user explicitly asks for it —
  keep utility classes directly on the elements so the styling stays visible and co-located
  with the markup.
- Global setup stays minimal and lives only in the project's single Tailwind entry file
  (e.g. `index.css` or `globals.css` with the `@tailwind` directives) — this is the only
  CSS file that should exist, and it is not touched per-component.
- For repeated class combinations, prefer extracting a **reusable component**
  (e.g. `<Button>`) over extracting a shared CSS class — composition over CSS abstraction.
- Conditional/variant styling uses conditional class logic inline (e.g. `clsx`/`cn` helper
  if the project already uses one, or plain template strings) rather than separate style
  objects or files.
- Match the design's actual spacing, colors, and typography using Tailwind's utility scale
  (or the project's configured theme tokens in `tailwind.config.js` if custom values exist)
  rather than arbitrary inline `style={{}}` props — use Tailwind classes as the default,
  falling back to arbitrary values (`w-[437px]`) only when the design truly requires a
  non-standard value.

This convention applies during **Step 4 (Implementation)** below — plans in Step 2 don't need
to mention styling files since none will be created.

---

## Step 3: Folder Architecture

Use this structure by default — it's dynamic and scales whether the project has 2 pages or 20:

```
src/
├── pages/                  # One file per route/screen
│   ├── LandingPage.tsx
│   ├── Contact.tsx
│   └── About.tsx
├── components/
│   ├── layout/             # Structural, appears across most pages
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── ui/                 # Small, generic, reusable primitives
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Input.tsx
│   └── sections/           # Larger composed blocks specific to a page's content
│       ├── HeroSection.tsx
│       ├── FeatureGrid.tsx
│       └── ContactForm.tsx
├── hooks/                  # Custom hooks (only create if actually needed)
├── lib/ or utils/          # Helper functions, constants, formatters
├── types/                  # Shared TypeScript types/interfaces
├── assets/                 # Images, icons, fonts referenced by components
└── index.css / globals.css # ONLY css file in the project — @tailwind directives only
```

Note: no `.css` or `.module.css` file is created per component — see the Tailwind styling
convention above. Every `.tsx` file is markup + inline Tailwind classes only.

**Rules for placing a file:**

- If a component appears on **2+ pages** → `components/layout/` or `components/ui/`
  depending on whether it's structural or a small primitive.
- If a component is a **large composed block used on only one page** → `components/sections/`,
  still separated out (keeps `pages/*.tsx` thin and readable), OR co-located in the page file if
  truly trivial and one-off.
- If the user's project already has an existing folder convention (check for an existing
  `src/` directory before assuming) → **follow the existing convention instead of this default**,
  and note the deviation briefly.
- Page files stay **thin**: import and compose section/layout components rather than writing
  all markup inline.

If the project already exists (user says "I already generated the pages, put components too"),
inspect the existing folder first (`view` the directory) and match its existing naming/casing
conventions rather than imposing this template rigidly.

---

## Step 4: Implementation

Once the plan is approved:

1. Check for and read the relevant skill(s):
   - `/mnt/skills/public/frontend-design/SKILL.md` (styling, visual polish, design tokens)
2. Scaffold folders/files in the order: `types/` → `ui/` primitives → `layout/` → `sections/`
   → `pages/` (so each layer's dependencies exist before it's used).
3. Match the design's actual colors, spacing, and typography using Tailwind utility classes
   inlined in JSX — don't default to generic Tailwind defaults if the design specifies a
   distinct palette or font, and don't create any separate stylesheet file for a component.
4. Keep components typed (TypeScript interfaces for props) and functional (hooks, no class
   components) unless the existing project uses a different pattern.
5. After implementation, briefly summarize what was created and where — don't re-explain the
   whole plan again since it was already shown in Step 2.

---

## Notes

- This skill governs the **planning-then-building sequence**, not the visual/styling
  decisions themselves — defer those to `frontend-design`.
- Styling is always Tailwind utility classes inlined in JSX (see the Styling Convention
  section above) — no per-component CSS files, ever, regardless of what the design source
  looks like (even if the provided HTML has a linked `<style>` block or external CSS,
  convert it to inline Tailwind classes rather than porting the CSS file structure over).
- If the user provides multiple designs/screenshots in one go representing multiple pages,
  the Step 2 plan should cover all of them together in one checklist, not one plan per image.
- If scope is ambiguous (e.g., a screenshot shows a page but it's unclear if a mobile version
  is also wanted), ask one clarifying question as part of presenting the plan rather than
  guessing silently.
