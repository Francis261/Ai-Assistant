# Package rand

Source: https://devdocs.io/go/crypto/internal/rand/index

- import "crypto/internal/rand"
- Overview
- Index

## Overview

## Index

- Variables
- func CustomReader(r io.Reader) io.Reader
- func IsDefaultReader(r io.Reader) bool
- func SetTestingReader(r io.Reader)

### Package files

rand.go rand_fips140v1.26.go

## Variables

Reader is an io.Reader that calls drbg.Read.

It should be used internally instead of crypto/rand.Reader, because the latter can be set by applications outside of tests. These applications then risk breaking between Go releases, if the way the Reader is used changes.

```
var Reader io.Reader = reader{}
```

## func CustomReader

```
func CustomReader(r io.Reader) io.Reader
```

CustomReader returns Reader or, only if the GODEBUG setting "cryptocustomrand=1" is set, the provided io.Reader.

If returning a non-default Reader, it calls randutil.MaybeReadByte on it.

## func IsDefaultReader

```
func IsDefaultReader(r io.Reader) bool
```

IsDefaultReader reports whether r is the default crypto/rand.Reader.

If true, the Read method of r can be assumed to call drbg.Read.

## func SetTestingReader

```
func SetTestingReader(r io.Reader)
```

SetTestingReader overrides all calls to drbg.Read. The Read method of r must never return an error or return short.

SetTestingReader panics when building against Go Cryptographic Module v1.0.0.

SetTestingReader is pulled by testing/cryptotest.setGlobalRandom via go:linkname.

© Google, Inc.Licensed under the Creative Commons Attribution License 3.0.
 http://golang.org/pkg/crypto/internal/rand/
