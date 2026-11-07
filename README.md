
# Annoying Pop-up Remover

A lightweight userscript that removes annoying pop-ups, adblock walls, banners and other unwanted elements from websites.

## Repository

| File | Description |
|------|-------------|
| `popup-remover.user.js` | Main userscript |
| `README.md` | Project documentation |
| `LICENSE` | MIT License |

## Supported websites

| Website | What it removes |
|---------|-----------------|
| geotjek.dk | Adblock wall |
| geocheck.org | Adblock wall |
| kaldata.com | Adblock wall, extension banner |
| project-gc.com | "Unlock more content" pop-up, adblock wall, sticky bottom ad |
| geocachen.be | Adblock wall |
| olln.be | "Aller vers olln.be" portal link |
| anker.com | Newsletter sign-up pop-up |
| visit.brussels | "Do you know Brussels?" dialog |
| quefaire.be | Newsletter pop-up and box, share buttons, Google follow button |
| wattedoen.be | Newsletter pop-up and box, share buttons, Google follow button |

## Installation

1. Install [Tampermonkey](https://www.tampermonkey.net/) or [Violentmonkey](https://violentmonkey.github.io/).
2. Open [`popup-remover.user.js`](https://github.com/SimeonLePro/adblock-wall-remover/blob/main/popup-remover.user.js).
3. Click **Raw**.
4. Confirm the installation.

## Features

- Instant hiding with CSS.
- Automatic removal of unwanted elements.
- Dynamic detection using MutationObserver.
- Scroll restoration when pop-ups block scrolling.
- No external dependencies.
- No tracking or personal data collection.

## How it works

The userscript hides unwanted elements with CSS, removes them using JavaScript and monitors the page for newly added elements.

It does not bypass paywalls, login requirements or cookie consent.

## Contributing

Found a new pop-up or want another website supported?

[Open an issue](https://github.com/SimeonLePro/adblock-wall-remover/issues) and include the element's HTML.

Please remove personal information before sharing.

## License

MIT License.
