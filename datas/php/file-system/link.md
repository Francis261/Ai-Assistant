# link

Source: https://devdocs.io/php/function.link

(PHP 4, PHP 5, PHP 7, PHP 8)

link — Create a hard link

### Description

```
link(string $target, string $link): bool
```

link() creates a hard link.

### Parameters

Target of the link.

The link name.

### Return Values

Returns true on success or false on failure.

### Errors/Exceptions

The function fails, and issues E_WARNING, if link already exists, or if target does not exist.

### Examples

Example #1 Creating a simple hard link

```
<?php
$target = 'source.ext'; // This is the file that already exists
$link = 'newfile.ext'; // This the filename that you want to link it to

link($target, $link);
?>
```

### Notes

Note: This function will not work on remote files as the file to be examined must be accessible via the server's filesystem.

Note: For Windows only: This function requires PHP to run in an elevated mode or with the UAC disabled.

### See Also

- symlink() - Creates a symbolic link
- readlink() - Returns the target of a symbolic link
- linkinfo() - Gets information about a link
- unlink() - Deletes a file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.link.php
