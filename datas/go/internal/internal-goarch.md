# Package goarch

Source: https://devdocs.io/go/internal/goarch/index

- import "internal/goarch"
- Overview
- Index

## Overview

package goarch contains GOARCH-specific constants.

## Index

- Constants
- type ArchFamilyType

### Package files

goarch.go goarch_amd64.go zgoarch_amd64.go

## Constants

BigEndian reports whether the architecture is big-endian.

```
const BigEndian = IsArmbe|IsArm64be|IsMips|IsMips64|IsPpc|IsPpc64|IsS390|IsS390x|IsSparc|IsSparc64 == 1
```

DefaultPhysPageSize is the default physical page size.

```
const DefaultPhysPageSize = _DefaultPhysPageSize
```

```
const GOARCH = `amd64`
```

Int64Align is the required alignment for a 64-bit integer (4 on 32-bit systems, 8 on 64-bit).

```
const Int64Align = PtrSize
```

```
const Is386 = 0
```

```
const IsAmd64 = 1
```

```
const IsAmd64p32 = 0
```

```
const IsArm = 0
```

```
const IsArm64 = 0
```

```
const IsArm64be = 0
```

```
const IsArmbe = 0
```

```
const IsLoong64 = 0
```

```
const IsMips = 0
```

```
const IsMips64 = 0
```

```
const IsMips64le = 0
```

```
const IsMips64p32 = 0
```

```
const IsMips64p32le = 0
```

```
const IsMipsle = 0
```

```
const IsPpc = 0
```

```
const IsPpc64 = 0
```

```
const IsPpc64le = 0
```

```
const IsRiscv = 0
```

```
const IsRiscv64 = 0
```

```
const IsS390 = 0
```

```
const IsS390x = 0
```

```
const IsSparc = 0
```

```
const IsSparc64 = 0
```

```
const IsWasm = 0
```

MinFrameSize is the size of the system-reserved words at the bottom of a frame (just above the architectural stack pointer). It is zero on x86 and PtrSize on most non-x86 (LR-based) systems. On PowerPC it is larger, to cover three more reserved words: the compiler word, the link editor word, and the TOC save word.

```
const MinFrameSize = _MinFrameSize
```

PCQuantum is the minimal unit for a program counter (1 on x86, 4 on most other systems). The various PC tables record PC deltas pre-divided by PCQuantum.

```
const PCQuantum = _PCQuantum
```

PtrBits is bit width of a pointer.

```
const PtrBits = PtrSize * 8
```

PtrSize is the size of a pointer in bytes - unsafe.Sizeof(uintptr(0)) but as an ideal constant. It is also the size of the machine's native word size (that is, 4 on 32-bit systems, 8 on 64-bit).

```
const PtrSize = 4 << (^uintptr(0) >> 63)
```

StackAlign is the required alignment of the SP register. The stack must be at least word aligned, but some architectures require more.

```
const StackAlign = _StackAlign
```

## type ArchFamilyType

ArchFamilyType represents a family of one or more related architectures. For example, ppc64 and ppc64le are both members of the PPC64 family.

```
type ArchFamilyType int
```

```
const (
    AMD64 ArchFamilyType = iota
    ARM
    ARM64
    I386
    LOONG64
    MIPS
    MIPS64
    PPC64
    RISCV64
    S390X
    WASM
)
```

ArchFamily is the architecture family (AMD64, ARM, ...)

```
const ArchFamily ArchFamilyType = _ArchFamily
```

© Google, Inc.Licensed under the Creative Commons Attribution License 3.0.
 http://golang.org/pkg/internal/goarch/
