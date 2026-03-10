# gnupg_deletekey

Source: https://devdocs.io/php/function.gnupg-deletekey

(PECL gnupg >= 0.5)

gnupg_deletekey — Delete a key from the keyring

### Description

```
gnupg_deletekey(resource $identifier, string $key, bool $allow_secret): bool
```

### Parameters

The gnupg identifier, from a call to gnupg_init() or gnupg.

The key to delete.

It specifies whether to delete secret keys as well.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Procedural gnupg_deletekey() example

```
<?php
$res = gnupg_init();
gnupg_deletekey($res, "8660281B6051D071D94B5B230549F9DC851566DC");
?>
```

Example #2 OO gnupg_deletekey() example

```
<?php
$gpg = new gnupg();
$gpg->deletekey("8660281B6051D071D94B5B230549F9DC851566DC");
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gnupg-deletekey.php
