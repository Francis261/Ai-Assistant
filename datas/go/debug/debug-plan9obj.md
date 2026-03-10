# Package plan9obj

Source: https://devdocs.io/go/debug/plan9obj/index

- import "debug/plan9obj"
- Overview
- Index

## Overview

Package plan9obj implements access to Plan 9 a.out object files.

### Security

This package is not designed to be hardened against adversarial inputs, and is outside the scope of https://go.dev/security/policy. In particular, only basic validation is done when parsing object files. As such, care should be taken when parsing untrusted inputs, as parsing malformed files may consume significant resources, or cause panics.

## Index

- Constants
- Variables
- type File
- func NewFile(r io.ReaderAt) (*File, error)
- func Open(name string) (*File, error)
- func (f *File) Close() error
- func (f *File) Section(name string) *Section
- func (f *File) Symbols() ([]Sym, error)
- type FileHeader
- type Section
- func (s *Section) Data() ([]byte, error)
- func (s *Section) Open() io.ReadSeeker
- type SectionHeader
- type Sym

### Package files

file.go plan9obj.go

## Constants

```
const (
    Magic64 = 0x8000 // 64-bit expanded header

    Magic386   = (4*11+0)*11 + 7
    MagicAMD64 = (4*26+0)*26 + 7 + Magic64
    MagicARM   = (4*20+0)*20 + 7
)
```

## Variables

ErrNoSymbols is returned by File.Symbols if there is no such section in the File.

```
var ErrNoSymbols = errors.New("no symbol section")
```

## type File 1.3

A File represents an open Plan 9 a.out file.

```
type File struct {
    FileHeader
    Sections []*Section
    // contains filtered or unexported fields
}
```

### func NewFile 1.3

```
func NewFile(r io.ReaderAt) (*File, error)
```

NewFile creates a new File for accessing a Plan 9 binary in an underlying reader. The Plan 9 binary is expected to start at position 0 in the ReaderAt.

### func Open 1.3

```
func Open(name string) (*File, error)
```

Open opens the named file using os.Open and prepares it for use as a Plan 9 a.out binary.

### func (*File) Close 1.3

```
func (f *File) Close() error
```

Close closes the File. If the File was created using NewFile directly instead of Open, Close has no effect.

### func (*File) Section 1.3

```
func (f *File) Section(name string) *Section
```

Section returns a section with the given name, or nil if no such section exists.

### func (*File) Symbols 1.3

```
func (f *File) Symbols() ([]Sym, error)
```

Symbols returns the symbol table for f.

## type FileHeader 1.3

A FileHeader represents a Plan 9 a.out file header.

```
type FileHeader struct {
    Magic       uint32
    Bss         uint32
    Entry       uint64
    PtrSize     int
    LoadAddress uint64 // Go 1.4
    HdrSize     uint64 // Go 1.4
}
```

## type Section 1.3

A Section represents a single section in a Plan 9 a.out file.

```
type Section struct {
    SectionHeader

    // Embed ReaderAt for ReadAt method.
    // Do not embed SectionReader directly
    // to avoid having Read and Seek.
    // If a client wants Read and Seek it must use
    // Open() to avoid fighting over the seek offset
    // with other clients.
    io.ReaderAt
    // contains filtered or unexported fields
}
```

### func (*Section) Data 1.3

```
func (s *Section) Data() ([]byte, error)
```

Data reads and returns the contents of the Plan 9 a.out section.

### func (*Section) Open 1.3

```
func (s *Section) Open() io.ReadSeeker
```

Open returns a new ReadSeeker reading the Plan 9 a.out section.

## type SectionHeader 1.3

A SectionHeader represents a single Plan 9 a.out section header. This structure doesn't exist on-disk, but eases navigation through the object file.

```
type SectionHeader struct {
    Name   string
    Size   uint32
    Offset uint32
}
```

## type Sym 1.3

A Symbol represents an entry in a Plan 9 a.out symbol table section.

```
type Sym struct {
    Value uint64
    Type  rune
    Name  string
}
```

© Google, Inc.Licensed under the Creative Commons Attribution License 3.0.
 http://golang.org/pkg/debug/plan9obj/
