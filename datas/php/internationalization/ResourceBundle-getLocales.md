# ResourceBundle::getLocales

Source: https://devdocs.io/php/resourcebundle.locales

# resourcebundle_locales

(PHP 5 >= 5.3.2, PHP 7, PHP 8, PECL intl >= 2.0.0)

ResourceBundle::getLocales -- resourcebundle_locales — Get supported locales

### Description

Object-oriented style

```
public static ResourceBundle::getLocales(string $bundle): array|false
```

Procedural style

```
resourcebundle_locales(string $bundle): array|false
```

Get available locales from ResourceBundle name.

### Parameters

Path of ResourceBundle for which to get available locales, or empty string for default locales list.

### Return Values

Returns the list of locales supported by the bundle, or false on failure.

### Examples

Example #1 resourcebundle_locales() example

```
<?php
$bundle = "/user/share/data/myapp";
echo join(PHP_EOL, resourcebundle_locales($bundle));
?>
```

The above example will output something similar to:

```
es
root
```

Example #2 OO example

```
<?php
$bundle = "/usr/share/data/myapp";
$r = new ResourceBundle( 'es', $bundle);
echo join("\n", $r->getLocales($bundle));
?>
```

The above example will output something similar to:

```
es
root
```

### See Also

- resourcebundle_get() - Get data from the bundle

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/resourcebundle.locales.php
