# ftp_fput

Source: https://devdocs.io/php/function.ftp-fput

(PHP 4, PHP 5, PHP 7, PHP 8)

ftp_fput — Uploads from an open file to the FTP server

### Description

```
ftp_fput(
 FTP\Connection $ftp,
 string $remote_filename,
 resource $stream,
 int $mode = FTP_BINARY,
 int $offset = 0
): bool
```

ftp_fput() uploads the data from a file pointer to a remote file on the FTP server.

### Parameters

An FTP\Connection instance.

The remote file path.

An open file pointer on the local file. Reading stops at end of file.

The transfer mode. Must be either FTP_ASCII or FTP_BINARY.

The position in the remote file to start uploading to.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 ftp_fput() example

```
<?php

// open some file for reading
$file = 'somefile.txt';
$fp = fopen($file, 'r');

// set up basic connection
$ftp = ftp_connect($ftp_server);

// login with username and password
$login_result = ftp_login($ftp, $ftp_user_name, $ftp_user_pass);

// try to upload $file
if (ftp_fput($ftp, $file, $fp, FTP_ASCII)) {
    echo "Successfully uploaded $file\n";
} else {
    echo "There was a problem while uploading $file\n";
}

// close the connection and the file handler
ftp_close($ftp);
fclose($fp);

?>
```

### See Also

- ftp_put() - Uploads a file to the FTP server
- ftp_nb_fput() - Stores a file from an open file to the FTP server (non-blocking)
- ftp_nb_put() - Stores a file on the FTP server (non-blocking)

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ftp-fput.php
