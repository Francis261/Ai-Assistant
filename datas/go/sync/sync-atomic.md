# Package atomic

Source: https://devdocs.io/go/sync/atomic/index

- import "sync/atomic"
- Overview
- Index
- Examples

## Overview

Package atomic provides low-level atomic memory primitives useful for implementing synchronization algorithms.

These functions require great care to be used correctly. Except for special, low-level applications, synchronization is better done with channels or the facilities of the sync package. Share memory by communicating; don't communicate by sharing memory.

The swap operation, implemented by the SwapT functions, is the atomic equivalent of:

```
old = *addr
*addr = new
return old
```

The compare-and-swap operation, implemented by the CompareAndSwapT functions, is the atomic equivalent of:

```
if *addr == old {
	*addr = new
	return true
}
return false
```

The add operation, implemented by the AddT functions, is the atomic equivalent of:

```
*addr += delta
return *addr
```

The load and store operations, implemented by the LoadT and StoreT functions, are the atomic equivalents of "return *addr" and "*addr = val".

In the terminology of the Go memory model, if the effect of an atomic operation A is observed by atomic operation B, then A “synchronizes before” B. Additionally, all the atomic operations executed in a program behave as though executed in some sequentially consistent order. This definition provides the same semantics as C++'s sequentially consistent atomics and Java's volatile variables.

## Index

- func AddInt32(addr *int32, delta int32) (new int32)
- func AddInt64(addr *int64, delta int64) (new int64)
- func AddUint32(addr *uint32, delta uint32) (new uint32)
- func AddUint64(addr *uint64, delta uint64) (new uint64)
- func AddUintptr(addr *uintptr, delta uintptr) (new uintptr)
- func AndInt32(addr *int32, mask int32) (old int32)
- func AndInt64(addr *int64, mask int64) (old int64)
- func AndUint32(addr *uint32, mask uint32) (old uint32)
- func AndUint64(addr *uint64, mask uint64) (old uint64)
- func AndUintptr(addr *uintptr, mask uintptr) (old uintptr)
- func CompareAndSwapInt32(addr *int32, old, new int32) (swapped bool)
- func CompareAndSwapInt64(addr *int64, old, new int64) (swapped bool)
- func CompareAndSwapPointer(addr *unsafe.Pointer, old, new unsafe.Pointer) (swapped bool)
- func CompareAndSwapUint32(addr *uint32, old, new uint32) (swapped bool)
- func CompareAndSwapUint64(addr *uint64, old, new uint64) (swapped bool)
- func CompareAndSwapUintptr(addr *uintptr, old, new uintptr) (swapped bool)
- func LoadInt32(addr *int32) (val int32)
- func LoadInt64(addr *int64) (val int64)
- func LoadPointer(addr *unsafe.Pointer) (val unsafe.Pointer)
- func LoadUint32(addr *uint32) (val uint32)
- func LoadUint64(addr *uint64) (val uint64)
- func LoadUintptr(addr *uintptr) (val uintptr)
- func OrInt32(addr *int32, mask int32) (old int32)
- func OrInt64(addr *int64, mask int64) (old int64)
- func OrUint32(addr *uint32, mask uint32) (old uint32)
- func OrUint64(addr *uint64, mask uint64) (old uint64)
- func OrUintptr(addr *uintptr, mask uintptr) (old uintptr)
- func StoreInt32(addr *int32, val int32)
- func StoreInt64(addr *int64, val int64)
- func StorePointer(addr *unsafe.Pointer, val unsafe.Pointer)
- func StoreUint32(addr *uint32, val uint32)
- func StoreUint64(addr *uint64, val uint64)
- func StoreUintptr(addr *uintptr, val uintptr)
- func SwapInt32(addr *int32, new int32) (old int32)
- func SwapInt64(addr *int64, new int64) (old int64)
- func SwapPointer(addr *unsafe.Pointer, new unsafe.Pointer) (old unsafe.Pointer)
- func SwapUint32(addr *uint32, new uint32) (old uint32)
- func SwapUint64(addr *uint64, new uint64) (old uint64)
- func SwapUintptr(addr *uintptr, new uintptr) (old uintptr)
- type Bool
- func (x *Bool) CompareAndSwap(old, new bool) (swapped bool)
- func (x *Bool) Load() bool
- func (x *Bool) Store(val bool)
- func (x *Bool) Swap(new bool) (old bool)
- type Int32
- func (x *Int32) Add(delta int32) (new int32)
- func (x *Int32) And(mask int32) (old int32)
- func (x *Int32) CompareAndSwap(old, new int32) (swapped bool)
- func (x *Int32) Load() int32
- func (x *Int32) Or(mask int32) (old int32)
- func (x *Int32) Store(val int32)
- func (x *Int32) Swap(new int32) (old int32)
- type Int64
- func (x *Int64) Add(delta int64) (new int64)
- func (x *Int64) And(mask int64) (old int64)
- func (x *Int64) CompareAndSwap(old, new int64) (swapped bool)
- func (x *Int64) Load() int64
- func (x *Int64) Or(mask int64) (old int64)
- func (x *Int64) Store(val int64)
- func (x *Int64) Swap(new int64) (old int64)
- type Pointer
- func (x *Pointer[T]) CompareAndSwap(old, new *T) (swapped bool)
- func (x *Pointer[T]) Load() *T
- func (x *Pointer[T]) Store(val *T)
- func (x *Pointer[T]) Swap(new *T) (old *T)
- type Uint32
- func (x *Uint32) Add(delta uint32) (new uint32)
- func (x *Uint32) And(mask uint32) (old uint32)
- func (x *Uint32) CompareAndSwap(old, new uint32) (swapped bool)
- func (x *Uint32) Load() uint32
- func (x *Uint32) Or(mask uint32) (old uint32)
- func (x *Uint32) Store(val uint32)
- func (x *Uint32) Swap(new uint32) (old uint32)
- type Uint64
- func (x *Uint64) Add(delta uint64) (new uint64)
- func (x *Uint64) And(mask uint64) (old uint64)
- func (x *Uint64) CompareAndSwap(old, new uint64) (swapped bool)
- func (x *Uint64) Load() uint64
- func (x *Uint64) Or(mask uint64) (old uint64)
- func (x *Uint64) Store(val uint64)
- func (x *Uint64) Swap(new uint64) (old uint64)
- type Uintptr
- func (x *Uintptr) Add(delta uintptr) (new uintptr)
- func (x *Uintptr) And(mask uintptr) (old uintptr)
- func (x *Uintptr) CompareAndSwap(old, new uintptr) (swapped bool)
- func (x *Uintptr) Load() uintptr
- func (x *Uintptr) Or(mask uintptr) (old uintptr)
- func (x *Uintptr) Store(val uintptr)
- func (x *Uintptr) Swap(new uintptr) (old uintptr)
- type Value
- func (v *Value) CompareAndSwap(old, new any) (swapped bool)
- func (v *Value) Load() (val any)
- func (v *Value) Store(val any)
- func (v *Value) Swap(new any) (old any)
- Bugs

