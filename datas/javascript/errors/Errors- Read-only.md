# TypeError: "x" is read-only

Source: https://devdocs.io/javascript/errors/read-only

The JavaScript strict mode-only exception "is read-only" occurs when a global variable or object property that was assigned to is a read-only property.

## Message

```
TypeError: Cannot assign to read only property 'x' of #<Object> (V8-based)
TypeError: "x" is read-only (Firefox)
TypeError: Attempted to assign to readonly property. (Safari)
```

## Error type

TypeError in strict mode only.

## What went wrong?

The global variable or object property that was assigned to is a read-only property. (Technically, it is a non-writable data property.)

This error happens only in strict mode code. In non-strict code, the assignment is silently ignored.

## Examples

### Invalid cases

Read-only properties are not super common, but they can be created using Object.defineProperty() or Object.freeze().

```
"use strict";
const obj = Object.freeze({ name: "Elsa", score: 157 });
obj.score = 0; // TypeError

("use strict");
Object.defineProperty(this, "LUNG_COUNT", { value: 2, writable: false });
LUNG_COUNT = 3; // TypeError

("use strict");
const frozenArray = Object.freeze([0, 1, 2]);
frozenArray[0]++; // TypeError
```

There are also a few read-only properties built into JavaScript. Maybe you tried to redefine a mathematical constant.

```
"use strict";
Math.PI = 4; // TypeError
```

Sorry, you can't do that.

The global variable undefined is also read-only, so you can't silence the infamous "undefined is not a function" error by doing this:

```
"use strict";
undefined = function () {}; // TypeError: "undefined" is read-only
```

### Valid cases

```
"use strict";
let obj = Object.freeze({ name: "Score", points: 157 });
obj = { name: obj.name, points: 0 }; // replacing it with a new object works
```

## See also

- Object.defineProperty()
- Object.freeze()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Read-only
