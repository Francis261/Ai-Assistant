# HTML enterkeyhint global attribute

Source: https://devdocs.io/html/reference/global_attributes/enterkeyhint

The enterkeyhint global attribute is an enumerated attribute defining what action label (or icon) to present for the enter key on virtual keyboards.

## Try it

```
<input enterkeyhint="go" />

<p contenteditable enterkeyhint="go">https://example.org</p>
```

## Description

Form controls (such as <textarea> or <input> elements) or elements using contenteditable can specify an inputmode attribute to control what kind of virtual keyboard will be used. To further improve the user's experience, the enter key can be customized specifically by providing an enterkeyhint attribute indicating how the enter key should be labeled (or which icon should be shown). The enter key usually represents what the user should do next; typical actions are: sending text, inserting a new line, or searching.

If no enterkeyhint attribute is provided, the user agent might use contextual information from the inputmode, type, or pattern attributes to display a suitable enter key label (or icon).

## Value

The enterkeyhint attribute is an enumerated attribute and only accepts the following values:

## Specifications

## Browser compatibility

## See also

- HTMLElement.enterKeyHint property reflecting this attribute
- inputmode global attribute
- contenteditable global attribute
- type and pattern attributes on <input> elements

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/enterkeyhint
