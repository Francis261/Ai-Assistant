# ftp_exec

Source: https://devdocs.io/php/function.ftp-exec

(PHP 4 >= 4.0.3, PHP 5, PHP 7, PHP 8)

ftp_exec — Requests execution of a command on the FTP server

### Description

```
ftp_exec(FTP\Connection $ftp, string $command): bool
```

Sends a SITE EXEC command request to the FTP server.

### Parameters

An FTP\Connection instance.

The command to execute.

### Return Values

Returns true if the command was successful (server sent response code: 200); otherwise returns false.

### Changelog

### Examples

Example #1 ftp_exec() example

```
<?php

// variable initialization
$command = 'ls -al >files.txt';

// set up basic connection
$ftp = ftp_connect($ftp_server);

// login with username and password
$login_result = ftp_login($ftp, $ftp_user_name, $ftp_user_pass);

// execute command
if (ftp_exec($ftp, $command)) {
    echo "$command executed successfully\n";
} else {
    echo "could not execute $command\n";
}

// close the connection
ftp_close($ftp);

?>
```

### See Also

- ftp_raw() - Sends an arbitrary command to an FTP server

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ftp-exec.php
