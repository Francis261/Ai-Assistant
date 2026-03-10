# Package mlkem

Source: https://devdocs.io/go/crypto/mlkem/index

- import "crypto/mlkem"
- Overview
- Index
- Examples
- Subdirectories

## Overview

Package mlkem implements the quantum-resistant key encapsulation method ML-KEM (formerly known as Kyber), as specified in NIST FIPS 203.

Most applications should use the ML-KEM-768 parameter set, as implemented by DecapsulationKey768 and EncapsulationKey768.

#### Example

Code:

```
package mlkem_test

import (
    "crypto/mlkem"
    "log"
)

func Example() {
    // Alice generates a new key pair and sends the encapsulation key to Bob.
    dk, err := mlkem.GenerateKey768()
    if err != nil {
        log.Fatal(err)
    }
    encapsulationKey := dk.EncapsulationKey().Bytes()

    // Bob uses the encapsulation key to encapsulate a shared secret, and sends
    // back the ciphertext to Alice.
    ciphertext := Bob(encapsulationKey)

    // Alice decapsulates the shared secret from the ciphertext.
    sharedSecret, err := dk.Decapsulate(ciphertext)
    if err != nil {
        log.Fatal(err)
    }

    // Alice and Bob now share a secret.
    _ = sharedSecret
}

func Bob(encapsulationKey []byte) (ciphertext []byte) {
    // Bob encapsulates a shared secret using the encapsulation key.
    ek, err := mlkem.NewEncapsulationKey768(encapsulationKey)
    if err != nil {
        log.Fatal(err)
    }
    sharedSecret, ciphertext := ek.Encapsulate()

    // Alice and Bob now share a secret.
    _ = sharedSecret

    // Bob sends the ciphertext to Alice.
    return ciphertext
}
```

## Index

- Constants
- type DecapsulationKey1024
- func GenerateKey1024() (*DecapsulationKey1024, error)
- func NewDecapsulationKey1024(seed []byte) (*DecapsulationKey1024, error)
- func (dk *DecapsulationKey1024) Bytes() []byte
- func (dk *DecapsulationKey1024) Decapsulate(ciphertext []byte) (sharedKey []byte, err error)
- func (dk *DecapsulationKey1024) EncapsulationKey() *EncapsulationKey1024
- func (dk *DecapsulationKey1024) Encapsulator() crypto.Encapsulator
- type DecapsulationKey768
- func GenerateKey768() (*DecapsulationKey768, error)
- func NewDecapsulationKey768(seed []byte) (*DecapsulationKey768, error)
- func (dk *DecapsulationKey768) Bytes() []byte
- func (dk *DecapsulationKey768) Decapsulate(ciphertext []byte) (sharedKey []byte, err error)
- func (dk *DecapsulationKey768) EncapsulationKey() *EncapsulationKey768
- func (dk *DecapsulationKey768) Encapsulator() crypto.Encapsulator
- type EncapsulationKey1024
- func NewEncapsulationKey1024(encapsulationKey []byte) (*EncapsulationKey1024, error)
- func (ek *EncapsulationKey1024) Bytes() []byte
- func (ek *EncapsulationKey1024) Encapsulate() (sharedKey, ciphertext []byte)
- type EncapsulationKey768
- func NewEncapsulationKey768(encapsulationKey []byte) (*EncapsulationKey768, error)
- func (ek *EncapsulationKey768) Bytes() []byte
- func (ek *EncapsulationKey768) Encapsulate() (sharedKey, ciphertext []byte)

### Examples

### Package files

mlkem.go

## Constants

```
const (
    // SharedKeySize is the size of a shared key produced by ML-KEM.
    SharedKeySize = 32

    // SeedSize is the size of a seed used to generate a decapsulation key.
    SeedSize = 64

    // CiphertextSize768 is the size of a ciphertext produced by ML-KEM-768.
    CiphertextSize768 = 1088

    // EncapsulationKeySize768 is the size of an ML-KEM-768 encapsulation key.
    EncapsulationKeySize768 = 1184

    // CiphertextSize1024 is the size of a ciphertext produced by ML-KEM-1024.
    CiphertextSize1024 = 1568

    // EncapsulationKeySize1024 is the size of an ML-KEM-1024 encapsulation key.
    EncapsulationKeySize1024 = 1568
)
```

## type DecapsulationKey1024 1.24

DecapsulationKey1024 is the secret key used to decapsulate a shared key from a ciphertext. It includes various precomputed values.

```
type DecapsulationKey1024 struct {
    // contains filtered or unexported fields
}
```

### func GenerateKey1024 1.24

```
func GenerateKey1024() (*DecapsulationKey1024, error)
```

GenerateKey1024 generates a new decapsulation key, drawing random bytes from a secure source. The decapsulation key must be kept secret.

### func NewDecapsulationKey1024 1.24

```
func NewDecapsulationKey1024(seed []byte) (*DecapsulationKey1024, error)
```

NewDecapsulationKey1024 expands a decapsulation key from a 64-byte seed in the "d || z" form. The seed must be uniformly random.

### func (*DecapsulationKey1024) Bytes 1.24

```
func (dk *DecapsulationKey1024) Bytes() []byte
```

Bytes returns the decapsulation key as a 64-byte seed in the "d || z" form.

