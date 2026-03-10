# Deprecating and undeprecating packages or package versions

Source: https://devdocs.io/npm/deprecating-and-undeprecating-packages-or-package-versions

If you no longer wish to maintain a package, or if you would like to encourage users to update to a new or different version, you can deprecate it. Deprecating a package or version will print a message to the terminal when a user installs it.

A deprecation warning or message can say anything. You may wish to include a message encouraging users to update to a specific version, or an alternate, supported package.

Note: We strongly recommend deprecating packages or package versions instead of unpublishing them, because unpublishing removes a package from the registry entirely, meaning anyone who relied on it will no longer be able to use it, with no warning.

## Deprecating an entire package

Deprecating an entire package will remove it from search results on the npm website and a deprecation message will also be displayed on the package page.

Deprecating a package is an alternative to deleting a package if your package does not meet the unpublishing requirements.

### Using the website

1. On the npm "Sign In" page, enter your account details and click Sign In.
2. Navigate to the package page for the package you want to deprecate, replacing <your-package-name> with the name of your package: https://www.npmjs.com/package/<your-package-name>.
3. Click Settings.
4. Under "deprecate package", click Deprecate package.
5. If you are sure that you want to continue, enter your package name and click Deprecate package.

Navigate to the package page for the package you want to deprecate, replacing <your-package-name> with the name of your package: https://www.npmjs.com/package/<your-package-name>.

Click Settings.

Under "deprecate package", click Deprecate package.

If you are sure that you want to continue, enter your package name and click Deprecate package.

### Using the command line

To deprecate an entire package, run the following command, replacing <package-name> with the name of your package, and "<message>" with your deprecation message:

If you have enabled two-factor authentication, add a one-time password to the command, --otp=123456 (where 123456 is the code from your authenticator app).

## Deprecating a single version of a package

When you deprecate a version of a package, a red message will be displayed on that version's package page, similar to deprecating an entire package.

### Using the command line

To deprecate a package version, run the following command, replacing <package-name> with the name of your package, <version> with your version number, and "<message>" with your deprecation message:

The CLI will also accept version ranges for <version>.

If you have two-factor auth, add a one-time password to the command, --otp=123456 (where 123456 is the code from your authenticator).

## Undeprecating a package or version

To undeprecate a package, replace "<message>" with "" (an empty string) in one of the above commands.

For example, to undeprecate a package version, run the following command, replacing <package-name> with the name of your package, and <version> with your version number:

If you have two-factor auth, add a one-time password to the command, --otp=123456 (where 123456 is the code from your authenticator).

## Transferring a deprecated package to npm

If you are no longer maintaining a package, but other users depend on it, and you'd like to remove it from your user profile, you can transfer it to the @npm user account, which is owned by the npm registry.

Note: Once you transfer a package to the npm account, you will no longer be able to update it.

To transfer a package to the npm user account, run the following two commands in order, replacing <user> with your npm user name, and <package-name> with the package you want to transfer:

```
npm owner add npm <package-name>
npm owner rm <user> <package-name>
```

If you have two-factor auth, add a one-time password to the command, --otp=123456 (where 123456 is the code from your authenticator).

© npm, Inc. and ContributorsLicensed under the npm License.npm is a trademark of npm, Inc.
 https://docs.npmjs.com/deprecating-and-undeprecating-packages-or-package-versions