### Examples

### Package files

doc.go doc_64.go type.go value.go

## func AddInt32

```
func AddInt32(addr *int32, delta int32) (new int32)
```

AddInt32 atomically adds delta to *addr and returns the new value. Consider using the more ergonomic and less error-prone Int32.Add instead.

## func AddInt64

```
func AddInt64(addr *int64, delta int64) (new int64)
```

AddInt64 atomically adds delta to *addr and returns the new value. Consider using the more ergonomic and less error-prone Int64.Add instead (particularly if you target 32-bit platforms; see the bugs section).

## func AddUint32

```
func AddUint32(addr *uint32, delta uint32) (new uint32)
```

AddUint32 atomically adds delta to *addr and returns the new value. To subtract a signed positive constant value c from x, do AddUint32(&x, ^uint32(c-1)). In particular, to decrement x, do AddUint32(&x, ^uint32(0)). Consider using the more ergonomic and less error-prone Uint32.Add instead.

## func AddUint64

```
func AddUint64(addr *uint64, delta uint64) (new uint64)
```

AddUint64 atomically adds delta to *addr and returns the new value. To subtract a signed positive constant value c from x, do AddUint64(&x, ^uint64(c-1)). In particular, to decrement x, do AddUint64(&x, ^uint64(0)). Consider using the more ergonomic and less error-prone Uint64.Add instead (particularly if you target 32-bit platforms; see the bugs section).

## func AddUintptr

```
func AddUintptr(addr *uintptr, delta uintptr) (new uintptr)
```

AddUintptr atomically adds delta to *addr and returns the new value. Consider using the more ergonomic and less error-prone Uintptr.Add instead.

## func AndInt32 1.23

