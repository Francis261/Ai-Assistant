# Package hpke

Source: https://devdocs.io/go/crypto/hpke/index

- import "crypto/hpke"
- Overview
- Index
- Examples

## Overview

Package hpke implements Hybrid Public Key Encryption (HPKE) as defined in RFC 9180.

#### Example

Code:

```
// In this example, we use MLKEM768-X25519 as the KEM, HKDF-SHA256 as the
// KDF, and AES-256-GCM as the AEAD to encrypt a single message from a
// sender to a recipient using the one-shot API.

kem, kdf, aead := MLKEM768X25519(), HKDFSHA256(), AES256GCM()

// Recipient side
var (
    recipientPrivateKey PrivateKey
    publicKeyBytes      []byte
)
{
    k, err := kem.GenerateKey()
    if err != nil {
        panic(err)
    }
    recipientPrivateKey = k
    publicKeyBytes = k.PublicKey().Bytes()
}

// Sender side
var ciphertext []byte
{
    publicKey, err := kem.NewPublicKey(publicKeyBytes)
    if err != nil {
        panic(err)
    }

    message := []byte("|-()-|")
    ct, err := Seal(publicKey, kdf, aead, []byte("example"), message)
    if err != nil {
        panic(err)
    }

    ciphertext = ct
}

// Recipient side
{
    plaintext, err := Open(recipientPrivateKey, kdf, aead, []byte("example"), ciphertext)
    if err != nil {
        panic(err)
    }
    fmt.Printf("Decrypted message: %s\n", plaintext)
}
```

Output:

```
Decrypted message: |-()-|
```

## Index

- func Open(k PrivateKey, kdf KDF, aead AEAD, info, ciphertext []byte) ([]byte, error)
- func Seal(pk PublicKey, kdf KDF, aead AEAD, info, plaintext []byte) ([]byte, error)
- type AEAD
- func AES128GCM() AEAD
- func AES256GCM() AEAD
- func ChaCha20Poly1305() AEAD
- func ExportOnly() AEAD
- func NewAEAD(id uint16) (AEAD, error)
- type KDF
- func HKDFSHA256() KDF
- func HKDFSHA384() KDF
- func HKDFSHA512() KDF
- func NewKDF(id uint16) (KDF, error)
- func SHAKE128() KDF
- func SHAKE256() KDF
- type KEM
- func DHKEM(curve ecdh.Curve) KEM
- func MLKEM1024() KEM
- func MLKEM1024P384() KEM
- func MLKEM768() KEM
- func MLKEM768P256() KEM
- func MLKEM768X25519() KEM
- func NewKEM(id uint16) (KEM, error)
- type PrivateKey
- func NewDHKEMPrivateKey(priv ecdh.KeyExchanger) (PrivateKey, error)
- func NewHybridPrivateKey(pq crypto.Decapsulator, t ecdh.KeyExchanger) (PrivateKey, error)
- func NewMLKEMPrivateKey(priv crypto.Decapsulator) (PrivateKey, error)
- type PublicKey
- func NewDHKEMPublicKey(pub *ecdh.PublicKey) (PublicKey, error)
- func NewHybridPublicKey(pq crypto.Encapsulator, t *ecdh.PublicKey) (PublicKey, error)
- func NewMLKEMPublicKey(pub crypto.Encapsulator) (PublicKey, error)
- type Recipient
- func NewRecipient(enc []byte, k PrivateKey, kdf KDF, aead AEAD, info []byte) (*Recipient, error)
- func (r *Recipient) Export(exporterContext string, length int) ([]byte, error)
- func (r *Recipient) Open(aad, ciphertext []byte) ([]byte, error)
- type Sender
- func NewSender(pk PublicKey, kdf KDF, aead AEAD, info []byte) (enc []byte, s *Sender, err error)
- func (s *Sender) Export(exporterContext string, length int) ([]byte, error)
- func (s *Sender) Seal(aad, plaintext []byte) ([]byte, error)

### Examples

### Package files

aead.go aead_fips140v1.26.go hpke.go kdf.go kem.go pq.go

## func Open 1.26

```
func Open(k PrivateKey, kdf KDF, aead AEAD, info, ciphertext []byte) ([]byte, error)
```

Open instantiates a single-use HPKE receiving HPKE context like NewRecipient, and then decrypts the provided ciphertext like Recipient.Open (with no aad). ciphertext must be the concatenation of the encapsulated key and the actual ciphertext.

## func Seal 1.26

```
func Seal(pk PublicKey, kdf KDF, aead AEAD, info, plaintext []byte) ([]byte, error)
```

