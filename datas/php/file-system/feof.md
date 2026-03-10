# feof

Source: https://devdocs.io/php/function.feof

(PHP 4, PHP 5, PHP 7, PHP 8)

feof — Tests for end-of-file on a file pointer

### Description

```
feof(resource $stream): bool
```

Tests for end-of-file on a file pointer.

### Parameters

The file pointer must be valid, and must point to a file successfully opened by fopen() or fsockopen() (and not yet closed by fclose()).

### Return Values

Returns true if the file pointer is at EOF or an error occurs (including socket timeout); otherwise returns false.

### Notes

If a connection opened by fsockopen() wasn't closed by the server, feof() will hang. To workaround this, see below example:

Example #1 Handling timeouts with feof()

```
<?php
function safe_feof($fp, &$start = NULL) {
 $start = microtime(true);

 return feof($fp);
}

/* Assuming $fp is previously opened by fsockopen() */

$start = NULL;
$timeout = ini_get('default_socket_timeout');

while(!safe_feof($fp, $start) && (microtime(true) - $start) < $timeout)
{
 /* Handle */
}
?>
```

If the passed file pointer is not valid you may get an infinite loop, because feof() fails to return true.

Example #2 feof() example with an invalid file pointer

```
<?php
// if file can not be read or doesn't exist fopen function returns FALSE
$file = @fopen("no_such_file", "r");

// FALSE from fopen will issue warning and result in infinite loop here
while (!feof($file)) {
}

fclose($file);
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.feof.php
