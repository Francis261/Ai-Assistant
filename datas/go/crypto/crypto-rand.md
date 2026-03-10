# Package rand

Source: https://devdocs.io/go/crypto/rand/index

- import "crypto/rand"
- Overview
- Index
- Examples

## Overview

Package rand implements a cryptographically secure random number generator.

## Index

- Variables
- func Int(rand io.Reader, max *big.Int) (n *big.Int, err error)
- func Prime(r io.Reader, bits int) (*big.Int, error)
- func Read(b []byte) (n int, err error)
- func Text() string

### Examples

### Package files

rand.go text.go util.go

## Variables

Reader is a global, shared instance of a cryptographically secure random number generator. It is safe for concurrent use.

- On Linux, FreeBSD, Dragonfly, and Solaris, Reader uses getrandom(2).
- On legacy Linux (< 3.17), Reader opens /dev/urandom on first use.
- On macOS, iOS, and OpenBSD Reader, uses arc4random_buf(3).
- On NetBSD, Reader uses the kern.arandom sysctl.
- On Windows, Reader uses the ProcessPrng API.
- On js/wasm, Reader uses the Web Crypto API.
- On wasip1/wasm, Reader uses random_get.

In FIPS 140-3 mode, the output passes through an SP 800-90A Rev. 1 Deterministric Random Bit Generator (DRBG).

```
var Reader io.Reader = rand.Reader
```

## func Int

```
func Int(rand io.Reader, max *big.Int) (n *big.Int, err error)
```

Int returns a uniform random value in [0, max). It panics if max <= 0, and returns an error if rand.Read returns one.

#### Example

ExampleInt prints a single cryptographically secure pseudorandom number between 0 and 99 inclusive.

Code:

```
// Int cannot return an error when using rand.Reader.
a, _ := rand.Int(rand.Reader, big.NewInt(100))
fmt.Println(a.Int64())
```

## func Prime

```
func Prime(r io.Reader, bits int) (*big.Int, error)
```

Prime returns a number of the given bit length that is prime with high probability. Prime will return error for any error returned by rand.Read or if bits < 2.

Since Go 1.26, a secure source of random bytes is always used, and the Reader is ignored unless GODEBUG=cryptocustomrand=1 is set. This setting will be removed in a future Go release. Instead, use testing/cryptotest.SetGlobalRandom.

#### Example

ExamplePrime prints a cryptographically secure pseudorandom 64 bit prime number.

Code:

```
// Prime cannot return an error when using rand.Reader and bits >= 2.
a, _ := rand.Prime(rand.Reader, 64)
fmt.Println(a.Int64())
```

## func Read

```
func Read(b []byte) (n int, err error)
```

Read fills b with cryptographically secure random bytes. It never returns an error, and always fills b entirely.

Read calls io.ReadFull on Reader and crashes the program irrecoverably if an error is returned. The default Reader uses operating system APIs that are documented to never return an error on all but legacy Linux systems.

#### Example

ExampleRead prints a cryptographically secure pseudorandom 32 byte key.

Code:

```
// Note that no error handling is necessary, as Read always succeeds.
key := make([]byte, 32)
rand.Read(key)
// The key can contain any byte value, print the key in hex.
fmt.Printf("% x\n", key)
```

## func Text 1.24

```
func Text() string
```

Text returns a cryptographically random string using the standard RFC 4648 base32 alphabet for use when a secret string, token, password, or other text is needed. The result contains at least 128 bits of randomness, enough to prevent brute force guessing attacks and to make the likelihood of collisions vanishingly small. A future version may return longer texts as needed to maintain those properties.

#### Example

ExampleText prints a random key encoded in base32.

Code:

```
key := rand.Text()
// The key is base32 and safe to display.
fmt.Println(key)
```

© Google, Inc.Licensed under the Creative Commons Attribution License 3.0.
 http://golang.org/pkg/crypto/rand/
