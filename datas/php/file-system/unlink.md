# unlink

Source: https://devdocs.io/php/function.unlink

(PHP 4, PHP 5, PHP 7, PHP 8)

unlink — Deletes a file

### Description

```
unlink(string $filename, ?resource $context = null): bool
```

Deletes filename. Similar to the Unix C unlink() function. An E_WARNING level error will be generated on failure.

### Parameters

Path to the file.

If the file is a symlink, the symlink will be deleted. On Windows, to delete a symlink to a directory, rmdir() has to be used instead.

A context stream resource.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 Basic unlink() usage

```
<?php
$fh = fopen('test.html', 'a');
fwrite($fh, '<h1>Hello world!</h1>');
fclose($fh);

unlink('test.html');
?>
```

### See Also

- rmdir() - Removes directory

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.unlink.php
