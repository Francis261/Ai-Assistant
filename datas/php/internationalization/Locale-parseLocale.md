# Locale::parseLocale

Source: https://devdocs.io/php/locale.parselocale

# locale_parse

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

Locale::parseLocale -- locale_parse — Returns a key-value array of locale ID subtag elements

### Description

Object-oriented style

```
public static Locale::parseLocale(string $locale): ?array
```

Procedural style

```
locale_parse(string $locale): ?array
```

Returns a key-value array of locale ID subtag elements.

### Parameters

The locale to extract the subtag array from. Note: The 'variant' and 'private' subtags can take maximum 15 values whereas 'extlang' can take maximum 3 values.

### Return Values

Returns an array containing a list of key-value pairs, where the keys identify the particular locale ID subtags, and the values are the associated subtag values. The array will be ordered as the locale id subtags e.g. in the locale id if variants are '-varX-varY-varZ' then the returned array will have variant0=>varX , variant1=>varY , variant2=>varZ

Returns null when the length of locale exceeds INTL_MAX_LOCALE_LEN.

### Examples

Example #1 locale_parse() example

```
<?php
$arr = locale_parse('sl-Latn-IT-nedis');
if ($arr) {
    foreach ($arr as $key => $value) {
        echo "$key : $value , ";
    }
}
?>
```

Example #2 OO example

```
<?php
$arr = Locale::parseLocale('sl-Latn-IT-nedis');
if ($arr) {
    foreach ($arr as $key => $value) {
        echo "$key : $value , ";
    }
}
?>
```

The above example will output:

```
language : sl , script : Latn , region : IT , variant0 : NEDIS ,
```

### See Also

- locale_compose() - Returns a correctly ordered and delimited locale ID

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/locale.parselocale.php
