# Package slices

Source: https://devdocs.io/go/slices/index

- import "slices"
- Overview
- Index
- Examples

## Overview

Package slices defines various functions useful with slices of any type.

## Index

- func All[Slice ~[]E, E any](s Slice) iter.Seq2[int, E]
- func AppendSeq[Slice ~[]E, E any](s Slice, seq iter.Seq[E]) Slice
- func Backward[Slice ~[]E, E any](s Slice) iter.Seq2[int, E]
- func BinarySearch[S ~[]E, E cmp.Ordered](x S, target E) (int, bool)
- func BinarySearchFunc[S ~[]E, E, T any](x S, target T, cmp func(E, T) int) (int, bool)
- func Chunk[Slice ~[]E, E any](s Slice, n int) iter.Seq[Slice]
- func Clip[S ~[]E, E any](s S) S
- func Clone[S ~[]E, E any](s S) S
- func Collect[E any](seq iter.Seq[E]) []E
- func Compact[S ~[]E, E comparable](s S) S
- func CompactFunc[S ~[]E, E any](s S, eq func(E, E) bool) S
- func Compare[S ~[]E, E cmp.Ordered](s1, s2 S) int
- func CompareFunc[S1 ~[]E1, S2 ~[]E2, E1, E2 any](s1 S1, s2 S2, cmp func(E1, E2) int) int
- func Concat[S ~[]E, E any](slices ...S) S
- func Contains[S ~[]E, E comparable](s S, v E) bool
- func ContainsFunc[S ~[]E, E any](s S, f func(E) bool) bool
- func Delete[S ~[]E, E any](s S, i, j int) S
- func DeleteFunc[S ~[]E, E any](s S, del func(E) bool) S
- func Equal[S ~[]E, E comparable](s1, s2 S) bool
- func EqualFunc[S1 ~[]E1, S2 ~[]E2, E1, E2 any](s1 S1, s2 S2, eq func(E1, E2) bool) bool
- func Grow[S ~[]E, E any](s S, n int) S
- func Index[S ~[]E, E comparable](s S, v E) int
- func IndexFunc[S ~[]E, E any](s S, f func(E) bool) int
- func Insert[S ~[]E, E any](s S, i int, v ...E) S
- func IsSorted[S ~[]E, E cmp.Ordered](x S) bool
- func IsSortedFunc[S ~[]E, E any](x S, cmp func(a, b E) int) bool
- func Max[S ~[]E, E cmp.Ordered](x S) E
- func MaxFunc[S ~[]E, E any](x S, cmp func(a, b E) int) E
- func Min[S ~[]E, E cmp.Ordered](x S) E
- func MinFunc[S ~[]E, E any](x S, cmp func(a, b E) int) E
- func Repeat[S ~[]E, E any](x S, count int) S
- func Replace[S ~[]E, E any](s S, i, j int, v ...E) S
- func Reverse[S ~[]E, E any](s S)
- func Sort[S ~[]E, E cmp.Ordered](x S)
- func SortFunc[S ~[]E, E any](x S, cmp func(a, b E) int)
- func SortStableFunc[S ~[]E, E any](x S, cmp func(a, b E) int)
- func Sorted[E cmp.Ordered](seq iter.Seq[E]) []E
- func SortedFunc[E any](seq iter.Seq[E], cmp func(E, E) int) []E
- func SortedStableFunc[E any](seq iter.Seq[E], cmp func(E, E) int) []E
- func Values[Slice ~[]E, E any](s Slice) iter.Seq[E]

### Examples

### Package files

iter.go slices.go sort.go zsortanyfunc.go zsortordered.go

## func All 1.23

```
func All[Slice ~[]E, E any](s Slice) iter.Seq2[int, E]
```

All returns an iterator over index-value pairs in the slice in the usual order.

#### Example

Code:

```
names := []string{"Alice", "Bob", "Vera"}
for i, v := range slices.All(names) {
    fmt.Println(i, ":", v)
}
```

Output:

```
0 : Alice
1 : Bob
2 : Vera
```

## func AppendSeq 1.23

