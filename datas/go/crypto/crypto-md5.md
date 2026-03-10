# Package md5

Source: https://devdocs.io/go/crypto/md5/index

- import "crypto/md5"
- Overview
- Index
- Examples

## Overview

Package md5 implements the MD5 hash algorithm as defined in RFC 1321.

MD5 is cryptographically broken and should not be used for secure applications.

## Index

- Constants
- func New() hash.Hash
- func Sum(data []byte) [Size]byte

### Examples

### Package files

md5.go md5block.go md5block_decl.go

## Constants

The blocksize of MD5 in bytes.

```
const BlockSize = 64
```

The size of an MD5 checksum in bytes.

```
const Size = 16
```

## func New

```
func New() hash.Hash
```

New returns a new hash.Hash computing the MD5 checksum. The Hash also implements encoding.BinaryMarshaler, encoding.BinaryAppender and encoding.BinaryUnmarshaler to marshal and unmarshal the internal state of the hash.

#### Example

Code:

```
h := md5.New()
io.WriteString(h, "The fog is getting thicker!")
io.WriteString(h, "And Leon's getting laaarger!")
fmt.Printf("%x", h.Sum(nil))
```

Output:

```
e2c569be17396eca2a2e3c11578123ed
```

#### Example (File)

Code:

```
f, err := os.Open("file.txt")
if err != nil {
    log.Fatal(err)
}
defer f.Close()

h := md5.New()
if _, err := io.Copy(h, f); err != nil {
    log.Fatal(err)
}

fmt.Printf("%x", h.Sum(nil))
```

## func Sum 1.2

```
func Sum(data []byte) [Size]byte
```

Sum returns the MD5 checksum of the data.

#### Example

Code:

```
data := []byte("These pretzels are making me thirsty.")
fmt.Printf("%x", md5.Sum(data))
```

Output:

```
b0804ec967f48520697662a204f5fe72
```

© Google, Inc.Licensed under the Creative Commons Attribution License 3.0.
 http://golang.org/pkg/crypto/md5/