Seal instantiates a single-use HPKE sending HPKE context like NewSender, and then encrypts the provided plaintext like Sender.Seal (with no aad). Seal returns the concatenation of the encapsulated key and the ciphertext.

## type AEAD 1.26

The AEAD is one of the three components of an HPKE ciphersuite, implementing symmetric encryption.

```
type AEAD interface {
    ID() uint16
    // contains filtered or unexported methods
}
```

### func AES128GCM 1.26

```
func AES128GCM() AEAD
```

AES128GCM returns an AES-128-GCM AEAD implementation.

### func AES256GCM 1.26

```
func AES256GCM() AEAD
```

AES256GCM returns an AES-256-GCM AEAD implementation.

### func ChaCha20Poly1305 1.26

```
func ChaCha20Poly1305() AEAD
```

ChaCha20Poly1305 returns a ChaCha20Poly1305 AEAD implementation.

### func ExportOnly 1.26

```
func ExportOnly() AEAD
```

ExportOnly returns a placeholder AEAD implementation that cannot encrypt or decrypt, but only export secrets with Sender.Export or Recipient.Export.

When this is used, Sender.Seal and Recipient.Open return errors.

### func NewAEAD 1.26

```
func NewAEAD(id uint16) (AEAD, error)
```

NewAEAD returns the AEAD implementation for the given AEAD ID.

Applications are encouraged to use specific implementations like AES128GCM or ChaCha20Poly1305 instead, unless runtime agility is required.

## type KDF 1.26

The KDF is one of the three components of an HPKE ciphersuite, implementing key derivation.

```
type KDF interface {
    ID() uint16
    // contains filtered or unexported methods
}
```

### func HKDFSHA256 1.26

```
func HKDFSHA256() KDF
```

HKDFSHA256 returns an HKDF-SHA256 KDF implementation.

### func HKDFSHA384 1.26

```
func HKDFSHA384() KDF
```

HKDFSHA384 returns an HKDF-SHA384 KDF implementation.

### func HKDFSHA512 1.26

```
func HKDFSHA512() KDF
```

HKDFSHA512 returns an HKDF-SHA512 KDF implementation.

### func NewKDF 1.26

```
func NewKDF(id uint16) (KDF, error)
```

NewKDF returns the KDF implementation for the given KDF ID.

Applications are encouraged to use specific implementations like HKDFSHA256 instead, unless runtime agility is required.

### func SHAKE128 1.26

```
func SHAKE128() KDF
```

SHAKE128 returns a SHAKE128 KDF implementation.

### func SHAKE256 1.26

```
func SHAKE256() KDF
```

SHAKE256 returns a SHAKE256 KDF implementation.

## type KEM 1.26

A KEM is a Key Encapsulation Mechanism, one of the three components of an HPKE ciphersuite.

```
type KEM interface {
    // ID returns the HPKE KEM identifier.
    ID() uint16

    // GenerateKey generates a new key pair.
    GenerateKey() (PrivateKey, error)

    // NewPublicKey deserializes a public key from bytes.
    //
    // It implements DeserializePublicKey, as defined in RFC 9180.
    NewPublicKey([]byte) (PublicKey, error)

    // NewPrivateKey deserializes a private key from bytes.
    //
    // It implements DeserializePrivateKey, as defined in RFC 9180.
    NewPrivateKey([]byte) (PrivateKey, error)

    // DeriveKeyPair derives a key pair from the given input keying material.
    //
    // It implements DeriveKeyPair, as defined in RFC 9180.
    DeriveKeyPair(ikm []byte) (PrivateKey, error)
    // contains filtered or unexported methods
}
```

### func DHKEM 1.26

```
func DHKEM(curve ecdh.Curve) KEM
```

DHKEM returns a KEM implementing one of

- DHKEM(P-256, HKDF-SHA256)
- DHKEM(P-384, HKDF-SHA384)
- DHKEM(P-521, HKDF-SHA512)
- DHKEM(X25519, HKDF-SHA256)

depending on curve.

### func MLKEM1024 1.26

```
func MLKEM1024() KEM
```

MLKEM1024 returns a KEM implementing ML-KEM-1024 from draft-ietf-hpke-pq.

### func MLKEM1024P384 1.26

```
func MLKEM1024P384() KEM
```

MLKEM1024P384 returns a KEM implementing MLKEM1024-P384 from draft-ietf-hpke-pq.

### func MLKEM768 1.26

```
func MLKEM768() KEM
```

MLKEM768 returns a KEM implementing ML-KEM-768 from draft-ietf-hpke-pq.

### func MLKEM768P256 1.26

