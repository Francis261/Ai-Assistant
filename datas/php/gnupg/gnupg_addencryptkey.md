# gnupg_addencryptkey

Source: https://devdocs.io/php/function.gnupg-addencryptkey

(PECL gnupg >= 0.5)

gnupg_addencryptkey — Add a key for encryption

### Description

```
gnupg_addencryptkey(resource $identifier, string $fingerprint): bool
```

### Parameters

The gnupg identifier, from a call to gnupg_init() or gnupg.

The fingerprint key.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Procedural gnupg_addencryptkey() example

```
<?php
$res = gnupg_init();
gnupg_addencryptkey($res,"8660281B6051D071D94B5B230549F9DC851566DC");
?>
```

Example #2 OO gnupg_addencryptkey() example

```
<?php
$gpg = new gnupg();
$gpg->addencryptkey("8660281B6051D071D94B5B230549F9DC851566DC");
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gnupg-addencryptkey.php
