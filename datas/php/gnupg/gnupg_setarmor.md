# gnupg_setarmor

Source: https://devdocs.io/php/function.gnupg-setarmor

(PECL gnupg >= 0.1)

gnupg_setarmor — Toggle armored output

### Description

```
gnupg_setarmor(resource $identifier, int $armor): bool
```

Toggle the armored output.

### Parameters

The gnupg identifier, from a call to gnupg_init() or gnupg.

Pass a non-zero integer-value to this function to enable armored-output (default). Pass 0 to disable armored output.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Procedural gnupg_setarmor() example

```
<?php
$res = gnupg_init();
gnupg_setarmor($res,1); // enable armored output;
gnupg_setarmor($res,0); // disable armored output;
?>
```

Example #2 OO gnupg_setarmor() example

```
<?php
$gpg = new gnupg();
$gpg->setarmor(1); // enable armored output;
$gpg->setarmor(0); // disable armored output;
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gnupg-setarmor.php
