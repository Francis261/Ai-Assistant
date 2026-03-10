# HTML inputmode global attribute

Source: https://devdocs.io/html/reference/global_attributes/inputmode

The inputmode global attribute is an enumerated attribute that hints at the type of data that might be entered by the user while editing the element or its contents. This allows a browser to display an appropriate virtual keyboard.

It is used primarily on <input> elements, but is usable on any element in contenteditable mode.

It's important to understand that the inputmode attribute doesn't cause any validity requirements to be enforced on input. To require that input conforms to a particular data type, choose an appropriate <input> element type. For specific guidance on choosing <input> types, see the Value section.

## Value

The attribute can have any of the following values:

No virtual keyboard. For when the page implements its own keyboard input control.

Standard input keyboard for the user's current locale.

Fractional numeric input keyboard containing the digits and decimal separator for the user's locale (typically . or ,). Devices may or may not show a minus key (-).

Numeric input keyboard, but only requires the digits 0–9. Devices may or may not show a minus key.

A telephone keypad input, including the digits 0–9, the asterisk (*), and the pound (#) key. Inputs that require a telephone number should typically use <input type="tel"> instead.

A virtual keyboard optimized for search input. For instance, the return/submit key may be labeled "Search", along with possible other optimizations. Inputs that require a search query should typically use <input type="search"> instead.

A virtual keyboard optimized for entering email addresses. Typically includes the @character as well as other optimizations. Inputs that require email addresses should typically use <input type="email"> instead.

A keypad optimized for entering URLs. This may have the / key more prominent, for example. Enhanced features could include history access and so on. Inputs that require a URL should typically use <input type="url"> instead.

## Specifications

## Browser compatibility

## See also

- All global attributes.
- enterkeyhint global attribute

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/inputmode
