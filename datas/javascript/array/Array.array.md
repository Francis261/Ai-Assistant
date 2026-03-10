# Array() constructor

Source: https://devdocs.io/javascript/global_objects/array/array

The Array() constructor creates Array objects.

## Syntax

```
new Array()
new Array(element1)
new Array(element1, element2)
new Array(element1, element2, /* …, */ elementN)
new Array(arrayLength)

Array()
Array(element1)
Array(element1, element2)
Array(element1, element2, /* …, */ elementN)
Array(arrayLength)
```

Note: Array() can be called with or without new. Both create a new Array instance.

### Parameters

A JavaScript array is initialized with the given elements, except in the case where a single argument is passed to the Array constructor and that argument is a number (see the arrayLength parameter below). Note that this special case only applies to JavaScript arrays created with the Array constructor, not array literals created with the square bracket syntax.

If the only argument passed to the Array constructor is an integer between 0 and 232 - 1 (inclusive), this returns a new JavaScript array with its length property set to that number.

Note: This implies an array of arrayLength empty slots, not slots with actual undefined values — see sparse arrays).

### Exceptions

Thrown if there's only one argument (arrayLength) that is a number, but its value is not an integer or not between 0 and 232 - 1 (inclusive).

## Examples

### Array literal notation

Arrays can be created using the literal notation:

```
const fruits = ["Apple", "Banana"];

console.log(fruits.length); // 2
console.log(fruits[0]); // "Apple"
```

### Array constructor with a single parameter

Arrays can be created using a constructor with a single number parameter. An array is created with its length property set to that number, and the array elements are empty slots.

```
const arrayEmpty = new Array(2);

console.log(arrayEmpty.length); // 2
console.log(arrayEmpty[0]); // undefined; actually, it is an empty slot
console.log(0 in arrayEmpty); // false
console.log(1 in arrayEmpty); // false
```

```
const arrayOfOne = new Array("2"); // Not the number 2 but the string "2"

console.log(arrayOfOne.length); // 1
console.log(arrayOfOne[0]); // "2"
```

### Array constructor with multiple parameters

If more than one argument is passed to the constructor, a new Array with the given elements is created.

```
const fruits = new Array("Apple", "Banana");

console.log(fruits.length); // 2
console.log(fruits[0]); // "Apple"
```

## Specifications

## Browser compatibility

## See also

- Indexed collections guide
- Array

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array
