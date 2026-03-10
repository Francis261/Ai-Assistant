# Package fips140

Source: https://devdocs.io/go/crypto/fips140/index

- import "crypto/fips140"
- Overview
- Index

## Overview

## Index

- func Enabled() bool
- func Enforced() bool
- func Version() string
- func WithoutEnforcement(f func())

### Package files

enforcement.go fips140.go

## func Enabled 1.24

```
func Enabled() bool
```

Enabled reports whether the cryptography libraries are operating in FIPS 140-3 mode.

It can be controlled at runtime using the GODEBUG setting "fips140". If set to "on", FIPS 140-3 mode is enabled. If set to "only", non-approved cryptography functions will additionally return errors or panic.

This can't be changed after the program has started.

## func Enforced 1.26

```
func Enforced() bool
```

Enforced indicates if strict FIPS 140-3 enforcement is enabled. Strict enforcement is enabled when a program is run with GODEBUG=fips140=only and enforcement has not been disabled by a call to WithoutEnforcement.

## func Version 1.26

```
func Version() string
```

Version returns the FIPS 140-3 Go Cryptographic Module version (such as "v1.0.0"), as referenced in the Security Policy for the module, if building against a frozen module with GOFIPS140. Otherwise, it returns "latest". If an alias is in use (such as "inprogress") the actual resolved version is returned.

The returned version may not uniquely identify the frozen module which was used to build the program, if there are multiple copies of the frozen module at the same version. The uniquely identifying version suffix can be found by checking the value of the GOFIPS140 setting in runtime/debug.BuildInfo.Settings.

## func WithoutEnforcement 1.26

```
func WithoutEnforcement(f func())
```

WithoutEnforcement disables strict FIPS 140-3 enforcement while executing f. Calling WithoutEnforcement without strict enforcement enabled (GODEBUG=fips140=only is not set or already inside of a call to WithoutEnforcement) is a no-op.

WithoutEnforcement is inherited by any goroutines spawned while executing f.

As this disables enforcement, it should be applied carefully to tightly scoped functions.

© Google, Inc.Licensed under the Creative Commons Attribution License 3.0.
 http://golang.org/pkg/crypto/fips140/
