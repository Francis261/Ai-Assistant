# <br>: The Line Break element

Source: https://devdocs.io/html/reference/elements/br

The <br> HTML element produces a line break in text (carriage-return). It is useful for writing a poem or an address, where the division of lines is significant.

## Try it

```
<p>
  O’er all the hilltops<br />
  Is quiet now,<br />
  In all the treetops<br />
  Hearest thou<br />
  Hardly a breath;<br />
  The birds are asleep in the trees:<br />
  Wait, soon like these<br />
  Thou too shalt rest.
</p>
```

```
p {
  font-size: 1rem;
  font-family: sans-serif;
  margin: 20px;
}
```

As you can see from the above example, a <br> element is included at each point where we want the text to break. The text after the <br> begins again at the start of the next line of the text block.

Note: Do not use <br> to create margins between paragraphs; wrap them in <p> elements and use the CSS margin property to control their size.

## Attributes

This element's attributes include the global attributes.

### Deprecated attributes

Indicates where to begin the next line after the break.

## Styling with CSS

The <br> element has a single, well-defined purpose — to create a line break in a block of text. As such, it has no dimensions or visual output of its own, and there is very little you can do to style it.

You can set a margin on <br> elements themselves to increase the spacing between the lines of text in the block, but this is a bad practice — you should use the line-height property that was designed for that purpose.

## Accessibility

Creating separate paragraphs of text using <br> is not only bad practice, it is problematic for people who navigate with the aid of screen reading technology. Screen readers may announce the presence of the element, but not any content contained within <br>s. This can be a confusing and frustrating experience for the person using the screen reader.

Use <p> elements, and use CSS properties like margin to control their spacing.

## Examples

### Basic br

In the following example we use <br> elements to create line breaks between the different lines of a postal address:

```
Mozilla<br />
331 E. Evelyn Avenue<br />
Mountain View, CA<br />
94041<br />
USA<br />
```

#### Result

## Technical summary

## Specifications

## Browser compatibility

## See also

- <address> element
- <p> element
- <wbr> element

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/br
