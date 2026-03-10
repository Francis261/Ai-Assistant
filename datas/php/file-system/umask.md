# umask

Source: https://devdocs.io/php/function.umask

(PHP 4, PHP 5, PHP 7, PHP 8)

umask — Changes the current umask

### Description

```
umask(?int $mask = null): int
```

umask() sets PHP's umask to mask & 0777 and returns the old umask. When PHP is being used as a server module, the umask is restored when each request is finished.

### Parameters

The new umask.

### Return Values

If mask is null, umask() simply returns the current umask otherwise the old umask is returned.

### Changelog

### Examples

Example #1 umask() example

```
<?php
$old = umask(0);
chmod("/path/some_dir/some_file.txt", 0755);
umask($old);

// Checking
if ($old != umask()) {
    die('An error occurred while changing back the umask');
}
?>
```

### Notes

Note:

Avoid using this function in multithreaded webservers. It is better to change the file permissions with chmod() after creating the file. Using umask() can lead to unexpected behavior of concurrently running scripts and the webserver itself because they all use the same umask.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.umask.php
