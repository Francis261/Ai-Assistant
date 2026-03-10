# gnupg_clearencryptkeys

Source: https://devdocs.io/php/function.gnupg-clearencryptkeys

(PECL gnupg >= 0.5)

gnupg_clearencryptkeys — Removes all keys which were set for encryption before

### Description

```
gnupg_clearencryptkeys(resource $identifier): bool
```

### Parameters

The gnupg identifier, from a call to gnupg_init() or gnupg.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Procedural gnupg_clearencryptkeys() example

```
<?php
$res = gnupg_init();
gnupg_clearencryptkeys($res);
?>
```

Example #2 OO gnupg_clearencryptkeys() example

```
<?php
$gpg = new gnupg();
$gpg->clearencryptkeys();
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gnupg-clearencryptkeys.php
