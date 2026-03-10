# <noembed>: The Embed Fallback element

Source: https://devdocs.io/html/reference/elements/noembed

Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.

The <noembed> HTML element is an obsolete, non-standard way to provide alternative, or "fallback", content for browsers that do not support the <embed> element or do not support the type of embedded content an author wishes to use. This element was deprecated in HTML 4.01 and above in favor of placing fallback content between the opening and closing tags of an <object> element.

Note: While this element currently still works in many browsers, it is obsolete and should not be used. Use <object> instead, with fallback content between the opening and closing tags of the element.

## Examples

The message inside <noembed> tag will appear only when your browser does not support <embed> tag.

### Show an alternative content

```
<embed
  type="vide/webm"
  src="/media/examples/flower.mp4"
  width="200"
  height="200" />
<noembed>
  <h1>Alternative content</h1>
</noembed>
```

## Specifications

## Browser compatibility

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/noembed
