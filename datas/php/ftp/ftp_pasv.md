# ftp_pasv

Source: https://devdocs.io/php/function.ftp-pasv

(PHP 4, PHP 5, PHP 7, PHP 8)

ftp_pasv — Turns passive mode on or off

### Description

```
ftp_pasv(FTP\Connection $ftp, bool $enable): bool
```

ftp_pasv() turns on or off passive mode. In passive mode, data connections are initiated by the client, rather than by the server. It may be needed if the client is behind firewall.

Please note that ftp_pasv() can only be called after a successful login or otherwise it will fail.

### Parameters

An FTP\Connection instance.

If true, the passive mode is turned on, else it's turned off.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 ftp_pasv() example

```
<?php
$file = 'somefile.txt';
$remote_file = 'readme.txt';

// set up basic connection
$ftp = ftp_connect($ftp_server);

// login with username and password
$login_result = ftp_login($ftp, $ftp_user_name, $ftp_user_pass);

// turn passive mode on
ftp_pasv($ftp, true);

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

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ftp-pasv.php