```
func AndInt32(addr *int32, mask int32) (old int32)
```

AndInt32 atomically performs a bitwise AND operation on *addr using the bitmask provided as mask and returns the old value. Consider using the more ergonomic and less error-prone Int32.And instead.

## func AndInt64 1.23

```
func AndInt64(addr *int64, mask int64) (old int64)
```

AndInt64 atomically performs a bitwise AND operation on *addr using the bitmask provided as mask and returns the old value. Consider using the more ergonomic and less error-prone Int64.And instead.

## func AndUint32 1.23

```
func AndUint32(addr *uint32, mask uint32) (old uint32)
```

AndUint32 atomically performs a bitwise AND operation on *addr using the bitmask provided as mask and returns the old value. Consider using the more ergonomic and less error-prone Uint32.And instead.

## func AndUint64 1.23

```
func AndUint64(addr *uint64, mask uint64) (old uint64)
```

AndUint64 atomically performs a bitwise AND operation on *addr using the bitmask provided as mask and returns the old. Consider using the more ergonomic and less error-prone Uint64.And instead.

## func AndUintptr 1.23

```
func AndUintptr(addr *uintptr, mask uintptr) (old uintptr)
```

AndUintptr atomically performs a bitwise AND operation on *addr using the bitmask provided as mask and returns the old value. Consider using the more ergonomic and less error-prone Uintptr.And instead.

## func CompareAndSwapInt32

```
func CompareAndSwapInt32(addr *int32, old, new int32) (swapped bool)
```

CompareAndSwapInt32 executes the compare-and-swap operation for an int32 value. Consider using the more ergonomic and less error-prone Int32.CompareAndSwap instead.

## func CompareAndSwapInt64

```
func CompareAndSwapInt64(addr *int64, old, new int64) (swapped bool)
```

CompareAndSwapInt64 executes the compare-and-swap operation for an int64 value. Consider using the more ergonomic and less error-prone Int64.CompareAndSwap instead (particularly if you target 32-bit platforms; see the bugs section).

## func CompareAndSwapPointer

```
func CompareAndSwapPointer(addr *unsafe.Pointer, old, new unsafe.Pointer) (swapped bool)
```

CompareAndSwapPointer executes the compare-and-swap operation for a unsafe.Pointer value. Consider using the more ergonomic and less error-prone Pointer.CompareAndSwap instead.

## func CompareAndSwapUint32

```
func CompareAndSwapUint32(addr *uint32, old, new uint32) (swapped bool)
```

CompareAndSwapUint32 executes the compare-and-swap operation for a uint32 value. Consider using the more ergonomic and less error-prone Uint32.CompareAndSwap instead.

## func CompareAndSwapUint64

```
func CompareAndSwapUint64(addr *uint64, old, new uint64) (swapped bool)
```

CompareAndSwapUint64 executes the compare-and-swap operation for a uint64 value. Consider using the more ergonomic and less error-prone Uint64.CompareAndSwap instead (particularly if you target 32-bit platforms; see the bugs section).

## func CompareAndSwapUintptr

```
func CompareAndSwapUintptr(addr *uintptr, old, new uintptr) (swapped bool)
```

CompareAndSwapUintptr executes the compare-and-swap operation for a uintptr value. Consider using the more ergonomic and less error-prone Uintptr.CompareAndSwap instead.

## func LoadInt32

```
func LoadInt32(addr *int32) (val int32)
```

LoadInt32 atomically loads *addr. Consider using the more ergonomic and less error-prone Int32.Load instead.

## func LoadInt64

```
func LoadInt64(addr *int64) (val int64)
```

LoadInt64 atomically loads *addr. Consider using the more ergonomic and less error-prone Int64.Load instead (particularly if you target 32-bit platforms; see the bugs section).

## func LoadPointer

```
func LoadPointer(addr *unsafe.Pointer) (val unsafe.Pointer)
```

LoadPointer atomically loads *addr. Consider using the more ergonomic and less error-prone Pointer.Load instead.

## func LoadUint32

```
func LoadUint32(addr *uint32) (val uint32)
```

LoadUint32 atomically loads *addr. Consider using the more ergonomic and less error-prone Uint32.Load instead.

## func LoadUint64

```
func LoadUint64(addr *uint64) (val uint64)
```

LoadUint64 atomically loads *addr. Consider using the more ergonomic and less error-prone Uint64.Load instead (particularly if you target 32-bit platforms; see the bugs section).

