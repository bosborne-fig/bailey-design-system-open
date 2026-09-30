# Bailey Design System

React + TypeScript component library mapped to the [Bailey Design System Figma file](https://www.figma.com/design/c4VV6jI6HampBlMkytyoBp/Bailey-Design-System) via [Figma Code Connect](https://www.figma.com/code-connect-docs/).

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173 to see the component preview.

## Project structure

```
src/
  components/
    Button/
      Button.tsx           # React component
      Button.figma.tsx     # Code Connect mapping
      index.ts
    Input/
      Input.tsx
      Input.figma.tsx
      index.ts
  App.tsx                  # Preview page
  index.ts                 # Public entry
```

## Adding a new component

1. Create `src/components/MyComponent/MyComponent.tsx` and export from `index.ts`.
2. Build the matching component in your Figma file.
3. Create `src/components/MyComponent/MyComponent.figma.tsx` — copy the pattern from `Button.figma.tsx`. Replace the URL with your Figma component's URL (right-click the component in Figma → "Copy link to selection") and map its properties to the React props.
4. Re-export from `src/index.ts`.

## Publishing Code Connect mappings

Authenticate once, then publish:

```bash
export FIGMA_ACCESS_TOKEN=your_personal_access_token
npm run figma:publish
```

Get a token at Figma → Settings → Personal access tokens (needs the "File content" and "Code Connect write" scopes).

To remove mappings from Figma:

```bash
npm run figma:unpublish
```

## Notes

- The `figma.config.json` at the repo root tells Code Connect where to find `.figma.tsx` files.
- The Figma component URLs in the `.figma.tsx` files are placeholders — replace them with real node URLs once the components exist in Figma.
