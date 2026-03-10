# socket_last_error

Source: https://devdocs.io/php/function.socket-last-error

(PHP 4 >= 4.1.0, PHP 5, PHP 7, PHP 8)

socket_last_error — Returns the last error on the socket

### Description

```
socket_last_error(?Socket $socket = null): int
```

If a Socket instance is passed to this function, the last error which occurred on this particular socket is returned. If socket is null, the error code of the last failed socket function is returned. The latter is particularly helpful for functions like socket_create() which don't return a socket on failure and socket_select() which can fail for reasons not directly tied to a particular socket. The error code is suitable to be fed to socket_strerror() which returns a string describing the given error code.

If no error had occurred, or the error had been cleared with socket_clear_error(), the function returns 0.

### Parameters

A Socket instance created with socket_create().

### Return Values

This function returns a socket error code.

### Changelog

### Examples

Example #1 socket_last_error() example

```
<?php
$socket = @socket_create(AF_INET, SOCK_STREAM, SOL_TCP);

if ($socket === false) {
    $errorcode = socket_last_error();
    $errormsg = socket_strerror($errorcode);
    
    die("Couldn't create socket: [$errorcode] $errormsg");
}
?>
```

### Notes

Note:

socket_last_error() does not clear the error code, use socket_clear_error() for this purpose.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.socket-last-error.php
