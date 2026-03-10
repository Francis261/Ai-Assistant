# ftp_put

Source: https://devdocs.io/php/function.ftp-put

(PHP 4, PHP 5, PHP 7, PHP 8)

ftp_put — Uploads a file to the FTP server

### Description

```
ftp_put(
 FTP\Connection $ftp,
 string $remote_filename,
 string $local_filename,
 int $mode = FTP_BINARY,
 int $offset = 0
): bool
```

ftp_put() stores a local file on the FTP server.

### Parameters

An FTP\Connection instance.

The remote file path.

The local file path.

The transfer mode. Must be either FTP_ASCII or FTP_BINARY.

The position in the remote file to start uploading to.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 ftp_put() example

```
<?php
$file = 'somefile.txt';
$remote_file = 'readme.txt';

// set up basic connection
$ftp = ftp_connect($ftp_server);

// login with username and password
$login_result = ftp_login($ftp, $ftp_user_name, $ftp_user_pass);

// upload a file
if (ftp_put($ftp, $remote_file, $file, FTP_ASCII)) {
 echo "successfully uploaded $file\n";
} else {
 echo "There was a problem while uploading $file\n";
}

// close the connection
ftp_close($ftp);
?>
```

### See Also

- ftp_pasv() - Turns passive mode on or off
- ftp_fput() - Uploads from an open file to the FTP server
- ftp_nb_fput() - Stores a file from an open file to the FTP server (non-blocking)
- ftp_nb_put() - Stores a file on the FTP server (non-blocking)

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ftp-put.php
