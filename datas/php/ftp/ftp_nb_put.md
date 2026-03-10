# ftp_nb_put

Source: https://devdocs.io/php/function.ftp-nb-put

(PHP 4 >= 4.3.0, PHP 5, PHP 7, PHP 8)

ftp_nb_put — Stores a file on the FTP server (non-blocking)

### Description

```
ftp_nb_put(
 FTP\Connection $ftp,
 string $remote_filename,
 string $local_filename,
 int $mode = FTP_BINARY,
 int $offset = 0
): int|false
```

ftp_nb_put() stores a local file on the FTP server.

The difference between this function and the ftp_put() is that this function uploads the file asynchronously, so your program can perform other operations while the file is being uploaded.

### Parameters

An FTP\Connection instance.

The remote file path.

The local file path.

The transfer mode. Must be either FTP_ASCII or FTP_BINARY.

The position in the remote file to start uploading to.

### Return Values

Returns FTP_FAILED or FTP_FINISHED or FTP_MOREDATA, or false on failure to open the local file.

### Changelog

### Examples

Example #1 ftp_nb_put() example

```
<?php

// Initiate the Upload
$ret = ftp_nb_put($ftp, "test.remote", "test.local", FTP_BINARY);
while ($ret == FTP_MOREDATA) {
   
   // Do whatever you want
   echo ".";

   // Continue uploading...
   $ret = ftp_nb_continue($ftp);
}
if ($ret != FTP_FINISHED) {
   echo "There was an error uploading the file...";
   exit(1);
}
?>
```

Example #2 Resuming an upload with ftp_nb_put()

```
<?php

// Initiate
$ret = ftp_nb_put($ftp, "test.remote", "test.local", 
                      FTP_BINARY, ftp_size("test.remote"));
// OR: $ret = ftp_nb_put($ftp, "test.remote", "test.local", 
//                           FTP_BINARY, FTP_AUTORESUME);

while ($ret == FTP_MOREDATA) {
   
   // Do whatever you want
   echo ".";

   // Continue uploading...
   $ret = ftp_nb_continue($ftp);
}
if ($ret != FTP_FINISHED) {
   echo "There was an error uploading the file...";
   exit(1);
}
?>
```

### See Also

- ftp_nb_fput() - Stores a file from an open file to the FTP server (non-blocking)
- ftp_nb_continue() - Continues retrieving/sending a file (non-blocking)
- ftp_put() - Uploads a file to the FTP server
- ftp_fput() - Uploads from an open file to the FTP server

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ftp-nb-put.php
