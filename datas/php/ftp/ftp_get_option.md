# ftp_get_option

Source: https://devdocs.io/php/function.ftp-get-option

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

ftp_get_option — Retrieves various runtime behaviours of the current FTP connection

### Description

```
ftp_get_option(FTP\Connection $ftp, int $option): int|bool
```

This function returns the value for the requested option from the specified FTP connection.

### Parameters

An FTP\Connection instance.

Currently, the following options are supported:

### Return Values

Returns the value on success or false if the given option is not supported. In the latter case, a warning message is also thrown.

### Changelog

### Examples

Example #1 ftp_get_option() example

```
<?php
// Get the timeout of the given FTP connection
$timeout = ftp_get_option($ftp, FTP_TIMEOUT_SEC);
?>
```

### See Also

- ftp_set_option() - Set miscellaneous runtime FTP options

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ftp-get-option.php