```
func AppendSeq[Slice ~[]E, E any](s Slice, seq iter.Seq[E]) Slice
```

AppendSeq appends the values from seq to the slice and returns the extended slice. If seq is empty, the result preserves the nilness of s.

#### Example

Code:

```
seq := func(yield func(int) bool) {
    for i := 0; i < 10; i += 2 {
        if !yield(i) {
            return
        }
    }
}

s := slices.AppendSeq([]int{1, 2}, seq)
fmt.Println(s)
```

Output:

```
[1 2 0 2 4 6 8]
```

## func Backward 1.23

```
func Backward[Slice ~[]E, E any](s Slice) iter.Seq2[int, E]
```

Backward returns an iterator over index-value pairs in the slice, traversing it backward with descending indices.

#### Example

Code:

```
names := []string{"Alice", "Bob", "Vera"}
for i, v := range slices.Backward(names) {
    fmt.Println(i, ":", v)
}
```

Output:

```
2 : Vera
1 : Bob
0 : Alice
```

## func BinarySearch 1.21

```
func BinarySearch[S ~[]E, E cmp.Ordered](x S, target E) (int, bool)
```

BinarySearch searches for target in a sorted slice and returns the earliest position where target is found, or the position where target would appear in the sort order; it also returns a bool saying whether the target is really found in the slice. The slice must be sorted in increasing order.

#### Example

Code:

```
names := []string{"Alice", "Bob", "Vera"}
n, found := slices.BinarySearch(names, "Vera")
fmt.Println("Vera:", n, found)
n, found = slices.BinarySearch(names, "Bill")
fmt.Println("Bill:", n, found)
```

Output:

```
Vera: 2 true
Bill: 1 false
```

## func BinarySearchFunc 1.21

```
func BinarySearchFunc[S ~[]E, E, T any](x S, target T, cmp func(E, T) int) (int, bool)
```

BinarySearchFunc works like BinarySearch, but uses a custom comparison function. The slice must be sorted in increasing order, where "increasing" is defined by cmp. cmp should return 0 if the slice element matches the target, a negative number if the slice element precedes the target, or a positive number if the slice element follows the target. cmp must implement the same ordering as the slice, such that if cmp(a, t) < 0 and cmp(b, t) >= 0, then a must precede b in the slice.

#### Example

Code:

```
type Person struct {
    Name string
    Age  int
}
people := []Person{
    {"Alice", 55},
    {"Bob", 24},
    {"Gopher", 13},
}
n, found := slices.BinarySearchFunc(people, Person{"Bob", 0}, func(a, b Person) int {
    return strings.Compare(a.Name, b.Name)
})
fmt.Println("Bob:", n, found)
```

Output:

```
Bob: 1 true
```

## func Chunk 1.23

```
func Chunk[Slice ~[]E, E any](s Slice, n int) iter.Seq[Slice]
```

Chunk returns an iterator over consecutive sub-slices of up to n elements of s. All but the last sub-slice will have size n. All sub-slices are clipped to have no capacity beyond the length. If s is empty, the sequence is empty: there is no empty slice in the sequence. Chunk panics if n is less than 1.

#### Example

Code:

```
type Person struct {
    Name string
    Age  int
}

type People []Person

people := People{
    {"Gopher", 13},
    {"Alice", 20},
    {"Bob", 5},
    {"Vera", 24},
    {"Zac", 15},
}

// Chunk people into []Person 2 elements at a time.
for c := range slices.Chunk(people, 2) {
    fmt.Println(c)
}
```

Output:

```
[{Gopher 13} {Alice 20}]
[{Bob 5} {Vera 24}]
[{Zac 15}]
```

## func Clip 1.21

```
func Clip[S ~[]E, E any](s S) S
```

Clip removes unused capacity from the slice, returning s[:len(s):len(s)]. The result preserves the nilness of s.

#### Example

Code:

```
a := [...]int{0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
s := a[:4:10]
clip := slices.Clip(s)
fmt.Println(cap(s))
fmt.Println(clip)
fmt.Println(len(clip))
fmt.Println(cap(clip))
```

Output:

```
10
[0 1 2 3]
4
4
```

## func Clone 1.21

