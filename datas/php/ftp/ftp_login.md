# ftp_login

Source: https://devdocs.io/php/function.ftp-login

(PHP 4, PHP 5, PHP 7, PHP 8)

ftp_login — Logs in to an FTP connection

### Description

```
ftp_login(FTP\Connection $ftp, string $username, #[\SensitiveParameter] string $password): bool
```

Logs in to the given FTP connection.

### Parameters

An FTP\Connection instance.

The username (USER).

The password (PASS).

### Return Values

Returns true on success or false on failure. If login fails, PHP will also throw a warning.

### Changelog

### Examples

Example #1 ftp_login() example

```
<?php
                     
$ftp_server = "ftp.example.com";
$ftp_user = "foo";
$ftp_pass = "bar";

// set up a connection or die
$ftp = ftp_connect($ftp_server) or die("Couldn't connect to $ftp_server"); 

// try to login
if (@ftp_login($ftp, $ftp_user, $ftp_pass)) {
    echo "Connected as $ftp_user@$ftp_server\n";
} else {
    echo "Couldn't connect as $ftp_user\n";
}

// close the connection
ftp_close($ftp);  
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ftp-login.php
