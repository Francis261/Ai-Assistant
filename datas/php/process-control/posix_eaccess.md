# posix_eaccess

Source: https://devdocs.io/php/function.posix-eaccess

(PHP 8 >= 8.3.0)

posix_eaccess — Determine accessibility of a file

### Description

```
posix_eaccess(string $filename, int $flags = 0): bool
```

posix_eaccess() checks the effective user's permission of a file

### Parameters

The name of a file to be tested.

A mask consisting of one or more of POSIX_F_OK, POSIX_R_OK, POSIX_W_OK and POSIX_X_OK.

POSIX_R_OK, POSIX_W_OK and POSIX_X_OK request checking whether the file exists and has read, write and execute permissions, respectively. POSIX_F_OK just requests checking for the existence of the file.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 posix_eaccess() example

This example will check if the $file is readable and writable, otherwise will print an error message.

```
<?php

$file = 'some_file';

if (posix_eaccess($file, POSIX_R_OK | POSIX_W_OK)) {
    echo 'The file is readable and writable!';

} else {
    $error = posix_get_last_error();

    echo "Error $error: " . posix_strerror($error);
}

?>
```

### See Also

- posix_get_last_error() - Retrieve the error number set by the last posix function that failed
- posix_strerror() - Retrieve the system error message associated with the given errno
- posix_access() - Determine accessibility of a file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.posix-eaccess.php