```
func Clone[S ~[]E, E any](s S) S
```

Clone returns a copy of the slice. The elements are copied using assignment, so this is a shallow clone. The result may have additional unused capacity. The result preserves the nilness of s.

#### Example

Code:

```
numbers := []int{0, 42, -10, 8}
clone := slices.Clone(numbers)
fmt.Println(clone)
clone[2] = 10
fmt.Println(numbers)
fmt.Println(clone)
```

Output:

```
[0 42 -10 8]
[0 42 -10 8]
[0 42 10 8]
```

## func Collect 1.23

```
func Collect[E any](seq iter.Seq[E]) []E
```

Collect collects values from seq into a new slice and returns it. If seq is empty, the result is nil.

#### Example

Code:

```
seq := func(yield func(int) bool) {
    for i := 0; i < 10; i += 2 {
        if !yield(i) {
            return
        }
    }
}

s := slices.Collect(seq)
fmt.Println(s)
```

Output:

```
[0 2 4 6 8]
```

## func Compact 1.21

```
func Compact[S ~[]E, E comparable](s S) S
```

Compact replaces consecutive runs of equal elements with a single copy. This is like the uniq command found on Unix. Compact modifies the contents of the slice s and returns the modified slice, which may have a smaller length. Compact zeroes the elements between the new length and the original length. The result preserves the nilness of s.

#### Example

Code:

```
seq := []int{0, 1, 1, 2, 3, 5, 8}
seq = slices.Compact(seq)
fmt.Println(seq)
```

Output:

```
[0 1 2 3 5 8]
```

## func CompactFunc 1.21

```
func CompactFunc[S ~[]E, E any](s S, eq func(E, E) bool) S
```

CompactFunc is like Compact but uses an equality function to compare elements. For runs of elements that compare equal, CompactFunc keeps the first one. CompactFunc zeroes the elements between the new length and the original length. The result preserves the nilness of s.

#### Example

Code:

```
names := []string{"bob", "Bob", "alice", "Vera", "VERA"}
names = slices.CompactFunc(names, strings.EqualFold)
fmt.Println(names)
```

Output:

```
[bob alice Vera]
```

## func Compare 1.21

```
func Compare[S ~[]E, E cmp.Ordered](s1, s2 S) int
```

Compare compares the elements of s1 and s2, using cmp.Compare on each pair of elements. The elements are compared sequentially, starting at index 0, until one element is not equal to the other. The result of comparing the first non-matching elements is returned. If both slices are equal until one of them ends, the shorter slice is considered less than the longer one. The result is 0 if s1 == s2, -1 if s1 < s2, and +1 if s1 > s2.

#### Example

Code:

```
names := []string{"Alice", "Bob", "Vera"}
fmt.Println("Equal:", slices.Compare(names, []string{"Alice", "Bob", "Vera"}))
fmt.Println("V < X:", slices.Compare(names, []string{"Alice", "Bob", "Xena"}))
fmt.Println("V > C:", slices.Compare(names, []string{"Alice", "Bob", "Cat"}))
fmt.Println("3 > 2:", slices.Compare(names, []string{"Alice", "Bob"}))
```

Output:

```
Equal: 0
V < X: -1
V > C: 1
3 > 2: 1
```

## func CompareFunc 1.21

```
func CompareFunc[S1 ~[]E1, S2 ~[]E2, E1, E2 any](s1 S1, s2 S2, cmp func(E1, E2) int) int
```

CompareFunc is like Compare but uses a custom comparison function on each pair of elements. The result is the first non-zero result of cmp; if cmp always returns 0 the result is 0 if len(s1) == len(s2), -1 if len(s1) < len(s2), and +1 if len(s1) > len(s2).

#### Example

Code:

```
numbers := []int{0, 43, 8}
strings := []string{"0", "0", "8"}
result := slices.CompareFunc(numbers, strings, func(n int, s string) int {
    sn, err := strconv.Atoi(s)
    if err != nil {
        return 1
    }
    return cmp.Compare(n, sn)
})
fmt.Println(result)
```

Output:

```
1
```

## func Concat 1.22

