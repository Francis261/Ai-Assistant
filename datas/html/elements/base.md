# <base>: The Document Base URL element

Source: https://devdocs.io/html/reference/elements/base

The <base> HTML element specifies the base URL to use for all relative URLs in a document. There can be only one <base> element in a document.

A document's used base URL can be accessed by scripts with Node.baseURI. If the document has no <base> elements, then baseURI defaults to location.href.

## Attributes

This element's attributes include the global attributes.

Warning: A <base> element must have an href attribute, a target attribute, or both. If at least one of these attributes are specified, the <base> element must come before other elements with attribute values that are URLs, such as a <link>'s href attribute.

The base URL to be used throughout the document for relative URLs. Absolute and relative URLs are allowed. data: and javascript: URLs are not allowed.

A keyword or author-defined name of the default browsing context to show the results of navigation from <a>, <area>, or <form> elements without explicit target attributes. The following keywords have special meanings:

- _self (default): Show the result in the current browsing context.
- _blank: Show the result in a new, unnamed browsing context.
- _parent: Show the result in the parent browsing context of the current one, if the current page is inside a frame. If there is no parent, acts the same as _self.
- _top: Show the result in the topmost browsing context (the browsing context that is an ancestor of the current one and has no parent). If there is no parent, acts the same as _self.

## Usage notes

### Multiple <base> elements

If multiple <base> elements are used, only the first href and first target are obeyed — all others are ignored.

### In-page anchors

Links pointing to a fragment in the document — e.g., <a href="#some-id"> — are resolved with the <base>, triggering an HTTP request to the base URL with the fragment attached.

For example, given <base href="https://example.com/"> and this link: <a href="#anchor">To anchor</a>. The link points to https://example.com/#anchor.

### target may not contain ASCII newline, tab, or <

If the target attribute contains an ASCII newline, tab, or the < character, the value is reset to _blank. This is to prevent dangling markup injection attacks, a script-less attack in which an unclosed target attribute is injected into the page so that any text that follows is captured until the browser reaches a character that closes the attribute.

### Open Graph

Open Graph tags do not acknowledge <base>, and should always have full absolute URLs. For example:

```
<meta property="og:image" content="https://example.com/thumbnail.jpg" />
```

## Examples

```
<base href="https://www.example.com/" />
<base target="_blank" />
<base target="_top" href="https://example.com/" />
```

## Technical summary

## Specifications

## Browser compatibility

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/base
