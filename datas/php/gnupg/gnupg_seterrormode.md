# gnupg_seterrormode

Source: https://devdocs.io/php/function.gnupg-seterrormode

(PECL gnupg >= 0.6)

gnupg_seterrormode — Sets the mode for error_reporting

### Description

```
gnupg_seterrormode(resource $identifier, int $errormode): void
```

Sets the mode for error_reporting.

### Parameters

The gnupg identifier, from a call to gnupg_init() or gnupg.

The error mode.

errormode takes a constant indicating what type of error_reporting should be used. The possible values are GNUPG_ERROR_WARNING, GNUPG_ERROR_EXCEPTION and GNUPG_ERROR_SILENT. By default GNUPG_ERROR_SILENT is used.

### Return Values

No value is returned.

### Examples

Example #1 Procedural gnupg_seterrormode() example

```
<?php
$res = gnupg_init();
gnupg_seterrormode($res,GNUPG_ERROR_WARNING); // raise a PHP-Warning in case of an error
?>
```

Example #2 OO gnupg_seterrormode() example

```
<?php
$gpg = new gnupg();
$gpg->seterrormode(gnupg::ERROR_EXCEPTION); // throw an exception in case of an error
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gnupg-seterrormode.php