```
func Concat[S ~[]E, E any](slices ...S) S
```

Concat returns a new slice concatenating the passed in slices. If the concatenation is empty, the result is nil.

#### Example

Code:

```
s1 := []int{0, 1, 2, 3}
s2 := []int{4, 5, 6}
concat := slices.Concat(s1, s2)
fmt.Println(concat)
```

Output:

```
[0 1 2 3 4 5 6]
```

## func Contains 1.21

```
func Contains[S ~[]E, E comparable](s S, v E) bool
```

Contains reports whether v is present in s.

#### Example

Code:

```
numbers := []int{0, 1, 2, 3}
fmt.Println(slices.Contains(numbers, 2))
fmt.Println(slices.Contains(numbers, 4))
```

Output:

```
true
false
```

## func ContainsFunc 1.21

```
func ContainsFunc[S ~[]E, E any](s S, f func(E) bool) bool
```

ContainsFunc reports whether at least one element e of s satisfies f(e).

#### Example

Code:

```
numbers := []int{0, 42, -10, 8}
hasNegative := slices.ContainsFunc(numbers, func(n int) bool {
    return n < 0
})
fmt.Println("Has a negative:", hasNegative)
hasOdd := slices.ContainsFunc(numbers, func(n int) bool {
    return n%2 != 0
})
fmt.Println("Has an odd number:", hasOdd)
```

Output:

```
Has a negative: true
Has an odd number: false
```

## func Delete 1.21

```
func Delete[S ~[]E, E any](s S, i, j int) S
```

Delete removes the elements s[i:j] from s, returning the modified slice. Delete panics if j > len(s) or s[i:j] is not a valid slice of s. Delete is O(len(s)-i), so if many items must be deleted, it is better to make a single call deleting them all together than to delete one at a time. Delete zeroes the elements s[len(s)-(j-i):len(s)]. If the result is empty, it has the same nilness as s.

#### Example

Code:

```
letters := []string{"a", "b", "c", "d", "e"}
letters = slices.Delete(letters, 1, 4)
fmt.Println(letters)
```

Output:

```
[a e]
```

## func DeleteFunc 1.21

```
func DeleteFunc[S ~[]E, E any](s S, del func(E) bool) S
```

DeleteFunc removes any elements from s for which del returns true, returning the modified slice. DeleteFunc zeroes the elements between the new length and the original length. If the result is empty, it has the same nilness as s.

#### Example

Code:

```
seq := []int{0, 1, 1, 2, 3, 5, 8}
seq = slices.DeleteFunc(seq, func(n int) bool {
    return n%2 != 0 // delete the odd numbers
})
fmt.Println(seq)
```

Output:

```
[0 2 8]
```

## func Equal 1.21

```
func Equal[S ~[]E, E comparable](s1, s2 S) bool
```

Equal reports whether two slices are equal: the same length and all elements equal. If the lengths are different, Equal returns false. Otherwise, the elements are compared in increasing index order, and the comparison stops at the first unequal pair. Empty and nil slices are considered equal. Floating point NaNs are not considered equal.

#### Example

Code:

```
numbers := []int{0, 42, 8}
fmt.Println(slices.Equal(numbers, []int{0, 42, 8}))
fmt.Println(slices.Equal(numbers, []int{10}))
```

Output:

```
true
false
```

## func EqualFunc 1.21

```
func EqualFunc[S1 ~[]E1, S2 ~[]E2, E1, E2 any](s1 S1, s2 S2, eq func(E1, E2) bool) bool
```

EqualFunc reports whether two slices are equal using an equality function on each pair of elements. If the lengths are different, EqualFunc returns false. Otherwise, the elements are compared in increasing index order, and the comparison stops at the first index for which eq returns false.

#### Example

Code:

```
numbers := []int{0, 42, 8}
strings := []string{"000", "42", "0o10"}
equal := slices.EqualFunc(numbers, strings, func(n int, s string) bool {
    sn, err := strconv.ParseInt(s, 0, 64)
    if err != nil {
        return false
    }
    return n == int(sn)
})
fmt.Println(equal)
```

Output:

```
true
```

