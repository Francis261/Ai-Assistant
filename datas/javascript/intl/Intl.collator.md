# Intl.Collator

Source: https://devdocs.io/javascript/global_objects/intl/collator

The Intl.Collator object enables language-sensitive string comparison.

## Try it

```
console.log(["Z", "a", "z", "ä"].sort(new Intl.Collator("de").compare));
// Expected output: Array ["a", "ä", "z", "Z"]

console.log(["Z", "a", "z", "ä"].sort(new Intl.Collator("sv").compare));
// Expected output: Array ["a", "z", "Z", "ä"]

console.log(
  ["Z", "a", "z", "ä"].sort(
    new Intl.Collator("de", { caseFirst: "upper" }).compare,
  ),
);
// Expected output: Array ["a", "ä", "Z", "z"]
```

## Constructor

Creates a new Collator object.

## Static methods

Returns an array containing those of the provided locales that are supported without having to fall back to the runtime's default locale.

## Instance properties

These properties are defined on Intl.Collator.prototype and shared by all Intl.Collator instances.

The constructor function that created the instance object. For Intl.Collator instances, the initial value is the Intl.Collator constructor.

The initial value of the [Symbol.toStringTag] property is the string "Intl.Collator". This property is used in Object.prototype.toString().

## Instance methods

Getter function that compares two strings according to the sort order of this Intl.Collator object.

Returns a new object with properties reflecting the locale and collation options computed during initialization of the object.

## Examples

### Using Collator

The following example demonstrates the different potential results for a string occurring before, after, or at the same level as another:

```
console.log(new Intl.Collator().compare("a", "c")); // -1, or some other negative value
console.log(new Intl.Collator().compare("c", "a")); // 1, or some other positive value
console.log(new Intl.Collator().compare("a", "a")); // 0
```

Note that the results shown in the code above can vary between browsers and browser versions. This is because the values are implementation-specific. That is, the specification requires only that the before and after values are negative and positive.

### Using locales

The results provided by Intl.Collator.prototype.compare() vary between languages. In order to get the sort order of the language used in the user interface of your application, make sure to specify that language (and possibly some fallback languages) using the locales argument:

```
// in German, ä sorts with a
console.log(new Intl.Collator("de").compare("ä", "z"));
// -1, or some other negative value

// in Swedish, ä sorts after z
console.log(new Intl.Collator("sv").compare("ä", "z"));
// 1, or some other positive value
```

### Using options

The results provided by Intl.Collator.prototype.compare() can be customized using the options argument:

```
// in German, ä has a as the base letter
console.log(new Intl.Collator("de", { sensitivity: "base" }).compare("ä", "a"));
// 0

// in Swedish, ä and a are separate base letters
console.log(new Intl.Collator("sv", { sensitivity: "base" }).compare("ä", "a"));
// 1, or some other positive value
```

## Specifications

## Browser compatibility

## See also

- Intl
- String.prototype.localeCompare()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator
