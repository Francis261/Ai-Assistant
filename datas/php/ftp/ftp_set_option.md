# ftp_set_option

Source: https://devdocs.io/php/function.ftp-set-option

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

ftp_set_option — Set miscellaneous runtime FTP options

### Description

```
ftp_set_option(FTP\Connection $ftp, int $option, int|bool $value): bool
```

This function controls various runtime options for the specified FTP connection.

### Parameters

An FTP\Connection instance.

Currently, the following options are supported:

This parameter depends on which option is chosen to be altered.

### Return Values

Returns true if the option could be set; false if not. A warning message will be thrown if the option is not supported or the passed value doesn't match the expected value for the given option.

### Changelog

### Examples

Example #1 ftp_set_option() example

```
<?php
// Set the network timeout to 10 seconds
ftp_set_option($ftp, FTP_TIMEOUT_SEC, 10);
?>
```

### See Also

- ftp_get_option() - Retrieves various runtime behaviours of the current FTP connection

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ftp-set-option.php
