# IntlCalendar::getAvailableLocales

Source: https://devdocs.io/php/intlcalendar.getavailablelocales

(PHP 5 >= 5.5.0, PHP 7, PHP 8, PECL >= 3.0.0a1)

IntlCalendar::getAvailableLocales — Get array of locales for which there is data

### Description

Object-oriented style

```
public static IntlCalendar::getAvailableLocales(): array
```

Procedural style

```
intlcal_get_available_locales(): array
```

Gives the list of locales for which calendars are installed. As of ICU 51, this is the list of all installed ICU locales.

### Parameters

This function has no parameters.

### Return Values

An array of strings, one for which locale.

### Examples

Example #1 IntlCalendar::getAvailableLocales()

```
<?php
print_r(IntlCalendar::getAvailableLocales());
```

The above example will output:

```
Array
(
    [0] => af
    [1] => af_NA
    [2] => af_ZA
    [3] => agq
    [4] => agq_CM
    [5] => ak
    [6] => ak_GH
    [7] => am
    [8] => am_ET
    [9] => ar
    [10] => ar_001
    [11] => ar_AE
    [12] => ar_BH
    [13] => ar_DJ
    … output abbreviated …
    [595] => zh_Hant_HK
    [596] => zh_Hant_MO
    [597] => zh_Hant_TW
    [598] => zu
    [599] => zu_ZA
)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlcalendar.getavailablelocales.php
