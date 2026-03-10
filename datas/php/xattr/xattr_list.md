# xattr_list

Source: https://devdocs.io/php/function.xattr-list

(PECL xattr >= 0.9.0)

xattr_list — Get a list of extended attributes

### Description

```
xattr_list(string $filename, int $flags = 0): array
```

This functions gets a list of names of extended attributes of a file.

Extended attributes have two different namespaces: user and root. The user namespace is available to all users, while the root namespace is available only to users with root privileges. xattr operates on the user namespace by default, but this can be changed with the flags parameter.

### Parameters

The path of the file.

### Return Values

This function returns an array with names of extended attributes.

### Examples

Example #1 Prints names of all extended attributes of file

```
<?php
$file = 'some_file';
$root_attributes = xattr_list($file, XATTR_ROOT);
$user_attributes = xattr_list($file);

echo "Root attributes: \n";
foreach ($root_attributes as $attr_name) {
    printf("%s\n", $attr_name);
}

echo "\n User attributes: \n";
foreach ($attributes as $attr_name) {
    printf("%s\n", $attr_name);
}

?>
```

### See Also

- xattr_get() - Get an extended attribute

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.xattr-list.php
