# RegExp.input ($_)

Source: https://devdocs.io/javascript/global_objects/regexp/input

Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.

Note: All RegExp static properties that expose the last match state globally are deprecated. See deprecated RegExp features for more information.

The RegExp.input static accessor property returns the string against which a regular expression is matched. RegExp.$_ is an alias for this property.

## Description

Because input is a static property of RegExp, you always use it as RegExp.input or RegExp.$_, rather than as a property of a RegExp object you created.

The value of input updates whenever a RegExp (but not a RegExp subclass) instance makes a successful match. If no matches have been made, input is an empty string. You can set the value of input, but this does not affect other behaviors of the regex, and the value will be overwritten again when the next successful match is made.

## Examples

### Using input and $_

```
const re = /hi/g;
re.test("hi there!");
RegExp.input; // "hi there!"
re.test("foo"); // new test, non-matching
RegExp.$_; // "hi there!"
re.test("hi world!"); // new test, matching
RegExp.$_; // "hi world!"
```

## Specifications

## Browser compatibility

## See also

- RegExp.lastMatch ($&)
- RegExp.lastParen ($+)
- RegExp.leftContext ($`)
- RegExp.rightContext ($')
- RegExp.$1, …, RegExp.$9

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/input
