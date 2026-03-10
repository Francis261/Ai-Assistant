# Inequality (!=)

Source: https://devdocs.io/javascript/operators/inequality

The != operator checks whether its two operands are not equal, returning a Boolean result. Unlike the strict inequality operator, it attempts to convert and compare operands that are of different types.

## Try it

```
console.log(1 != 1);
// Expected output: false

console.log("hello" != "hello");
// Expected output: false

console.log("1" != 1);
// Expected output: false

console.log(0 != false);
// Expected output: false
```

## Syntax

```
x != y
```

## Description

The inequality operator checks whether its operands are not equal. It is the negation of the equality operator so the following two lines will always give the same result:

```
x != y;

!(x == y);
```

For details of the comparison algorithm, see the page for the equality operator.

Like the equality operator, the inequality operator will attempt to convert and compare operands of different types:

```
3 != "3"; // false
```

To prevent this, and require that different types are considered to be different, use the strict inequality operator instead:

```
3 !== "3"; // true
```

## Examples

### Comparison with no type conversion

```
1 != 2; // true
"hello" != "hola"; // true

1 != 1; // false
"hello" != "hello"; // false
```

### Comparison with type conversion

```
"1" != 1; // false
1 != "1"; // false
0 != false; // false
0 != null; // true
0 != undefined; // true
0 != !!null; // false, look at Logical NOT operator
0 != !!undefined; // false, look at Logical NOT operator
null != undefined; // false

const number1 = new Number(3);
const number2 = new Number(3);
number1 != 3; // false
number1 != number2; // true
```

### Comparison of objects

```
const object1 = {
  key: "value",
};

const object2 = {
  key: "value",
};

console.log(object1 != object2); // true
console.log(object1 != object1); // false
```

## Specifications

## Browser compatibility

## See also

- Equality (==)
- Strict equality (===)
- Strict inequality (!==)

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Inequality
