# gnupg_clearsignkeys

Source: https://devdocs.io/php/function.gnupg-clearsignkeys

(PECL gnupg >= 0.5)

gnupg_clearsignkeys — Removes all keys which were set for signing before

### Description

```
gnupg_clearsignkeys(resource $identifier): bool
```

### Parameters

The gnupg identifier, from a call to gnupg_init() or gnupg.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Procedural gnupg_clearsignkeys() example

```
<?php
$res = gnupg_init();
gnupg_clearsignkeys($res);
?>
```

Example #2 OO gnupg_clearsignkeys() example

```
<?php
$gpg = new gnupg();
$gpg->clearsignkeys();
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gnupg-clearsignkeys.php
