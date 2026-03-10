# Package ed25519

Source: https://devdocs.io/go/crypto/ed25519/index

- import "crypto/ed25519"
- Overview
- Index
- Examples

## Overview

Package ed25519 implements the Ed25519 signature algorithm. See https://ed25519.cr.yp.to/.

These functions are also compatible with the “Ed25519” function defined in RFC 8032. However, unlike RFC 8032's formulation, this package's private key representation includes a public key suffix to make multiple signing operations with the same key more efficient. This package refers to the RFC 8032 private key as the “seed”.

Operations involving private keys are implemented using constant-time algorithms.

#### Example (Ed25519ctx)

Code:

```
pub, priv, err := GenerateKey(nil)
if err != nil {
    log.Fatal(err)
}

msg := []byte("The quick brown fox jumps over the lazy dog")

sig, err := priv.Sign(nil, msg, &Options{
    Context: "Example_ed25519ctx",
})
if err != nil {
    log.Fatal(err)
}

if err := VerifyWithOptions(pub, msg, sig, &Options{
    Context: "Example_ed25519ctx",
}); err != nil {
    log.Fatal("invalid signature")
}
```

## Index

- Constants
- func GenerateKey(random io.Reader) (PublicKey, PrivateKey, error)
- func Sign(privateKey PrivateKey, message []byte) []byte
- func Verify(publicKey PublicKey, message, sig []byte) bool
- func VerifyWithOptions(publicKey PublicKey, message, sig []byte, opts *Options) error
- type Options
- func (o *Options) HashFunc() crypto.Hash
- type PrivateKey
- func NewKeyFromSeed(seed []byte) PrivateKey
- func (priv PrivateKey) Equal(x crypto.PrivateKey) bool
- func (priv PrivateKey) Public() crypto.PublicKey
- func (priv PrivateKey) Seed() []byte
- func (priv PrivateKey) Sign(rand io.Reader, message []byte, opts crypto.SignerOpts) (signature []byte, err error)
- type PublicKey
- func (pub PublicKey) Equal(x crypto.PublicKey) bool

### Examples

### Package files

ed25519.go

## Constants

```
const (
    // PublicKeySize is the size, in bytes, of public keys as used in this package.
    PublicKeySize = 32
    // PrivateKeySize is the size, in bytes, of private keys as used in this package.
    PrivateKeySize = 64
    // SignatureSize is the size, in bytes, of signatures generated and verified by this package.
    SignatureSize = 64
    // SeedSize is the size, in bytes, of private key seeds. These are the private key representations used by RFC 8032.
    SeedSize = 32
)
```

## func GenerateKey 1.13

```
func GenerateKey(random io.Reader) (PublicKey, PrivateKey, error)
```

GenerateKey generates a public/private key pair using entropy from random.

If random is nil, a secure random source is used. (Before Go 1.26, a custom crypto/rand.Reader was used if set by the application. That behavior can be restored with GODEBUG=cryptocustomrand=1. This setting will be removed in a future Go release. Instead, use testing/cryptotest.SetGlobalRandom.)

The output of this function is deterministic, and equivalent to reading SeedSize bytes from random, and passing them to NewKeyFromSeed.

## func Sign 1.13

```
func Sign(privateKey PrivateKey, message []byte) []byte
```

Sign signs the message with privateKey and returns a signature. It will panic if len(privateKey) is not PrivateKeySize.

## func Verify 1.13

```
func Verify(publicKey PublicKey, message, sig []byte) bool
```

Verify reports whether sig is a valid signature of message by publicKey. It will panic if len(publicKey) is not PublicKeySize.

The inputs are not considered confidential, and may leak through timing side channels, or if an attacker has control of part of the inputs.

## func VerifyWithOptions 1.20

```
func VerifyWithOptions(publicKey PublicKey, message, sig []byte, opts *Options) error
```

VerifyWithOptions reports whether sig is a valid signature of message by publicKey. A valid signature is indicated by returning a nil error. It will panic if len(publicKey) is not PublicKeySize.

If opts.Hash is crypto.SHA512, the pre-hashed variant Ed25519ph is used and message is expected to be a SHA-512 hash, otherwise opts.Hash must be crypto.Hash(0) and the message must not be hashed, as Ed25519 performs two passes over messages to be signed.

The inputs are not considered confidential, and may leak through timing side channels, or if an attacker has control of part of the inputs.

## type Options 1.20

Options can be used with PrivateKey.Sign or VerifyWithOptions to select Ed25519 variants.

```
type Options struct {
    // Hash can be zero for regular Ed25519, or crypto.SHA512 for Ed25519ph.
    Hash crypto.Hash

    // Context, if not empty, selects Ed25519ctx or provides the context string
    // for Ed25519ph. It can be at most 255 bytes in length.
    Context string
}
```

### func (*Options) HashFunc 1.20

```
func (o *Options) HashFunc() crypto.Hash
```

HashFunc returns o.Hash.

## type PrivateKey 1.13

PrivateKey is the type of Ed25519 private keys. It implements crypto.Signer.

```
type PrivateKey []byte
```

### func NewKeyFromSeed 1.13

```
func NewKeyFromSeed(seed []byte) PrivateKey
```

NewKeyFromSeed calculates a private key from a seed. It will panic if len(seed) is not SeedSize. This function is provided for interoperability with RFC 8032. RFC 8032's private keys correspond to seeds in this package.

### func (PrivateKey) Equal 1.15

```
func (priv PrivateKey) Equal(x crypto.PrivateKey) bool
```

Equal reports whether priv and x have the same value.

### func (PrivateKey) Public 1.13

```
func (priv PrivateKey) Public() crypto.PublicKey
```

Public returns the PublicKey corresponding to priv.

### func (PrivateKey) Seed 1.13

```
func (priv PrivateKey) Seed() []byte
```

Seed returns the private key seed corresponding to priv. It is provided for interoperability with RFC 8032. RFC 8032's private keys correspond to seeds in this package.

### func (PrivateKey) Sign 1.13

```
func (priv PrivateKey) Sign(rand io.Reader, message []byte, opts crypto.SignerOpts) (signature []byte, err error)
```

Sign signs the given message with priv. rand is ignored and can be nil.

If opts.HashFunc() is crypto.SHA512, the pre-hashed variant Ed25519ph is used and message is expected to be a SHA-512 hash, otherwise opts.HashFunc() must be crypto.Hash(0) and the message must not be hashed, as Ed25519 performs two passes over messages to be signed.

A value of type Options can be used as opts, or crypto.Hash(0) or crypto.SHA512 directly to select plain Ed25519 or Ed25519ph, respectively.

## type PublicKey 1.13

PublicKey is the type of Ed25519 public keys.

```
type PublicKey []byte
```

### func (PublicKey) Equal 1.15

```
func (pub PublicKey) Equal(x crypto.PublicKey) bool
```

Equal reports whether pub and x have the same value.

© Google, Inc.Licensed under the Creative Commons Attribution License 3.0.
 http://golang.org/pkg/crypto/ed25519/
