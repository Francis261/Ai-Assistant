# Package maps

Source: https://devdocs.io/go/maps/index

- import "maps"
- Overview
- Index
- Examples

## Overview

Package maps defines various functions useful with maps of any type.

This package does not have any special handling for non-reflexive keys (keys k where k != k), such as floating-point NaNs.

## Index

- func All[Map ~map[K]V, K comparable, V any](m Map) iter.Seq2[K, V]
- func Clone[M ~map[K]V, K comparable, V any](m M) M
- func Collect[K comparable, V any](seq iter.Seq2[K, V]) map[K]V
- func Copy[M1 ~map[K]V, M2 ~map[K]V, K comparable, V any](dst M1, src M2)
- func DeleteFunc[M ~map[K]V, K comparable, V any](m M, del func(K, V) bool)
- func Equal[M1, M2 ~map[K]V, K, V comparable](m1 M1, m2 M2) bool
- func EqualFunc[M1 ~map[K]V1, M2 ~map[K]V2, K comparable, V1, V2 any](m1 M1, m2 M2, eq func(V1, V2) bool) bool
- func Insert[Map ~map[K]V, K comparable, V any](m Map, seq iter.Seq2[K, V])
- func Keys[Map ~map[K]V, K comparable, V any](m Map) iter.Seq[K]
- func Values[Map ~map[K]V, K comparable, V any](m Map) iter.Seq[V]

### Examples

### Package files

iter.go maps.go

## func All 1.23

```
func All[Map ~map[K]V, K comparable, V any](m Map) iter.Seq2[K, V]
```

All returns an iterator over key-value pairs from m. The iteration order is not specified and is not guaranteed to be the same from one call to the next.

#### Example

Code:

```
m1 := map[string]int{
    "one": 1,
    "two": 2,
}
m2 := map[string]int{
    "one": 10,
}
maps.Insert(m2, maps.All(m1))
fmt.Println("m2 is:", m2)
```

Output:

```
m2 is: map[one:1 two:2]
```

## func Clone 1.21

```
func Clone[M ~map[K]V, K comparable, V any](m M) M
```

Clone returns a copy of m. This is a shallow clone: the new keys and values are set using ordinary assignment.

#### Example

Code:

```
m1 := map[string]int{
    "key": 1,
}
m2 := maps.Clone(m1)
m2["key"] = 100
fmt.Println(m1["key"])
fmt.Println(m2["key"])

m3 := map[string][]int{
    "key": {1, 2, 3},
}
m4 := maps.Clone(m3)
fmt.Println(m4["key"][0])
m4["key"][0] = 100
fmt.Println(m3["key"][0])
fmt.Println(m4["key"][0])
```

Output:

```
1
100
1
100
100
```

## func Collect 1.23

```
func Collect[K comparable, V any](seq iter.Seq2[K, V]) map[K]V
```

Collect collects key-value pairs from seq into a new map and returns it.

#### Example

Code:

```
s1 := []string{"zero", "one", "two", "three"}
m1 := maps.Collect(slices.All(s1))
fmt.Println("m1 is:", m1)
```

Output:

```
m1 is: map[0:zero 1:one 2:two 3:three]
```

## func Copy 1.21

```
func Copy[M1 ~map[K]V, M2 ~map[K]V, K comparable, V any](dst M1, src M2)
```

Copy copies all key/value pairs in src adding them to dst. When a key in src is already present in dst, the value in dst will be overwritten by the value associated with the key in src.

#### Example

Code:

```
m1 := map[string]int{
    "one": 1,
    "two": 2,
}
m2 := map[string]int{
    "one": 10,
}

maps.Copy(m2, m1)
fmt.Println("m2 is:", m2)

m2["one"] = 100
fmt.Println("m1 is:", m1)
fmt.Println("m2 is:", m2)

m3 := map[string][]int{
    "one": {1, 2, 3},
    "two": {4, 5, 6},
}
m4 := map[string][]int{
    "one": {7, 8, 9},
}

maps.Copy(m4, m3)
fmt.Println("m4 is:", m4)

m4["one"][0] = 100
fmt.Println("m3 is:", m3)
fmt.Println("m4 is:", m4)
```

