# volto-slate-label

[![Releases](https://img.shields.io/github/v/release/eea/volto-slate-label)](https://github.com/eea/volto-slate-label/releases)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-slate-label%2Fmaster&subject=master)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-slate-label/job/master/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-slate-label&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-slate-label)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-slate-label&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-slate-label)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-slate-label&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-slate-label)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-slate-label&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-slate-label)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-slate-label%2Fdevelop&subject=develop)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-slate-label/job/develop/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-slate-label&branch=develop&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-slate-label&branch=develop)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-slate-label&branch=develop&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-slate-label&branch=develop)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-slate-label&branch=develop&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-slate-label&branch=develop)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-slate-label&branch=develop&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-slate-label&branch=develop)


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

`make start` now defaults to Volto 18. To run the same setup against Volto 17, use:

      VOLTO_VERSION=17 make
      VOLTO_VERSION=17 make start

### Add volto-slate-label to your Volto project

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

   For a legacy Volto 17 project, install the package with `yarn` and restart the frontend as usual.

1. Go to http://localhost:3000

1. Happy editing!

## Release

See [RELEASE.md](https://github.com/eea/volto-slate-label/blob/master/RELEASE.md).

## How to contribute

See [DEVELOP.md](https://github.com/eea/volto-slate-label/blob/master/DEVELOP.md).

## Secret Scanning

This repository uses the Betterleaks GitHub Action to scan the current
repository content on every push and pull request. The scan uses the rules in
`.gitleaks.toml` and uploads a `betterleaks-report` artifact when a finding is
detected.

If the optional SMTP secrets are configured, failed scans also send an email to
the last commit committer. The workflow expects these repository or
organization secrets:

- `SMTP_URL`
- `SMTP_PORT` (optional, defaults to `25`)
- `SMTP_EMAIL`
- `SMTP_PASSWORD` (optional if the SMTP server does not require authentication)

Port `465` is sent with direct TLS; other ports use the default SMTP handshake.
The email includes a short finding summary from the redacted Betterleaks report,
including the redacted matched line from each finding.

There are three common outcomes:

1. **Everything is OK.** The `Betterleaks / Scan for secrets` check is green and
   no action is needed. Regular references to runtime values are OK, for example:

   ```js
   const tokenFromCookie = req.universalCookies.get('auth_token');
   ```

2. **A real secret was found.** The check is red and the workflow log asks you to
   download the `betterleaks-report` artifact. Open the artifact from the GitHub
   Actions run and check the reported file, line and rule. Remove the committed
   value, move it to the proper secret store, and rotate it if it was exposed.
   A report entry looks like this:

   ```json
   {
     "RuleID": "secret-literal-assignment",
     "File": "src/config.js",
     "StartLine": 12,
     "Secret": "[REDACTED]"
   }
   ```

3. **The finding is a false positive.** Keep the value only if it is clearly not
   sensitive, such as a test fixture, placeholder, or public example. Add
   `betterleaks:allow` on the same line and include a short explanation in the
   pull request.

   ```js
   const testPassword = 'admin'; //betterleaks:allow
   ```

   ```yaml
   password: "admin" #betterleaks:allow
   ```

Do not add `betterleaks:allow` to real credentials.

## Copyright and license

The Initial Owner of the Original Code is European Environment Agency (EEA).
All Rights Reserved.

See [LICENSE.md](https://github.com/eea/volto-slate-label/blob/master/LICENSE.md) for details.

## Funding

[European Environment Agency (EU)](http://eea.europa.eu)
