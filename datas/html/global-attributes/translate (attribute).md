# HTML translate global attribute

Source: https://devdocs.io/html/reference/global_attributes/translate

The translate global attribute is an enumerated attribute that is used to specify whether an element's translatable attribute values and its Text node children should be translated when the page is localized, or whether to leave them unchanged.

It can have the following values:

- empty string or yes, which indicates that the element should be translated when the page is localized.
- no, which indicates that the element must not be translated.

Although not all browsers recognize this attribute, it is respected by automatic translation systems such as Google Translate, and may also be respected by tools used by human translators. As such it's important that web authors use this attribute to mark content that should not be translated.

## Examples

In this example, the translate attribute is used to ask translation tools not to translate the company's brand name in the footer.

```
<footer>
  <small>© 2020 <span translate="no">BrandName</span></small>
</footer>
```

## Specifications

## Browser compatibility

## See also

- All global attributes.
- The HTMLElement.translate property that reflects this attribute.
- Using HTML's translate attribute.
- HTML lang attribute

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/translate
