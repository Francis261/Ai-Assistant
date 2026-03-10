# xattr_remove

Source: https://devdocs.io/php/function.xattr-remove

(PECL xattr >= 0.9.0)

xattr_remove — Remove an extended attribute

### Description

```
xattr_remove(string $filename, string $name, int $flags = 0): bool
```

This function removes an extended attribute of a file.

Extended attributes have two different namespaces: user and root. The user namespace is available to all users, while the root namespace is available only to users with root privileges. xattr operates on the user namespace by default, but this can be changed with the flags parameter.

### Parameters

The file from which we remove the attribute.

The name of the attribute to remove.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Removes all extended attributes of a file

```
<?php
$file = 'some_file';
$attributes = xattr_list($file);

foreach ($attributes as $attr_name) {
    xattr_remove($file, $attr_name);
}
?>
```

### See Also

- xattr_list() - Get a list of extended attributes
- xattr_set() - Set an extended attribute
- xattr_get() - Get an extended attribute

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.xattr-remove.php
