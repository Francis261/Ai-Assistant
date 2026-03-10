# <frameset>

Source: https://devdocs.io/html/reference/elements/frameset

Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.

The <frameset> HTML element is used to contain <frame> elements.

Note: Because the use of frames is now discouraged in favor of using <iframe>, this element is not typically used by modern websites.

## Attributes

Like all other HTML elements, this element supports the global attributes.

This attribute specifies the number and size of horizontal spaces in a frameset.

This attribute specifies the number and size of vertical spaces in a frameset.

## Example

### A frameset document

A frameset document has a <frameset> element instead of a <body> element. The <frame> elements are placed within the <frameset>.

```
<!doctype html>
<html lang="en-US">
  <head>
    <!-- Document metadata goes here -->
  </head>
  <frameset cols="50%, 50%">
    <frame
      src="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/iframe" />
    <frame
      src="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/frame" />
  </frameset>
</html>
```

If you want to embed another HTML page into the <body> of a document, use an <iframe> element.

## Specifications

## Browser compatibility

## See also

- <frame>
- <iframe>

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/frameset
