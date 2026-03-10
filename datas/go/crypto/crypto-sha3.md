# Package sha3

Source: https://devdocs.io/go/crypto/sha3/index

- import "crypto/sha3"
- Overview
- Index

## Overview

Package sha3 implements the SHA-3 hash algorithms and the SHAKE extendable output functions defined in FIPS 202.

## Index

- func Sum224(data []byte) [28]byte
- func Sum256(data []byte) [32]byte
- func Sum384(data []byte) [48]byte
- func Sum512(data []byte) [64]byte
- func SumSHAKE128(data []byte, length int) []byte
- func SumSHAKE256(data []byte, length int) []byte
- type SHA3
- func New224() *SHA3
- func New256() *SHA3
- func New384() *SHA3
- func New512() *SHA3
- func (s *SHA3) AppendBinary(p []byte) ([]byte, error)
- func (s *SHA3) BlockSize() int
- func (d *SHA3) Clone() (hash.Cloner, error)
- func (s *SHA3) MarshalBinary() ([]byte, error)
- func (s *SHA3) Reset()
- func (s *SHA3) Size() int
- func (s *SHA3) Sum(b []byte) []byte
- func (s *SHA3) UnmarshalBinary(data []byte) error
- func (s *SHA3) Write(p []byte) (n int, err error)
- type SHAKE
- func NewCSHAKE128(N, S []byte) *SHAKE
- func NewCSHAKE256(N, S []byte) *SHAKE
- func NewSHAKE128() *SHAKE
- func NewSHAKE256() *SHAKE
- func (s *SHAKE) AppendBinary(p []byte) ([]byte, error)
- func (s *SHAKE) BlockSize() int
- func (s *SHAKE) MarshalBinary() ([]byte, error)
- func (s *SHAKE) Read(p []byte) (n int, err error)
- func (s *SHAKE) Reset()
- func (s *SHAKE) UnmarshalBinary(data []byte) error
- func (s *SHAKE) Write(p []byte) (n int, err error)

### Package files

sha3.go

## func Sum224 1.24

```
func Sum224(data []byte) [28]byte
```

Sum224 returns the SHA3-224 hash of data.

## func Sum256 1.24

```
func Sum256(data []byte) [32]byte
```

Sum256 returns the SHA3-256 hash of data.

## func Sum384 1.24

```
func Sum384(data []byte) [48]byte
```

Sum384 returns the SHA3-384 hash of data.

## func Sum512 1.24

```
func Sum512(data []byte) [64]byte
```

Sum512 returns the SHA3-512 hash of data.

## func SumSHAKE128 1.24

```
func SumSHAKE128(data []byte, length int) []byte
```

SumSHAKE128 applies the SHAKE128 extendable output function to data and returns an output of the given length in bytes.

## func SumSHAKE256 1.24

```
func SumSHAKE256(data []byte, length int) []byte
```

SumSHAKE256 applies the SHAKE256 extendable output function to data and returns an output of the given length in bytes.

## type SHA3 1.24

SHA3 is an instance of a SHA-3 hash. It implements hash.Hash. The zero value is a usable SHA3-256 hash.

```
type SHA3 struct {
    // contains filtered or unexported fields
}
```

### func New224 1.24

```
func New224() *SHA3
```

New224 creates a new SHA3-224 hash.

### func New256 1.24

```
func New256() *SHA3
```

New256 creates a new SHA3-256 hash.

### func New384 1.24

```
func New384() *SHA3
```

New384 creates a new SHA3-384 hash.

### func New512 1.24

```
func New512() *SHA3
```

New512 creates a new SHA3-512 hash.

### func (*SHA3) AppendBinary 1.24

```
func (s *SHA3) AppendBinary(p []byte) ([]byte, error)
```

AppendBinary implements encoding.BinaryAppender.

### func (*SHA3) BlockSize 1.24

```
func (s *SHA3) BlockSize() int
```

BlockSize returns the hash's rate.

### func (*SHA3) Clone 1.25

```
func (d *SHA3) Clone() (hash.Cloner, error)
```

Clone implements hash.Cloner.

### func (*SHA3) MarshalBinary 1.24

```
func (s *SHA3) MarshalBinary() ([]byte, error)
```

MarshalBinary implements encoding.BinaryMarshaler.

### func (*SHA3) Reset 1.24

```
func (s *SHA3) Reset()
```

Reset resets the hash to its initial state.

### func (*SHA3) Size 1.24

```
func (s *SHA3) Size() int
```

Size returns the number of bytes Sum will produce.

### func (*SHA3) Sum 1.24

```
func (s *SHA3) Sum(b []byte) []byte
```

Sum appends the current hash to b and returns the resulting slice.

### func (*SHA3) UnmarshalBinary 1.24

```
func (s *SHA3) UnmarshalBinary(data []byte) error
```

UnmarshalBinary implements encoding.BinaryUnmarshaler.

### func (*SHA3) Write 1.24

```
func (s *SHA3) Write(p []byte) (n int, err error)
```

Write absorbs more data into the hash's state.

## type SHAKE 1.24

SHAKE is an instance of a SHAKE extendable output function. The zero value is a usable SHAKE256 hash.

```
type SHAKE struct {
    // contains filtered or unexported fields
}
```

### func NewCSHAKE128 1.24

```
func NewCSHAKE128(N, S []byte) *SHAKE
```

NewCSHAKE128 creates a new cSHAKE128 XOF.

N is used to define functions based on cSHAKE, it can be empty when plain cSHAKE is desired. S is a customization byte string used for domain separation. When N and S are both empty, this is equivalent to NewSHAKE128.

### func NewCSHAKE256 1.24

```
func NewCSHAKE256(N, S []byte) *SHAKE
```

NewCSHAKE256 creates a new cSHAKE256 XOF.

N is used to define functions based on cSHAKE, it can be empty when plain cSHAKE is desired. S is a customization byte string used for domain separation. When N and S are both empty, this is equivalent to NewSHAKE256.

### func NewSHAKE128 1.24

```
func NewSHAKE128() *SHAKE
```

NewSHAKE128 creates a new SHAKE128 XOF.

### func NewSHAKE256 1.24

```
func NewSHAKE256() *SHAKE
```

NewSHAKE256 creates a new SHAKE256 XOF.

### func (*SHAKE) AppendBinary 1.24

```
func (s *SHAKE) AppendBinary(p []byte) ([]byte, error)
```

AppendBinary implements encoding.BinaryAppender.

### func (*SHAKE) BlockSize 1.24

```
func (s *SHAKE) BlockSize() int
```

BlockSize returns the rate of the XOF.

### func (*SHAKE) MarshalBinary 1.24

```
func (s *SHAKE) MarshalBinary() ([]byte, error)
```

MarshalBinary implements encoding.BinaryMarshaler.

### func (*SHAKE) Read 1.24

```
func (s *SHAKE) Read(p []byte) (n int, err error)
```

Read squeezes more output from the XOF.

Any call to Write after a call to Read will panic.

### func (*SHAKE) Reset 1.24

```
func (s *SHAKE) Reset()
```

Reset resets the XOF to its initial state.

### func (*SHAKE) UnmarshalBinary 1.24

```
func (s *SHAKE) UnmarshalBinary(data []byte) error
```

UnmarshalBinary implements encoding.BinaryUnmarshaler.

### func (*SHAKE) Write 1.24

```
func (s *SHAKE) Write(p []byte) (n int, err error)
```

Write absorbs more data into the XOF's state.

It panics if any output has already been read.

© Google, Inc.Licensed under the Creative Commons Attribution License 3.0.
 http://golang.org/pkg/crypto/sha3/
