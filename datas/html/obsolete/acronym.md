# <acronym>

Source: https://devdocs.io/html/reference/elements/acronym

Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.

The <acronym> HTML element allows authors to clearly indicate a sequence of characters that compose an acronym or abbreviation for a word.

Warning: Don't use this element. Use the <abbr> element instead.

## Attributes

This element only has global attributes, which are common to all elements.

## DOM Interface

This element implements the HTMLElement interface.

## Examples

```
<p>
  The <acronym title="World Wide Web">WWW</acronym> is only a component of the
  Internet.
</p>
```

### Result

## Default styling

Though the purpose of this tag is purely for the convenience of the author, its default styling varies from one browser to another:

- Opera, Firefox, Chrome, and some others add a dotted underline to the content of the element.
- A few browsers not only add a dotted underline, but also put it in small caps; to avoid this styling, adding something like font-variant: none in the CSS takes care of this case.

It is therefore recommended that web authors either explicitly style this element, or accept some cross-browser variation.

## Specifications

## Browser compatibility

## See also

- The <abbr> HTML element

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/acronym
