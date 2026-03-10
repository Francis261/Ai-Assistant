# ftp_chmod

Source: https://devdocs.io/php/function.ftp-chmod

(PHP 5, PHP 7, PHP 8)

ftp_chmod — Set permissions on a file via FTP

### Description

```
ftp_chmod(FTP\Connection $ftp, int $permissions, string $filename): int|false
```

Sets the permissions on the specified remote file to permissions.

### Parameters

An FTP\Connection instance.

The new permissions, given as an octal value.

The remote file.

### Return Values

Returns the new file permissions on success or false on error.

### Changelog

### Examples

Example #1 ftp_chmod() example

```
<?php
$file = 'public_html/index.php';

// set up basic connection
$ftp = ftp_connect($ftp_server);

// login with username and password
$login_result = ftp_login($ftp, $ftp_user_name, $ftp_user_pass);

// try to chmod $file to 644
if (ftp_chmod($ftp, 0644, $file) !== false) {
 echo "$file chmoded successfully to 644\n";
} else {
 echo "could not chmod $file\n";
}

// close the connection
ftp_close($ftp);
?>
```

### See Also

- chmod() - Changes file mode

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ftp-chmod.php
