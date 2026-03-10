# gnupg_geterror

Source: https://devdocs.io/php/function.gnupg-geterror

(PECL gnupg >= 0.1)

gnupg_geterror — Returns the errortext, if a function fails

### Description

```
gnupg_geterror(resource $identifier): string|false
```

### Parameters

The gnupg identifier, from a call to gnupg_init() or gnupg.

### Return Values

Returns an errortext, if an error has occurred, otherwise false.

### Examples

Example #1 Procedural gnupg_geterror() example

```
<?php
$res = gnupg_init();
echo gnupg_geterror($res);
?>
```

Example #2 OO gnupg_geterror() example

```
<?php
$gpg = new gnupg();
echo $gpg->geterror();
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gnupg-geterror.php