The decapsulation key must be kept secret.

### func (*DecapsulationKey1024) Decapsulate 1.24

```
func (dk *DecapsulationKey1024) Decapsulate(ciphertext []byte) (sharedKey []byte, err error)
```

Decapsulate generates a shared key from a ciphertext and a decapsulation key. If the ciphertext is not valid, Decapsulate returns an error.

The shared key must be kept secret.

### func (*DecapsulationKey1024) EncapsulationKey 1.24

```
func (dk *DecapsulationKey1024) EncapsulationKey() *EncapsulationKey1024
```

EncapsulationKey returns the public encapsulation key necessary to produce ciphertexts.

### func (*DecapsulationKey1024) Encapsulator 1.26

```
func (dk *DecapsulationKey1024) Encapsulator() crypto.Encapsulator
```

Encapsulator returns the encapsulation key, like DecapsulationKey1024.EncapsulationKey.

It implements crypto.Decapsulator.

## type DecapsulationKey768 1.24

DecapsulationKey768 is the secret key used to decapsulate a shared key from a ciphertext. It includes various precomputed values.

```
type DecapsulationKey768 struct {
    // contains filtered or unexported fields
}
```

### func GenerateKey768 1.24

```
func GenerateKey768() (*DecapsulationKey768, error)
```

GenerateKey768 generates a new decapsulation key, drawing random bytes from a secure source. The decapsulation key must be kept secret.

### func NewDecapsulationKey768 1.24

```
func NewDecapsulationKey768(seed []byte) (*DecapsulationKey768, error)
```

NewDecapsulationKey768 expands a decapsulation key from a 64-byte seed in the "d || z" form. The seed must be uniformly random.

### func (*DecapsulationKey768) Bytes 1.24

```
func (dk *DecapsulationKey768) Bytes() []byte
```

Bytes returns the decapsulation key as a 64-byte seed in the "d || z" form.

The decapsulation key must be kept secret.

### func (*DecapsulationKey768) Decapsulate 1.24

```
func (dk *DecapsulationKey768) Decapsulate(ciphertext []byte) (sharedKey []byte, err error)
```

Decapsulate generates a shared key from a ciphertext and a decapsulation key. If the ciphertext is not valid, Decapsulate returns an error.

The shared key must be kept secret.

### func (*DecapsulationKey768) EncapsulationKey 1.24

```
func (dk *DecapsulationKey768) EncapsulationKey() *EncapsulationKey768
```

EncapsulationKey returns the public encapsulation key necessary to produce ciphertexts.

### func (*DecapsulationKey768) Encapsulator 1.26

```
func (dk *DecapsulationKey768) Encapsulator() crypto.Encapsulator
```

Encapsulator returns the encapsulation key, like DecapsulationKey768.EncapsulationKey.

It implements crypto.Decapsulator.

## type EncapsulationKey1024 1.24

An EncapsulationKey1024 is the public key used to produce ciphertexts to be decapsulated by the corresponding DecapsulationKey1024.

```
type EncapsulationKey1024 struct {
    // contains filtered or unexported fields
}
```

### func NewEncapsulationKey1024 1.24

```
func NewEncapsulationKey1024(encapsulationKey []byte) (*EncapsulationKey1024, error)
```

NewEncapsulationKey1024 parses an encapsulation key from its encoded form. If the encapsulation key is not valid, NewEncapsulationKey1024 returns an error.

### func (*EncapsulationKey1024) Bytes 1.24

```
func (ek *EncapsulationKey1024) Bytes() []byte
```

Bytes returns the encapsulation key as a byte slice.

### func (*EncapsulationKey1024) Encapsulate 1.24

```
func (ek *EncapsulationKey1024) Encapsulate() (sharedKey, ciphertext []byte)
```

Encapsulate generates a shared key and an associated ciphertext from an encapsulation key, drawing random bytes from a secure source.

The shared key must be kept secret.

For testing, derandomized encapsulation is provided by the crypto/mlkem/mlkemtest package.

## type EncapsulationKey768 1.24

An EncapsulationKey768 is the public key used to produce ciphertexts to be decapsulated by the corresponding DecapsulationKey768.

```
type EncapsulationKey768 struct {
    // contains filtered or unexported fields
}
```

### func NewEncapsulationKey768 1.24

```
func NewEncapsulationKey768(encapsulationKey []byte) (*EncapsulationKey768, error)
```

NewEncapsulationKey768 parses an encapsulation key from its encoded form. If the encapsulation key is not valid, NewEncapsulationKey768 returns an error.

### func (*EncapsulationKey768) Bytes 1.24

```
func (ek *EncapsulationKey768) Bytes() []byte
```

Bytes returns the encapsulation key as a byte slice.

### func (*EncapsulationKey768) Encapsulate 1.24

```
func (ek *EncapsulationKey768) Encapsulate() (sharedKey, ciphertext []byte)
```

Encapsulate generates a shared key and an associated ciphertext from an encapsulation key, drawing random bytes from a secure source.

The shared key must be kept secret.

For testing, derandomized encapsulation is provided by the crypto/mlkem/mlkemtest package.

## Subdirectories

© Google, Inc.Licensed under the Creative Commons Attribution License 3.0.
 http://golang.org/pkg/crypto/mlkem/
