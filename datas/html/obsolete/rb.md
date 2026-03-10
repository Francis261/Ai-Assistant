# <rb>: The Ruby Base element

Source: https://devdocs.io/html/reference/elements/rb

Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.

The <rb> HTML element is used to delimit the base text component of a <ruby> annotation, i.e., the text that is being annotated. One <rb> element should wrap each separate atomic segment of the base text.

## Attributes

This element only includes the global attributes.

## Usage notes

- Ruby annotations are for showing pronunciation of East Asian characters, like using Japanese furigana or Taiwanese bopomofo characters. The <rb> element is used to separate out each segment of the ruby base text.
- Even though <rb> is not a void element, it is common to just include the opening tag of each element in the source code, so that the ruby markup is less complex and easier to read. The browser can then fill in the full element in the rendered version.
- You need to include one <rt> element for each base segment/<rb> element that you want to annotate.

## Examples

### Using rb

In this example, we provide an annotation for the original character equivalent of "Kanji":

```
<ruby>
  <rb>漢</rb><rb>字 </rb><rp>(</rp><rt>kan</rt><rt>ji</rt><rp>)</rp>
</ruby>
```

Note how we've included two <rb> elements, to delimit the two separate parts of the ruby base text. The annotation on the other hand is delimited by two <rt> elements.

#### Result

### Separate annotations

Note that we could also write this example with the two base text parts annotated completely separately. In this case we don't need to include <rb> elements:

```
<ruby>
  漢 <rp>(</rp><rt>Kan</rt><rp>)</rp> 字 <rp>(</rp><rt>ji</rt><rp>)</rp>
</ruby>
```

#### Result

See the article about the <ruby> element for further examples.

## Technical summary

## Specifications

## Browser compatibility

## See also

- <ruby>
- <rt>
- <rp>
- <rtc>

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/rb
