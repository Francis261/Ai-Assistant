# Package structs

Source: https://devdocs.io/go/structs/index

- import "structs"
- Overview
- Index

## Overview

Package structs defines marker types that can be used as struct fields to modify the properties of a struct.

By convention, a marker type should be used as the type of a field named "_", placed at the beginning of a struct type definition.

## Index

- type HostLayout

### Package files

doc.go hostlayout.go

## type HostLayout 1.23

HostLayout marks a struct as using host memory layout. A struct with a field of type HostLayout will be laid out in memory according to host expectations, generally following the host's C ABI.

HostLayout does not affect layout within any other struct-typed fields of the containing struct, nor does it affect layout of structs containing the struct marked as host layout.

By convention, HostLayout should be used as the type of a field named "_", placed at the beginning of the struct type definition.

```
type HostLayout struct {
    // contains filtered or unexported fields
}
```

© Google, Inc.Licensed under the Creative Commons Attribution License 3.0.
 http://golang.org/pkg/structs/
