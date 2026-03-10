# HTML spellcheck global attribute

Source: https://devdocs.io/html/reference/global_attributes/spellcheck

The spellcheck global attribute is an enumerated attribute that defines whether the element may be checked for spelling errors.

Note: This attribute is merely a hint for the browser: browsers are not required to check for spelling errors. Typically non-editable elements are not checked for spelling errors, even if the spellcheck attribute is set to true and the browser supports spellchecking.

## Try it

```
<textarea spellcheck="true">
This exampull will be checkd fur spellung when you try to edit it.</textarea
>

<textarea spellcheck="false">
This exampull will nut be checkd fur spellung when you try to edit it.</textarea
>
```

It may have the following values:

- empty string or true, which indicates that the element should be, if possible, checked for spelling errors;
- false, which indicates that the element should not be checked for spelling errors.

If this attribute is not set, its default value is element-type and browser-defined. This default value may also be inherited, which means that the element content will be checked for spelling errors only if its nearest ancestor has a spellcheck state of true.

## Security and privacy concerns

Using spellchecking can have consequences for users' security and privacy. The specification does not regulate how spellchecking is done and the content of the element may be sent to a third party for spellchecking results (see enhanced spellchecking and "spell-jacking").

You should consider setting spellcheck to false for elements that can contain sensitive information.

## Specifications

## Browser compatibility

## See also

- All global attributes.
- autocorrect.

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/spellcheck
