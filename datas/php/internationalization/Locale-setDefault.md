# Locale::setDefault

Source: https://devdocs.io/php/locale.setdefault

# locale_set_default

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

Locale::setDefault -- locale_set_default — Sets the default runtime locale

### Description

Object-oriented style

```
public static Locale::setDefault(string $locale): true
```

Procedural style

```
locale_set_default(string $locale): true
```

Sets the default runtime locale to locale. This changes the value of INTL global 'default_locale' locale identifier. UAX #35 extensions are accepted.

### Parameters

Is a BCP 47 compliant language tag.

### Return Values

Returns true.

### Examples

Example #1 locale_set_default() example

```
<?php
locale_set_default('de-DE');
echo locale_get_default();
?>
```

Example #2 OO example

```
<?php
Locale::setDefault('de-DE');
echo Locale::getDefault();
?>
```

The above example will output:

```
de-DE
```

### See Also

- locale_get_default() - Gets the default locale value from the INTL global 'default_locale'

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/locale.setdefault.php
