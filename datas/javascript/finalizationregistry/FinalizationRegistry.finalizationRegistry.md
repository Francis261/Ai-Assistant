# FinalizationRegistry() constructor

Source: https://devdocs.io/javascript/global_objects/finalizationregistry/finalizationregistry

The FinalizationRegistry() constructor creates FinalizationRegistry objects.

## Syntax

```
new FinalizationRegistry(callbackFn)
```

Note: FinalizationRegistry() can only be constructed with new. Attempting to call it without new throws a TypeError.

### Parameters

A function to be invoked each time a registered target value is garbage collected. Its return value is ignored. The function is called with the following arguments:

The value that was passed to the second parameter of the register() method when the target object was registered.

## Examples

### Creating a new registry

You create the registry passing in the callback:

```
const registry = new FinalizationRegistry((heldValue) => {
  // …
});
```

## Specifications

## Browser compatibility

## See also

- FinalizationRegistry

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry/FinalizationRegistry
