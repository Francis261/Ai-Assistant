# Set.prototype.forEach()

Source: https://devdocs.io/javascript/global_objects/set/foreach

The forEach() method of Set instances executes a provided function once for each value in this set, in insertion order.

## Try it

```
function logSetElements(value1, value2, set) {
  console.log(`s[${value1}] = ${value2}`);
}

new Set(["foo", "bar", undefined]).forEach(logSetElements);

// Expected output: "s[foo] = foo"
// Expected output: "s[bar] = bar"
// Expected output: "s[undefined] = undefined"
```

## Syntax

```
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### Parameters

A function to execute for each entry in the set. The function is called with the following arguments:

Value of each iteration.

Key of each iteration. This is always the same as value.

The set being iterated.

A value to use as this when executing callbackFn.

### Return value

None (undefined).

## Description

The forEach() method executes the provided callback once for each value which actually exists in the Set object. It is not invoked for values which have been deleted. However, it is executed for values which are present but have the value undefined.

callback is invoked with three arguments:

- the element value
- the element key
- the Set

There are no keys in Set objects, however, so the first two arguments are both values contained in the Set. This is to make it consistent with other forEach() methods for Map and Array.

If a thisArg parameter is provided to forEach(), it will be passed to callback when invoked, for use as its this value. Otherwise, the value undefined will be passed for use as its this value. The this value ultimately observable by callback is determined according to the usual rules for determining the this seen by a function.

Each value is visited once, except in the case when it was deleted and re-added before forEach() has finished. callback is not invoked for values deleted before being visited. New values added before forEach() has finished will be visited.

forEach() executes the callback function once for each element in the Set object; it does not return a value.

## Examples

### Logging the contents of a Set object

The following code logs a line for each element in a Set object:

```
function logSetElements(value1, value2, set) {
  console.log(`s[${value1}] = ${value2}`);
}

new Set(["foo", "bar", undefined]).forEach(logSetElements);

// Logs:
// "s[foo] = foo"
// "s[bar] = bar"
// "s[undefined] = undefined"
```

## Specifications

## Browser compatibility

## See also

- Array.prototype.forEach()
- Map.prototype.forEach()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/forEach