## func LoadUintptr

```
func LoadUintptr(addr *uintptr) (val uintptr)
```

LoadUintptr atomically loads *addr. Consider using the more ergonomic and less error-prone Uintptr.Load instead.

## func OrInt32 1.23

```
func OrInt32(addr *int32, mask int32) (old int32)
```

OrInt32 atomically performs a bitwise OR operation on *addr using the bitmask provided as mask and returns the old value. Consider using the more ergonomic and less error-prone Int32.Or instead.

## func OrInt64 1.23

```
func OrInt64(addr *int64, mask int64) (old int64)
```

OrInt64 atomically performs a bitwise OR operation on *addr using the bitmask provided as mask and returns the old value. Consider using the more ergonomic and less error-prone Int64.Or instead.

## func OrUint32 1.23

```
func OrUint32(addr *uint32, mask uint32) (old uint32)
```

OrUint32 atomically performs a bitwise OR operation on *addr using the bitmask provided as mask and returns the old value. Consider using the more ergonomic and less error-prone Uint32.Or instead.

## func OrUint64 1.23

```
func OrUint64(addr *uint64, mask uint64) (old uint64)
```

OrUint64 atomically performs a bitwise OR operation on *addr using the bitmask provided as mask and returns the old value. Consider using the more ergonomic and less error-prone Uint64.Or instead.

## func OrUintptr 1.23

```
func OrUintptr(addr *uintptr, mask uintptr) (old uintptr)
```

OrUintptr atomically performs a bitwise OR operation on *addr using the bitmask provided as mask and returns the old value. Consider using the more ergonomic and less error-prone Uintptr.Or instead.

## func StoreInt32

```
func StoreInt32(addr *int32, val int32)
```

StoreInt32 atomically stores val into *addr. Consider using the more ergonomic and less error-prone Int32.Store instead.

## func StoreInt64

```
func StoreInt64(addr *int64, val int64)
```

StoreInt64 atomically stores val into *addr. Consider using the more ergonomic and less error-prone Int64.Store instead (particularly if you target 32-bit platforms; see the bugs section).

## func StorePointer

```
func StorePointer(addr *unsafe.Pointer, val unsafe.Pointer)
```

StorePointer atomically stores val into *addr. Consider using the more ergonomic and less error-prone Pointer.Store instead.

## func StoreUint32

```
func StoreUint32(addr *uint32, val uint32)
```

StoreUint32 atomically stores val into *addr. Consider using the more ergonomic and less error-prone Uint32.Store instead.

## func StoreUint64

```
func StoreUint64(addr *uint64, val uint64)
```

StoreUint64 atomically stores val into *addr. Consider using the more ergonomic and less error-prone Uint64.Store instead (particularly if you target 32-bit platforms; see the bugs section).

## func StoreUintptr

```
func StoreUintptr(addr *uintptr, val uintptr)
```

StoreUintptr atomically stores val into *addr. Consider using the more ergonomic and less error-prone Uintptr.Store instead.

## func SwapInt32 1.2

```
func SwapInt32(addr *int32, new int32) (old int32)
```

SwapInt32 atomically stores new into *addr and returns the previous *addr value. Consider using the more ergonomic and less error-prone Int32.Swap instead.

## func SwapInt64 1.2

```
func SwapInt64(addr *int64, new int64) (old int64)
```

SwapInt64 atomically stores new into *addr and returns the previous *addr value. Consider using the more ergonomic and less error-prone Int64.Swap instead (particularly if you target 32-bit platforms; see the bugs section).

## func SwapPointer 1.2

```
func SwapPointer(addr *unsafe.Pointer, new unsafe.Pointer) (old unsafe.Pointer)
```

SwapPointer atomically stores new into *addr and returns the previous *addr value. Consider using the more ergonomic and less error-prone Pointer.Swap instead.

## func SwapUint32 1.2

```
func SwapUint32(addr *uint32, new uint32) (old uint32)
```

SwapUint32 atomically stores new into *addr and returns the previous *addr value. Consider using the more ergonomic and less error-prone Uint32.Swap instead.

## func SwapUint64 1.2

```
func SwapUint64(addr *uint64, new uint64) (old uint64)
```

SwapUint64 atomically stores new into *addr and returns the previous *addr value. Consider using the more ergonomic and less error-prone Uint64.Swap instead (particularly if you target 32-bit platforms; see the bugs section).

