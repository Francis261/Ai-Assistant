# ftp_rename

Source: https://devdocs.io/php/function.ftp-rename

(PHP 4, PHP 5, PHP 7, PHP 8)

ftp_rename — Renames a file or a directory on the FTP server

### Description

```
ftp_rename(FTP\Connection $ftp, string $from, string $to): bool
```

ftp_rename() renames a file or a directory on the FTP server.

### Parameters

An FTP\Connection instance.

The old file/directory name.

The new name.

### Return Values

Returns true on success or false on failure. Upon failure (such as attempting to rename a non-existent file), an E_WARNING error will be emitted.

### Changelog

### Examples

Example #1 ftp_rename() example

```
<?php
$old_file = 'somefile.txt.bak';
$new_file = 'somefile.txt';

// Set up basic connection
$ftp = ftp_connect($ftp_server);

// Login with username and password
$login_result = ftp_login($ftp, $ftp_user_name, $ftp_user_pass);

// Try to rename $old_file to $new_file
if (ftp_rename($ftp, $old_file, $new_file)) {
    echo "Successfully renamed $old_file to $new_file\n";
} else {
    echo "There was a problem while renaming $old_file to $new_file\n";
}

// Close the connection
ftp_close($ftp);

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ftp-rename.php