## func Grow 1.21

```
func Grow[S ~[]E, E any](s S, n int) S
```

Grow increases the slice's capacity, if necessary, to guarantee space for another n elements. After Grow(n), at least n elements can be appended to the slice without another allocation. If n is negative or too large to allocate the memory, Grow panics. The result preserves the nilness of s.

#### Example

Code:

```
numbers := []int{0, 42, -10, 8}
grow := slices.Grow(numbers, 2)
fmt.Println(cap(numbers))
fmt.Println(grow)
fmt.Println(len(grow))
fmt.Println(cap(grow))
```

Output:

```
4
[0 42 -10 8]
4
8
```

## func Index 1.21

```
func Index[S ~[]E, E comparable](s S, v E) int
```

Index returns the index of the first occurrence of v in s, or -1 if not present.

#### Example

Code:

```
numbers := []int{0, 42, 8}
fmt.Println(slices.Index(numbers, 8))
fmt.Println(slices.Index(numbers, 7))
```

Output:

```
2
-1
```

## func IndexFunc 1.21

```
func IndexFunc[S ~[]E, E any](s S, f func(E) bool) int
```

IndexFunc returns the first index i satisfying f(s[i]), or -1 if none do.

#### Example

Code:

```
numbers := []int{0, 42, -10, 8}
i := slices.IndexFunc(numbers, func(n int) bool {
    return n < 0
})
fmt.Println("First negative at index", i)
```

Output:

```
First negative at index 2
```

## func Insert 1.21

```
func Insert[S ~[]E, E any](s S, i int, v ...E) S
```

Insert inserts the values v... into s at index i, returning the modified slice. The elements at s[i:] are shifted up to make room. In the returned slice r, r[i] == v[0], and, if i < len(s), r[i+len(v)] == value originally at s[i]. Insert panics if i > len(s). This function is O(len(s) + len(v)). If the result is empty, it has the same nilness as s.

#### Example

Code:

```
names := []string{"Alice", "Bob", "Vera"}
names = slices.Insert(names, 1, "Bill", "Billie")
names = slices.Insert(names, len(names), "Zac")
fmt.Println(names)
```

Output:

```
[Alice Bill Billie Bob Vera Zac]
```

## func IsSorted 1.21

```
func IsSorted[S ~[]E, E cmp.Ordered](x S) bool
```

IsSorted reports whether x is sorted in ascending order.

#### Example

Code:

```
fmt.Println(slices.IsSorted([]string{"Alice", "Bob", "Vera"}))
fmt.Println(slices.IsSorted([]int{0, 2, 1}))
```

Output:

```
true
false
```

## func IsSortedFunc 1.21

```
func IsSortedFunc[S ~[]E, E any](x S, cmp func(a, b E) int) bool
```

IsSortedFunc reports whether x is sorted in ascending order, with cmp as the comparison function as defined by SortFunc.

#### Example

Code:

```
names := []string{"alice", "Bob", "VERA"}
isSortedInsensitive := slices.IsSortedFunc(names, func(a, b string) int {
    return strings.Compare(strings.ToLower(a), strings.ToLower(b))
})
fmt.Println(isSortedInsensitive)
fmt.Println(slices.IsSorted(names))
```

Output:

```
true
false
```

## func Max 1.21

```
func Max[S ~[]E, E cmp.Ordered](x S) E
```

Max returns the maximal value in x. It panics if x is empty. For floating-point E, Max propagates NaNs (any NaN value in x forces the output to be NaN).

#### Example

Code:

```
numbers := []int{0, 42, -10, 8}
fmt.Println(slices.Max(numbers))
```

Output:

```
42
```

## func MaxFunc 1.21

```
func MaxFunc[S ~[]E, E any](x S, cmp func(a, b E) int) E
```

MaxFunc returns the maximal value in x, using cmp to compare elements. It panics if x is empty. If there is more than one maximal element according to the cmp function, MaxFunc returns the first one.

#### Example

Code:

