# hover-projects-ui
 
A portfolio project list UI with a cursor-follow image hover interaction. Each project row reveals a floating image that trails the cursor on hover.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-hover--projects--ui-black?style=for-the-badge)](https://hover-projects-ui.vercel.app)

---


https://github.com/user-attachments/assets/662f4b55-9761-4d8f-a20e-4752683c5fc2


---

## Tech stack
 
| Tool | Version | Purpose |
|------|---------|---------|
| React | 19 | Framework |
| TypeScript | 5.9 | Type safety |
| Vite | 7 | Dev server and bundler |
| Tailwind CSS | 4 | Styling |
| GSAP | 3.15 | Animation |
| Lucide React | 0.562 | Icons |
---
 
## Project structure
 
```
src/
├── components/
│   ├── Header.tsx        # Page title + theme toggle
│   ├── Footer.tsx        # "See more projects" CTA
│   ├── ProjectRows.tsx   # Main list with GSAP hover interaction
│   ├── ThemeToggle.tsx   # Sun/moon toggle button
│   └── useTheme.ts       # Dark/light mode hook with localStorage
├── data/
│   └── sampleData.json   # Project data (title, city, date, imageUrl, alt)
├── App.tsx
├── main.tsx
└── index.css             # Tailwind v4 config + custom container utility
```
 
---
## Adding projects
 
Edit `src/data/sampleData.json`:
 
```json
{
  "id": 6,
  "title": "Your Project",
  "city": "City",
  "date": "2025",
  "imageUrl": "https://your-image-url.com/image.jpg",
  "alt": "Description of the image for accessibility"
}
```
 
The component maps over this array automatically, no other changes needed.
 
---
 
## Getting started
 
```bash
# Requires Node 20.19+ or 22.12+
npm install
npm run dev
```
 
---
