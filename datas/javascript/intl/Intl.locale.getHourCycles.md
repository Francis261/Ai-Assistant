# Intl.Locale.prototype.getHourCycles()

Source: https://devdocs.io/javascript/global_objects/intl/locale/gethourcycles

The getHourCycles() method of Intl.Locale instances returns a list of one or more unique hour cycle identifiers for this locale.

Note: In some versions of some browsers, this method was implemented as an accessor property called hourCycles. However, because it returns a new array on each access, it is now implemented as a method to prevent the situation of locale.hourCycles === locale.hourCycles returning false. Check the browser compatibility table for details.

## Syntax

```
getHourCycles()
```

### Parameters

None.

### Return value

An array of strings representing all hour cycle types commonly used for the Locale, sorted in descending preference. If the Locale already has an hourCycle, then the returned array contains that single value.

Below is a list of supported hour cycle types.

### Supported hour cycle types

Hour system using 1–12; corresponds to 'h' in patterns. The 12 hour clock, with midnight starting at 12:00 am. As used, for example, in the United States.

Hour system using 0–23; corresponds to 'H' in patterns. The 24 hour clock, with midnight starting at 0:00.

Hour system using 0–11; corresponds to 'K' in patterns. The 12 hour clock, with midnight starting at 0:00 am. Mostly used in Japan.

Hour system using 1–24; corresponds to 'k' in pattern. The 24 hour clock, with midnight starting at 24:00. Not used anywhere.

## Examples

### Obtaining supported hour cycles

If the Locale object doesn't have a hourCycle already, getHourCycles() lists all commonly-used hour cycle identifiers for the given Locale. For examples of explicitly setting a hourCycle, see hourCycle examples.

```
const arEG = new Intl.Locale("ar-EG");
console.log(arEG.getHourCycles()); // ["h12"]
```

```
const jaJP = new Intl.Locale("ja-JP");
console.log(jaJP.getHourCycles()); // ["h23"]
```

## Specifications

## Browser compatibility

## See also

- Intl.Locale
- Intl.Locale.prototype.hourCycle
- Unicode Hour Cycle Identifier in the Unicode locale data markup language spec

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getHourCycles
