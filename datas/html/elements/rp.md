# <rp>: The Ruby Fallback Parenthesis element

Source: https://devdocs.io/html/reference/elements/rp

The <rp> HTML element is used to provide fall-back parentheses for browsers that do not support display of ruby annotations using the <ruby> element. One <rp> element should enclose each of the opening and closing parentheses that wrap the <rt> element that contains the annotation's text.

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

## Attributes

This element only includes the global attributes.

## Usage notes

- Ruby annotations are for showing pronunciation of East Asian characters, like using Japanese furigana or Taiwanese bopomofo characters. The <rp> element is used in the case of lack of <ruby> element support; the <rp> content provides what should be displayed in order to indicate the presence of a ruby annotation, usually parentheses.

## Examples

### Using ruby annotations

This example uses ruby annotations to display the Romaji equivalents for each character.

```
<ruby>
  漢 <rp>(</rp><rt>Kan</rt><rp>)</rp> 字 <rp>(</rp><rt>ji</rt><rp>)</rp>
</ruby>
```

#### Result

See the article about the <ruby> element for further examples.

### Without ruby support

If your browser does not support ruby annotations, the result looks like this instead:

## Technical summary

## Specifications

## Browser compatibility

## See also

- <ruby>
- <rt>
- <rb>
- <rtc>

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/rp
