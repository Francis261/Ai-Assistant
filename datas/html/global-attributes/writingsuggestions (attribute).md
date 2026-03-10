# HTML writingsuggestions global attribute

Source: https://devdocs.io/html/reference/global_attributes/writingsuggestions

The writingsuggestions global attribute is an enumerated attribute indicating if browser-provided writing suggestions should be enabled under the scope of the element or not.

Some browsers provide writing suggestions to users as they type in editable fields. Suggestions usually appear as greyed-out text positioned after the text cursor, completing the user's sentence. While this can be helpful to users, developers might want to turn writing suggestions off in some cases, such as when providing site-specific writing suggestions.

The writingsuggestions attribute can be set on editable fields such as <input> or <textarea> elements, or on other HTML elements to control the behavior of the browser's suggestions on sections of a page, or on the entire page.

## Syntax

In browsers that support them, writing suggestions are enabled by default. To disable them, set the writingsuggestions attribute's value to false. Setting the attribute's value to true, or omitting the value, enables writing suggestions.

To disable writing suggestions:

```
<input type="text" writingsuggestions="false" />
```

To enable writing suggestions:

```
<input type="text" />
<input type="text" writingsuggestions />
<input type="text" writingsuggestions="true" />
```

## Specifications

## Browser compatibility

## See also

- autocomplete attribute
- spellcheck attribute
- contenteditable attribute
- <textarea>
- <input>
- <datalist> and list attribute

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/writingsuggestions
