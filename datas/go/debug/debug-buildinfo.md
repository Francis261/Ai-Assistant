# Package buildinfo

Source: https://devdocs.io/go/debug/buildinfo/index

- import "debug/buildinfo"
- Overview
- Index

## Overview

Package buildinfo provides access to information embedded in a Go binary about how it was built. This includes the Go toolchain version, and the set of modules used (for binaries built in module mode).

Build information is available for the currently running binary in runtime/debug.ReadBuildInfo.

## Index

- type BuildInfo
- func Read(r io.ReaderAt) (*BuildInfo, error)
- func ReadFile(name string) (info *BuildInfo, err error)

### Package files

buildinfo.go

## type BuildInfo 1.18

Type alias for build info. We cannot move the types here, since runtime/debug would need to import this package, which would make it a much larger dependency.

```
type BuildInfo = debug.BuildInfo
```

### func Read 1.18

```
func Read(r io.ReaderAt) (*BuildInfo, error)
```

Read returns build information embedded in a Go binary file accessed through the given ReaderAt. Most information is only available for binaries built with module support.

### func ReadFile 1.18

```
func ReadFile(name string) (info *BuildInfo, err error)
```

ReadFile returns build information embedded in a Go binary file at the given path. Most information is only available for binaries built with module support.

© Google, Inc.Licensed under the Creative Commons Attribution License 3.0.
 http://golang.org/pkg/debug/buildinfo/
