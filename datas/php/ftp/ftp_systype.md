# ftp_systype

Source: https://devdocs.io/php/function.ftp-systype

(PHP 4, PHP 5, PHP 7, PHP 8)

ftp_systype — Returns the system type identifier of the remote FTP server

### Description

```
ftp_systype(FTP\Connection $ftp): string|false
```

Returns the system type identifier of the remote FTP server.

### Parameters

An FTP\Connection instance.

### Return Values

Returns the remote system type, or false on error.

### Changelog

### Examples

Example #1 ftp_systype() example

```
<?php

// ftp connection
$ftp = ftp_connect('ftp.example.com');
ftp_login($ftp, 'user', 'password');

// get the system type
if ($type = ftp_systype($ftp)) {
    echo "Example.com is powered by $type\n";
} else {
    echo "Couldn't get the systype";
}

?>
```

The above example will output something similar to:

```
Example.com is powered by UNIX
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ftp-systype.php
