# ftp_chdir

Source: https://devdocs.io/php/function.ftp-chdir

(PHP 4, PHP 5, PHP 7, PHP 8)

ftp_chdir — Changes the current directory on a FTP server

### Description

```
ftp_chdir(FTP\Connection $ftp, string $directory): bool
```

Changes the current directory to the specified one.

### Parameters

An FTP\Connection instance.

The target directory.

### Return Values

Returns true on success or false on failure. If changing directory fails, PHP will also throw a warning.

### Changelog

### Examples

Example #1 ftp_chdir() example

```
<?php

// set up basic connection
$ftp = ftp_connect($ftp_server); 

// login with username and password
$login_result = ftp_login($ftp, $ftp_user_name, $ftp_user_pass); 

// check connection
if ((!$ftp) || (!$login_result)) {
    die("FTP connection has failed !");
}

echo "Current directory: " . ftp_pwd($ftp) . "\n";

// try to change the directory to somedir
if (ftp_chdir($ftp, "somedir")) {
    echo "Current directory is now: " . ftp_pwd($ftp) . "\n";
} else { 
    echo "Couldn't change directory\n";
}

// close the connection
ftp_close($ftp);
?>
```

### See Also

- ftp_cdup() - Changes to the parent directory
- ftp_pwd() - Returns the current directory name

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ftp-chdir.php
