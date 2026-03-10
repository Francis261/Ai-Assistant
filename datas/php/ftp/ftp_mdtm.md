# ftp_mdtm

Source: https://devdocs.io/php/function.ftp-mdtm

(PHP 4, PHP 5, PHP 7, PHP 8)

ftp_mdtm — Returns the last modified time of the given file

### Description

```
ftp_mdtm(FTP\Connection $ftp, string $filename): int
```

ftp_mdtm() gets the last modified time for a remote file.

Note:

Not all servers support this feature!

Note:

ftp_mdtm() does not work with directories.

### Parameters

An FTP\Connection instance.

The file from which to extract the last modification time.

### Return Values

Returns the last modified time as a local Unix timestamp on success, or -1 on error.

### Changelog

### Examples

Example #1 ftp_mdtm() example

```
<?php

$file = 'somefile.txt';

// set up basic connection
$ftp = ftp_connect($ftp_server);

// login with username and password
$login_result = ftp_login($ftp, $ftp_user_name, $ftp_user_pass);

//  get the last modified time
$buff = ftp_mdtm($ftp, $file);

if ($buff != -1) {
    // somefile.txt was last modified on: March 26 2003 14:16:41.
    echo "$file was last modified on : " . date("F d Y H:i:s.", $buff);
} else {
    echo "Couldn't get mdtime";
}

// close the connection
ftp_close($ftp);

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ftp-mdtm.php
