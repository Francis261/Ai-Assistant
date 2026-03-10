# RegExp.prototype.compile()

Source: https://devdocs.io/javascript/global_objects/regexp/compile

Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.

Note: The compile() method is only specified for compatibility reasons. Using compile() causes the otherwise immutable regex source and flags to become mutable, which may break user expectations. You can use the RegExp() constructor to construct a new regular expression object instead.

The compile() method of RegExp instances is used to recompile a regular expression with new source and flags after the RegExp object has already been created.

## Syntax

```
compile(pattern, flags)
```

### Parameters

The text of the regular expression.

Any combination of flag values.

### Return value

None (undefined).

## Examples

### Using compile()

The following example shows how to recompile a regular expression with a new pattern and a new flag.

```
const regexObj = /foo/gi;
regexObj.compile("new foo", "g");
```

## Specifications

## Browser compatibility

## See also

- RegExp

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/compile
