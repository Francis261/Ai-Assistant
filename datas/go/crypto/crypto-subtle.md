# Package subtle

Source: https://devdocs.io/go/crypto/subtle/index

- import "crypto/subtle"
- Overview
- Index

## Overview

Package subtle implements functions that are often useful in cryptographic code but require careful thought to use correctly.

## Index

- func ConstantTimeByteEq(x, y uint8) int
- func ConstantTimeCompare(x, y []byte) int
- func ConstantTimeCopy(v int, x, y []byte)
- func ConstantTimeEq(x, y int32) int
- func ConstantTimeLessOrEq(x, y int) int
- func ConstantTimeSelect(v, x, y int) int
- func WithDataIndependentTiming(f func())
- func XORBytes(dst, x, y []byte) int

### Package files

constant_time.go dit.go xor.go

## func ConstantTimeByteEq

```
func ConstantTimeByteEq(x, y uint8) int
```

ConstantTimeByteEq returns 1 if x == y and 0 otherwise.

## func ConstantTimeCompare

```
func ConstantTimeCompare(x, y []byte) int
```

ConstantTimeCompare returns 1 if the two slices, x and y, have equal contents and 0 otherwise. The time taken is a function of the length of the slices and is independent of the contents. If the lengths of x and y do not match it returns 0 immediately.

## func ConstantTimeCopy

```
func ConstantTimeCopy(v int, x, y []byte)
```

ConstantTimeCopy copies the contents of y into x (a slice of equal length) if v == 1. If v == 0, x is left unchanged. Its behavior is undefined if v takes any other value.

## func ConstantTimeEq

```
func ConstantTimeEq(x, y int32) int
```

ConstantTimeEq returns 1 if x == y and 0 otherwise.

## func ConstantTimeLessOrEq 1.2

```
func ConstantTimeLessOrEq(x, y int) int
```

ConstantTimeLessOrEq returns 1 if x <= y and 0 otherwise. Its behavior is undefined if x or y are negative or > 2**31 - 1.

## func ConstantTimeSelect

```
func ConstantTimeSelect(v, x, y int) int
```

ConstantTimeSelect returns x if v == 1 and y if v == 0. Its behavior is undefined if v takes any other value.

## func WithDataIndependentTiming 1.24

```
func WithDataIndependentTiming(f func())
```

WithDataIndependentTiming enables architecture specific features which ensure that the timing of specific instructions is independent of their inputs before executing f. On f returning it disables these features.

Any goroutine spawned by f will also have data independent timing enabled for its lifetime, as well as any of their descendant goroutines.

Any C code called via cgo from within f, or from a goroutine spawned by f, will also have data independent timing enabled for the duration of the call. If the C code disables data independent timing, it will be re-enabled on return to Go.

If C code called via cgo, from f or elsewhere, enables or disables data independent timing then calling into Go will preserve that state for the duration of the call.

WithDataIndependentTiming should only be used when f is written to make use of constant-time operations. WithDataIndependentTiming does not make variable-time code constant-time.

Calls to WithDataIndependentTiming may be nested.

On Arm64 processors with FEAT_DIT, WithDataIndependentTiming enables PSTATE.DIT. See https://developer.arm.com/documentation/ka005181/1-0/?lang=en.

Currently, on all other architectures WithDataIndependentTiming executes f immediately with no other side-effects.

## func XORBytes 1.20

```
func XORBytes(dst, x, y []byte) int
```

XORBytes sets dst[i] = x[i] ^ y[i] for all i < n = min(len(x), len(y)), returning n, the number of bytes written to dst.

If dst does not have length at least n, XORBytes panics without writing anything to dst.

dst and x or y may overlap exactly or not at all, otherwise XORBytes may panic.

© Google, Inc.Licensed under the Creative Commons Attribution License 3.0.
 http://golang.org/pkg/crypto/subtle/
