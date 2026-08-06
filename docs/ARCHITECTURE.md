# So Yum! So Good!
# Repository Architecture

---

# Document Information

**Version:** 1.0

**Status:** Active

**Last Updated:** 2026-08-06

**Owner:** So Yum! So Good!

---

# Purpose

This document defines the official repository structure for the So Yum! So Good! ecosystem.

Its purpose is to keep the project:

- Organized
- Scalable
- Predictable
- Easy to maintain

Every file inside the repository should have one clear and logical location.

---

# 1. Core Principle

Folders are created only when they have a clear responsibility.

A folder should never exist "just in case."

If a folder has no purpose, it should not exist.

---

# 2. Root Structure

```
docs/
public/
src/
```

These are the three primary project directories.

---

# 3. docs/

Contains all project documentation.

```
docs/
├── PROJECT_MANUAL.md
├── ARCHITECTURE.md
├── COMPONENT_RULES.md
├── DESIGN_SYSTEM.md
├── DEVELOPMENT_WORKFLOW.md
└── DECISIONS.md
```

No source code belongs here.

---

# 4. public/

Contains static assets.

Examples:

- Logos
- Images
- Icons
- Favicons
- Videos
- Downloadable files

React components never belong here.

---

# 5. src/

Contains the application source code.

```
src/
├── app/
├── components/
├── config/
├── constants/
├── data/
├── hooks/
├── lib/
├── services/
├── store/
├── styles/
├── types/
└── utils/
```

---

# 6. app/

Purpose

Contains the Next.js App Router.

Responsibilities

- Layouts
- Pages
- Routing
- Metadata

Business logic should not live here.

---

# 7. components/

Purpose

Contains reusable React components.

Structure

```
components/
├── branding/
├── layout/
├── sections/
├── story/
└── ui/
```

Responsibilities

**branding/**

- Brand identity
- Logo
- Brand assets

**layout/**

- Header
- Footer
- Navigation
- Shared layout elements

**sections/**

- Complete page sections
- Hero
- Company
- Journey
- Ecosystem

**story/**

- Storytelling components
- Story chapters
- Timeline components

**ui/**

- Generic reusable UI
- Buttons
- Typography
- Containers
- Sections

---

# 8. config/

Application configuration.

Examples:

- Navigation
- SEO
- Site
- Social

---

# 9. constants/

Application constants.

Examples:

- Theme
- Colors
- Breakpoints

---

# 10. data/

Static content used by the application.

Current structure

```
data/
├── company/
└── story/
```

Future folders may be added only when new content domains are introduced.

No React components belong here.

---

# 11. hooks/

Reusable React hooks.

Only custom hooks belong here.

---

# 12. lib/

Shared helper libraries.

Examples:

- Utilities
- Helpers
- Shared business functions

---

# 13. services/

External integrations.

Examples:

- APIs
- CMS
- Analytics
- Email

---

# 14. store/

Application state management.

Examples:

- Context
- Zustand
- Redux

---

# 15. styles/

Global styling resources.

Examples:

- Typography
- Animations
- Shared styles

Component-specific styling stays with the component whenever possible.

---

# 16. types/

Shared TypeScript types.

Examples:

- Interfaces
- Types
- Enums

---

# 17. utils/

Pure utility functions.

Utilities should:

- Never depend on React
- Be reusable
- Remain framework-independent

---

# 18. Folder Creation Rules

Create a new folder only when:

- It has a clear responsibility.
- Multiple related files belong together.
- Future growth is expected.

Do not create placeholder folders.

---

# 19. File Placement Rules

Every file should have one obvious location.

If two possible locations exist,

improve the architecture instead of duplicating files.

---

# 20. Long-Term Principle

Repository organization should remain stable as the project grows.

Whenever uncertainty exists,

choose the structure that is easier for future developers to understand and maintain.