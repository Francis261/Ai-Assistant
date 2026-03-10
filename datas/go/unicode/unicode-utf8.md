# Package utf8

Source: https://devdocs.io/go/unicode/utf8/index

- import "unicode/utf8"
- Overview
- Index
- Examples

## Overview

Package utf8 implements functions and constants to support text encoded in UTF-8. It includes functions to translate between runes and UTF-8 byte sequences. See https://en.wikipedia.org/wiki/UTF-8

## Index

- Constants
- func AppendRune(p []byte, r rune) []byte
- func DecodeLastRune(p []byte) (r rune, size int)
- func DecodeLastRuneInString(s string) (r rune, size int)
- func DecodeRune(p []byte) (r rune, size int)
- func DecodeRuneInString(s string) (r rune, size int)
- func EncodeRune(p []byte, r rune) int
- func FullRune(p []byte) bool
- func FullRuneInString(s string) bool
- func RuneCount(p []byte) int
- func RuneCountInString(s string) (n int)
- func RuneLen(r rune) int
- func RuneStart(b byte) bool
- func Valid(p []byte) bool
- func ValidRune(r rune) bool
- func ValidString(s string) bool

### Examples

### Package files

utf8.go

## Constants

Numbers fundamental to the encoding.

```
const (
    RuneError = '\uFFFD'     // the "error" Rune or "Unicode replacement character"
    RuneSelf  = 0x80         // characters below RuneSelf are represented as themselves in a single byte.
    MaxRune   = '\U0010FFFF' // Maximum valid Unicode code point.
    UTFMax    = 4            // maximum number of bytes of a UTF-8 encoded Unicode character.
)
```

## func AppendRune 1.18

```
func AppendRune(p []byte, r rune) []byte
```

AppendRune appends the UTF-8 encoding of r to the end of p and returns the extended buffer. If the rune is out of range, it appends the encoding of RuneError.

#### Example

Code:

```
buf1 := utf8.AppendRune(nil, 0x10000)
buf2 := utf8.AppendRune([]byte("init"), 0x10000)
fmt.Println(string(buf1))
fmt.Println(string(buf2))
```

Output:

```
𐀀
init𐀀
```

## func DecodeLastRune

```
func DecodeLastRune(p []byte) (r rune, size int)
```

DecodeLastRune unpacks the last UTF-8 encoding in p and returns the rune and its width in bytes. If p is empty it returns (RuneError, 0). Otherwise, if the encoding is invalid, it returns (RuneError, 1). Both are impossible results for correct, non-empty UTF-8.

An encoding is invalid if it is incorrect UTF-8, encodes a rune that is out of range, or is not the shortest possible UTF-8 encoding for the value. No other validation is performed.

#### Example

Code:

```
b := []byte("Hello, 世界")

for len(b) > 0 {
    r, size := utf8.DecodeLastRune(b)
    fmt.Printf("%c %v\n", r, size)

    b = b[:len(b)-size]
}
```

Output:

```
界 3
世 3
  1
, 1
o 1
l 1
l 1
e 1
H 1
```

## func DecodeLastRuneInString

```
func DecodeLastRuneInString(s string) (r rune, size int)
```

DecodeLastRuneInString is like DecodeLastRune but its input is a string. If s is empty it returns (RuneError, 0). Otherwise, if the encoding is invalid, it returns (RuneError, 1). Both are impossible results for correct, non-empty UTF-8.

An encoding is invalid if it is incorrect UTF-8, encodes a rune that is out of range, or is not the shortest possible UTF-8 encoding for the value. No other validation is performed.

#### Example

Code:

```
str := "Hello, 世界"

for len(str) > 0 {
    r, size := utf8.DecodeLastRuneInString(str)
    fmt.Printf("%c %v\n", r, size)

    str = str[:len(str)-size]
}
```

Output:

```
界 3
世 3
  1
, 1
o 1
l 1
l 1
e 1
H 1
```

## func DecodeRune

```
func DecodeRune(p []byte) (r rune, size int)
```

DecodeRune unpacks the first UTF-8 encoding in p and returns the rune and its width in bytes. If p is empty it returns (RuneError, 0). Otherwise, if the encoding is invalid, it returns (RuneError, 1). Both are impossible results for correct, non-empty UTF-8.

An encoding is invalid if it is incorrect UTF-8, encodes a rune that is out of range, or is not the shortest possible UTF-8 encoding for the value. No other validation is performed.

#### Example

Code:

```
b := []byte("Hello, 世界")

for len(b) > 0 {
    r, size := utf8.DecodeRune(b)
    fmt.Printf("%c %v\n", r, size)

    b = b[size:]
}
```

Output:

```
H 1
e 1
l 1
l 1
o 1
, 1
  1
世 3
界 3
```

## func DecodeRuneInString

```
func DecodeRuneInString(s string) (r rune, size int)
```

DecodeRuneInString is like DecodeRune but its input is a string. If s is empty it returns (RuneError, 0). Otherwise, if the encoding is invalid, it returns (RuneError, 1). Both are impossible results for correct, non-empty UTF-8.

An encoding is invalid if it is incorrect UTF-8, encodes a rune that is out of range, or is not the shortest possible UTF-8 encoding for the value. No other validation is performed.

