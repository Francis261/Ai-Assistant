# Creating and publishing scoped public packages

Source: https://devdocs.io/npm/creating-and-publishing-scoped-public-packages

To share your code publicly in a user or organization namespace, you can publish public user-scoped or organization-scoped packages to the npm registry.

For more information on scopes, see "About scopes".

Note: Before you can publish user-scoped npm packages, you must sign up for an npm user account.

Additionally, to publish organization-scoped packages, you must create an npm user account, then create an npm organization.

## Creating a scoped public package

1. If you are using npmrc to manage accounts on multiple registries, on the command line, switch to the appropriate profile: npmrc <profile-name>
2. On the command line, create a directory for your package: mkdir my-test-package
3. Navigate to the root directory of your package: cd my-test-package
4. If you are using git to manage your package code, in the package root directory, run the following commands, replacing git-remote-url with the git remote URL for your package: 
git init
git remote add origin git://git-remote-url
5. In the package root directory, run the npm init command and pass the scope to the scope flag:
  - For an organization-scoped package, replace my-org with the name of your organization: npm init --scope=@my-org
  - For a user-scoped package, replace my-username with your username: npm init --scope=@my-username
6. Respond to the prompts to generate a package.json file. For help naming your package, see "Package name guidelines".
7. Create a README file that explains what your package code is and how to use it.
8. In your preferred text editor, write the code for your package.

If you are using npmrc to manage accounts on multiple registries, on the command line, switch to the appropriate profile:

On the command line, create a directory for your package:

Navigate to the root directory of your package:

If you are using git to manage your package code, in the package root directory, run the following commands, replacing git-remote-url with the git remote URL for your package:

```
git init
git remote add origin git://git-remote-url
```

In the package root directory, run the npm init command and pass the scope to the scope flag:

- For an organization-scoped package, replace my-org with the name of your organization: npm init --scope=@my-org
- For a user-scoped package, replace my-username with your username: npm init --scope=@my-username

For an organization-scoped package, replace my-org with the name of your organization:

For a user-scoped package, replace my-username with your username:

Respond to the prompts to generate a package.json file. For help naming your package, see "Package name guidelines".

Create a README file that explains what your package code is and how to use it.

In your preferred text editor, write the code for your package.

## Reviewing package contents for sensitive or unnecessary information

Publishing sensitive information to the registry can harm your users, compromise your development infrastructure, be expensive to fix, and put you at risk of legal action. We strongly recommend removing sensitive information, such as private keys, passwords, personally identifiable information (PII), and credit card data before publishing your package to the registry.

For less sensitive information, such as testing data, use a .npmignore or .gitignore file to prevent publishing to the registry. For more information, see this article.

## Testing your package

To reduce the chances of publishing bugs, we recommend testing your package before publishing it to the npm registry. To test your package, run npm install with the full path to your package directory:

## Publishing scoped public packages

By default, scoped packages are published with private visibility. To publish a scoped package with public visibility, use npm publish --access public.

1. On the command line, navigate to the root directory of your package. cd /path/to/package
2. To publish your scoped public package to the npm registry, run: npm publish --access public Note: If you use GitHub Actions to publish your packages, you can generate provenance information for each package you publish. For more information, see "Generating provenance statements."
3. To see your public package page, visit https://npmjs.com/package/\*package-name\*, replacing *package-name* with the name of your package. Public packages will say public below the package name on the npm website.

On the command line, navigate to the root directory of your package.

To publish your scoped public package to the npm registry, run:

Note: If you use GitHub Actions to publish your packages, you can generate provenance information for each package you publish. For more information, see "Generating provenance statements."

To see your public package page, visit https://npmjs.com/package/\*package-name\*, replacing *package-name* with the name of your package. Public packages will say public below the package name on the npm website.

For more information on the publish command, see the CLI documentation.

© npm, Inc. and ContributorsLicensed under the npm License.npm is a trademark of npm, Inc.
 https://docs.npmjs.com/creating-and-publishing-scoped-public-packages
