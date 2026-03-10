# Package unique

Source: https://devdocs.io/go/unique/index

- import "unique"
- Overview
- Index

## Overview

The unique package provides facilities for canonicalizing ("interning") comparable values.

## Index

- type Handle
- func Make[T comparable](value T) Handle[T]
- func (h Handle[T]) Value() T

### Package files

canonmap.go clone.go doc.go handle.go

## type Handle

Handle is a globally unique identity for some value of type T.

Two handles compare equal exactly if the two values used to create the handles would have also compared equal. The comparison of two handles is trivial and typically much more efficient than comparing the values used to create them.

```
type Handle[T comparable] struct {
    // contains filtered or unexported fields
}
```

### func Make 1.23

```
func Make[T comparable](value T) Handle[T]
```

Make returns a globally unique handle for a value of type T. Handles are equal if and only if the values used to produce them are equal. Make is safe for concurrent use by multiple goroutines.

### func (Handle[T]) Value

```
func (h Handle[T]) Value() T
```

Value returns a shallow copy of the T value that produced the Handle. Value is safe for concurrent use by multiple goroutines.

© Google, Inc.Licensed under the Creative Commons Attribution License 3.0.
 http://golang.org/pkg/unique/