```
type Person struct {
    Name string
    Age  int
}
people := []Person{
    {"Gopher", 13},
    {"Alice", 55},
    {"Vera", 24},
    {"Bob", 55},
}
firstOldest := slices.MaxFunc(people, func(a, b Person) int {
    return cmp.Compare(a.Age, b.Age)
})
fmt.Println(firstOldest.Name)
```

Output:

```
Alice
```

## func Min 1.21

```
func Min[S ~[]E, E cmp.Ordered](x S) E
```

Min returns the minimal value in x. It panics if x is empty. For floating-point numbers, Min propagates NaNs (any NaN value in x forces the output to be NaN).

#### Example

Code:

```
numbers := []int{0, 42, -10, 8}
fmt.Println(slices.Min(numbers))
```

Output:

```
-10
```

## func MinFunc 1.21

```
func MinFunc[S ~[]E, E any](x S, cmp func(a, b E) int) E
```

MinFunc returns the minimal value in x, using cmp to compare elements. It panics if x is empty. If there is more than one minimal element according to the cmp function, MinFunc returns the first one.

#### Example

Code:

```
type Person struct {
    Name string
    Age  int
}
people := []Person{
    {"Gopher", 13},
    {"Bob", 5},
    {"Vera", 24},
    {"Bill", 5},
}
firstYoungest := slices.MinFunc(people, func(a, b Person) int {
    return cmp.Compare(a.Age, b.Age)
})
fmt.Println(firstYoungest.Name)
```

Output:

```
Bob
```

## func Repeat 1.23

```
func Repeat[S ~[]E, E any](x S, count int) S
```

Repeat returns a new slice that repeats the provided slice the given number of times. The result has length and capacity (len(x) * count). The result is never nil. Repeat panics if count is negative or if the result of (len(x) * count) overflows.

#### Example

Code:

```
numbers := []int{0, 1, 2, 3}
repeat := slices.Repeat(numbers, 2)
fmt.Println(repeat)
```

Output:

```
[0 1 2 3 0 1 2 3]
```

## func Replace 1.21

```
func Replace[S ~[]E, E any](s S, i, j int, v ...E) S
```

Replace replaces the elements s[i:j] by the given v, and returns the modified slice. Replace panics if j > len(s) or s[i:j] is not a valid slice of s. When len(v) < (j-i), Replace zeroes the elements between the new length and the original length. If the result is empty, it has the same nilness as s.

#### Example

Code:

```
names := []string{"Alice", "Bob", "Vera", "Zac"}
names = slices.Replace(names, 1, 3, "Bill", "Billie", "Cat")
fmt.Println(names)
```

Output:

```
[Alice Bill Billie Cat Zac]
```

## func Reverse 1.21

```
func Reverse[S ~[]E, E any](s S)
```

Reverse reverses the elements of the slice in place.

#### Example

Code:

```
names := []string{"alice", "Bob", "VERA"}
slices.Reverse(names)
fmt.Println(names)
```

Output:

```
[VERA Bob alice]
```

## func Sort 1.21

```
func Sort[S ~[]E, E cmp.Ordered](x S)
```

Sort sorts a slice of any ordered type in ascending order. When sorting floating-point numbers, NaNs are ordered before other values.

#### Example

Code:

```
smallInts := []int8{0, 42, -10, 8}
slices.Sort(smallInts)
fmt.Println(smallInts)
```

Output:

```
[-10 0 8 42]
```

## func SortFunc 1.21

```
func SortFunc[S ~[]E, E any](x S, cmp func(a, b E) int)
```

SortFunc sorts the slice x in ascending order as determined by the cmp function. This sort is not guaranteed to be stable. cmp(a, b) should return a negative number when a < b, a positive number when a > b and zero when a == b or a and b are incomparable in the sense of a strict weak ordering.

SortFunc requires that cmp is a strict weak ordering. See https://en.wikipedia.org/wiki/Weak_ordering#Strict_weak_orderings. The function should return 0 for incomparable items.

#### Example (CaseInsensitive)

Code:

```
names := []string{"Bob", "alice", "VERA"}
slices.SortFunc(names, func(a, b string) int {
    return strings.Compare(strings.ToLower(a), strings.ToLower(b))
})
fmt.Println(names)
```

Output:

```
[alice Bob VERA]
```

