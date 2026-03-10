# Less than (<)

Source: https://devdocs.io/javascript/operators/less_than

The < operator returns true if the left operand is less than the right operand, and false otherwise.

## Try it

```
console.log(5 < 3);
// Expected output: false

console.log(3 < 3);
// Expected output: false

// Compare bigint to number
console.log(3n < 5);
// Expected output: true

console.log("aa" < "ab");
// Expected output: true
```

## Syntax

```
x < y
```

## Description

The operands are compared with multiple rounds of coercion, which can be summarized as follows:

- First, objects are converted to primitives by calling its [Symbol.toPrimitive]() (with "number" as hint), valueOf(), and toString() methods, in that order. The left operand is always coerced before the right one. Note that although [Symbol.toPrimitive]() is called with the "number" hint (meaning there's a slight preference for the object to become a number), the return value is not converted to a number, since strings are still specially handled.
- If both values are strings, they are compared as strings, based on the values of the UTF-16 code units (not Unicode code points) they contain.
- Otherwise JavaScript attempts to convert non-numeric types to numeric values:
  - Boolean values true and false are converted to 1 and 0 respectively.
  - null is converted to 0.
  - undefined is converted to NaN.
  - Strings are converted based on the values they contain, and are converted as NaN if they do not contain numeric values.
- If either value is NaN, the operator returns false.
- Otherwise the values are compared as numeric values. BigInt and number values can be compared together.

- Boolean values true and false are converted to 1 and 0 respectively.
- null is converted to 0.
- undefined is converted to NaN.
- Strings are converted based on the values they contain, and are converted as NaN if they do not contain numeric values.

Other operators, including >, >=, and <=, use the same algorithm as <. There are two cases where all four operators return false:

- If one of the operands gets converted to a BigInt, while the other gets converted to a string that cannot be converted to a BigInt value (it throws a syntax error when passed to BigInt()).
- If one of the operands gets converted to NaN. (For example, strings that cannot be converted to numbers, or undefined.)

For all other cases, the four operators have the following relationships:

```
x < y === !(x >= y);
x <= y === !(x > y);
x > y === y < x;
x >= y === y <= x;
```

Note: One observable difference between < and > is the order of coercion, especially if the coercion to primitive has side effects. All comparison operators coerce the left operand before the right operand.

## Examples

### String to string comparison

```
"a" < "b"; // true
"a" < "a"; // false
"a" < "3"; // false

"\uD855\uDE51" < "\uFF3A"; // true
```

### String to number comparison

```
"5" < 3; // false
"3" < 3; // false
"3" < 5; // true

"hello" < 5; // false
5 < "hello"; // false

"5" < 3n; // false
"3" < 5n; // true
```

### Number to Number comparison

```
5 < 3; // false
3 < 3; // false
3 < 5; // true
```

### Number to BigInt comparison

```
5n < 3; // false
3 < 5n; // true
```

### Comparing Boolean, null, undefined, NaN

```
true < false; // false
false < true; // true

0 < true; // true
true < 1; // false

null < 0; // false
null < 1; // true

undefined < 3; // false
3 < undefined; // false

3 < NaN; // false
NaN < 3; // false
```

### Comparison with side effects

Comparisons always coerce their operands to primitives. This means the same object may end up having different values within one comparison expression. For example, you may have two values that are both greater than and less than the other.

```
class Mystery {
  static #coercionCount = -1;
  valueOf() {
    Mystery.#coercionCount++;
    // The left operand is coerced first, so this will return 0
    // Then it returns 1 for the right operand
    return Mystery.#coercionCount % 2;
  }
}

const l = new Mystery();
const r = new Mystery();
console.log(l < r && r < l);
// true
```

Warning: This can be a source of confusion. If your objects provide custom primitive conversion logic, make sure it is idempotent: multiple coercions should return the same value.

## Specifications

## Browser compatibility

## See also

- Greater than (>)
- Greater than or equal (>=)
- Less than or equal (<=)

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than
