# <ruby>: The Ruby Annotation element

Source: https://devdocs.io/html/reference/elements/ruby

The <ruby> HTML element represents small annotations that are rendered above, below, or next to base text, usually used for showing the pronunciation of East Asian characters. It can also be used for annotating other kinds of text, but this usage is less common.

The term ruby originated as a unit of measurement used by typesetters, representing the smallest size that text can be printed on newsprint while remaining legible.

## Try it

```
<ruby> 明日 <rp>(</rp><rt>Ashita</rt><rp>)</rp> </ruby>
```

```
ruby {
  font-size: 2em;
}
```

## Attributes

This element only includes the global attributes.

## Examples

### Example 1: Character

```
<ruby>
  漢 <rp>(</rp><rt>Kan</rt><rp>)</rp> 字 <rp>(</rp><rt>ji</rt><rp>)</rp>
</ruby>
```

#### Result

### Example 2: Word

```
<ruby> 明日 <rp>(</rp><rt>Ashita</rt><rp>)</rp> </ruby>
```

#### Result

## Technical summary

## Specifications

## Browser compatibility

## See also

- <rt>
- <rp>
- ruby-overhang
- text-transform: full-size-kana

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/ruby