## func SwapUintptr 1.2

```
func SwapUintptr(addr *uintptr, new uintptr) (old uintptr)
```

SwapUintptr atomically stores new into *addr and returns the previous *addr value. Consider using the more ergonomic and less error-prone Uintptr.Swap instead.

## type Bool 1.19

A Bool is an atomic boolean value. The zero value is false.

Bool must not be copied after first use.

```
type Bool struct {
    // contains filtered or unexported fields
}
```

### func (*Bool) CompareAndSwap 1.19

```
func (x *Bool) CompareAndSwap(old, new bool) (swapped bool)
```

CompareAndSwap executes the compare-and-swap operation for the boolean value x.

### func (*Bool) Load 1.19

```
func (x *Bool) Load() bool
```

Load atomically loads and returns the value stored in x.

### func (*Bool) Store 1.19

```
func (x *Bool) Store(val bool)
```

Store atomically stores val into x.

### func (*Bool) Swap 1.19

```
func (x *Bool) Swap(new bool) (old bool)
```

Swap atomically stores new into x and returns the previous value.

## type Int32 1.19

An Int32 is an atomic int32. The zero value is zero.

Int32 must not be copied after first use.

```
type Int32 struct {
    // contains filtered or unexported fields
}
```

### func (*Int32) Add 1.19

```
func (x *Int32) Add(delta int32) (new int32)
```

Add atomically adds delta to x and returns the new value.

### func (*Int32) And 1.23

```
func (x *Int32) And(mask int32) (old int32)
```

And atomically performs a bitwise AND operation on x using the bitmask provided as mask and returns the old value.

### func (*Int32) CompareAndSwap 1.19

```
func (x *Int32) CompareAndSwap(old, new int32) (swapped bool)
```

CompareAndSwap executes the compare-and-swap operation for x.

### func (*Int32) Load 1.19

```
func (x *Int32) Load() int32
```

Load atomically loads and returns the value stored in x.

### func (*Int32) Or 1.23

```
func (x *Int32) Or(mask int32) (old int32)
```

Or atomically performs a bitwise OR operation on x using the bitmask provided as mask and returns the old value.

### func (*Int32) Store 1.19

```
func (x *Int32) Store(val int32)
```

Store atomically stores val into x.

### func (*Int32) Swap 1.19

```
func (x *Int32) Swap(new int32) (old int32)
```

Swap atomically stores new into x and returns the previous value.

## type Int64 1.19

An Int64 is an atomic int64. The zero value is zero.

Int64 must not be copied after first use.

```
type Int64 struct {
    // contains filtered or unexported fields
}
```

### func (*Int64) Add 1.19

```
func (x *Int64) Add(delta int64) (new int64)
```

Add atomically adds delta to x and returns the new value.

### func (*Int64) And 1.23

```
func (x *Int64) And(mask int64) (old int64)
```

And atomically performs a bitwise AND operation on x using the bitmask provided as mask and returns the old value.

### func (*Int64) CompareAndSwap 1.19

```
func (x *Int64) CompareAndSwap(old, new int64) (swapped bool)
```

CompareAndSwap executes the compare-and-swap operation for x.

### func (*Int64) Load 1.19

```
func (x *Int64) Load() int64
```

Load atomically loads and returns the value stored in x.

### func (*Int64) Or 1.23

```
func (x *Int64) Or(mask int64) (old int64)
```

Or atomically performs a bitwise OR operation on x using the bitmask provided as mask and returns the old value.

### func (*Int64) Store 1.19

```
func (x *Int64) Store(val int64)
```

Store atomically stores val into x.

### func (*Int64) Swap 1.19

```
func (x *Int64) Swap(new int64) (old int64)
```

Swap atomically stores new into x and returns the previous value.

## type Pointer

A Pointer is an atomic pointer of type *T. The zero value is a nil *T.

Pointer must not be copied after first use.

```
type Pointer[T any] struct {
    // contains filtered or unexported fields
}
```

### func (*Pointer[T]) CompareAndSwap

```
func (x *Pointer[T]) CompareAndSwap(old, new *T) (swapped bool)
```

CompareAndSwap executes the compare-and-swap operation for x.

### func (*Pointer[T]) Load

```
func (x *Pointer[T]) Load() *T
```

Load atomically loads and returns the value stored in x.

### func (*Pointer[T]) Store

```
func (x *Pointer[T]) Store(val *T)
```

Store atomically stores val into x.

