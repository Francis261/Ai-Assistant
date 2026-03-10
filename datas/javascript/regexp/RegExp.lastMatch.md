# RegExp.lastMatch ($&)

Source: https://devdocs.io/javascript/global_objects/regexp/lastmatch

Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.

Note: All RegExp static properties that expose the last match state globally are deprecated. See deprecated RegExp features for more information.

The RegExp.lastMatch static accessor property returns the last matched substring. RegExp["$&"] is an alias for this property.

## Description

Because lastMatch is a static property of RegExp, you always use it as RegExp.lastMatch or RegExp["$&"], rather than as a property of a RegExp object you created.

The value of lastMatch updates whenever a RegExp (but not a RegExp subclass) instance makes a successful match. If no matches have been made, lastMatch is an empty string. The set accessor of lastMatch is undefined, so you cannot change this property directly.

You cannot use the shorthand alias with the dot property accessor (RegExp.$&), because & is not a valid identifier part, so this causes a SyntaxError. Use the bracket notation instead.

$& can also be used in the replacement string of String.prototype.replace(), but that's unrelated to the RegExp["$&"] legacy property.

## Examples

### Using lastMatch and $&

```
const re = /hi/g;
re.test("hi there!");
RegExp.lastMatch; // "hi"
RegExp["$&"]; // "hi"
```

## Specifications

## Browser compatibility

## See also

- RegExp.input ($_)
- RegExp.lastParen ($+)
- RegExp.leftContext ($`)
- RegExp.rightContext ($')
- RegExp.$1, …, RegExp.$9

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastMatch
