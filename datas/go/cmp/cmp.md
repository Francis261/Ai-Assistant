# Package cmp

Source: https://devdocs.io/go/cmp/index

- import "cmp"
- Overview
- Index
- Examples

## Overview

Package cmp provides types and functions related to comparing ordered values.

## Index

- func Compare[T Ordered](x, y T) int
- func Less[T Ordered](x, y T) bool
- func Or[T comparable](vals ...T) T
- type Ordered

### Examples

### Package files

cmp.go

## func Compare 1.21

```
func Compare[T Ordered](x, y T) int
```

Compare returns

```
-1 if x is less than y,
 0 if x equals y,
+1 if x is greater than y.
```

For floating-point types, a NaN is considered less than any non-NaN, a NaN is considered equal to a NaN, and -0.0 is equal to 0.0.

#### Example

Code:

```
fmt.Println(cmp.Compare(1, 2))
fmt.Println(cmp.Compare("a", "aa"))
fmt.Println(cmp.Compare(1.5, 1.5))
fmt.Println(cmp.Compare(math.NaN(), 1.0))
```

Output:

```
-1
-1
0
-1
```

## func Less 1.21

```
func Less[T Ordered](x, y T) bool
```

Less reports whether x is less than y. For floating-point types, a NaN is considered less than any non-NaN, and -0.0 is not less than (is equal to) 0.0.

#### Example

Code:

```
fmt.Println(cmp.Less(1, 2))
fmt.Println(cmp.Less("a", "aa"))
fmt.Println(cmp.Less(1.0, math.NaN()))
fmt.Println(cmp.Less(math.NaN(), 1.0))
```

Output:

```
true
true
false
true
```

## func Or 1.22

```
func Or[T comparable](vals ...T) T
```

Or returns the first of its arguments that is not equal to the zero value. If no argument is non-zero, it returns the zero value.

#### Example

Code:

```
// Suppose we have some user input
// that may or may not be an empty string
userInput1 := ""
userInput2 := "some text"

fmt.Println(cmp.Or(userInput1, "default"))
fmt.Println(cmp.Or(userInput2, "default"))
fmt.Println(cmp.Or(userInput1, userInput2, "default"))
```

Output:

```
default
some text
some text
```

#### Example (Sort)

Code:

```
type Order struct {
    Product  string
    Customer string
    Price    float64
}
orders := []Order{
    {"foo", "alice", 1.00},
    {"bar", "bob", 3.00},
    {"baz", "carol", 4.00},
    {"foo", "alice", 2.00},
    {"bar", "carol", 1.00},
    {"foo", "bob", 4.00},
}
// Sort by customer first, product second, and last by higher price
slices.SortFunc(orders, func(a, b Order) int {
    return cmp.Or(
        strings.Compare(a.Customer, b.Customer),
        strings.Compare(a.Product, b.Product),
        cmp.Compare(b.Price, a.Price),
    )
})
for _, order := range orders {
    fmt.Printf("%s %s %.2f\n", order.Product, order.Customer, order.Price)
}
```

Output:

```
foo alice 2.00
foo alice 1.00
bar bob 3.00
foo bob 4.00
bar carol 1.00
baz carol 4.00
```

## type Ordered 1.21

Ordered is a constraint that permits any ordered type: any type that supports the operators < <= >= >. If future releases of Go add new ordered types, this constraint will be modified to include them.

Note that floating-point types may contain NaN ("not-a-number") values. An operator such as == or < will always report false when comparing a NaN value with any other value, NaN or not. See the Compare function for a consistent way to compare NaN values.

```
type Ordered interface {
    ~int | ~int8 | ~int16 | ~int32 | ~int64 |
        ~uint | ~uint8 | ~uint16 | ~uint32 | ~uint64 | ~uintptr |
        ~float32 | ~float64 |
        ~string
}
```

© Google, Inc.Licensed under the Creative Commons Attribution License 3.0.
 http://golang.org/pkg/cmp/
