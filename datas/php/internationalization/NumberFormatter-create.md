# NumberFormatter::create

Source: https://devdocs.io/php/numberformatter.create

# numfmt_create

# NumberFormatter::__construct

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

NumberFormatter::create -- numfmt_create -- NumberFormatter::__construct — Create a number formatter

### Description

Object-oriented style (method)

```
public static NumberFormatter::create(string $locale, int $style, ?string $pattern = null): ?NumberFormatter
```

Procedural style

```
numfmt_create(string $locale, int $style, ?string $pattern = null): ?NumberFormatter
```

Object-oriented style (constructor):

Creates a number formatter.

### Parameters

Locale in which the number would be formatted (locale name, e.g. en_CA).

Style of the formatting, one of the format style constants. If NumberFormatter::PATTERN_DECIMAL or NumberFormatter::PATTERN_RULEBASED is passed then the number format is opened using the given pattern, which must conform to the syntax described in » ICU DecimalFormat documentation or » ICU RuleBasedNumberFormat documentation, respectively.

Pattern string if the chosen style requires a pattern.

### Return Values

Returns NumberFormatter object or null on error.

### Errors/Exceptions

A ValueError is thrown if locale is invalid.

### Changelog

### Examples

Example #1 numfmt_create() example

```
<?php
$fmt = numfmt_create( 'de_DE', NumberFormatter::DECIMAL );
echo numfmt_format($fmt, 1234567.891234567890000)."\n";
$fmt = numfmt_create( 'it', NumberFormatter::SPELLOUT );
echo numfmt_format($fmt, 1142)."\n";
?>
```

Example #2 NumberFormatter::create() example

```
<?php
$fmt = new NumberFormatter( 'de_DE', NumberFormatter::DECIMAL );
echo $fmt->format(1234567.891234567890000)."\n";
$fmt = new NumberFormatter( 'it', NumberFormatter::SPELLOUT );
echo $fmt->format(1142)."\n";
?>
```

The above example will output:

```
1.234.567,891
millicentoquarantadue
```

### See Also

- numfmt_format() - Format a number
- numfmt_parse() - Parse a number

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/numberformatter.create.php
