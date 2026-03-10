# TypeError: can't redefine non-configurable property "x"

Source: https://devdocs.io/javascript/errors/cant_redefine_property

The JavaScript exception "can't redefine non-configurable property" occurs when it was attempted to redefine a property, but that property is non-configurable.

## Message

```
TypeError: Cannot redefine property: "x" (V8-based)
TypeError: can't redefine non-configurable property "x" (Firefox)
TypeError: Attempting to change value of a readonly property. (Safari)
```

## Error type

## What went wrong?

It was attempted to redefine a property, but that property is non-configurable. The configurable attribute controls whether the property can be deleted from the object and whether its attributes (other than writable) can be changed. Usually, properties in an object created by an object initializer are configurable. However, for example, when using Object.defineProperty(), the property isn't configurable by default.

## Examples

### Non-configurable properties created by Object.defineProperty

The Object.defineProperty() creates non-configurable properties if you haven't specified them as configurable.

```
const obj = Object.create({});
Object.defineProperty(obj, "foo", { value: "bar" });

Object.defineProperty(obj, "foo", { value: "baz" });
// TypeError: can't redefine non-configurable property "foo"
```

You will need to set the "foo" property to configurable, if you intend to redefine it later in the code.

```
const obj = Object.create({});
Object.defineProperty(obj, "foo", { value: "bar", configurable: true });
Object.defineProperty(obj, "foo", { value: "baz", configurable: true });
```

## See also

- [[Configurable]]
- Object.defineProperty()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cant_redefine_property
