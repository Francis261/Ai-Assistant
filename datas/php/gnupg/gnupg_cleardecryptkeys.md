# gnupg_cleardecryptkeys

Source: https://devdocs.io/php/function.gnupg-cleardecryptkeys

(PECL gnupg >= 0.5)

gnupg_cleardecryptkeys — Removes all keys which were set for decryption before

### Description

```
gnupg_cleardecryptkeys(resource $identifier): bool
```

### Parameters

The gnupg identifier, from a call to gnupg_init() or gnupg.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Procedural gnupg_cleardecryptkeys() example

```
<?php
$res = gnupg_init();
gnupg_cleardecryptkeys($res);
?>
```

Example #2 OO gnupg_cleardecryptkeys() example

```
<?php
$gpg = new gnupg();
$gpg->cleardecryptkeys();
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gnupg-cleardecryptkeys.php
