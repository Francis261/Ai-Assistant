# <rt>: The Ruby Text element

Source: https://devdocs.io/html/reference/elements/rt

The <rt> HTML element specifies the ruby text component of a ruby annotation, which is used to provide pronunciation, translation, or transliteration information for East Asian typography. The <rt> element must always be contained within a <ruby> element.

## Try it

```
<ruby>
  漢 <rp>(</rp><rt>kan</rt><rp>)</rp> 字 <rp>(</rp><rt>ji</rt><rp>)</rp>
</ruby>
```

```
ruby {
  font-size: 2em;
}
```

See the article about the <ruby> element for more examples.

## Attributes

This element only includes the global attributes.

## Examples

### Using ruby annotations

This example provides Romaji transliteration for the kanji characters within the <ruby> element:

```
<ruby> 漢 <rt>Kan</rt> 字 <rt>ji</rt> </ruby>
```

#### Result

## Technical summary

## Specifications

## Browser compatibility

## See also

- <ruby>
- <rp>
- <rb>
- <rtc>
- text-transform: full-size-kana

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/rt
