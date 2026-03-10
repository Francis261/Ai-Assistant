# xattr_supported

Source: https://devdocs.io/php/function.xattr-supported

(PECL xattr >= 1.0.0)

xattr_supported — Check if filesystem supports extended attributes

### Description

```
xattr_supported(string $filename, int $flags = 0): bool
```

This functions checks if the filesystem holding the given file supports extended attributes. Read access to the file is required.

### Parameters

The path of the tested file.

### Return Values

This function returns true if filesystem supports extended attributes, false if it doesn't and null if it can't be determined (for example wrong path or lack of permissions to file).

### Examples

Example #1 xattr_supported() example

The following code checks if we can use extended attributes.

```
<?php
$file = 'some_file';

if (xattr_supported($file)) {
    /* ... make use of some xattr_* functions ... */
}

?>
```

### See Also

- xattr_get() - Get an extended attribute
- xattr_list() - Get a list of extended attributes

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.xattr-supported.php
