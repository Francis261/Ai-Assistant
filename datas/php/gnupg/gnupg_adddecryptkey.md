# gnupg_adddecryptkey

Source: https://devdocs.io/php/function.gnupg-adddecryptkey

(PECL gnupg >= 0.5)

gnupg_adddecryptkey — Add a key for decryption

### Description

```
gnupg_adddecryptkey(resource $identifier, string $fingerprint, string $passphrase): bool
```

### Parameters

The gnupg identifier, from a call to gnupg_init() or gnupg.

The fingerprint key.

The pass phrase.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Procedural gnupg_adddecryptkey() example

```
<?php
$res = gnupg_init();
gnupg_adddecryptkey($res,"8660281B6051D071D94B5B230549F9DC851566DC","test");
?>
```

Example #2 OO gnupg_adddecryptkey() example

```
<?php
$gpg = new gnupg();
$gpg->adddecryptkey("8660281B6051D071D94B5B230549F9DC851566DC","test");
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gnupg-adddecryptkey.php
