# Unpublishing packages from the registry

Source: https://devdocs.io/npm/unpublishing-packages-from-the-registry

As a package owner or collaborator, if your package has no dependents, you can permanently remove it from the npm registry by using the CLI. You can unpublish within 72 hours of the initial publish; beyond 72 hours, you can still unpublish your package if it meets certain criteria.

These criteria are set to avoid damaging the JavaScript package ecosystem. If you cannot unpublish your package, you can deprecate it instead.

Note: Removing all the collaborators or teams from the package will not unpublish it.

## Unpublishing a package

If you want to completely remove all versions of a package from the registry, you can unpublish it completely. This will delete it from the registry and it will be unable to be installed.

To unpublish a package, you must meet the requirements of the package unpublishing rules.

### Using the website

1. On the npm "Sign In" page, enter your account details and click Sign In.
2. Navigate to the package page for the package you want to unpublish, replacing <your-package-name> with the name of your package: https://www.npmjs.com/package/<your-package-name>.
3. Click Settings.
4. Under "delete package", click Delete package. Note: If you cannot delete the package because it does not meet the unpublishing requirements, then the delete package option will not be available. Instead, you will be prompted to deprecate the package.
5. If you are sure that you want to continue, enter your package name and click Delete package.

Navigate to the package page for the package you want to unpublish, replacing <your-package-name> with the name of your package: https://www.npmjs.com/package/<your-package-name>.

Click Settings.

Under "delete package", click Delete package.

Note: If you cannot delete the package because it does not meet the unpublishing requirements, then the delete package option will not be available. Instead, you will be prompted to deprecate the package.

If you are sure that you want to continue, enter your package name and click Delete package.

### Using the command line

To unpublish an entire package, run the following command, replacing <package-name> with the name of your package:

If you have two-factor authentication enabled for writes, you will need to add a one-time password to the unpublish command, --otp=123456 (where 123456 is the code from your authenticator app).

If you need help unpublishing your package, please contact npm Support. If you are an Enterprise customer, please contact Enterprise Support.

Note: If you unpublish an entire package, you may not publish any new versions of that package until 24 hours have passed.

## Unpublishing a single version of a package

If you want to remove a single version of a package, you can unpublish one version without affecting the others. This will delete only that version from the registry and it will be unable to be installed. This option is only available via the npm CLI.

### Using the command line

To unpublish a single version of a package, run the following command, replacing <package-name> with the name of your package, and <version> with your version number:

## When to unpublish

Unpublishing a package permanently removes the package from the registry so it is no longer available for other users to install. Once a package is unpublished, republishing under the same name is blocked for 24 hours. If you've unpublished a package by mistake, we'd recommend publishing again under a different name, or for unpublished versions, bumping the version number and publishing again.

You might want to unpublish a package because you:

- Published something accidentally.
- Wanted to test npm.
- Published content you didn't intend to be public.
- Want to rename a package. (The only way to rename a package is to re-publish it under a new name)

Note: package-name@version is unique, and cannot be reused by unpublishing and re-publishing it. We recommend publishing a minor version update instead.

## When to deprecate

If you are no longer interested in maintaining a package, but want it to remain available for users to install, or if your package has dependents, we'd recommend deprecating it. To learn about how to deprecate a package, see "Deprecating and undeprecating packages or package versions".

© npm, Inc. and ContributorsLicensed under the npm License.npm is a trademark of npm, Inc.
 https://docs.npmjs.com/unpublishing-packages-from-the-registry
