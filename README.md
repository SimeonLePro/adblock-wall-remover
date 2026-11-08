# Annoying Pop-up Remover

A lightweight userscript that removes annoying pop-ups, newsletter boxes, banners and other unwanted elements from websites.

## Repository

| File | Description |
|------|-------------|
| `popup-remover.user.js` | Main userscript |
| `README.md` | Project documentation |
| `LICENSE` | MIT License |

## Supported websites

| Website | What it removes |
|---------|-----------------|
| kaldata.com | Extension banner |
| project-gc.com | "Unlock more content" pop-up, sticky bottom ad |
| olln.be | "Aller vers olln.be" portal link |
| anker.com | Newsletter sign-up pop-up |
| visit.brussels | "Do you know Brussels?" dialog |
| quefaire.be | Newsletter pop-up and box, share buttons, Google follow button |
| wattedoen.be | Newsletter pop-up and box, share buttons, Google follow button |
| techradar.com | Newsletter box and exit-intent newsletter pop-up |

## Installation

1. Install [Tampermonkey](https://www.tampermonkey.net/) or [Violentmonkey](https://violentmonkey.github.io/).
2. Open `popup-remover.user.js`.
3. Click **Raw**.
4. Confirm the installation.

## Features

- Instant hiding with CSS.
- Automatic removal of unwanted elements.
- Dynamic detection using MutationObserver.
- Scroll restoration when pop-ups block scrolling.
- Site-specific rules that only run on their own website.
- No external dependencies.
- No tracking or personal data collection.

## How it works

The userscript hides unwanted elements with CSS, removes them using JavaScript and monitors the page for newly added elements.

It does not remove adblock walls (use an ad blocker such as uBlock Origin for those), and it does not bypass paywalls, login requirements or cookie consent.

## Contributing

Found a new pop-up or want another website supported?

Open an issue and include the element's HTML.

Please remove personal information before sharing.

## License

MIT License.
