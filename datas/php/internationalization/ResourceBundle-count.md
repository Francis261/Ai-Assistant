# ResourceBundle::count

Source: https://devdocs.io/php/resourcebundle.count

# resourcebundle_count

(PHP 5 >= 5.3.2, PHP 7, PHP 8, PECL intl >= 2.0.0)

ResourceBundle::count -- resourcebundle_count — Get number of elements in the bundle

### Description

Object-oriented style

```
public ResourceBundle::count(): int
```

Procedural style

```
resourcebundle_count(ResourceBundle $bundle): int
```

Get the number of elements in the bundle.

### Parameters

ResourceBundle object.

### Return Values

Returns number of elements in the bundle.

### Examples

Example #1 resourcebundle_count() example

```
<?php
$r = resourcebundle_create( 'es', "/usr/share/data/myapp");
echo resourcebundle_count($r);
?>
```

Example #2 OO example

```
<?php
$r = new ResourceBundle( 'es', "/usr/share/data/myapp");
echo $r->count();
?>
```

The above example will output:

```
42
```

### See Also

- resourcebundle_get() - Get data from the bundle

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/resourcebundle.count.php
