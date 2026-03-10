# npm-deprecate

Source: https://devdocs.io/npm/cli/v10/commands/npm-deprecate

### Synopsis

```
npm deprecate <package-spec> <message>
```

Note: This command is unaware of workspaces.

### Description

This command will update the npm registry entry for a package, providing a deprecation warning to all who attempt to install it.

It works on version ranges as well as specific versions, so you can do something like this:

```
npm deprecate my-thing@"< 0.2.3" "critical bug fixed in v0.2.3"
```

SemVer ranges passed to this command are interpreted such that they do include prerelease versions. For example:

```
npm deprecate my-thing@1.x "1.x is no longer supported"
```

In this case, a version my-thing@1.0.0-beta.0 will also be deprecated.

You must be the package owner to deprecate something. See the owner and adduser help topics.

To un-deprecate a package, specify an empty string ("") for the message argument. Note that you must use double quotes with no space between them to format an empty string.

### Configuration

#### registry

- Default: "https://registry.npmjs.org/"
- Type: URL

The base URL of the npm registry.

#### otp

- Default: null
- Type: null or String

This is a one-time password from a two-factor authenticator. It's needed when publishing or changing package permissions with npm access.

If not set, and a registry response fails with a challenge for a one-time password, npm will prompt on the command line for one.

### See Also

- package spec
- npm publish
- npm registry
- npm owner
- npm adduser

© npm, Inc. and ContributorsLicensed under the npm License.npm is a trademark of npm, Inc.
 https://docs.npmjs.com/cli/v10/commands/npm-deprecate
