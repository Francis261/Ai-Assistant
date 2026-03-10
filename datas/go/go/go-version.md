# Package version

Source: https://devdocs.io/go/go/version/index

- import "go/version"
- Overview
- Index

## Overview

Package version provides operations on Go versions in Go toolchain name syntax: strings like "go1.20", "go1.21.0", "go1.22rc2", and "go1.23.4-custom".

## Index

- func Compare(x, y string) int
- func IsValid(x string) bool
- func Lang(x string) string

### Package files

version.go

## func Compare 1.22

```
func Compare(x, y string) int
```

Compare returns -1, 0, or +1 depending on whether x < y, x == y, or x > y, interpreted as Go versions. The versions x and y must begin with a "go" prefix: "go1.21" not "1.21". Invalid versions, including the empty string, compare less than valid versions and equal to each other. The language version "go1.21" compares less than the release candidate and eventual releases "go1.21rc1" and "go1.21.0".

## func IsValid 1.22

```
func IsValid(x string) bool
```

IsValid reports whether the version x is valid.

## func Lang 1.22

```
func Lang(x string) string
```

Lang returns the Go language version for version x. If x is not a valid version, Lang returns the empty string. For example:

```
Lang("go1.21rc2") = "go1.21"
Lang("go1.21.2") = "go1.21"
Lang("go1.21") = "go1.21"
Lang("go1") = "go1"
Lang("bad") = ""
Lang("1.21") = ""
```

© Google, Inc.Licensed under the Creative Commons Attribution License 3.0.
 http://golang.org/pkg/go/version/
