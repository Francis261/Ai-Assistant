# ftp_cdup

Source: https://devdocs.io/php/function.ftp-cdup

(PHP 4, PHP 5, PHP 7, PHP 8)

ftp_cdup — Changes to the parent directory

### Description

```
ftp_cdup(FTP\Connection $ftp): bool
```

Changes to the parent directory.

### Parameters

An FTP\Connection instance.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 ftp_cdup() example

```
<?php
// set up basic connection
$ftp = ftp_connect($ftp_server);

// login with username and password
$login_result = ftp_login($ftp, $ftp_user_name, $ftp_user_pass);

// change the current directory to html
ftp_chdir($ftp, 'html');

echo ftp_pwd($ftp); // /html 

// return to the parent directory
if (ftp_cdup($ftp)) { 
  echo "cdup successful\n";
} else {
  echo "cdup not successful\n";
}

echo ftp_pwd($ftp); // /

ftp_close($ftp);
?>
```

### See Also

- ftp_chdir() - Changes the current directory on a FTP server
- ftp_pwd() - Returns the current directory name

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ftp-cdup.php
