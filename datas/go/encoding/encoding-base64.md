# Package base64

Source: https://devdocs.io/go/encoding/base64/index

- import "encoding/base64"
- Overview
- Index
- Examples

## Overview

Package base64 implements base64 encoding as specified by RFC 4648.

#### Example

Code:

```
msg := "Hello, 世界"
encoded := base64.StdEncoding.EncodeToString([]byte(msg))
fmt.Println(encoded)
decoded, err := base64.StdEncoding.DecodeString(encoded)
if err != nil {
    fmt.Println("decode error:", err)
    return
}
fmt.Println(string(decoded))
```

Output:

```
SGVsbG8sIOS4lueVjA==
Hello, 世界
```

## Index

- Constants
- Variables
- func NewDecoder(enc *Encoding, r io.Reader) io.Reader
- func NewEncoder(enc *Encoding, w io.Writer) io.WriteCloser
- type CorruptInputError
- func (e CorruptInputError) Error() string
- type Encoding
- func NewEncoding(encoder string) *Encoding
- func (enc *Encoding) AppendDecode(dst, src []byte) ([]byte, error)
- func (enc *Encoding) AppendEncode(dst, src []byte) []byte
- func (enc *Encoding) Decode(dst, src []byte) (n int, err error)
- func (enc *Encoding) DecodeString(s string) ([]byte, error)
- func (enc *Encoding) DecodedLen(n int) int
- func (enc *Encoding) Encode(dst, src []byte)
- func (enc *Encoding) EncodeToString(src []byte) string
- func (enc *Encoding) EncodedLen(n int) int
- func (enc Encoding) Strict() *Encoding
- func (enc Encoding) WithPadding(padding rune) *Encoding

### Examples

### Package files

base64.go

## Constants

```
const (
    StdPadding rune = '=' // Standard padding character
    NoPadding  rune = -1  // No padding
)
```

## Variables

RawStdEncoding is the standard raw, unpadded base64 encoding, as defined in RFC 4648 section 3.2. This is the same as StdEncoding but omits padding characters.

```
var RawStdEncoding = StdEncoding.WithPadding(NoPadding)
```

RawURLEncoding is the unpadded alternate base64 encoding defined in RFC 4648. It is typically used in URLs and file names. This is the same as URLEncoding but omits padding characters.

```
var RawURLEncoding = URLEncoding.WithPadding(NoPadding)
```

StdEncoding is the standard base64 encoding, as defined in RFC 4648.

```
var StdEncoding = NewEncoding("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/")
```

URLEncoding is the alternate base64 encoding defined in RFC 4648. It is typically used in URLs and file names.

```
var URLEncoding = NewEncoding("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_")
```

## func NewDecoder

```
func NewDecoder(enc *Encoding, r io.Reader) io.Reader
```

NewDecoder constructs a new base64 stream decoder.

## func NewEncoder

```
func NewEncoder(enc *Encoding, w io.Writer) io.WriteCloser
```

NewEncoder returns a new base64 stream encoder. Data written to the returned writer will be encoded using enc and then written to w. Base64 encodings operate in 4-byte blocks; when finished writing, the caller must Close the returned encoder to flush any partially written blocks.

#### Example

Code:

```
input := []byte("foo\x00bar")
encoder := base64.NewEncoder(base64.StdEncoding, os.Stdout)
encoder.Write(input)
// Must close the encoder when finished to flush any partial blocks.
// If you comment out the following line, the last partial block "r"
// won't be encoded.
encoder.Close()
```

Output:

```
Zm9vAGJhcg==
```

## type CorruptInputError

```
type CorruptInputError int64
```

### func (CorruptInputError) Error

```
func (e CorruptInputError) Error() string
```

## type Encoding

An Encoding is a radix 64 encoding/decoding scheme, defined by a 64-character alphabet. The most common encoding is the "base64" encoding defined in RFC 4648 and used in MIME (RFC 2045) and PEM (RFC 1421). RFC 4648 also defines an alternate encoding, which is the standard encoding with - and _ substituted for + and /.

```
type Encoding struct {
    // contains filtered or unexported fields
}
```

### func NewEncoding

```
func NewEncoding(encoder string) *Encoding
```

NewEncoding returns a new padded Encoding defined by the given alphabet, which must be a 64-byte string that contains unique byte values and does not contain the padding character or CR / LF ('\r', '\n'). The alphabet is treated as a sequence of byte values without any special treatment for multi-byte UTF-8. The resulting Encoding uses the default padding character ('='), which may be changed or disabled via Encoding.WithPadding.

