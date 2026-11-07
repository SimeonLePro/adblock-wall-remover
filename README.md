# Annoying Pop-up Remover

A collection of userscripts that remove adblock walls, banners and ads from many websites, so pages stay readable.

## Supported sites

| Site | What it removes |
|------|-----------------|
| geotjek.dk | Adblock wall |
| geocheck.org | Adblock wall |
| kaldata.com | Adblock wall, extension banner |
| project-gc.com | "Unlock more content" pop-up, adblock wall, sticky bottom ad |
| geocachen.be | Adblock wall |
| olln.be | "Aller vers olln.be" portal link |

*This list grows over time. See each script's header for the exact sites it matches.*

## Installation

1. Install a userscript manager such as [Tampermonkey](https://www.tampermonkey.net/) or [Violentmonkey](https://violentmonkey.github.io/).
2. Open the script file you want in this repo, click **Raw**, and confirm the installation.

## How the scripts work

- Hide the unwanted element with CSS right away so it never flashes on screen.
- Remove the element and watch the page in case it is added again.
- Restore page scrolling only if a pop-up that locked it was removed.

The scripts only hide page elements. They don't accept or refuse cookies, and they don't bypass paywalls or log-in requirements.

## Contributing

If a pop-up comes back after a site update, or you want a new site added, open an issue and include the element's HTML (right-click it, choose **Inspect**, then **Copy → Copy outerHTML**). Please remove any personal details, such as names or email addresses, before pasting.

## License

MIT
