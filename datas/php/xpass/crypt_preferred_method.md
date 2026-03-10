# crypt_preferred_method

Source: https://devdocs.io/php/function.crypt-preferred-method

(PECL xpass >= 1.1.0)

crypt_preferred_method — Get the prefix of the preferred hash method

### Description

```
crypt_preferred_method(): ?string
```

Get the prefix of the preferred hash method.

### Parameters

This function has no parameters.

### Return Values

Returns a string with the prefix, or null in case of an error.

### Examples

Example #1 A crypt_preferred_method() example

```
<?php
var_dump(crypt_preferred_method());
?>
```

The above example will output:

```
string(3) "$y$"
```

### See Also

- crypt_gensalt() - Compile a string for use as the salt argument to crypt

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.crypt-preferred-method.php
