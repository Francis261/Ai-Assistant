# Boolean.prototype.toString()

Source: https://devdocs.io/javascript/global_objects/boolean/tostring

The toString() method of Boolean values returns a string representing the specified boolean value.

## Try it

```
const flag1 = new Boolean(true);

console.log(flag1.toString());
// Expected output: "true"

const flag2 = new Boolean(1);

console.log(flag2.toString());
// Expected output: "true"
```

## Syntax

```
toString()
```

### Parameters

None.

### Return value

A string representing the specified boolean value.

## Description

The Boolean object overrides the toString method of Object; it does not inherit Object.prototype.toString(). For Boolean values, the toString method returns a string representation of the boolean value, which is either "true" or "false".

The toString() method requires its this value to be a Boolean primitive or wrapper object. It throws a TypeError for other this values without attempting to coerce them to boolean values.

Because Boolean doesn't have a [Symbol.toPrimitive]() method, JavaScript calls the toString() method automatically when a Boolean object is used in a context expecting a string, such as in a template literal. However, boolean primitive values do not consult the toString() method to be coerced to strings — rather, they are directly converted using the same algorithm as the initial toString() implementation.

```
Boolean.prototype.toString = () => "Overridden";
console.log(`${true}`); // "true"
console.log(`${new Boolean(true)}`); // "Overridden"
```

## Examples

### Using toString()

```
const flag = new Boolean(true);
console.log(flag.toString()); // "true"
console.log(false.toString()); // "false"
```

## Specifications

## Browser compatibility

## See also

- Object.prototype.toString()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean/toString
