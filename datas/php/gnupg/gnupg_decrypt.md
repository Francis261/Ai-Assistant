# gnupg_decrypt

Source: https://devdocs.io/php/function.gnupg-decrypt

(PECL gnupg >= 0.1)

gnupg_decrypt — Decrypts a given text

### Description

```
gnupg_decrypt(resource $identifier, string $text): string|false
```

Decrypts the given text with the keys, which were set with gnupg_adddecryptkey before.

### Parameters

The gnupg identifier, from a call to gnupg_init() or gnupg.

The text being decrypted.

### Return Values

On success, this function returns the decrypted text. On failure, this function returns false.

### Examples

Example #1 Procedural gnupg_decrypt() example

```
<?php
$res = gnupg_init();
gnupg_adddecryptkey($res,"8660281B6051D071D94B5B230549F9DC851566DC","test");
$plain = gnupg_decrypt($res,$encrypted_text);
echo $plain;
?>
```

Example #2 OO gnupg_decrypt() example

```
<?php
$gpg = new gnupg();
$gpg->adddecryptkey("8660281B6051D071D94B5B230549F9DC851566DC","test");
$plain = $gpg->decrypt($encrypted_text);
echo $plain;
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gnupg-decrypt.php
