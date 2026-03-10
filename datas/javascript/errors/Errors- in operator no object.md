# TypeError: cannot use 'in' operator to search for 'x' in 'y'

Source: https://devdocs.io/javascript/errors/in_operator_no_object

The JavaScript exception "right-hand side of 'in' should be an object" occurs when the in operator was used to search in strings, or in numbers, or other primitive types. It can only be used to check if a property is in an object.

## Message

```
TypeError: Cannot use 'in' operator to search for 'x' in 'y' (V8-based & Firefox)
TypeError: right-hand side of 'in' should be an object, got null (Firefox)
TypeError: "y" is not an Object. (evaluating '"x" in "y"') (Safari)
```

## Error type

## What went wrong?

The in operator can only be used to check if a property is in an object. You can't search in strings, or in numbers, or other primitive types.

## Examples

### Searching in strings

Unlike in other programming languages (e.g., Python), you can't search in strings using the in operator.

```
"Hello" in "Hello World";
// TypeError: cannot use 'in' operator to search for 'Hello' in 'Hello World'
```

Instead you will need to use String.prototype.includes(), for example.

```
"Hello World".includes("Hello");
// true
```

### The operand can't be null or undefined

Make sure the object you are inspecting isn't actually null or undefined.

```
const foo = null;
"bar" in foo;
// TypeError: cannot use 'in' operator to search for 'bar' in 'foo' (Chrome)
// TypeError: right-hand side of 'in' should be an object, got null (Firefox)
```

The in operator always expects an object.

```
const foo = { baz: "bar" };
"bar" in foo; // false

"PI" in Math; // true
"pi" in Math; // false
```

### Searching in arrays

Be careful when using the in operator to search in Array objects. The in operator checks the index number, not the value at that index.

```
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
3 in trees; // true
"oak" in trees; // false
```

## See also

- in

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/in_operator_no_object
