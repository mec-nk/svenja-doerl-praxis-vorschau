# Ergotherapie Svenja Dörl & Heike Rummel

Moderner Relaunch von svenjadoerl.de – statische One-Page-Website, kein Build-Schritt,
kein Framework. Reines HTML/CSS/JS, lokal gehostete Schriftarten, kein Tracking.

## Struktur

```
index.html          One-Page mit Anker-Navigation (Ergotherapie, Über uns, Arbeitsbereiche,
                     Diagnose, Therapie, Kooperation, Glossar, Kontakt)
impressum.html       Impressum
datenschutz.html      Datenschutzerklärung
404.html             Fehlerseite
assets/css/style.css  Design-System (Custom Properties, responsive)
assets/js/main.js     Sticky Header, mobiles Menü, Scroll-Reveal
assets/fonts/         Lokal gehostete Fonts (Inter, Fraunces) – DSGVO-konform
assets/img/           Logo, Team-Fotos, Favicons, OG-Bild
```

## Lokal ansehen

Einfach `index.html` per lokalem Server öffnen, z. B.:

```bash
npx serve .
```

## Deployment (Vercel)

Analog zum Schwesterprojekt `wirtschaftsdynamik.de`: Repo an GitHub anbinden, in Vercel
importieren, Domain `svenjadoerl.de` verbinden. `vercel.json` ist vorbereitet
(Clean URLs, Security-Header, Cache-Header für `/assets`).

## Offene Punkte

- [ ] Fotos: Team-Portraits & Logo wurden von der alten Seite übernommen. Das bisherige
      Hero-Stimmungsbild war ein Fotolia/Adobe-Stock-Bild (`fotolia_186999964_l2.jpg`) –
      wurde **nicht** übernommen (unklare Lizenzlage für den Nachbau), stattdessen ein
      eigenes Wellen-/Farbverlauf-Design. Bei Bedarf durch eigenes Praxisfoto ersetzen.
- [ ] Kein Kontaktformular – Terminanfragen laufen bewusst nur telefonisch (Wunsch der
      Praxis). Der Kontakt-Bereich verlinkt stattdessen prominent auf `tel:+4968419939399`.
- [ ] Datenschutzerklärung geht von Vercel-Hosting aus – nach dem tatsächlichen Deployment
      und vor Live-Schaltung durch Rechtsberatung prüfen lassen.
- [ ] Google Maps wird nur verlinkt, nicht eingebettet (Datenschutz). Bei Wunsch kann eine
      datenschutzfreundliche Karten-Einbindung ergänzt werden.
