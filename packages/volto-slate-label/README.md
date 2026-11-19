# @eeacms/volto-slate-label

[![Releases](https://img.shields.io/github/v/release/eea/volto-slate-label)](https://github.com/eea/volto-slate-label/releases)
[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-slate-label%2Fmaster&subject=master)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-slate-label/job/master/display/redirect)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-slate-label&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-slate-label)

[Volto](https://github.com/plone/volto) add-on. [Label](https://eea.github.io/volto-kitkat-frontend/?path=/story/components-label--default) style for [volto-slate](https://github.com/eea/volto-slate) and tooltips.

## Features

![Label Block](https://raw.githubusercontent.com/eea/volto-slate-label/master/docs/slate-label.png)

## Upgrade

### Upgrading to 3.x

> This version requires `Volto 18` or `Volto 19` and Node.js 22.

The slate plugin keeps the same name, the same toolbar button and the same stored fields, so rich text created with 2.x keeps rendering unchanged. The release adds Volto 19 support and moves the repository to the Volto 19 layout, where the published package lives in `packages/volto-slate-label`.

#### Breaking changes

- **Node.js 22 or newer is required** (`engines.node >= 22`), 2.x declared no engine.
- **React 18 is required.** The package declares `react` and `react-dom` as `^18.2.0` peers, 2.x declared no peers.
- **The package no longer ships the Jest setup.** `jest-addon.config.js` and `jest.setup.js` were removed in favour of Vitest, so a Volto 18 project that still runs the Jest harness has to keep its own copy.

### Upgrading to 0.4.x

This version requires: `@plone/volto >= 16.0.0.alpha.15` (`volto-slate` part of Volto Core).

## Requirements

### Backend

- [Plone](https://plone.org/download)
- [plone.restapi](https://pypi.org/project/plone.restapi/)

### Frontend

- Node.js: `>=22.0.0`

## Installation

1. Make sure you have a [Plone backend](https://plone.org/download) up-and-running at http://localhost:8080/Plone

   ```Bash
   docker compose up backend
   ```

1. Start Volto frontend

* If you already have a volto project, just update `package.json`:

   ```JSON
   "dependencies": {
       "@eeacms/volto-slate-label": "*"
   }
   ```

   and `volto.config.js`:

   ```JavaScript
   const addons = ['@eeacms/volto-slate-label'];
   ```

* If not, create one with Cookieplone, as recommended by the official Plone documentation for Volto 18+:

   ```
   uvx cookieplone project
   cd project-title
   ```

1. Install or update dependencies, then start the project:

   ```
   make install
   ```

   For a Cookieplone project, start the backend and frontend in separate terminals:

   ```
   make backend-start
   make frontend-start
   ```

1. Go to http://localhost:3000

1. Happy editing!

## License

See [LICENSE.md](LICENSE.md) for details.

## Funding

[European Environment Agency (EU)](http://eea.europa.eu)
