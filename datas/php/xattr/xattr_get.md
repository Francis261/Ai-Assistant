# xattr_get

Source: https://devdocs.io/php/function.xattr-get

(PECL xattr >= 0.9.0)

xattr_get — Get an extended attribute

### Description

```
xattr_get(string $filename, string $name, int $flags = 0): string|false
```

This function gets the value of an extended attribute of a file.

Extended attributes have two different namespaces: user and root. The user namespace is available to all users, while the root namespace is available only to users with root privileges. xattr operates on the user namespace by default, but this can be changed with the flags parameter.

### Parameters

The file from which we get the attribute.

The name of the attribute.

### Return Values

Returns a string containing the value or false if the attribute doesn't exist.

### Examples

Example #1 Checks if system administrator has signed the file

```
<?php
$file = '/usr/local/sbin/some_binary';
$signature = xattr_get($file, 'Root signature', XATTR_ROOT);

/* ... check if $signature is valid ... */

?>
```

### See Also

- xattr_list() - Get a list of extended attributes
- xattr_set() - Set an extended attribute
- xattr_remove() - Remove an extended attribute

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.xattr-get.php
