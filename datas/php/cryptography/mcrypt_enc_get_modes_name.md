# mcrypt_enc_get_modes_name

Source: https://devdocs.io/php/function.mcrypt-enc-get-modes-name

(PHP 4 >= 4.0.2, PHP 5, PHP 7 < 7.2.0, PECL mcrypt >= 1.0.0)

mcrypt_enc_get_modes_name — Returns the name of the opened mode

This function has been DEPRECATED as of PHP 7.1.0 and REMOVED as of PHP 7.2.0. Relying on this function is highly discouraged.

### Description

```
mcrypt_enc_get_modes_name(resource $td): string
```

This function returns the name of the mode.

### Parameters

The encryption descriptor.

### Return Values

Returns the name as a string.

### Examples

Example #1 mcrypt_enc_get_modes_name() example

```
<?php
$td = mcrypt_module_open (MCRYPT_CAST_256, '', MCRYPT_MODE_CFB, '');
echo mcrypt_enc_get_modes_name($td). "\n";

$td = mcrypt_module_open ('cast-256', '', 'ecb', '');
echo mcrypt_enc_get_modes_name($td). "\n";
?>
```

The above example will output:

```
CFB
ECB
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mcrypt-enc-get-modes-name.php
