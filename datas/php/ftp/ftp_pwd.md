# ftp_pwd

Source: https://devdocs.io/php/function.ftp-pwd

(PHP 4, PHP 5, PHP 7, PHP 8)

ftp_pwd — Returns the current directory name

### Description

```
ftp_pwd(FTP\Connection $ftp): string|false
```

### Parameters

An FTP\Connection instance.

### Return Values

Returns the current directory name or false on error.

### Changelog

### Examples

Example #1 ftp_pwd() example

```
<?php

// set up basic connection
$ftp = ftp_connect($ftp_server);

// login with username and password
$login_result = ftp_login($ftp, $ftp_user_name, $ftp_user_pass);

// change directory to public_html
ftp_chdir($ftp, 'public_html');

// print current directory
echo ftp_pwd($ftp); // /public_html

// close the connection
ftp_close($ftp);
?>
```

### See Also

- ftp_chdir() - Changes the current directory on a FTP server
- ftp_cdup() - Changes to the parent directory

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ftp-pwd.php
