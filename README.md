# Spatial Orientation (VLR) – Webapp (Auto-Base + GitHub Pages)

Klaar voor GitHub Pages via **GitHub Actions**. De `vite.config.js` stelt de `base` automatisch in op `/<repo-naam>/` tijdens de build.

## Lokaal (optioneel)
```bash
npm install
npm run dev
```

## Deploy naar GitHub Pages (stap-voor-stap)
1. **Upload alle bestanden** van dit project naar je nieuwe GitHub repo (branch: `main`).

2. Ga naar **Settings → Pages** en kies **Source = GitHub Actions**.

3. Push/commit iets naar `main` (de meegeleverde workflow start automatisch).

4. Wacht tot de Action groen is en open je site: `https://<user>.github.io/<repo>/`.


### Waarom niet 'Deploy from a branch'?  
Vite apps moeten **gebouwd** worden naar statische bestanden. De meegeleverde workflow doet dit en publiceert de `dist` naar Pages.
