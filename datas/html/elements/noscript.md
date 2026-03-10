# <noscript>: The Noscript element

Source: https://devdocs.io/html/reference/elements/noscript

The <noscript> HTML element defines a section of HTML to be inserted if a script type on the page is unsupported or if scripting is currently turned off in the browser.

## Attributes

This element only includes the global attributes.

## Examples

```
<noscript>
  <!-- anchor linking to external file -->
  <a href="https://www.mozilla.org/">External Link</a>
</noscript>
<p>Rocks!</p>
```

### Result with scripting enabled

Rocks!

### Result with scripting disabled

External Link

Rocks!

## Usage notes

The <noscript> element represents its children differently depending on if scripting is enabled:

- If scripting is disabled the <noscript> element represents its children as HTML content.
- If scripting is enabled, the <noscript> element represents its children as text.

## Technical summary

## Specifications

## Browser compatibility

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/noscript
