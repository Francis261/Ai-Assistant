# FinalizationRegistry.prototype.register()

Source: https://devdocs.io/javascript/global_objects/finalizationregistry/register

The register() method of FinalizationRegistry instances registers a value with this FinalizationRegistry so that if the value is garbage-collected, the registry's callback may get called.

## Syntax

```
register(target, heldValue)
register(target, heldValue, unregisterToken)
```

### Parameters

The target value to register.

The value to pass to the finalizer for this target. This cannot be the target itself but can be anything else, including functions and primitives.

A token that may be used with the unregister method later to unregister the target value. If provided (and not undefined), this must be an object or a non-registered symbol. If not provided, the target cannot be unregistered.

### Return value

None (undefined).

### Exceptions

Thrown in one of the following cases:

- target is not an object or a non-registered symbol (object as opposed to primitives; functions are objects as well)
- target is the same as heldValue (target === heldValue)
- unregisterToken is not an object or a non-registered symbol

## Description

See the Avoid where possible and Notes on cleanup callbacks sections of the FinalizationRegistry page for important caveats.

## Examples

### Using register

The following registers the value referenced by target, passing in the held value "some value" and passing the target itself as the unregistration token:

```
registry.register(target, "some value", target);
```

The following registers the value referenced by target, passing in another object as the held value, and not passing in any unregistration token (which means target can't be unregistered):

```
registry.register(target, { useful: "info about target" });
```

## Specifications

## Browser compatibility

## See also

- FinalizationRegistry

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry/register
