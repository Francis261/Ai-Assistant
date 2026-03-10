# xattr_set

Source: https://devdocs.io/php/function.xattr-set

(PECL xattr >= 0.9.0)

xattr_set — Set an extended attribute

### Description

```
xattr_set(
 string $filename,
 string $name,
 string $value,
 int $flags = 0
): bool
```

This function sets the value of an extended attribute of a file.

Extended attributes have two different namespaces: user and root. The user namespace is available to all users, while the root namespace is available only to users with root privileges. xattr operates on the user namespace by default, but this can be changed with the flags parameter.

### Parameters

The file in which we set the attribute.

The name of the extended attribute. This attribute will be created if it doesn't exist or replaced otherwise. You can change this behaviour by using the flags parameter.

The value of the attribute.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Sets extended attributes on .wav file

```
<?php
$file = 'my_favourite_song.wav';
xattr_set($file, 'Artist', 'Someone');
xattr_set($file, 'My ranking', 'Good');
xattr_set($file, 'Listen count', '34');

/* ... other code ... */

printf("You've played this song %d times", xattr_get($file, 'Listen count')); 
?>
```

### See Also

- xattr_get() - Get an extended attribute
- xattr_remove() - Remove an extended attribute

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.xattr-set.php
