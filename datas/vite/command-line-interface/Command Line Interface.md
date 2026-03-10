# Command Line Interface

Source: https://devdocs.io/vite/guide/cli

## Dev server

### vite

Start Vite dev server in the current directory. vite dev and vite serve are aliases for vite.

#### Usage

```
vite [root]
```

#### Options

## Build

### vite build

Build for production.

#### Usage

```
vite build [root]
```

#### Options

## Others

### vite optimize

Pre-bundle dependencies.

Deprecated: the pre-bundle process runs automatically and does not need to be called.

#### Usage

```
vite optimize [root]
```

#### Options

### vite preview

Locally preview the production build. Do not use this as a production server as it's not designed for it.

This command starts a server in the build directory (by default dist). Run vite build beforehand to ensure that the build directory is up-to-date. Depending on the project's configured appType, it makes use of certain middleware.

#### Usage

```
vite preview [root]
```

#### Options

© 2019-present, VoidZero Inc. and Vite contributorsLicensed under the MIT License.
 https://vite.dev/guide/cli