```
func MLKEM768P256() KEM
```

MLKEM768P256 returns a KEM implementing MLKEM768-P256 from draft-ietf-hpke-pq.

### func MLKEM768X25519 1.26

```
func MLKEM768X25519() KEM
```

MLKEM768X25519 returns a KEM implementing MLKEM768-X25519 (a.k.a. X-Wing) from draft-ietf-hpke-pq.

### func NewKEM 1.26

```
func NewKEM(id uint16) (KEM, error)
```

NewKEM returns the KEM implementation for the given KEM ID.

Applications are encouraged to use specific implementations like DHKEM or MLKEM768X25519 instead, unless runtime agility is required.

## type PrivateKey 1.26

A PrivateKey is an instantiation of a KEM (one of the three components of an HPKE ciphersuite) with a decapsulation key (i.e. the secret key).

A PrivateKey is usually obtained from a method of the corresponding KEM, such as KEM.GenerateKey or KEM.NewPrivateKey.

```
type PrivateKey interface {
    // KEM returns the instantiated KEM.
    KEM() KEM

    // Bytes returns the private key as the output of SerializePrivateKey, as
    // defined in RFC 9180.
    //
    // Note that for X25519 this might not match the input to NewPrivateKey.
    // This is a requirement of RFC 9180, Section 7.1.2.
    Bytes() ([]byte, error)

    // PublicKey returns the corresponding PublicKey.
    PublicKey() PublicKey
    // contains filtered or unexported methods
}
```

### func NewDHKEMPrivateKey 1.26

```
func NewDHKEMPrivateKey(priv ecdh.KeyExchanger) (PrivateKey, error)
```

NewDHKEMPrivateKey returns a PrivateKey implementing

- DHKEM(P-256, HKDF-SHA256)
- DHKEM(P-384, HKDF-SHA384)
- DHKEM(P-521, HKDF-SHA512)
- DHKEM(X25519, HKDF-SHA256)

depending on the underlying curve of priv (ecdh.X25519, ecdh.P256, ecdh.P384, or ecdh.P521).

This function is meant for applications that already have an instantiated crypto/ecdh private key, or another implementation of a ecdh.KeyExchanger (e.g. a hardware key). Otherwise, applications should use the KEM.NewPrivateKey method of DHKEM.

### func NewHybridPrivateKey 1.26

```
func NewHybridPrivateKey(pq crypto.Decapsulator, t ecdh.KeyExchanger) (PrivateKey, error)
```

NewHybridPrivateKey returns a PrivateKey implementing

- MLKEM768-X25519 (a.k.a. X-Wing)
- MLKEM768-P256
- MLKEM1024-P384

from draft-ietf-hpke-pq, depending on the underlying curve of t (ecdh.X25519, ecdh.P256, or ecdh.P384) and the type of pq.Encapsulator() (either *mlkem.EncapsulationKey768 or *mlkem.EncapsulationKey1024).

This function is meant for applications that already have instantiated crypto/ecdh and crypto/mlkem private keys, or another implementation of a ecdh.KeyExchanger and crypto.Decapsulator (e.g. a hardware key). Otherwise, applications should use the KEM.NewPrivateKey method of e.g. MLKEM768X25519.

### func NewMLKEMPrivateKey 1.26

```
func NewMLKEMPrivateKey(priv crypto.Decapsulator) (PrivateKey, error)
```

NewMLKEMPrivateKey returns a KEMPrivateKey implementing

- ML-KEM-768
- ML-KEM-1024

from draft-ietf-hpke-pq, depending on the type of priv.Encapsulator() (either *mlkem.EncapsulationKey768 or *mlkem.EncapsulationKey1024).

This function is meant for applications that already have an instantiated crypto/mlkem private key. Otherwise, applications should use the KEM.NewPrivateKey method of e.g. MLKEM768.

## type PublicKey 1.26

A PublicKey is an instantiation of a KEM (one of the three components of an HPKE ciphersuite) with an encapsulation key (i.e. the public key).

A PublicKey is usually obtained from a method of the corresponding KEM or PrivateKey, such as KEM.NewPublicKey or PrivateKey.PublicKey.

```
type PublicKey interface {
    // KEM returns the instantiated KEM.
    KEM() KEM

    // Bytes returns the public key as the output of SerializePublicKey.
    Bytes() []byte
    // contains filtered or unexported methods
}
```

### func NewDHKEMPublicKey 1.26

```
func NewDHKEMPublicKey(pub *ecdh.PublicKey) (PublicKey, error)
```

NewDHKEMPublicKey returns a PublicKey implementing

