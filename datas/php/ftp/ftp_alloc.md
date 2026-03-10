# ftp_alloc

Source: https://devdocs.io/php/function.ftp-alloc

(PHP 5, PHP 7, PHP 8)

ftp_alloc — Allocates space for a file to be uploaded

### Description

```
ftp_alloc(FTP\Connection $ftp, int $size, string &$response = null): bool
```

Sends an ALLO command to the remote FTP server to allocate space for a file to be uploaded.

Note:

Many FTP servers do not support this command. These servers may return a failure code (false) indicating the command is not supported or a success code (true) to indicate that pre-allocation is not necessary and the client should continue as though the operation were successful. Because of this, it may be best to reserve this function for servers which explicitly require preallocation.

### Parameters

An FTP\Connection instance.

The number of bytes to allocate.

A textual representation of the servers response will be returned by reference in response if a variable is provided.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 ftp_alloc() example

```
<?php

$file = "/home/user/myfile";

// connect to the server
$ftp = ftp_connect('ftp.example.com');
$login_result = ftp_login($ftp, 'anonymous', 'user@example.com');

if (ftp_alloc($ftp, filesize($file), $result)) {
  echo "Space successfully allocated on server.  Sending $file.\n";
  ftp_put($ftp, '/incoming/myfile', $file, FTP_BINARY);
} else {
  echo "Unable to allocate space on server.  Server said: $result\n";
}

ftp_close($ftp);

?>
```

### See Also

- ftp_put() - Uploads a file to the FTP server
- ftp_fput() - Uploads from an open file to the FTP server

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ftp-alloc.php
