# ftp_close

Source: https://devdocs.io/php/function.ftp-close

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

ftp_close — Closes an FTP connection

### Description

```
ftp_close(FTP\Connection $ftp): bool
```

ftp_close() closes the given link identifier and releases the resource.

Note:

After calling this function, you can no longer use the FTP connection and must create a new one with ftp_connect().

### Parameters

An FTP\Connection instance.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 ftp_close() example

```
<?php

// set up basic connection
$ftp = ftp_connect($ftp_server);

// login with username and password
$login_result = ftp_login($ftp, $ftp_user_name, $ftp_user_pass);

// print the current directory
echo ftp_pwd($ftp);

// close this connection
ftp_close($ftp);
?>
```

### See Also

- ftp_connect() - Opens an FTP connection

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ftp-close.php
