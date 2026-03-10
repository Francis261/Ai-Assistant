# Requiring 2FA for package publishing and settings modification

Source: https://devdocs.io/npm/requiring-2fa-for-package-publishing-and-settings-modification

To protect your packages, as a package publisher, you can require everyone who has write access to a package to have two-factor authentication (2FA) enabled. This will require that users provide 2FA credentials in addition to their login token when they publish the package. For more information, see "Configuring two-factor authentication".

You may also choose to allow publishing with either two-factor authentication or with automation tokens. This lets you configure automation tokens in a CI/CD workflow, but requires two-factor authentication from interactive publishes.

## Configuring two-factor authentication

1. On the npm "Sign In" page, enter your account details and click Sign In.
2. Navigate to the package on which you want to require a second factor to publish or modify settings.
3. Click Settings.
4. Under "Publishing access", select the requirements to publish a package.
  1. Dont require two-factor authentication With this option, a maintainer can publish a package or change the package settings whether they have two-factor authentication enabled or not. This is the least secure setting.
  2. Require two-factor authentication or automation tokens or granular access token With this option, maintainers must have two-factor authentication enabled for their account. If they publish a package interactively, using the npm publish command, they will be required to enter 2FA credentials when they perform the publish. However, maintainers may also create an automation token or a granular access token and use that to publish. A second factor is not required when using a token, making it useful for continuous integration and continuous deployment workflows.
  3. Require two-factor authentication and disallow tokens With this option, a maintainer must have two-factor authentication enabled for their account, and they must publish interactively. Maintainers will be required to enter 2FA credentials when they perform the publish. Automation tokens and granular access tokens cannot be used to publish packages.
5. Click Update Package Settings.

Navigate to the package on which you want to require a second factor to publish or modify settings.

Click Settings.

Under "Publishing access", select the requirements to publish a package.

1. Dont require two-factor authentication With this option, a maintainer can publish a package or change the package settings whether they have two-factor authentication enabled or not. This is the least secure setting.
2. Require two-factor authentication or automation tokens or granular access token With this option, maintainers must have two-factor authentication enabled for their account. If they publish a package interactively, using the npm publish command, they will be required to enter 2FA credentials when they perform the publish. However, maintainers may also create an automation token or a granular access token and use that to publish. A second factor is not required when using a token, making it useful for continuous integration and continuous deployment workflows.
3. Require two-factor authentication and disallow tokens With this option, a maintainer must have two-factor authentication enabled for their account, and they must publish interactively. Maintainers will be required to enter 2FA credentials when they perform the publish. Automation tokens and granular access tokens cannot be used to publish packages.

Dont require two-factor authentication With this option, a maintainer can publish a package or change the package settings whether they have two-factor authentication enabled or not. This is the least secure setting.

Require two-factor authentication or automation tokens or granular access token With this option, maintainers must have two-factor authentication enabled for their account. If they publish a package interactively, using the npm publish command, they will be required to enter 2FA credentials when they perform the publish. However, maintainers may also create an automation token or a granular access token and use that to publish. A second factor is not required when using a token, making it useful for continuous integration and continuous deployment workflows.

Require two-factor authentication and disallow tokens With this option, a maintainer must have two-factor authentication enabled for their account, and they must publish interactively. Maintainers will be required to enter 2FA credentials when they perform the publish. Automation tokens and granular access tokens cannot be used to publish packages.

Click Update Package Settings.

© npm, Inc. and ContributorsLicensed under the npm License.npm is a trademark of npm, Inc.
 https://docs.npmjs.com/requiring-2fa-for-package-publishing-and-settings-modification