### func (*Pointer[T]) Swap

```
func (x *Pointer[T]) Swap(new *T) (old *T)
```

Swap atomically stores new into x and returns the previous value.

## type Uint32 1.19

A Uint32 is an atomic uint32. The zero value is zero.

Uint32 must not be copied after first use.

```
type Uint32 struct {
    // contains filtered or unexported fields
}
```

### func (*Uint32) Add 1.19

```
func (x *Uint32) Add(delta uint32) (new uint32)
```

Add atomically adds delta to x and returns the new value.

### func (*Uint32) And 1.23

```
func (x *Uint32) And(mask uint32) (old uint32)
```

And atomically performs a bitwise AND operation on x using the bitmask provided as mask and returns the old value.

### func (*Uint32) CompareAndSwap 1.19

```
func (x *Uint32) CompareAndSwap(old, new uint32) (swapped bool)
```

CompareAndSwap executes the compare-and-swap operation for x.

### func (*Uint32) Load 1.19

```
func (x *Uint32) Load() uint32
```

Load atomically loads and returns the value stored in x.

### func (*Uint32) Or 1.23

```
func (x *Uint32) Or(mask uint32) (old uint32)
```

Or atomically performs a bitwise OR operation on x using the bitmask provided as mask and returns the old value.

### func (*Uint32) Store 1.19

```
func (x *Uint32) Store(val uint32)
```

Store atomically stores val into x.

### func (*Uint32) Swap 1.19

```
func (x *Uint32) Swap(new uint32) (old uint32)
```

Swap atomically stores new into x and returns the previous value.

## type Uint64 1.19

A Uint64 is an atomic uint64. The zero value is zero.

Uint64 must not be copied after first use.

```
type Uint64 struct {
    // contains filtered or unexported fields
}
```

### func (*Uint64) Add 1.19

```
func (x *Uint64) Add(delta uint64) (new uint64)
```

Add atomically adds delta to x and returns the new value.

### func (*Uint64) And 1.23

```
func (x *Uint64) And(mask uint64) (old uint64)
```

And atomically performs a bitwise AND operation on x using the bitmask provided as mask and returns the old value.

### func (*Uint64) CompareAndSwap 1.19

```
func (x *Uint64) CompareAndSwap(old, new uint64) (swapped bool)
```

CompareAndSwap executes the compare-and-swap operation for x.

### func (*Uint64) Load 1.19

```
func (x *Uint64) Load() uint64
```

Load atomically loads and returns the value stored in x.

### func (*Uint64) Or 1.23

```
func (x *Uint64) Or(mask uint64) (old uint64)
```

Or atomically performs a bitwise OR operation on x using the bitmask provided as mask and returns the old value.

### func (*Uint64) Store 1.19

```
func (x *Uint64) Store(val uint64)
```

Store atomically stores val into x.

### func (*Uint64) Swap 1.19

```
func (x *Uint64) Swap(new uint64) (old uint64)
```

Swap atomically stores new into x and returns the previous value.

## type Uintptr 1.19

A Uintptr is an atomic uintptr. The zero value is zero.

Uintptr must not be copied after first use.

```
type Uintptr struct {
    // contains filtered or unexported fields
}
```

### func (*Uintptr) Add 1.19

```
func (x *Uintptr) Add(delta uintptr) (new uintptr)
```

Add atomically adds delta to x and returns the new value.

### func (*Uintptr) And 1.23

```
func (x *Uintptr) And(mask uintptr) (old uintptr)
```

And atomically performs a bitwise AND operation on x using the bitmask provided as mask and returns the old value.

### func (*Uintptr) CompareAndSwap 1.19

```
func (x *Uintptr) CompareAndSwap(old, new uintptr) (swapped bool)
```

CompareAndSwap executes the compare-and-swap operation for x.

### func (*Uintptr) Load 1.19

```
func (x *Uintptr) Load() uintptr
```

Load atomically loads and returns the value stored in x.

### func (*Uintptr) Or 1.23

```
func (x *Uintptr) Or(mask uintptr) (old uintptr)
```

Or atomically performs a bitwise OR operation on x using the bitmask provided as mask and returns the old value.

### func (*Uintptr) Store 1.19

```
func (x *Uintptr) Store(val uintptr)
```

Store atomically stores val into x.

### func (*Uintptr) Swap 1.19

```
func (x *Uintptr) Swap(new uintptr) (old uintptr)
```

