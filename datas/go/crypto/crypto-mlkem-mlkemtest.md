# Package mlkemtest

Source: https://devdocs.io/go/crypto/mlkem/mlkemtest/index

- import "crypto/mlkem/mlkemtest"
- Overview
- Index

## Overview

Package mlkemtest provides testing functions for the ML-KEM algorithm.

## Index

- func Encapsulate1024(ek *mlkem.EncapsulationKey1024, random []byte) (sharedKey, ciphertext []byte, err error)
- func Encapsulate768(ek *mlkem.EncapsulationKey768, random []byte) (sharedKey, ciphertext []byte, err error)

### Package files

mlkemtest.go

## func Encapsulate1024 1.26

```
func Encapsulate1024(ek *mlkem.EncapsulationKey1024, random []byte) (sharedKey, ciphertext []byte, err error)
```

Encapsulate1024 implements derandomized ML-KEM-1024 encapsulation (ML-KEM.Encaps_internal from FIPS 203) using the provided encapsulation key ek and 32 bytes of randomness.

It must only be used for known-answer tests.

## func Encapsulate768 1.26

```
func Encapsulate768(ek *mlkem.EncapsulationKey768, random []byte) (sharedKey, ciphertext []byte, err error)
```

Encapsulate768 implements derandomized ML-KEM-768 encapsulation (ML-KEM.Encaps_internal from FIPS 203) using the provided encapsulation key ek and 32 bytes of randomness.

It must only be used for known-answer tests.

© Google, Inc.Licensed under the Creative Commons Attribution License 3.0.
 http://golang.org/pkg/crypto/mlkem/mlkemtest/
