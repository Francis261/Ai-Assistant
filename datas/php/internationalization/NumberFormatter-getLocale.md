# NumberFormatter::getLocale

Source: https://devdocs.io/php/numberformatter.getlocale

# numfmt_get_locale

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

NumberFormatter::getLocale -- numfmt_get_locale — Get formatter locale

### Description

Object-oriented style

```
public NumberFormatter::getLocale(int $type = ULOC_ACTUAL_LOCALE): string|false
```

Procedural style

```
numfmt_get_locale(NumberFormatter $formatter, int $type = ULOC_ACTUAL_LOCALE): string|false
```

Get formatter locale name.

### Parameters

NumberFormatter object.

You can choose between valid and actual locale ( Locale::VALID_LOCALE, Locale::ACTUAL_LOCALE, respectively). The default is the actual locale.

### Return Values

The locale name used to create the formatter, or false on failure.

### Examples

Example #1 numfmt_get_locale() example

```
<?php
$req     = 'fr_FR_PARIS';
$fmt     = numfmt_create( $req,  NumberFormatter::DECIMAL);
$res_val = numfmt_get_locale( $fmt, Locale::VALID_LOCALE );
$res_act = numfmt_get_locale( $fmt, Locale::ACTUAL_LOCALE );
printf( "Requested locale name: %s\nValid locale name: %s\nActual locale name: %s\n",
         $req, $res_val, $res_act );
?>
```

The above example will output:

```
Requested locale name: fr_FR_PARIS
Valid locale name: fr_FR
Actual locale name: fr
```

### See Also

- numfmt_create() - Create a number formatter
- numfmt_get_error_code() - Get formatter's last error code

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/numberformatter.getlocale.php