Swap atomically stores new into x and returns the previous value.

## type Value 1.4

A Value provides an atomic load and store of a consistently typed value. The zero value for a Value returns nil from Value.Load. Once Value.Store has been called, a Value must not be copied.

A Value must not be copied after first use.

```
type Value struct {
    // contains filtered or unexported fields
}
```

#### Example (Config)

The following example shows how to use Value for periodic program config updates and propagation of the changes to worker goroutines.

Code:

```
var config atomic.Value // holds current server configuration
// Create initial config value and store into config.
config.Store(loadConfig())
go func() {
    // Reload config every 10 seconds
    // and update config value with the new version.
    for {
        time.Sleep(10 * time.Second)
        config.Store(loadConfig())
    }
}()
// Create worker goroutines that handle incoming requests
// using the latest config value.
for i := 0; i < 10; i++ {
    go func() {
        for r := range requests() {
            c := config.Load()
            // Handle request r using config c.
            _, _ = r, c
        }
    }()
}
```

#### Example (ReadMostly)

The following example shows how to maintain a scalable frequently read, but infrequently updated data structure using copy-on-write idiom.

Code:

```
type Map map[string]string
var m atomic.Value
m.Store(make(Map))
var mu sync.Mutex // used only by writers
// read function can be used to read the data without further synchronization
read := func(key string) (val string) {
    m1 := m.Load().(Map)
    return m1[key]
}
// insert function can be used to update the data without further synchronization
insert := func(key, val string) {
    mu.Lock() // synchronize with other potential writers
    defer mu.Unlock()
    m1 := m.Load().(Map) // load current value of the data structure
    m2 := make(Map)      // create a new value
    for k, v := range m1 {
        m2[k] = v // copy all data from the current object to the new one
    }
    m2[key] = val // do the update that we need
    m.Store(m2)   // atomically replace the current object with the new one
    // At this point all new readers start working with the new version.
    // The old version will be garbage collected once the existing readers
    // (if any) are done with it.
}
_, _ = read, insert
```

### func (*Value) CompareAndSwap 1.17

```
func (v *Value) CompareAndSwap(old, new any) (swapped bool)
```

CompareAndSwap executes the compare-and-swap operation for the Value.

All calls to CompareAndSwap for a given Value must use values of the same concrete type. CompareAndSwap of an inconsistent type panics, as does CompareAndSwap(old, nil).

### func (*Value) Load 1.4

```
func (v *Value) Load() (val any)
```

Load returns the value set by the most recent Store. It returns nil if there has been no call to Store for this Value.

### func (*Value) Store 1.4

```
func (v *Value) Store(val any)
```

Store sets the value of the Value v to val. All calls to Store for a given Value must use values of the same concrete type. Store of an inconsistent type panics, as does Store(nil).

### func (*Value) Swap 1.17

```
func (v *Value) Swap(new any) (old any)
```

Swap stores new into Value and returns the previous value. It returns nil if the Value is empty.

All calls to Swap for a given Value must use values of the same concrete type. Swap of an inconsistent type panics, as does Swap(nil).

## Bugs

- ☞ On 386, the 64-bit functions use instructions unavailable before the Pentium MMX. 
On non-Linux ARM, the 64-bit functions use instructions unavailable before the ARMv6k core. 
On ARM, 386, and 32-bit MIPS, it is the caller's responsibility to arrange for 64-bit alignment of 64-bit words accessed atomically via the primitive atomic functions (types Int64 and Uint64 are automatically aligned). The first word in an allocated struct, array, or slice; in a global variable; or in a local variable (because on 32-bit architectures, the subject of 64-bit atomic operations will escape to the heap) can be relied upon to be 64-bit aligned.

On 386, the 64-bit functions use instructions unavailable before the Pentium MMX.

On non-Linux ARM, the 64-bit functions use instructions unavailable before the ARMv6k core.

On ARM, 386, and 32-bit MIPS, it is the caller's responsibility to arrange for 64-bit alignment of 64-bit words accessed atomically via the primitive atomic functions (types Int64 and Uint64 are automatically aligned). The first word in an allocated struct, array, or slice; in a global variable; or in a local variable (because on 32-bit architectures, the subject of 64-bit atomic operations will escape to the heap) can be relied upon to be 64-bit aligned.

© Google, Inc.Licensed under the Creative Commons Attribution License 3.0.
 http://golang.org/pkg/sync/atomic/
