# ftp_nb_fput

Source: https://devdocs.io/php/function.ftp-nb-fput

(PHP 4 >= 4.3.0, PHP 5, PHP 7, PHP 8)

ftp_nb_fput — Stores a file from an open file to the FTP server (non-blocking)

### Description

```
ftp_nb_fput(
 FTP\Connection $ftp,
 string $remote_filename,
 resource $stream,
 int $mode = FTP_BINARY,
 int $offset = 0
): int
```

ftp_nb_fput() uploads the data from a file pointer to a remote file on the FTP server.

The difference between this function and the ftp_fput() is that this function uploads the file asynchronously, so your program can perform other operations while the file is being uploaded.

### Parameters

An FTP\Connection instance.

The remote file path.

An open file pointer on the local file. Reading stops at end of file.

The transfer mode. Must be either FTP_ASCII or FTP_BINARY.

The position in the remote file to start uploading to.

### Return Values

Returns FTP_FAILED or FTP_FINISHED or FTP_MOREDATA.

### Changelog

### Examples

Example #1 ftp_nb_fput() example

```
<?php

$file = 'index.php';

$fp = fopen($file, 'r');

$ftp = ftp_connect($ftp_server);

$login_result = ftp_login($ftp, $ftp_user_name, $ftp_user_pass);

// Initiate the upload
$ret = ftp_nb_fput($ftp, $file, $fp, FTP_BINARY);
while ($ret == FTP_MOREDATA) {

   // Do whatever you want
   echo ".";

   // Continue upload...
   $ret = ftp_nb_continue($ftp);
}
if ($ret != FTP_FINISHED) {
   echo "There was an error uploading the file...";
   exit(1);
}

fclose($fp);
?>
```

### See Also

- ftp_nb_put() - Stores a file on the FTP server (non-blocking)
- ftp_nb_continue() - Continues retrieving/sending a file (non-blocking)
- ftp_put() - Uploads a file to the FTP server
- ftp_fput() - Uploads from an open file to the FTP server

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ftp-nb-fput.php