#### Example

Code:

```
str := "Hello, 世界"

for len(str) > 0 {
    r, size := utf8.DecodeRuneInString(str)
    fmt.Printf("%c %v\n", r, size)

    str = str[size:]
}
```

Output:

```
H 1
e 1
l 1
l 1
o 1
, 1
  1
世 3
界 3
```

## func EncodeRune

```
func EncodeRune(p []byte, r rune) int
```

EncodeRune writes into p (which must be large enough) the UTF-8 encoding of the rune. If the rune is out of range, it writes the encoding of RuneError. It returns the number of bytes written.

#### Example

Code:

```
r := '世'
buf := make([]byte, 3)

n := utf8.EncodeRune(buf, r)

fmt.Println(buf)
fmt.Println(n)
```

Output:

```
[228 184 150]
3
```

#### Example (OutOfRange)

Code:

```
runes := []rune{
    // Less than 0, out of range.
    -1,
    // Greater than 0x10FFFF, out of range.
    0x110000,
    // The Unicode replacement character.
    utf8.RuneError,
}
for i, c := range runes {
    buf := make([]byte, 3)
    size := utf8.EncodeRune(buf, c)
    fmt.Printf("%d: %d %[2]s %d\n", i, buf, size)
}
```

Output:

```
0: [239 191 189] � 3
1: [239 191 189] � 3
2: [239 191 189] � 3
```

## func FullRune

```
func FullRune(p []byte) bool
```

FullRune reports whether the bytes in p begin with a full UTF-8 encoding of a rune. An invalid encoding is considered a full Rune since it will convert as a width-1 error rune.

#### Example

Code:

```
buf := []byte{228, 184, 150} // 世
fmt.Println(utf8.FullRune(buf))
fmt.Println(utf8.FullRune(buf[:2]))
```

Output:

```
true
false
```

## func FullRuneInString

```
func FullRuneInString(s string) bool
```

FullRuneInString is like FullRune but its input is a string.

#### Example

Code:

```
str := "世"
fmt.Println(utf8.FullRuneInString(str))
fmt.Println(utf8.FullRuneInString(str[:2]))
```

Output:

```
true
false
```

## func RuneCount

```
func RuneCount(p []byte) int
```

RuneCount returns the number of runes in p. Erroneous and short encodings are treated as single runes of width 1 byte.

#### Example

Code:

```
buf := []byte("Hello, 世界")
fmt.Println("bytes =", len(buf))
fmt.Println("runes =", utf8.RuneCount(buf))
```

Output:

```
bytes = 13
runes = 9
```

## func RuneCountInString

```
func RuneCountInString(s string) (n int)
```

RuneCountInString is like RuneCount but its input is a string.

#### Example

Code:

```
str := "Hello, 世界"
fmt.Println("bytes =", len(str))
fmt.Println("runes =", utf8.RuneCountInString(str))
```

Output:

```
bytes = 13
runes = 9
```

## func RuneLen

```
func RuneLen(r rune) int
```

RuneLen returns the number of bytes in the UTF-8 encoding of the rune. It returns -1 if the rune is not a valid value to encode in UTF-8.

#### Example

Code:

```
fmt.Println(utf8.RuneLen('a'))
fmt.Println(utf8.RuneLen('界'))
```

Output:

```
1
3
```

## func RuneStart

```
func RuneStart(b byte) bool
```

RuneStart reports whether the byte could be the first byte of an encoded, possibly invalid rune. Second and subsequent bytes always have the top two bits set to 10.

#### Example

Code:

```
buf := []byte("a界")
fmt.Println(utf8.RuneStart(buf[0]))
fmt.Println(utf8.RuneStart(buf[1]))
fmt.Println(utf8.RuneStart(buf[2]))
```

Output:

```
true
true
false
```

## func Valid

```
func Valid(p []byte) bool
```

Valid reports whether p consists entirely of valid UTF-8-encoded runes.

#### Example

Code:

```
valid := []byte("Hello, 世界")
invalid := []byte{0xff, 0xfe, 0xfd}

fmt.Println(utf8.Valid(valid))
fmt.Println(utf8.Valid(invalid))
```

Output:

```
true
false
```

## func ValidRune 1.1

```
func ValidRune(r rune) bool
```

ValidRune reports whether r can be legally encoded as UTF-8. Code points that are out of range or a surrogate half are illegal.

#### Example

Code:

```
valid := 'a'
invalid := rune(0xfffffff)

fmt.Println(utf8.ValidRune(valid))
fmt.Println(utf8.ValidRune(invalid))
```

Output:

```
true
false
```

## func ValidString

```
func ValidString(s string) bool
```

ValidString reports whether s consists entirely of valid UTF-8-encoded runes.

#### Example

Code:

```
valid := "Hello, 世界"
invalid := string([]byte{0xff, 0xfe, 0xfd})

fmt.Println(utf8.ValidString(valid))
fmt.Println(utf8.ValidString(invalid))
```

Output:

```
true
false
```

© Google, Inc.Licensed under the Creative Commons Attribution License 3.0.
 http://golang.org/pkg/unicode/utf8/
