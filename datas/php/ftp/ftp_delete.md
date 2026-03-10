# ftp_delete

Source: https://devdocs.io/php/function.ftp-delete

(PHP 4, PHP 5, PHP 7, PHP 8)

ftp_delete — Deletes a file on the FTP server

### Description

```
ftp_delete(FTP\Connection $ftp, string $filename): bool
```

ftp_delete() deletes the file specified by filename from the FTP server.

### Parameters

An FTP\Connection instance.

The file to delete.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 ftp_delete() example

```
<?php
$file = 'public_html/old.txt';

// set up basic connection
$ftp = ftp_connect($ftp_server);

// login with username and password
$login_result = ftp_login($ftp, $ftp_user_name, $ftp_user_pass);

// try to delete $file
if (ftp_delete($ftp, $file)) {
 echo "$file deleted successful\n";
} else {
 echo "could not delete $file\n";
}

// close the connection
ftp_close($ftp);
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ftp-delete.php
