# Using private packages in a CI/CD workflow

Source: https://devdocs.io/npm/using-private-packages-in-a-ci-cd-workflow

You can use access tokens to test private npm packages with continuous integration (CI) systems, or deploy them using continuous deployment (CD) systems.

## Create a new access token

Create a new access token that will be used only to access npm packages from a CI/CD server.

### Continuous integration

When generating an access token for use in a continuous integration environment, we recommend using a granular access token with limited access to provide greater security.

If you use a legacy token instead, by default, npm token create will generate a token with both read and write permissions. We recommend creating a read-only token:

For more information on creating access tokens, including CIDR-whitelisted tokens, see "Creating an access token".

### Continuous deployment

Since continuous deployment environments usually involve the creation of a deploy artifact, you may wish to create an automation token on the website. This will allow you to publish even if you have two-factor authentication enabled on your account.

### Interactive workflows

If your workflow produces a package, but you publish it manually after validation, then you will want to create a token with read and write permissions, which are granted with the standard token creation command:

### CIDR whitelists

For increased security, you may use a CIDR-whitelisted token that can only be used from a certain IP address range. You can use a CIDR whitelist with a read and publish token or a read-only token:

```
npm token create --cidr=[list]
npm token create --read-only --cidr=[list]
```

Example:

For more information, see "Creating and viewing authentication tokens".

## Set the token as an environment variable on the CI/CD server

Set your token as an environment variable, or a secret, in your CI/CD server.

For example, in GitHub Actions, you would add your token as a secret. Then you can make the secret available to workflows.

If you named the secret NPM_TOKEN, then you would want to create an environment variable named NPM_TOKEN from that secret.

```
steps:
  - run: |
      npm install
  - env:
      NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
```

Consult your CI/CD server's documentation for more details.

## Create and check in a project-specific .npmrc file

Use a project-specific .npmrc file with a variable for your token to securely authenticate your CI/CD server with npm.

1. In the root directory of your project, create a custom .npmrc file with the following contents: //registry.npmjs.org/:_authToken=${NPM_TOKEN} Note: that you are specifying a literal value of ${NPM_TOKEN}. The npm cli will replace this value with the contents of the NPM_TOKEN environment variable. Do not put a token in this file.
2. Check in the .npmrc file.

In the root directory of your project, create a custom .npmrc file with the following contents:

Note: that you are specifying a literal value of ${NPM_TOKEN}. The npm cli will replace this value with the contents of the NPM_TOKEN environment variable. Do not put a token in this file.

Check in the .npmrc file.

## Securing your token

Your token may have permission to read private packages, publish new packages on your behalf, or change user or package settings. Protect your token.

Do not add your token to version control or store it insecurely. Store it in a password manager, your cloud provider's secure storage, or your CI/CD provider's secure storage.

When possible, use granular access tokens with the minimum permissions necessary, and set short expiration dates for your tokens. For more information, see "About access tokens."

© npm, Inc. and ContributorsLicensed under the npm License.npm is a trademark of npm, Inc.
 https://docs.npmjs.com/using-private-packages-in-a-ci-cd-workflow