### func (*Encoding) AppendDecode 1.22

```
func (enc *Encoding) AppendDecode(dst, src []byte) ([]byte, error)
```

AppendDecode appends the base64 decoded src to dst and returns the extended buffer. If the input is malformed, it returns the partially decoded src and an error. New line characters (\r and \n) are ignored.

### func (*Encoding) AppendEncode 1.22

```
func (enc *Encoding) AppendEncode(dst, src []byte) []byte
```

AppendEncode appends the base64 encoded src to dst and returns the extended buffer.

### func (*Encoding) Decode

```
func (enc *Encoding) Decode(dst, src []byte) (n int, err error)
```

Decode decodes src using the encoding enc. It writes at most Encoding.DecodedLen(len(src)) bytes to dst and returns the number of bytes written. The caller must ensure that dst is large enough to hold all the decoded data. If src contains invalid base64 data, it will return the number of bytes successfully written and CorruptInputError. New line characters (\r and \n) are ignored.

#### Example

Code:

```
str := "SGVsbG8sIHdvcmxkIQ=="
dst := make([]byte, base64.StdEncoding.DecodedLen(len(str)))
n, err := base64.StdEncoding.Decode(dst, []byte(str))
if err != nil {
    fmt.Println("decode error:", err)
    return
}
dst = dst[:n]
fmt.Printf("%q\n", dst)
```

Output:

```
"Hello, world!"
```

### func (*Encoding) DecodeString

```
func (enc *Encoding) DecodeString(s string) ([]byte, error)
```

DecodeString returns the bytes represented by the base64 string s. If the input is malformed, it returns the partially decoded data and CorruptInputError. New line characters (\r and \n) are ignored.

#### Example

Code:

```
str := "c29tZSBkYXRhIHdpdGggACBhbmQg77u/"
data, err := base64.StdEncoding.DecodeString(str)
if err != nil {
    fmt.Println("error:", err)
    return
}
fmt.Printf("%q\n", data)
```

Output:

```
"some data with \x00 and \ufeff"
```

### func (*Encoding) DecodedLen

```
func (enc *Encoding) DecodedLen(n int) int
```

DecodedLen returns the maximum length in bytes of the decoded data corresponding to n bytes of base64-encoded data.

### func (*Encoding) Encode

```
func (enc *Encoding) Encode(dst, src []byte)
```

Encode encodes src using the encoding enc, writing Encoding.EncodedLen(len(src)) bytes to dst.

The encoding pads the output to a multiple of 4 bytes, so Encode is not appropriate for use on individual blocks of a large data stream. Use NewEncoder instead.

#### Example

Code:

```
data := []byte("Hello, world!")
dst := make([]byte, base64.StdEncoding.EncodedLen(len(data)))
base64.StdEncoding.Encode(dst, data)
fmt.Println(string(dst))
```

Output:

```
SGVsbG8sIHdvcmxkIQ==
```

### func (*Encoding) EncodeToString

```
func (enc *Encoding) EncodeToString(src []byte) string
```

EncodeToString returns the base64 encoding of src.

#### Example

Code:

```
data := []byte("any + old & data")
str := base64.StdEncoding.EncodeToString(data)
fmt.Println(str)
```

Output:

```
YW55ICsgb2xkICYgZGF0YQ==
```

### func (*Encoding) EncodedLen

```
func (enc *Encoding) EncodedLen(n int) int
```

EncodedLen returns the length in bytes of the base64 encoding of an input buffer of length n.

### func (Encoding) Strict 1.8

```
func (enc Encoding) Strict() *Encoding
```

Strict creates a new encoding identical to enc except with strict decoding enabled. In this mode, the decoder requires that trailing padding bits are zero, as described in RFC 4648 section 3.5.

Note that the input is still malleable, as new line characters (CR and LF) are still ignored.

### func (Encoding) WithPadding 1.5

```
func (enc Encoding) WithPadding(padding rune) *Encoding
```

WithPadding creates a new encoding identical to enc except with a specified padding character, or NoPadding to disable padding. The padding character must not be '\r' or '\n', must not be contained in the encoding's alphabet, must not be negative, and must be a rune equal or below '\xff'. Padding characters above '\x7f' are encoded as their exact byte value rather than using the UTF-8 representation of the codepoint.

© Google, Inc.Licensed under the Creative Commons Attribution License 3.0.
 http://golang.org/pkg/encoding/base64/
