# <bdo>: The Bidirectional Text Override element

Source: https://devdocs.io/html/reference/elements/bdo

The <bdo> HTML element overrides the current directionality of text, so that the text within is rendered in a different direction.

## Try it

```
<h1>Famous seaside songs</h1>

<p>The English song "Oh I do like to be beside the seaside"</p>

<p>
  Looks like this in Hebrew:
  <span dir="rtl">אה, אני אוהב להיות ליד חוף הים</span>
</p>

<p>
  In the computer's memory, this is stored as
  <bdo dir="ltr">אה, אני אוהב להיות ליד חוף הים</bdo>
</p>
```

```
html {
  font-family: sans-serif;
}

bdo {
  /* Add your styles here */
}
```

The text's characters are drawn from the starting point in the given direction; the individual characters' orientation is not affected (so characters don't get drawn backward, for example).

## Attributes

This element's attributes include the global attributes.

The direction in which text should be rendered in this element's contents. Possible values are:

- ltr: Indicates that the text should go in a left-to-right direction.
- rtl: Indicates that the text should go in a right-to-left direction.

## Examples

```
<!-- Switch text direction -->
<p>This text will go left to right.</p>
<p><bdo dir="rtl">This text will go right to left.</bdo></p>
```

### Result

## Notes

The HTML 4 specification did not specify events for this element; they were added in XHTML. This is most likely an oversight.

## Technical summary

## Specifications

## Browser compatibility

## See also

- Related HTML element: <bdi>

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/bdo
