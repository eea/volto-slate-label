# volto-slate-label

[![Releases](https://img.shields.io/github/v/release/eea/volto-slate-label)](https://github.com/eea/volto-slate-label/releases)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-slate-label%2Fmaster&subject=master)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-slate-label/job/master/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-slate-label-master&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-slate-label-master)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-slate-label-master&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-slate-label-master)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-slate-label-master&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-slate-label-master)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-slate-label-master&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-slate-label-master)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-slate-label%2Fdevelop&subject=develop)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-slate-label/job/develop/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-slate-label-develop&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-slate-label-develop)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-slate-label-develop&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-slate-label-develop)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-slate-label-develop&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-slate-label-develop)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-slate-label-develop&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-slate-label-develop)


[Volto](https://github.com/plone/volto) add-on. [Label](https://eea.github.io/volto-kitkat-frontend/?path=/story/components-label--default) style for [volto-slate](https://github.com/eea/volto-slate) and tooltips.

## Features

![Label Block](https://raw.githubusercontent.com/eea/volto-slate-label/master/docs/slate-label.png)

## Upgrade

### Upgrading to 0.4.x

This version requires: `@plone/volto >= 16.0.0.alpha.15` (`volto-slate` part of Volto Core).

## Getting started

### Try volto-slate-label with Docker

      git clone https://github.com/eea/volto-slate-label.git
      cd volto-slate-label
      make
      make start

Go to http://localhost:3000

### Add volto-slate-label to your Volto project

1. Make sure you have a [Plone backend](https://plone.org/download) up-and-running at http://localhost:8080/Plone

   ```Bash
   docker compose up backend
   ```

1. Start Volto frontend

* If you already have a volto project, just update `package.json`:

   ```JSON
   "addons": [
       "@eeacms/volto-slate-label"
   ],

   "dependencies": {
       "@eeacms/volto-slate-label": "*"
   }
   ```

* If not, create one:

   ```
   npm install -g yo @plone/generator-volto
   yo @plone/volto my-volto-project --canary --addon @eeacms/volto-slate-label
   cd my-volto-project
   ```

1. Install new add-ons and restart Volto:

   ```
   yarn
   yarn start
   ```

1. Go to http://localhost:3000

1. Happy editing!

## Release

See [RELEASE.md](https://github.com/eea/volto-slate-label/blob/master/RELEASE.md).

## How to contribute

See [DEVELOP.md](https://github.com/eea/volto-slate-label/blob/master/DEVELOP.md).

## Copyright and license

The Initial Owner of the Original Code is European Environment Agency (EEA).
All Rights Reserved.

See [LICENSE.md](https://github.com/eea/volto-slate-label/blob/master/LICENSE.md) for details.

## Funding

[European Environment Agency (EU)](http://eea.europa.eu)
