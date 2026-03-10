# The NumberFormatter class

Source: https://devdocs.io/php/class.numberformatter

## Introduction

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

Programs store and operate on numbers using a locale-independent binary representation. When displaying or printing a number it is converted to a locale-specific string. For example, the number 12345.67 is "12,345.67" in the US, "12 345,67" in France and "12.345,67" in Germany.

By invoking the methods provided by the NumberFormatter class, you can format numbers, currencies, and percentages according to the specified or default locale. NumberFormatter is locale-sensitive so you need to create a new NumberFormatter for each locale. NumberFormatter methods format primitive-type numbers, such as double and output the number as a locale-specific string.

For currencies you can use currency format type to create a formatter that returns a string with the formatted number and the appropriate currency sign. Of course, the NumberFormatter class is unaware of exchange rates so, the number output is the same regardless of the specified currency. This means that the same number has different monetary values depending on the currency locale. If the number is 9988776.65 the results will be:

- 9 988 776,65 € in France
- 9.988.776,65 € in Germany
- $9,988,776.65 in the United States

In order to format percentages, create a locale-specific formatter with percentage format type. With this formatter, a decimal fraction such as 0.75 is displayed as 75%.

For more complex formatting, like spelled-out numbers, the rule-based number formatters are used.

## Class synopsis

```
public static create(string $locale, int $style, ?string $pattern = null): ?NumberFormatter
```

```
public format(int|float $num, int $type = NumberFormatter::TYPE_DEFAULT): string|false
```

```
public formatCurrency(float $amount, string $currency): string|false
```

```
public getAttribute(int $attribute): int|float|false
```

```
public getErrorCode(): int
```

```
public getErrorMessage(): string
```

```
public getLocale(int $type = ULOC_ACTUAL_LOCALE): string|false
```

```
public getPattern(): string|false
```

```
public getSymbol(int $symbol): string|false
```

```
public getTextAttribute(int $attribute): string|false
```

```
public parse(string $string, int $type = NumberFormatter::TYPE_DOUBLE, int &$offset = null): int|float|false
```

```
public parseCurrency(string $string, string &$currency, int &$offset = null): float|false
```

```
public setAttribute(int $attribute, int|float $value): bool
```

```
public setPattern(string $pattern): bool
```

```
public setSymbol(int $symbol, string $value): bool
```

```
public setTextAttribute(int $attribute, string $value): bool
```

## Predefined Constants

## Format Types

These styles are used by the numfmt_create() to define the type of the formatter.

## Number Format Specifiers

These constants define how the numbers are parsed or formatted. They should be used as arguments to numfmt_format() and numfmt_parse().

## Number Format Attributes

Number format attribute used by numfmt_get_attribute() and numfmt_set_attribute().

## Number Format Text Attributes

Number format text attribute used by numfmt_get_text_attribute() and numfmt_set_text_attribute().

## Symbol Format Specifiers

Number format symbols used by numfmt_get_symbol() and numfmt_set_symbol().

## Rounding Modes

Rounding mode values used by numfmt_get_attribute() and numfmt_set_attribute() with NumberFormatter::ROUNDING_MODE attribute.

## Padding Specifiers

Pad position values used by numfmt_get_attribute() and numfmt_set_attribute() with NumberFormatter::PADDING_POSITION attribute.

## See Also

- » ICU formatting documentation
- » ICU number formatters
- » ICU decimal formatters
- » ICU rule-based number formatters

## Changelog

## Table of Contents

- NumberFormatter::create — Create a number formatter
- NumberFormatter::format — Format a number
- NumberFormatter::formatCurrency — Format a currency value
- NumberFormatter::getAttribute — Get an attribute
- NumberFormatter::getErrorCode — Get formatter's last error code
- NumberFormatter::getErrorMessage — Get formatter's last error message
- NumberFormatter::getLocale — Get formatter locale
- NumberFormatter::getPattern — Get formatter pattern
- NumberFormatter::getSymbol — Get a symbol value
- NumberFormatter::getTextAttribute — Get a text attribute
- NumberFormatter::parse — Parse a number
- NumberFormatter::parseCurrency — Parse a currency number
- NumberFormatter::setAttribute — Set an attribute
- NumberFormatter::setPattern — Set formatter pattern
- NumberFormatter::setSymbol — Set a symbol value
- NumberFormatter::setTextAttribute — Set a text attribute

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.numberformatter.php
