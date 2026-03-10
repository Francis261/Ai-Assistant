# <hr>: The Thematic Break (Horizontal Rule) element

Source: https://devdocs.io/html/reference/elements/hr

The <hr> HTML element represents a thematic break between paragraph-level elements: for example, a change of scene in a story, or a shift of topic within a section.

## Try it

```
<p>§1: The first rule of Fight Club is: You do not talk about Fight Club.</p>

<hr />

<p>§2: The second rule of Fight Club is: Always bring cupcakes.</p>
```

```
hr {
  border: none;
  border-top: 3px double #333333;
  color: #333333;
  overflow: visible;
  text-align: center;
  height: 5px;
}

hr::after {
  background: white;
  content: "§";
  padding: 0 4px;
  position: relative;
  top: -13px;
}
```

Historically, this has been presented as a horizontal rule or line. While it may still be displayed as a horizontal rule in visual browsers, this element is now defined in semantic terms, rather than presentational terms, so if you wish to draw a horizontal line, you should do so using appropriate CSS.

## Attributes

This element's attributes include the global attributes.

Sets the alignment of the rule on the page. If no value is specified, the default value is left.

Sets the color of the rule through color name or hexadecimal value.

Sets the rule to have no shading.

Sets the height, in pixels, of the rule.

Sets the length of the rule on the page through a pixel or percentage value.

## Example

### HTML

```
<p>
  This is the first paragraph of text. This is the first paragraph of text. This
  is the first paragraph of text. This is the first paragraph of text.
</p>

<hr />

<p>
  This is the second paragraph of text. This is the second paragraph of text.
  This is the second paragraph of text. This is the second paragraph of text.
</p>
```

### Result

## Technical summary

- Any element that accepts flow content
- <select> element

## Specifications

## Browser compatibility

## See also

- <p>
- <hr> in <select>

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/hr
