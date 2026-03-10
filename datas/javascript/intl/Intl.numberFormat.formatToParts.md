# Intl.NumberFormat.prototype.formatToParts()

Source: https://devdocs.io/javascript/global_objects/intl/numberformat/formattoparts

The formatToParts() method of Intl.NumberFormat instances returns an array of objects representing each part of the formatted string that would be returned by format(). It is useful for building custom strings from the locale-specific tokens.

## Try it

```
const amount = 654321.987;
const options = { style: "currency", currency: "USD" };
const numberFormat = new Intl.NumberFormat("en-US", options);

const parts = numberFormat.formatToParts(amount);
const partValues = parts.map((p) => p.value);

console.log(partValues);
// Expected output: "["$", "654", ",", "321", ".", "99"]"
```

## Syntax

```
formatToParts(number)
```

### Parameters

A Number, BigInt, or string, to format. Strings are parsed in the same way as in number conversion, except that formatToParts() will use the exact value that the string represents, avoiding loss of precision during implicitly conversion to a number.

### Return value

An Array of objects containing the formatted number in parts. Each object has two properties, type and value, each containing a string. The string concatenation of value, in the order provided, will result in the same string as format(). The type may be one of the following:

Any string that's a part of the format pattern; for example " ". Note that common tokens like the decimal separator or the plus/minus signs have their own token types.

The integral part of the number, or a segment of it if using grouping (controlled by options.useGrouping).

The group separator string, such as ",". Only present when using grouping (controlled by options.useGrouping).

The decimal separator string, such as ".". Only present when fraction is present.

The fractional part of the number.

The compact exponent, such as "M" or "thousands". Only present when options.notation is "compact". The form ("short" or "long") can be controlled via options.compactDisplay.

The exponent separator, such as "E". Only present when options.notation is "scientific" or "engineering".

The exponent minus sign string, such as "-". Only present when options.notation is "scientific" or "engineering" and the exponent is negative.

The exponent's integer value. Only present when options.notation is "scientific" or "engineering".

A string representing NaN, such as "NaN". This is the sole token representing the number itself when the number is NaN.

A string representing Infinity or -Infinity, such as "∞". This is the sole token representing the number itself when the number is Infinity or -Infinity.

The plus sign, such as "+".

The minus sign, such as "-".

The percent sign, such as "%". Only present when options.style is "percent".

The unit string, such as "l" or "litres". Only present when options.style is "unit". The form ("short", "narrow", or "long") can be controlled via options.unitDisplay.

The currency string, such as "$", "€", "Dollar", or "Euro". Only present when options.style is "currency". The form ("code", "symbol", "narrowSymbol", or "name") can be controlled via options.currencyDisplay.

Reserved for any token that's not recognized as one of the above; should be rarely encountered.

## Examples

### Using formatToParts()

The format() method outputs localized, opaque strings that cannot be manipulated directly:

```
const number = 3500;

const formatter = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
});

formatter.format(number);
// "3.500,00 €"
```

However, in many user interfaces you may want to customize the formatting of this string, or interleave it with other texts. The formatToParts() method produces the same information in parts:

```
formatter.formatToParts(number);

// return value:
[
  { type: "integer", value: "3" },
  { type: "group", value: "." },
  { type: "integer", value: "500" },
  { type: "decimal", value: "," },
  { type: "fraction", value: "00" },
  { type: "literal", value: " " },
  { type: "currency", value: "€" },
];
```

Now the information is available separately and it can be formatted and concatenated again in a customized way. For example by using Array.prototype.map(), arrow functions, a switch statement, template literals, and Array.prototype.join(), to insert additional markup for certain components.

```
const numberString = formatter
  .formatToParts(number)
  .map(({ type, value }) => {
    switch (type) {
      case "currency":
        return `<strong>${value}</strong>`;
      default:
        return value;
    }
  })
  .join("");

console.log(numberString);
// "3.500,00 <strong>€</strong>"
```

## Specifications

## Browser compatibility

## See also

- Intl.NumberFormat
- Intl.NumberFormat.prototype.format()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/formatToParts
