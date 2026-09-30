# Forge Ops

A dark-first operations and CRM dashboard template built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS v4**. Clients, team, projects, files, activity, roles, and settings, all wired up with demo data so you can see it working the moment it starts.

**Live demo:** https://YOUR-DEMO-URL.vercel.app

> All names, companies, and numbers in the demo are fictional.

---

## What's included

**Pages**

| Area | Routes |
|---|---|
| Overview | `/` |
| Clients | `/clients`, `/clients/new`, `/clients/[id]` |
| Team | `/team`, `/team/[id]` |
| Projects | `/projects`, `/projects/[id]` |
| Files, Activity, Roles | `/files`, `/activity`, `/roles` |
| Settings | `/settings`, `/settings/profile`, `/settings/company`, `/settings/notifications` |
| Auth screens | `/login`, `/register`, `/forgot-password` |

**Features**

- Light and dark themes with a toggle
- Collapsible sidebar and a mobile navigation drawer
- Command palette (Ctrl/Cmd + K)
- Searchable, filterable client table
- Status badges, stat cards, progress bars
- Accessible UI components built on Radix UI
- Responsive layouts from phone to wide desktop
- Typed demo data in a single file, easy to replace

**Not included (by design)**

- Real authentication. The login, register, and forgot-password screens are UI only.
- A database or API. All data comes from `lib/data/demo.ts`.

You can connect your own auth and backend (for example Auth.js, Clerk, Supabase, or Prisma) without changing the layout or components.

---

## Tech stack

- [Next.js](https://nextjs.org/) (App Router) and React
- TypeScript
- Tailwind CSS v4 and `tw-animate-css`
- Radix UI primitives
- `class-variance-authority`, `clsx`, `tailwind-merge`
- `lucide-react` icons
- `cmdk` command palette
- `zustand` for UI state
- `date-fns` for dates

---

## Requirements

- Node.js 20.9 or newer
- npm (or another package manager)

---

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Open http://localhost:3000.

**Other commands**

```bash
npm run build   # production build
npm run start   # run the production build
npm run lint    # lint the code
```

If the dev server shows stale errors after you move or rename route folders, stop it, delete the `.next` folder, and start it again.

---

## Project structure

```
app/
  layout.tsx              Root layout (fonts, providers)
  globals.css             Theme colors and Tailwind setup
  not-found.tsx           404 page
  error.tsx               Error page
  (auth)/                 Login, register, forgot-password
  (dashboard)/            Everything with the sidebar and top bar
    page.tsx              Overview (/)
    clients/  team/  projects/  files/  activity/  roles/  settings/
components/
  ui/                     Buttons, cards, inputs, tabs, sheet, etc.
  layout/                 Sidebar, top bar, dashboard shell
  shared/                 Page header, status badges, command palette, theme toggle
  brand/                  Logo
  providers.tsx           Theme and tooltip providers
lib/
  data/demo.ts            All demo content
  data/types.ts           Data types
  nav.ts                  Sidebar menu items
  theme.tsx               Theme context
  ui-store.ts             Sidebar collapse state
  utils.ts                cn() class helper and formatters
```

Folders in parentheses, like `(dashboard)`, are route groups. They share a layout but don't appear in the URL.

---

## Customizing

**Change the content.** Edit `lib/data/demo.ts`. Clients, team members, projects, files, and activity all live there.

**Change the brand.**
- Name and tagline: search for "Forge Ops" (sidebar, auth layout, `app/layout.tsx`).
- Logo: `components/brand/logo.tsx` (an inline SVG).
- Page title and description: the `metadata` export in `app/layout.tsx`.

**Change the colors and fonts.** Theme tokens are CSS variables in `app/globals.css`, with separate light and dark values. Fonts are loaded in `app/layout.tsx`.

**Change the navigation.** Edit `lib/nav.ts`.

**Add a page.**
1. Create a folder in `app/(dashboard)/`, for example `invoices/`.
2. Add a `page.tsx` inside it with a default export.
3. Add a link in `lib/nav.ts`.

For a dynamic page, use a folder like `invoices/[id]/page.tsx`.

**Client vs. server components.** Files that use state, effects, or event handlers need `"use client"` as their first line. Everything else can stay a server component.

---

## Connecting real data

The pages read from `lib/data/demo.ts` through small helper functions (for example `clientById`). To use a real backend, replace those helpers with calls to your API or database, and keep the components as they are.

---

## Deploying

The project deploys to [Vercel](https://vercel.com/) with no extra configuration:

1. Push the project to a Git repository.
2. Import it in Vercel.
3. Deploy.

It also runs anywhere that supports Node.js (`npm run build` then `npm run start`).

---

## Support

Questions or problems with setup? Contact: **YOUR-EMAIL@example.com**

---

## License

This product is sold under a commercial license. See `LICENSE.txt` for what you can and can't do with the code. Third-party packages keep their own licenses.
