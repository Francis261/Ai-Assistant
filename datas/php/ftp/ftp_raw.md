# ftp_raw

Source: https://devdocs.io/php/function.ftp-raw

(PHP 5, PHP 7, PHP 8)

ftp_raw — Sends an arbitrary command to an FTP server

### Description

```
ftp_raw(FTP\Connection $ftp, string $command): ?array
```

Sends an arbitrary command to the FTP server.

### Parameters

An FTP\Connection instance.

The command to execute.

### Return Values

Returns the server's response as an array of strings, or null on failure. No parsing is performed on the response string, nor does ftp_raw() determine if the command succeeded.

### Changelog

### Examples

Example #1 Using ftp_raw() to login to an FTP server manually.

```
<?php
$ftp = ftp_connect("ftp.example.com");

/* This is the same as: 
   ftp_login($ftp, "joeblow", "secret"); */
ftp_raw($ftp, "USER joeblow");
ftp_raw($ftp, "PASS secret");
?>
```

### See Also

- ftp_exec() - Requests execution of a command on the FTP server

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ftp-raw.php
