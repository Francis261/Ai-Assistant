# TypeError: property "x" is non-configurable and can't be deleted

Source: https://devdocs.io/javascript/errors/cant_delete

The JavaScript exception "property is non-configurable and can't be deleted" occurs when it was attempted to delete a property, but that property is non-configurable.

## Message

```
TypeError: Cannot delete property 'x' of #<Object> (V8-based)
TypeError: property "x" is non-configurable and can't be deleted (Firefox)
TypeError: Unable to delete property. (Safari)
```

## Error type

TypeError in strict mode only.

## What went wrong?

It was attempted to delete a property, but that property is non-configurable. The configurable attribute controls whether the property can be deleted from the object and whether its attributes (other than writable) can be changed.

This error happens only in strict mode code. In non-strict code, the operation returns false.

## Examples

### Attempting to delete non-configurable properties

Non-configurable properties are not super common, but they can be created using Object.defineProperty() or Object.freeze().

```
"use strict";
const obj = Object.freeze({ name: "Elsa", score: 157 });
delete obj.score; // TypeError
```

```
"use strict";
const obj = {};
Object.defineProperty(obj, "foo", { value: 2, configurable: false });
delete obj.foo; // TypeError
```

```
"use strict";
const frozenArray = Object.freeze([0, 1, 2]);
frozenArray.pop(); // TypeError
```

There are also a few non-configurable properties built into JavaScript. Maybe you tried to delete a mathematical constant.

```
"use strict";
delete Math.PI; // TypeError
```

## See also

- delete
- Object.defineProperty()
- Object.freeze()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cant_delete
