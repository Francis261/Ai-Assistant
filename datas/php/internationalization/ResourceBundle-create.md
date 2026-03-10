# ResourceBundle::create

Source: https://devdocs.io/php/resourcebundle.create

# resourcebundle_create

# ResourceBundle::__construct

(PHP 5 >= 5.3.2, PHP 7, PHP 8, PECL intl >= 2.0.0)

ResourceBundle::create -- resourcebundle_create -- ResourceBundle::__construct — Create a resource bundle

### Description

Object-oriented style (method)

```
public static ResourceBundle::create(?string $locale, ?string $bundle, bool $fallback = true): ?ResourceBundle
```

Procedural style

```
resourcebundle_create(?string $locale, ?string $bundle, bool $fallback = true): ?ResourceBundle
```

Object-oriented style (constructor):

Creates a resource bundle.

### Parameters

Locale for which the resources should be loaded (locale name, e.g. en_CA).

The directory where the data is stored or the name of the .dat file.

Whether locale should match exactly or fallback to parent locale is allowed.

### Return Values

Returns ResourceBundle object or null on error.

### Examples

Example #1 resourcebundle_create() example

```
<?php
$r = resourcebundle_create( 'es', "/usr/share/data/myapp");
echo $r['teststring'];
?>
```

Example #2 ResourceBundle::create() example

```
<?php
$r = ResourceBundle::create( 'es', "/usr/share/data/myapp");
echo $r['teststring'];
?>
```

The above example will output:

```
¡Hola, mundo!
```

### See Also

- resourcebundle_get() - Get data from the bundle

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/resourcebundle.create.php
