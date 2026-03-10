# ResourceBundle::get

Source: https://devdocs.io/php/resourcebundle.get

# resourcebundle_get

(PHP 5 >= 5.3.2, PHP 7, PHP 8, PECL intl >= 2.0.0)

ResourceBundle::get -- resourcebundle_get — Get data from the bundle

### Description

Object-oriented style

```
public ResourceBundle::get(string|int $index, bool $fallback = true): mixed
```

Procedural style

```
resourcebundle_get(ResourceBundle $bundle, string|int $index, bool $fallback = true): mixed
```

Get the data from the bundle by index or string key.

### Parameters

ResourceBundle object.

Data index, must be string or integer.

Whether locale should match exactly or fallback to parent locale is allowed.

### Return Values

Returns the data located at the index or null on error. Strings, integers and binary data strings are returned as corresponding PHP types, integer array is returned as PHP array. Complex types are returned as ResourceBundle object.

### Errors/Exceptions

A TypeError is thrown if the offset type is invalid.

A ValueError is thrown if if index is a string and is empty or is a int and does not fit into a 32 bit integer type.

### Changelog

### Examples

Example #1 resourcebundle_get() example

```
<?php
$r = resourcebundle_create( 'es', "/usr/share/data/myapp");
echo resourcebundle_get($r, 'somestring');
?>
```

Example #2 OO example

```
<?php
$r = new ResourceBundle( 'es', "/usr/share/data/myapp");
echo $r->get('somestring');
?>
```

The above example will output:

```
?Hola, mundo!
```

### See Also

- resourcebundle_count() - Get number of elements in the bundle

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/resourcebundle.get.php