Output:

```
m2 is: map[one:1 two:2]
m1 is: map[one:1 two:2]
m2 is: map[one:100 two:2]
m4 is: map[one:[1 2 3] two:[4 5 6]]
m3 is: map[one:[100 2 3] two:[4 5 6]]
m4 is: map[one:[100 2 3] two:[4 5 6]]
```

## func DeleteFunc 1.21

```
func DeleteFunc[M ~map[K]V, K comparable, V any](m M, del func(K, V) bool)
```

DeleteFunc deletes any key/value pairs from m for which del returns true.

#### Example

Code:

```
m := map[string]int{
    "one":   1,
    "two":   2,
    "three": 3,
    "four":  4,
}
maps.DeleteFunc(m, func(k string, v int) bool {
    return v%2 != 0 // delete odd values
})
fmt.Println(m)
```

Output:

```
map[four:4 two:2]
```

## func Equal 1.21

```
func Equal[M1, M2 ~map[K]V, K, V comparable](m1 M1, m2 M2) bool
```

Equal reports whether two maps contain the same key/value pairs. Values are compared using ==.

#### Example

Code:

```
m1 := map[int]string{
    1:    "one",
    10:   "Ten",
    1000: "THOUSAND",
}
m2 := map[int]string{
    1:    "one",
    10:   "Ten",
    1000: "THOUSAND",
}
m3 := map[int]string{
    1:    "one",
    10:   "ten",
    1000: "thousand",
}

fmt.Println(maps.Equal(m1, m2))
fmt.Println(maps.Equal(m1, m3))
```

Output:

```
true
false
```

## func EqualFunc 1.21

```
func EqualFunc[M1 ~map[K]V1, M2 ~map[K]V2, K comparable, V1, V2 any](m1 M1, m2 M2, eq func(V1, V2) bool) bool
```

EqualFunc is like Equal, but compares values using eq. Keys are still compared with ==.

#### Example

Code:

```
m1 := map[int]string{
    1:    "one",
    10:   "Ten",
    1000: "THOUSAND",
}
m2 := map[int][]byte{
    1:    []byte("One"),
    10:   []byte("Ten"),
    1000: []byte("Thousand"),
}
eq := maps.EqualFunc(m1, m2, func(v1 string, v2 []byte) bool {
    return strings.EqualFold(v1, string(v2))
})
fmt.Println(eq)
```

Output:

```
true
```

## func Insert 1.23

```
func Insert[Map ~map[K]V, K comparable, V any](m Map, seq iter.Seq2[K, V])
```

Insert adds the key-value pairs from seq to m. If a key in seq already exists in m, its value will be overwritten.

#### Example

Code:

```
m1 := map[int]string{
    1000: "THOUSAND",
}
s1 := []string{"zero", "one", "two", "three"}
maps.Insert(m1, slices.All(s1))
fmt.Println("m1 is:", m1)
```

Output:

```
m1 is: map[0:zero 1:one 2:two 3:three 1000:THOUSAND]
```

## func Keys 1.23

```
func Keys[Map ~map[K]V, K comparable, V any](m Map) iter.Seq[K]
```

Keys returns an iterator over keys in m. The iteration order is not specified and is not guaranteed to be the same from one call to the next.

#### Example

Code:

```
m1 := map[int]string{
    1:    "one",
    10:   "Ten",
    1000: "THOUSAND",
}
keys := slices.Sorted(maps.Keys(m1))
fmt.Println(keys)
```

Output:

```
[1 10 1000]
```

## func Values 1.23

```
func Values[Map ~map[K]V, K comparable, V any](m Map) iter.Seq[V]
```

Values returns an iterator over values in m. The iteration order is not specified and is not guaranteed to be the same from one call to the next.

#### Example

Code:

```
m1 := map[int]string{
    1:    "one",
    10:   "Ten",
    1000: "THOUSAND",
}
values := slices.Sorted(maps.Values(m1))
fmt.Println(values)
```

Output:

```
[THOUSAND Ten one]
```

© Google, Inc.Licensed under the Creative Commons Attribution License 3.0.
 http://golang.org/pkg/maps/
