# ftp_nb_get

Source: https://devdocs.io/php/function.ftp-nb-get

(PHP 4 >= 4.3.0, PHP 5, PHP 7, PHP 8)

ftp_nb_get — Retrieves a file from the FTP server and writes it to a local file (non-blocking)

### Description

```
ftp_nb_get(
 FTP\Connection $ftp,
 string $local_filename,
 string $remote_filename,
 int $mode = FTP_BINARY,
 int $offset = 0
): int|false
```

ftp_nb_get() retrieves a remote file from the FTP server, and saves it into a local file.

The difference between this function and ftp_get() is that this function retrieves the file asynchronously, so your program can perform other operations while the file is being downloaded.

### Parameters

An FTP\Connection instance.

The local file path (will be overwritten if the file already exists).

The remote file path.

The transfer mode. Must be either FTP_ASCII or FTP_BINARY.

The position in the remote file to start downloading from.

### Return Values

Returns FTP_FAILED or FTP_FINISHED or FTP_MOREDATA, or false on failure to open the local file.

### Changelog

### Examples

Example #1 ftp_nb_get() example

```
<?php

// Initiate the download
$ret = ftp_nb_get($ftp, "test", "README", FTP_BINARY);
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
?>
```

Example #2 Resuming a download with ftp_nb_get()

```
<?php

// Initiate 
$ret = ftp_nb_get($ftp, "test", "README", FTP_BINARY, 
                      filesize("test"));
// OR: $ret = ftp_nb_get($ftp, "test", "README", 
//                           FTP_BINARY, FTP_AUTORESUME);
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
?>
```

Example #3 Resuming a download at position 100 to a new file with ftp_nb_get()

```
<?php

// Disable Autoseek
ftp_set_option($ftp, FTP_AUTOSEEK, false);

// Initiate
$ret = ftp_nb_get($ftp, "newfile", "README", FTP_BINARY, 100);
while ($ret == FTP_MOREDATA) {

   /* ... */
   
   // Continue downloading...
   $ret = ftp_nb_continue($ftp);
}
?>
```

In the example above, newfile is 100 bytes smaller than README on the FTP server because we started reading at offset 100. If we didn't disable FTP_AUTOSEEK, the first 100 bytes of newfile would be '\0'.

### See Also

- ftp_nb_fget() - Retrieves a file from the FTP server and writes it to an open file (non-blocking)
- ftp_nb_continue() - Continues retrieving/sending a file (non-blocking)
- ftp_fget() - Downloads a file from the FTP server and saves to an open file
- ftp_get() - Downloads a file from the FTP server

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ftp-nb-get.php