- DHKEM(P-256, HKDF-SHA256)
- DHKEM(P-384, HKDF-SHA384)
- DHKEM(P-521, HKDF-SHA512)
- DHKEM(X25519, HKDF-SHA256)

depending on the underlying curve of pub (ecdh.X25519, ecdh.P256, ecdh.P384, or ecdh.P521).

This function is meant for applications that already have an instantiated crypto/ecdh public key. Otherwise, applications should use the KEM.NewPublicKey method of DHKEM.

### func NewHybridPublicKey 1.26

```
func NewHybridPublicKey(pq crypto.Encapsulator, t *ecdh.PublicKey) (PublicKey, error)
```

NewHybridPublicKey returns a PublicKey implementing one of

- MLKEM768-X25519 (a.k.a. X-Wing)
- MLKEM768-P256
- MLKEM1024-P384

from draft-ietf-hpke-pq, depending on the underlying curve of t (ecdh.X25519, ecdh.P256, or ecdh.P384) and the type of pq (either *mlkem.EncapsulationKey768 or *mlkem.EncapsulationKey1024).

This function is meant for applications that already have instantiated crypto/ecdh and crypto/mlkem public keys. Otherwise, applications should use the KEM.NewPublicKey method of e.g. MLKEM768X25519.

### func NewMLKEMPublicKey 1.26

```
func NewMLKEMPublicKey(pub crypto.Encapsulator) (PublicKey, error)
```

NewMLKEMPublicKey returns a KEMPublicKey implementing

- ML-KEM-768
- ML-KEM-1024

from draft-ietf-hpke-pq, depending on the type of pub (*mlkem.EncapsulationKey768 or *mlkem.EncapsulationKey1024).

This function is meant for applications that already have an instantiated crypto/mlkem public key. Otherwise, applications should use the KEM.NewPublicKey method of e.g. MLKEM768.

## type Recipient 1.26

Recipient is a receiving HPKE context. It is instantiated with a specific KEM decapsulation key (i.e. the secret key), and it is stateful, incrementing the nonce counter for each successful Recipient.Open call.

```
type Recipient struct {
    // contains filtered or unexported fields
}
```

### func NewRecipient 1.26

```
func NewRecipient(enc []byte, k PrivateKey, kdf KDF, aead AEAD, info []byte) (*Recipient, error)
```

NewRecipient returns a receiving HPKE context for the provided KEM decapsulation key (i.e. the secret key), and using the ciphersuite defined by the combination of KEM, KDF, and AEAD.

The enc parameter must have been produced by a matching sending HPKE context with the corresponding KEM encapsulation key. The info parameter is additional public information that must match between sender and recipient.

### func (*Recipient) Export 1.26

```
func (r *Recipient) Export(exporterContext string, length int) ([]byte, error)
```

Export produces a secret value derived from the shared key between sender and recipient. length must be at most 65,535.

### func (*Recipient) Open 1.26

```
func (r *Recipient) Open(aad, ciphertext []byte) ([]byte, error)
```

Open decrypts the provided ciphertext, optionally binding to the additional public data aad, or returns an error if decryption fails.

Open uses incrementing counters for each successful call, and must be called in the same order as Seal on the sending side.

## type Sender 1.26

Sender is a sending HPKE context. It is instantiated with a specific KEM encapsulation key (i.e. the public key), and it is stateful, incrementing the nonce counter for each Sender.Seal call.

```
type Sender struct {
    // contains filtered or unexported fields
}
```

### func NewSender 1.26

```
func NewSender(pk PublicKey, kdf KDF, aead AEAD, info []byte) (enc []byte, s *Sender, err error)
```

NewSender returns a sending HPKE context for the provided KEM encapsulation key (i.e. the public key), and using the ciphersuite defined by the combination of KEM, KDF, and AEAD.

The info parameter is additional public information that must match between sender and recipient.

The returned enc ciphertext can be used to instantiate a matching receiving HPKE context with the corresponding KEM decapsulation key.

### func (*Sender) Export 1.26

```
func (s *Sender) Export(exporterContext string, length int) ([]byte, error)
```

Export produces a secret value derived from the shared key between sender and recipient. length must be at most 65,535.

### func (*Sender) Seal 1.26

```
func (s *Sender) Seal(aad, plaintext []byte) ([]byte, error)
```

Seal encrypts the provided plaintext, optionally binding to the additional public data aad.

Seal uses incrementing counters for each call, and Open on the receiving side must be called in the same order as Seal.

© Google, Inc.Licensed under the Creative Commons Attribution License 3.0.
 http://golang.org/pkg/crypto/hpke/
