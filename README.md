
# Annoying Pop-up Remover

A set of lightweight userscripts that get rid of annoying pop-ups, adblock walls, banners and other unwanted elements. Just browse without the clutter.

## Supported websites

| Website | Removed elements |
|---------|-----------------|
| [geotjek.dk](https://geotjek.dk/) | Adblock wall |
| [geocheck.org](https://geocheck.org/) | Adblock wall |
| [kaldata.com](https://kaldata.com/) | Adblock wall, extension banner |
| [project-gc.com](https://project-gc.com/) | "Unlock more content" pop-up, adblock wall, sticky bottom ad |
| [geocachen.be](https://geocachen.be/) | Adblock wall |
| [olln.be](https://olln.be/) | "Aller vers olln.be" portal link |
| [anker.com](https://anker.com/) | Newsletter pop-up |
| [visit.brussels](https://visit.brussels/) | "Do you know Brussels?" dialog |
| [quefaire.be](https://quefaire.be/) | Newsletter pop-up, newsletter box, share buttons, Google follow button |
| [wattedoen.be](https://wattedoen.be/) | Newsletter pop-up, newsletter box, share buttons, Google follow button |

*More websites may be added. Check the individual script headers for details.*

## Installation

1. Install a userscript manager:
   - [Tampermonkey](https://www.tampermonkey.net/)
   - [Violentmonkey](https://violentmonkey.github.io/)
2. Open the `.user.js` file.
3. Click **Raw**.
4. Confirm the installation.

Done. No extra setup needed.

## Features

- **Instant hiding** — elements are hidden before they can flash on screen.
- **Automatic removal** — unwanted elements are removed from the page.
- **Dynamic detection** — MutationObserver catches elements added after loading.
- **Scroll restoration** — fixes scrolling when a removed pop-up locks the page.
- **Lightweight** — no external libraries or dependencies.
- **Privacy-friendly** — no tracking or personal data collection.

## How it works

The scripts use CSS to hide unwanted elements, JavaScript to remove them, and MutationObserver to keep an eye on dynamically loaded content.

They only modify page elements. They do not bypass paywalls, login requirements or cookie consent.

## Contributing

Found something annoying that isn't covered yet?

- Open a [GitHub issue](https://github.com/SimeonLePro/adblock-wall-remover/issues).
- Describe the website and the unwanted element.
- Include its HTML using **Inspect → Copy → Copy outerHTML**.

Please remove personal information before sharing.

## Updates

Userscripts can check GitHub for updates automatically.

[Browse the repository](https://github.com/SimeonLePro/adblock-wall-remover)

## License

[MIT License](https://opensource.org/license/mit/)

