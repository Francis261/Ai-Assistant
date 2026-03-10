# ftp_get

Source: https://devdocs.io/php/function.ftp-get

(PHP 4, PHP 5, PHP 7, PHP 8)

ftp_get — Downloads a file from the FTP server

### Description

```
ftp_get(
 FTP\Connection $ftp,
 string $local_filename,
 string $remote_filename,
 int $mode = FTP_BINARY,
 int $offset = 0
): bool
```

ftp_get() retrieves a remote file from the FTP server, and saves it into a local file.

### Parameters

An FTP\Connection instance.

The local file path (will be overwritten if the file already exists).

The remote file path.

The transfer mode. Must be either FTP_ASCII or FTP_BINARY.

The position in the remote file to start downloading from.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 ftp_get() example

```
<?php

// define some variables
$local_file = 'local.zip';
$server_file = 'server.zip';

// set up basic connection
$ftp = ftp_connect($ftp_server);

// login with username and password
$login_result = ftp_login($ftp, $ftp_user_name, $ftp_user_pass);

// try to download $server_file and save to $local_file
if (ftp_get($ftp, $local_file, $server_file, FTP_BINARY)) {
    echo "Successfully written to $local_file\n";
} else {
    echo "There was a problem\n";
}

// close the connection
ftp_close($ftp);

?>
```

### See Also

- ftp_pasv() - Turns passive mode on or off
- ftp_fget() - Downloads a file from the FTP server and saves to an open file
- ftp_nb_get() - Retrieves a file from the FTP server and writes it to a local file (non-blocking)
- ftp_nb_fget() - Retrieves a file from the FTP server and writes it to an open file (non-blocking)

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ftp-get.php
