# ftp_nb_continue

Source: https://devdocs.io/php/function.ftp-nb-continue

(PHP 4 >= 4.3.0, PHP 5, PHP 7, PHP 8)

ftp_nb_continue — Continues retrieving/sending a file (non-blocking)

### Description

```
ftp_nb_continue(FTP\Connection $ftp): int
```

Continues retrieving/sending a file non-blocking.

### Parameters

An FTP\Connection instance.

### Return Values

Returns FTP_FAILED or FTP_FINISHED or FTP_MOREDATA.

### Changelog

### Examples

Example #1 ftp_nb_continue() example

```
<?php

// Initiate the download
$ret = ftp_nb_get($ftp, "test", "README", FTP_BINARY);
while ($ret == FTP_MOREDATA) {

   // Continue downloading...
   $ret = ftp_nb_continue($ftp);
}
if ($ret != FTP_FINISHED) {
   echo "There was an error downloading the file...";
   exit(1);
}
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ftp-nb-continue.php
