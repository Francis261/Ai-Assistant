# String.prototype.toString()

Source: https://devdocs.io/javascript/global_objects/string/tostring

The toString() method of String values returns this string value.

## Try it

```
const stringObj = new String("foo");

console.log(stringObj);
// Expected output: String { "foo" }

console.log(stringObj.toString());
// Expected output: "foo"
```

## Syntax

```
toString()
```

### Parameters

None.

### Return value

A string representing the specified string value.

## Description

The String object overrides the toString method of Object; it does not inherit Object.prototype.toString(). For String values, the toString method returns the string itself (if it's a primitive) or the string that the String object wraps. It has the exact same implementation as String.prototype.valueOf().

The toString() method requires its this value to be a String primitive or wrapper object. It throws a TypeError for other this values without attempting to coerce them to string values.

Because String doesn't have a [Symbol.toPrimitive]() method, JavaScript calls the toString() method automatically when a String object is used in a context expecting a string, such as in a template literal. However, String primitive values do not consult the toString() method to be coerced to strings — since they are already strings, no conversion is performed.

```
String.prototype.toString = () => "Overridden";
console.log(`${"foo"}`); // "foo"
console.log(`${new String("foo")}`); // "Overridden"
```

## Examples

### Using toString()

The following example displays the string value of a String object:

```
const x = new String("Hello world");

console.log(x.toString()); // "Hello world"
```

## Specifications

## Browser compatibility

## See also

- String.prototype.valueOf()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toString
