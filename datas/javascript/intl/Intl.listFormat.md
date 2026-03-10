# Intl.ListFormat

Source: https://devdocs.io/javascript/global_objects/intl/listformat

The Intl.ListFormat object enables language-sensitive list formatting.

## Try it

```
const vehicles = ["Motorcycle", "Bus", "Car"];

const formatter = new Intl.ListFormat("en", {
  style: "long",
  type: "conjunction",
});
console.log(formatter.format(vehicles));
// Expected output: "Motorcycle, Bus, and Car"

const formatter2 = new Intl.ListFormat("de", {
  style: "short",
  type: "disjunction",
});
console.log(formatter2.format(vehicles));
// Expected output: "Motorcycle, Bus oder Car"

const formatter3 = new Intl.ListFormat("en", { style: "narrow", type: "unit" });
console.log(formatter3.format(vehicles));
// Expected output: "Motorcycle Bus Car"
```

## Constructor

Creates a new Intl.ListFormat object.

## Static methods

Returns an array containing those of the provided locales that are supported without having to fall back to the runtime's default locale.

## Instance properties

These properties are defined on Intl.ListFormat.prototype and shared by all Intl.ListFormat instances.

The constructor function that created the instance object. For Intl.ListFormat instances, the initial value is the Intl.ListFormat constructor.

The initial value of the [Symbol.toStringTag] property is the string "Intl.ListFormat". This property is used in Object.prototype.toString().

## Instance methods

Returns a language-specific formatted string representing the elements of the list.

Returns an array of objects representing the different components that can be used to format a list of values in a locale-aware fashion.

Returns a new object with properties reflecting the locale and style formatting options computed during the construction of the current Intl.ListFormat object.

## Examples

### Using format

The following example shows how to create a List formatter using the English language.

```
const list = ["Motorcycle", "Bus", "Car"];

console.log(
  new Intl.ListFormat("en-GB", { style: "long", type: "conjunction" }).format(
    list,
  ),
);
// Motorcycle, Bus and Car

console.log(
  new Intl.ListFormat("en-GB", { style: "short", type: "disjunction" }).format(
    list,
  ),
);
// Motorcycle, Bus or Car

console.log(
  new Intl.ListFormat("en-GB", { style: "narrow", type: "unit" }).format(list),
);
// Motorcycle Bus Car
```

### Using formatToParts

The following example shows how to create a List formatter returning formatted parts

```
const list = ["Motorcycle", "Bus", "Car"];
console.log(
  new Intl.ListFormat("en-GB", {
    style: "long",
    type: "conjunction",
  }).formatToParts(list),
);

// [ { "type": "element", "value": "Motorcycle" },
//   { "type": "literal", "value": ", " },
//   { "type": "element", "value": "Bus" },
//   { "type": "literal", "value": ", and " },
//   { "type": "element", "value": "Car" } ];
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Intl.ListFormat in FormatJS
- Intl

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat
