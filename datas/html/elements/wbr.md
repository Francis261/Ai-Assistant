# <wbr>: The Line Break Opportunity element

Source: https://devdocs.io/html/reference/elements/wbr

The <wbr> HTML element represents a word break opportunity—a position within text where the browser may optionally break a line, though its line-breaking rules would not otherwise create a break at that location.

## Try it

```
<div id="example-paragraphs">
  <p>Fernstraßenbauprivatfinanzierungsgesetz</p>
  <p>Fernstraßen<wbr />bau<wbr />privat<wbr />finanzierungs<wbr />gesetz</p>
  <p>Fernstraßen&shy;bau&shy;privat&shy;finanzierungs&shy;gesetz</p>
</div>
```

```
#example-paragraphs {
  background-color: white;
  overflow: hidden;
  resize: horizontal;
  width: 9rem;
  border: 2px dashed #999999;
}
```

## Attributes

This element only includes the global attributes.

## Notes

On UTF-8 encoded pages, <wbr> behaves like the U+200B ZERO-WIDTH SPACE code point. In particular, it behaves like a Unicode bidi BN code point, meaning it has no effect on bidi-ordering: <div dir=rtl>123,<wbr>456</div> displays, when not broken on two lines, 123,456 and not 456,123.

For the same reason, the <wbr> element does not introduce a hyphen at the line break point. To make a hyphen appear only at the end of a line, use the soft hyphen character entity (&shy;) instead.

## Examples

The Yahoo Style Guide recommends breaking a URL before punctuation, to avoid leaving a punctuation mark at the end of the line, which the reader might mistake for the end of the URL.

```
<p>
  http://this<wbr />.is<wbr />.a<wbr />.really<wbr />.long<wbr />.example<wbr />.com/With<wbr />/deeper<wbr />/level<wbr />/pages<wbr />/deeper<wbr />/level<wbr />/pages<wbr />/deeper<wbr />/level<wbr />/pages<wbr />/deeper<wbr />/level<wbr />/pages<wbr />/deeper<wbr />/level<wbr />/pages
</p>
```

### Result

## Technical summary

## Specifications

## Browser compatibility

## See also

- overflow-wrap
- word-break
- hyphens
- The <br> element

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/wbr
