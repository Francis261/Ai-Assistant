# Package sha256

Source: https://devdocs.io/go/crypto/sha256/index

- import "crypto/sha256"
- Overview
- Index
- Examples

## Overview

Package sha256 implements the SHA224 and SHA256 hash algorithms as defined in FIPS 180-4.

## Index

- Constants
- func New() hash.Hash
- func New224() hash.Hash
- func Sum224(data []byte) [Size224]byte
- func Sum256(data []byte) [Size]byte

### Examples

### Package files

sha256.go

## Constants

The blocksize of SHA256 and SHA224 in bytes.

```
const BlockSize = 64
```

The size of a SHA256 checksum in bytes.

```
const Size = 32
```

The size of a SHA224 checksum in bytes.

```
const Size224 = 28
```

## func New

```
func New() hash.Hash
```

New returns a new hash.Hash computing the SHA256 checksum. The Hash also implements encoding.BinaryMarshaler, encoding.BinaryAppender and encoding.BinaryUnmarshaler to marshal and unmarshal the internal state of the hash.

#### Example

Code:

```
h := sha256.New()
h.Write([]byte("hello world\n"))
fmt.Printf("%x", h.Sum(nil))
```

Output:

```
a948904f2f0f479b8f8197694b30184b0d2ed1c1cd2a1ec0fb85d299a192a447
```

#### Example (File)

Code:

```
f, err := os.Open("file.txt")
if err != nil {
    log.Fatal(err)
}
defer f.Close()

h := sha256.New()
if _, err := io.Copy(h, f); err != nil {
    log.Fatal(err)
}

fmt.Printf("%x", h.Sum(nil))
```

## func New224

```
func New224() hash.Hash
```

New224 returns a new hash.Hash computing the SHA224 checksum. The Hash also implements encoding.BinaryMarshaler, encoding.BinaryAppender and encoding.BinaryUnmarshaler to marshal and unmarshal the internal state of the hash.

## func Sum224 1.2

```
func Sum224(data []byte) [Size224]byte
```

Sum224 returns the SHA224 checksum of the data.

## func Sum256 1.2

```
func Sum256(data []byte) [Size]byte
```

Sum256 returns the SHA256 checksum of the data.

#### Example

Code:

```
sum := sha256.Sum256([]byte("hello world\n"))
fmt.Printf("%x", sum)
```

Output:

```
a948904f2f0f479b8f8197694b30184b0d2ed1c1cd2a1ec0fb85d299a192a447
```

© Google, Inc.Licensed under the Creative Commons Attribution License 3.0.
 http://golang.org/pkg/crypto/sha256/
