# Object.getPrototypeOf()

Source: https://devdocs.io/javascript/global_objects/object/getprototypeof

The Object.getPrototypeOf() static method returns the prototype (i.e., the value of the internal [[Prototype]] property) of the specified object.

## Try it

```
const prototype = {};
const object = Object.create(prototype);

console.log(Object.getPrototypeOf(object) === prototype);
// Expected output: true
```

## Syntax

```
Object.getPrototypeOf(obj)
```

### Parameters

The object whose prototype is to be returned.

### Return value

The prototype of the given object, which may be null.

## Examples

### Using getPrototypeOf

```
const proto = {};
const obj = Object.create(proto);
Object.getPrototypeOf(obj) === proto; // true
```

### Non-object coercion

In ES5, it will throw a TypeError exception if the obj parameter isn't an object. In ES2015, the parameter will be coerced to an Object.

```
Object.getPrototypeOf("foo");
// TypeError: "foo" is not an object (ES5 code)
Object.getPrototypeOf("foo");
// String.prototype                  (ES2015 code)
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Object.getPrototypeOf in core-js
- es-shims polyfill of Object.getPrototypeOf
- Object.prototype.isPrototypeOf()
- Object.setPrototypeOf()
- Object.prototype.__proto__
- Reflect.getPrototypeOf()
- Object.getPrototypeOf by John Resig (2008)

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf
