# IntlCalendar::getKeywordValuesForLocale

Source: https://devdocs.io/php/intlcalendar.getkeywordvaluesforlocale

(PHP 5 >= 5.5.0, PHP 7, PHP 8, PECL >= 3.0.0a1)

IntlCalendar::getKeywordValuesForLocale — Get set of locale keyword values

### Description

Object-oriented style

```
public static IntlCalendar::getKeywordValuesForLocale(string $keyword, string $locale, bool $onlyCommon): IntlIterator|false
```

Procedural style

```
intlcal_get_keyword_values_for_locale(string $keyword, string $locale, bool $onlyCommon): IntlIterator|false
```

For a given locale key, get the set of values for that key that would result in a different behavior. For now, only the 'calendar' keyword is supported.

This function requires ICU 4.2 or later.

### Parameters

The locale keyword for which relevant values are to be queried. Only 'calendar' is supported.

The locale onto which the keyword/value pair are to be appended.

Whether to show only the values commonly used for the specified locale.

### Return Values

An iterator that yields strings with the locale keyword values or false on failure.

### Examples

Example #1 IntlCalendar::getKeyworkValuesForLocale()

```
<?php
print_r(
        iterator_to_array(
                IntlCalendar::getKeywordValuesForLocale(
                        'calendar', 'fa_IR', true)));
print_r(
        iterator_to_array(
                IntlCalendar::getKeywordValuesForLocale(
                        'calendar', 'fa_IR', false)));
```

The above example will output:

```
Array
(
    [0] => persian
    [1] => gregorian
    [2] => islamic
    [3] => islamic-civil
)
Array
(
    [0] => persian
    [1] => gregorian
    [2] => islamic
    [3] => islamic-civil
    [4] => japanese
    [5] => buddhist
    [6] => roc
    [7] => hebrew
    [8] => chinese
    [9] => indian
    [10] => coptic
    [11] => ethiopic
    [12] => ethiopic-amete-alem
)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlcalendar.getkeywordvaluesforlocale.php
