# gnupg_addsignkey

Source: https://devdocs.io/php/function.gnupg-addsignkey

(PECL gnupg >= 0.5)

gnupg_addsignkey — Add a key for signing

### Description

```
gnupg_addsignkey(resource $identifier, string $fingerprint, string $passphrase = ?): bool
```

### Parameters

The gnupg identifier, from a call to gnupg_init() or gnupg.

The fingerprint key.

The pass phrase.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Procedural gnupg_addsignkey() example

```
<?php
$res = gnupg_init();
gnupg_addsignkey($res,"8660281B6051D071D94B5B230549F9DC851566DC","test");
?>
```

Example #2 OO gnupg_addsignkey() example

```
<?php
$gpg = new gnupg();
$gpg->addsignkey("8660281B6051D071D94B5B230549F9DC851566DC","test");
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gnupg-addsignkey.php
