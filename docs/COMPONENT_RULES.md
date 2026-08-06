# So Yum! So Good!
# Component Rules

---

# Document Information

**Version:** 1.0

**Status:** Active

**Last Updated:** 2026-08-06

**Owner:** So Yum! So Good!

---

# Purpose

This document defines how React components are designed, created, organized, and maintained throughout the project.

The objective is to build a clean, scalable, and reusable component architecture.

---

# 1. General Principles

Every component should be:

- Small
- Readable
- Reusable
- Predictable
- Easy to maintain

A component should have one clear responsibility.

---

# 2. Component Categories

The project uses five component categories.

```
components/

branding/
layout/
sections/
story/
ui/
```

---

# 3. branding/

Purpose

Contains brand identity components.

Examples

- Logo
- Brand Marks
- Brand Icons

Do NOT place layout or page content here.

---

# 4. layout/

Purpose

Contains components shared across the website layout.

Examples

- Header
- Footer
- Navigation
- Announcement Bar

These appear across multiple pages.

---

# 5. sections/

Purpose

Contains large page sections.

Examples

- Hero
- Company
- Journey
- Ecosystem
- Contact

Each section represents a major block of a page.

---

# 6. story/

Purpose

Contains storytelling components.

Examples

- StoryChapter
- Timeline
- Journey Blocks

These components present company history and narrative content.

---

# 7. ui/

Purpose

Contains reusable UI building blocks.

Examples

- Button
- Container
- Section
- Typography

UI components should contain little or no business logic.

---

# 8. Component Naming

Use PascalCase.

Correct

```
Hero.tsx
Journey.tsx
Company.tsx
StoryChapter.tsx
```

Incorrect

```
hero.tsx
companysection.tsx
story_component.tsx
```

---

# 9. One Component Per File

Every React component lives in its own file.

Never place multiple unrelated components in a single file.

---

# 10. Component Responsibility

A component should solve one problem.

Avoid components that perform multiple unrelated tasks.

If a component becomes too large, split it into smaller components.

---

# 11. Reusability Rule

Do not create reusable components too early.

Create a reusable component only when:

- it is used in three or more places
- it clearly reduces duplication
- it improves readability

Avoid unnecessary abstraction.

---

# 12. Props

Components should communicate through props.

Avoid hardcoded values when the data belongs elsewhere.

Static content should come from the data layer whenever appropriate.

---

# 13. Styling

All styling uses Tailwind CSS.

Do not mix styling approaches inside the project.

Keep class names readable.

---

# 14. Business Logic

Business logic should remain outside UI components whenever possible.

UI components should focus on presentation.

---

# 15. File Imports

Always use project aliases.

Preferred

```tsx
import Hero from "@/components/sections/Hero";
```

Avoid long relative imports whenever possible.

---

# 16. Comments

Avoid unnecessary comments.

Write clear code instead.

Only comment when the reason behind the implementation is not obvious.

---

# 17. Future Components

New component folders should only be created after an architectural decision.

Do not create folders "just in case."

---

# 18. Long-Term Principle

Every component should make the project easier to extend.

Whenever multiple implementation options exist, choose the one that improves readability and maintainability.