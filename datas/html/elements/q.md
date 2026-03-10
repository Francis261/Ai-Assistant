# <q>: The Inline Quotation element

Source: https://devdocs.io/html/reference/elements/q

The <q> HTML element indicates that the enclosed text is a short inline quotation. Most modern browsers implement this by surrounding the text in quotation marks. This element is intended for short quotations that don't require paragraph breaks; for long quotations use the <blockquote> element.

## Try it

```
<p>
  When Dave asks HAL to open the pod bay door, HAL answers:
  <q
    cite="https://www.imdb.com/title/tt0062622/quotes/?item=qt0396921&ref_=ext_shr_lnk">
    I'm sorry, Dave. I'm afraid I can't do that.
  </q>
</p>
```

```
q {
  font-style: italic;
}
```

## Attributes

This element includes the global attributes.

The value of this attribute is a URL that designates a source document or message for the information quoted. This attribute is intended to point to information explaining the context or the reference for the quote.

## Examples

```
<p>
  According to Mozilla's website,
  <q cite="https://www.mozilla.org/en-US/about/history/details/">
    Firefox 1.0 was released in 2004 and became a big success.
  </q>
</p>
```

### Result

## Technical summary

## Specifications

## Browser compatibility

## See also

- The <blockquote> element for long quotations.
- The <cite> element for source citations.

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/q
