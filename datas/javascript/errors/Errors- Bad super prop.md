# SyntaxError: use of super property/member accesses only valid within methods or eval code within methods

Source: https://devdocs.io/javascript/errors/bad_super_prop

The JavaScript exception "use of super property/member accesses only valid within methods or eval code within methods" occurs when the super.x or super[x] syntax is used outside of a method.

## Message

```
SyntaxError: 'super' keyword unexpected here (V8-based)
SyntaxError: use of super property accesses only valid within methods or eval code within methods (Firefox)
SyntaxError: super is not valid in this context. (Safari)
```

## Error type

## What went wrong?

The super.x syntax is used to access properties on the prototype of the current object. It can be used in methods of both object literals and classes, field initializers, and static initialization blocks, but not in other contexts.

## Examples

### Invalid cases

You can't use super.x outside of a method in an object:

```
const obj = {
  __proto__: { x: 1 },
  x: super.x, // SyntaxError: use of super property accesses only valid within methods or eval code within methods
};
```

You can't use super.x in a function, even if that function has the effect of being a method:

```
function getX() {
  return super.x; // SyntaxError: use of super property accesses only valid within methods or eval code within methods
}

const obj = {
  getX,
  getX2: function () {
    return super.x; // SyntaxError: use of super property accesses only valid within methods or eval code within methods
  },
};

class Derived extends Base {
  getX = () => super.x;
}
```

### Valid cases

You can use super.x in a method:

```
class Base {
  x = 1;
}

class Derived extends Base {
  getX() {
    return super.x;
  }
}
```

You can use super.x in a field initializer:

```
class Derived extends Base {
  x = super.x;
}
```

You can use super.x in object methods too:

```
const obj = {
  __proto__: { x: 1 },
  getX() {
    return super.x;
  },
};
```

## See also

- Classes
- super

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Bad_super_prop