#### Example (MultiField)

Code:

```
type Person struct {
    Name string
    Age  int
}
people := []Person{
    {"Gopher", 13},
    {"Alice", 55},
    {"Bob", 24},
    {"Alice", 20},
}
slices.SortFunc(people, func(a, b Person) int {
    if n := strings.Compare(a.Name, b.Name); n != 0 {
        return n
    }
    // If names are equal, order by age
    return cmp.Compare(a.Age, b.Age)
})
fmt.Println(people)
```

Output:

```
[{Alice 20} {Alice 55} {Bob 24} {Gopher 13}]
```

## func SortStableFunc 1.21

```
func SortStableFunc[S ~[]E, E any](x S, cmp func(a, b E) int)
```

SortStableFunc sorts the slice x while keeping the original order of equal elements, using cmp to compare elements in the same way as SortFunc.

#### Example

Code:

```
type Person struct {
    Name string
    Age  int
}
people := []Person{
    {"Gopher", 13},
    {"Alice", 20},
    {"Bob", 24},
    {"Alice", 55},
}
// Stable sort by name, keeping age ordering of Alice intact
slices.SortStableFunc(people, func(a, b Person) int {
    return strings.Compare(a.Name, b.Name)
})
fmt.Println(people)
```

Output:

```
[{Alice 20} {Alice 55} {Bob 24} {Gopher 13}]
```

## func Sorted 1.23

```
func Sorted[E cmp.Ordered](seq iter.Seq[E]) []E
```

Sorted collects values from seq into a new slice, sorts the slice, and returns it. If seq is empty, the result is nil.

#### Example

Code:

```
seq := func(yield func(int) bool) {
    flag := -1
    for i := 0; i < 10; i += 2 {
        flag = -flag
        if !yield(i * flag) {
            return
        }
    }
}

s := slices.Sorted(seq)
fmt.Println(s)
fmt.Println(slices.IsSorted(s))
```

Output:

```
[-6 -2 0 4 8]
true
```

## func SortedFunc 1.23

```
func SortedFunc[E any](seq iter.Seq[E], cmp func(E, E) int) []E
```

SortedFunc collects values from seq into a new slice, sorts the slice using the comparison function, and returns it. If seq is empty, the result is nil.

#### Example

Code:

```
seq := func(yield func(int) bool) {
    flag := -1
    for i := 0; i < 10; i += 2 {
        flag = -flag
        if !yield(i * flag) {
            return
        }
    }
}

sortFunc := func(a, b int) int {
    return cmp.Compare(b, a) // the comparison is being done in reverse
}

s := slices.SortedFunc(seq, sortFunc)
fmt.Println(s)
```

Output:

```
[8 4 0 -2 -6]
```

## func SortedStableFunc 1.23

```
func SortedStableFunc[E any](seq iter.Seq[E], cmp func(E, E) int) []E
```

SortedStableFunc collects values from seq into a new slice. It then sorts the slice while keeping the original order of equal elements, using the comparison function to compare elements. It returns the new slice. If seq is empty, the result is nil.

#### Example

Code:

```
type Person struct {
    Name string
    Age  int
}

people := []Person{
    {"Gopher", 13},
    {"Alice", 20},
    {"Bob", 5},
    {"Vera", 24},
    {"Zac", 20},
}

sortFunc := func(x, y Person) int {
    return cmp.Compare(x.Age, y.Age)
}

s := slices.SortedStableFunc(slices.Values(people), sortFunc)
fmt.Println(s)
```

Output:

```
[{Bob 5} {Gopher 13} {Alice 20} {Zac 20} {Vera 24}]
```

## func Values 1.23

```
func Values[Slice ~[]E, E any](s Slice) iter.Seq[E]
```

Values returns an iterator that yields the slice elements in order.

#### Example

Code:

```
names := []string{"Alice", "Bob", "Vera"}
for v := range slices.Values(names) {
    fmt.Println(v)
}
```

Output:

```
Alice
Bob
Vera
```

© Google, Inc.Licensed under the Creative Commons Attribution License 3.0.
 http://golang.org/pkg/slices/
