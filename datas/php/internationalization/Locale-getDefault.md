# Locale::getDefault

Source: https://devdocs.io/php/locale.getdefault

# locale_get_default

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

Locale::getDefault -- locale_get_default — Gets the default locale value from the INTL global 'default_locale'

### Description

Object-oriented style

```
public static Locale::getDefault(): string
```

Procedural style

```
locale_get_default(): string
```

Gets the default locale value. At the PHP initialization this value is set to 'intl.default_locale' value from php.ini if that value exists or from ICU's function uloc_getDefault().

### Parameters

### Return Values

The current runtime locale

### Examples

Example #1 locale_get_default() example

```
<?php
ini_set('intl.default_locale', 'de-DE');
echo locale_get_default();
echo '; ';
locale_set_default('fr');
echo locale_get_default();
?>
```

Example #2 OO example

```
<?php
ini_set('intl.default_locale', 'de-DE');
echo Locale::getDefault();
echo '; ';
Locale::setDefault('fr');
echo Locale::getDefault();
?>
```

The above example will output:

```
de-DE; fr
```

### See Also

- locale_set_default() - Sets the default runtime locale

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/locale.getdefault.php
