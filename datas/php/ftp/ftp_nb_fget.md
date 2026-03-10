# ftp_nb_fget

Source: https://devdocs.io/php/function.ftp-nb-fget

(PHP 4 >= 4.3.0, PHP 5, PHP 7, PHP 8)

ftp_nb_fget — Retrieves a file from the FTP server and writes it to an open file (non-blocking)

### Description

```
ftp_nb_fget(
 FTP\Connection $ftp,
 resource $stream,
 string $remote_filename,
 int $mode = FTP_BINARY,
 int $offset = 0
): int
```

ftp_nb_fget() retrieves a remote file from the FTP server.

The difference between this function and ftp_fget() is that this function retrieves the file asynchronously, so your program can perform other operations while the file is being downloaded.

### Parameters

An FTP\Connection instance.

An open file pointer in which we store the data.

The remote file path.

The transfer mode. Must be either FTP_ASCII or FTP_BINARY.

The position in the remote file to start downloading from.

### Return Values

Returns FTP_FAILED or FTP_FINISHED or FTP_MOREDATA.

### Changelog

### Examples

Example #1 ftp_nb_fget() example

```
<?php

// open some file for writing
$file = 'index.php';
$fp = fopen($file, 'w');

$ftp = ftp_connect($ftp_server);

$login_result = ftp_login($ftp, $ftp_user_name, $ftp_user_pass);

// Initiate the download
$ret = ftp_nb_fget($ftp, $fp, $file, FTP_BINARY);
while ($ret == FTP_MOREDATA) {

   // Do whatever you want
   echo ".";

   // Continue downloading...
   $ret = ftp_nb_continue($ftp);
}
if ($ret != FTP_FINISHED) {
   echo "There was an error downloading the file...";
   exit(1);
}

// close filepointer
fclose($fp);
?>
```

### See Also

- ftp_nb_get() - Retrieves a file from the FTP server and writes it to a local file (non-blocking)
- ftp_nb_continue() - Continues retrieving/sending a file (non-blocking)
- ftp_fget() - Downloads a file from the FTP server and saves to an open file
- ftp_get() - Downloads a file from the FTP server

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ftp-nb-fget.php
