# Array.prototype.slice()

Source: https://devdocs.io/javascript/global_objects/array/slice

The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

## Try it

```
const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
```

## Syntax

```
slice()
slice(start)
slice(start, end)
```

### Parameters

Zero-based index at which to start extraction, converted to an integer.

- Negative index counts back from the end of the array — if -array.length <= start < 0, start + array.length is used.
- If start < -array.length or start is omitted, 0 is used.
- If start >= array.length, an empty array is returned.

Zero-based index at which to end extraction, converted to an integer. slice() extracts up to but not including end.

- Negative index counts back from the end of the array — if -array.length <= end < 0, end + array.length is used.
- If end < -array.length, 0 is used.
- If end >= array.length or end is omitted or undefined, array.length is used, causing all elements until the end to be extracted.
- If end implies a position before or at the position that start implies, an empty array is returned.

### Return value

A new array containing the extracted elements.

## Description

The slice() method is a copying method. It does not alter this but instead returns a shallow copy that contains some of the same elements as the ones from the original array.

The slice() method preserves empty slots. If the sliced portion is sparse, the returned array is sparse as well.

The slice() method is generic. It only expects the this value to have a length property and integer-keyed properties.

## Examples

### Return a portion of an existing array

```
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);

// fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// citrus contains ['Orange','Lemon']
```

In this example, slice(1, 3) extracts elements from index 1 up to, but not including, index 3, resulting in a new array ['Orange', 'Lemon'].

### Omitting the end parameter

```
const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];

const tropical = fruits.slice(2);
console.log(tropical); // ['Orange', 'Mango', 'Pineapple']
```

In this example, slice(2) extracts elements from index 2 to the end of the array.

### Using negative indices

```
const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];

const lastTwo = fruits.slice(-2);
console.log(lastTwo); // ['Mango', 'Pineapple']
```

In this example, slice(-2) extracts the last two elements of the array. When using a negative index with the slice method, negative indices are counted from the end of the array, starting at -1 for the last element, -2 for the second-to-last element, and so on. The negative index -2 itself is included because it is the starting point of the extraction.

```
|     |     |     |     |     |
|  S  |  L  |  I  |  C  |  E  |
|     |     |     |     |     |
  -5    -4    -3    -2    -1

<--- read from reverse
```

### Using a positive start index and a negative end index

```
const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];

// Using positive start index and negative end index
const sliceExample = fruits.slice(1, -1);
console.log(sliceExample); // ['Banana', 'Orange', 'Mango']
```

In this example, slice(1, -1) starts extracting from index 1 and goes up to, but does not include, the element at index -1 (which is the last element). This results in a new array with ['Banana', 'Orange', 'Mango']. The slice method always excludes the element at the final index specified, regardless of whether it is positive or negative.

```
read from start --->

   0     1     2     3     4
|     |     |     |     |     |
|  S  |  L  |  I  |  C  |  E  |
|     |     |     |     |     |
  -5    -4    -3    -2    -1

<--- read from reverse
```

### Using slice with arrays of objects

In the following example, slice creates a new array, newCar, from myCar. Both include a reference to the object myHonda. When the color of myHonda is changed to purple, both arrays reflect the change.

```
// Using slice, create newCar from myCar.
const myHonda = {
  color: "red",
  wheels: 4,
  engine: { cylinders: 4, size: 2.2 },
};
const myCar = [myHonda, 2, "cherry condition", "purchased 1997"];
const newCar = myCar.slice(0, 2);

console.log("myCar =", myCar);
console.log("newCar =", newCar);
console.log("myCar[0].color =", myCar[0].color);
console.log("newCar[0].color =", newCar[0].color);

// Change the color of myHonda.
myHonda.color = "purple";
console.log("The new color of my Honda is", myHonda.color);

console.log("myCar[0].color =", myCar[0].color);
console.log("newCar[0].color =", newCar[0].color);
```

This script writes:

```
myCar = [
  { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } },
  2,
  'cherry condition',
  'purchased 1997'
]
newCar = [ { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } }, 2 ]
myCar[0].color = red
newCar[0].color = red
The new color of my Honda is purple
myCar[0].color = purple
newCar[0].color = purple
```

### Calling slice() on non-array objects

The slice() method reads the length property of this. It then reads the integer-keyed properties from start to end and defines them on a newly created array.

```
const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
  3: 33, // ignored by slice() since length is 3
};
console.log(Array.prototype.slice.call(arrayLike, 1, 3));
// [ 3, 4 ]
```

### Using slice() to convert array-like objects to arrays

The slice() method is often used with bind() and call() to create a utility method that converts an array-like object into an array.

```
// slice() is called with `this` passed as the first argument
const slice = Function.prototype.call.bind(Array.prototype.slice);

function list() {
  return slice(arguments);
}

const listResult = list(1, 2, 3); // [1, 2, 3]
```

### Using slice() on sparse arrays

The array returned from slice() may be sparse if the source is sparse.

```
console.log([1, 2, , 4, 5].slice(1, 4)); // [2, empty, 4]
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Array.prototype.slice in core-js
- es-shims polyfill of Array.prototype.slice
- Indexed collections guide
- Array
- Array.prototype.pop()
- Array.prototype.shift()
- Array.prototype.concat()
- Array.prototype.splice()
- TypedArray.prototype.slice()
- String.prototype.slice()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
