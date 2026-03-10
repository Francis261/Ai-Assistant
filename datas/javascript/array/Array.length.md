# Array: length

Source: https://devdocs.io/javascript/global_objects/array/length

The length data property of an Array instance represents the number of elements in that array. The value is an unsigned, 32-bit integer that is always numerically greater than the highest index in the array.

## Try it

```
const clothing = ["shoes", "shirts", "socks", "sweaters"];

console.log(clothing.length);
// Expected output: 4
```

## Value

A nonnegative integer less than 232.

## Description

The value of the length property is a nonnegative integer with a value less than 232.

```
const listA = [1, 2, 3];
const listB = new Array(6);

console.log(listA.length);
// 3

console.log(listB.length);
// 6

listB.length = 2 ** 32; // 4294967296
// RangeError: Invalid array length

const listC = new Array(-100); // Negative numbers are not allowed
// RangeError: Invalid array length
```

The array object observes the length property, and automatically syncs the length value with the array's content. This means:

- Setting length to a value smaller than the current length truncates the array — elements beyond the new length are deleted.
- Setting any array index (a nonnegative integer smaller than 232) beyond the current length extends the array — the length property is increased to reflect the new highest index.
- Setting length to an invalid value (e.g., a negative number or a non-integer) throws a RangeError exception.

When length is set to a bigger value than the current length, the array is extended by adding empty slots, not actual undefined values. Empty slots have some special interactions with array methods; see array methods and empty slots.

```
const arr = [1, 2];
console.log(arr);
// [ 1, 2 ]

arr.length = 5; // set array length to 5 while currently 2.
console.log(arr);
// [ 1, 2, <3 empty items> ]

arr.forEach((element) => console.log(element));
// 1
// 2
```

See also Relationship between length and numerical properties.

## Examples

### Iterating over an array

In the following example, the array numbers is iterated through by looking at the length property. The value in each element is then doubled.

```
const numbers = [1, 2, 3, 4, 5];
const length = numbers.length;
for (let i = 0; i < length; i++) {
  numbers[i] *= 2;
}
// numbers is now [2, 4, 6, 8, 10]
```

### Shortening an array

The following example shortens the array numbers to a length of 3 if the current length is greater than 3.

```
const numbers = [1, 2, 3, 4, 5];

if (numbers.length > 3) {
  numbers.length = 3;
}

console.log(numbers); // [1, 2, 3]
console.log(numbers.length); // 3
console.log(numbers[3]); // undefined; the extra elements are deleted
```

### Create empty array of fixed length

Setting length to a value greater than the current length creates a sparse array.

```
const numbers = [];
numbers.length = 3;
console.log(numbers); // [empty x 3]
```

### Array with non-writable length

The length property is automatically updated by the array when elements are added beyond the current length. If the length property is made non-writable, the array will not be able to update it. This causes an error in strict mode.

```
"use strict";

const numbers = [1, 2, 3, 4, 5];
Object.defineProperty(numbers, "length", { writable: false });
numbers[5] = 6; // TypeError: Cannot assign to read only property 'length' of object '[object Array]'
numbers.push(5); // // TypeError: Cannot assign to read only property 'length' of object '[object Array]'
```

## Specifications

## Browser compatibility

## See also

- Indexed collections guide
- Array
- TypedArray.prototype.length
- String: length
- RangeError: invalid array length

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
