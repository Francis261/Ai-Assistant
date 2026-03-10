# ftp_mkdir

Source: https://devdocs.io/php/function.ftp-mkdir

(PHP 4, PHP 5, PHP 7, PHP 8)

ftp_mkdir — Creates a directory

### Description

```
ftp_mkdir(FTP\Connection $ftp, string $directory): string|false
```

Creates the specified directory on the FTP server.

### Parameters

An FTP\Connection instance.

The name of the directory that will be created.

### Return Values

Returns the newly created directory name on success or false on error.

### Errors/Exceptions

Emits an E_WARNING level error if the directory already exists or the relevant permissions prevent creating the directory.

### Changelog

### Examples

Example #1 ftp_mkdir() example

```
<?php

$dir = 'www';

// set up basic connection
$ftp = ftp_connect($ftp_server);

// login with username and password
$login_result = ftp_login($ftp, $ftp_user_name, $ftp_user_pass);

// try to create the directory $dir
if (ftp_mkdir($ftp, $dir)) {
 echo "successfully created $dir\n";
} else {
 echo "There was a problem while creating $dir\n";
}

// close the connection
ftp_close($ftp);
?>
```

### See Also

- ftp_rmdir() - Removes a directory

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ftp-mkdir.php
