# ftp_rmdir

Source: https://devdocs.io/php/function.ftp-rmdir

(PHP 4, PHP 5, PHP 7, PHP 8)

ftp_rmdir — Removes a directory

### Description

```
ftp_rmdir(FTP\Connection $ftp, string $directory): bool
```

Removes the specified directory on the FTP server.

### Parameters

An FTP\Connection instance.

The directory to delete. This must be either an absolute or relative path to an empty directory.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 ftp_rmdir() example

```
<?php

$dir = 'www/';

// set up basic connection
$ftp = ftp_connect($ftp_server);

// login with username and password
$login_result = ftp_login($ftp, $ftp_user_name, $ftp_user_pass);

// try to delete the directory $dir
if (ftp_rmdir($ftp, $dir)) {
    echo "Successfully deleted $dir\n";
} else {
    echo "There was a problem while deleting $dir\n";
}

ftp_close($ftp);

?>
```

### See Also

- ftp_mkdir() - Creates a directory

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ftp-rmdir.php
