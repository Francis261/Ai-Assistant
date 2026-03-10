# ftp_connect

Source: https://devdocs.io/php/function.ftp-connect

(PHP 4, PHP 5, PHP 7, PHP 8)

ftp_connect — Opens an FTP connection

### Description

```
ftp_connect(string $hostname, int $port = 21, int $timeout = 90): FTP\Connection|false
```

ftp_connect() opens an FTP connection to the specified hostname.

### Parameters

The FTP server address. This parameter shouldn't have any trailing slashes and shouldn't be prefixed with ftp://.

This parameter specifies an alternate port to connect to. If it is omitted or set to zero, then the default FTP port, 21, will be used.

This parameter specifies the timeout in seconds for all subsequent network operations. If omitted, the default value is 90 seconds. The timeout can be changed and queried at any time with ftp_set_option() and ftp_get_option().

### Return Values

Returns an FTP\Connection instance on success, or false on failure.

### Changelog

### Examples

Example #1 ftp_connect() example

```
<?php

$ftp_server = "ftp.example.com";

// set up a connection or die
$ftp = ftp_connect($ftp_server) or die("Couldn't connect to $ftp_server"); 

?>
```

### See Also

- ftp_close() - Closes an FTP connection
- ftp_ssl_connect() - Opens a Secure SSL-FTP connection

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ftp-connect.php
