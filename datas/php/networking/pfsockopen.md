# pfsockopen

Source: https://devdocs.io/php/function.pfsockopen

(PHP 4, PHP 5, PHP 7, PHP 8)

pfsockopen — Open persistent Internet or Unix domain socket connection

### Description

```
pfsockopen(
 string $hostname,
 int $port = -1,
 int &$error_code = null,
 string &$error_message = null,
 ?float $timeout = null
): resource|false
```

This function behaves exactly as fsockopen() with the difference that the connection is not closed after the script finishes. It is the persistent version of fsockopen().

### Parameters

For parameter information, see the fsockopen() documentation.

### Return Values

pfsockopen() returns a file pointer which may be used together with the other file functions (such as fgets(), fgetss(), fwrite(), fclose(), and feof()), or false on failure.

### Changelog

### See Also

- fsockopen() - Open Internet or Unix domain socket connection

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pfsockopen.php
