# ftp_size

Source: https://devdocs.io/php/function.ftp-size

(PHP 4, PHP 5, PHP 7, PHP 8)

ftp_size — Returns the size of the given file

### Description

```
ftp_size(FTP\Connection $ftp, string $filename): int
```

ftp_size() returns the size of the given file in bytes.

Note:

Not all servers support this feature.

### Parameters

An FTP\Connection instance.

The remote file.

### Return Values

Returns the file size on success, or -1 on error.

### Changelog

### Examples

Example #1 ftp_size() example

```
<?php

$file = 'somefile.txt';

// set up basic connection
$ftp = ftp_connect($ftp_server);

// login with username and password
$login_result = ftp_login($ftp, $ftp_user_name, $ftp_user_pass);

// get the size of $file
$res = ftp_size($ftp, $file);

if ($res != -1) {
    echo "size of $file is $res bytes";
} else {
    echo "couldn't get the size";
}

// close the connection
ftp_close($ftp);

?>
```

### See Also

- ftp_rawlist() - Returns a detailed list of files in the given directory

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ftp-size.php
