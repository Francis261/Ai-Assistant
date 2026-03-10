# gnupg_decryptverify

Source: https://devdocs.io/php/function.gnupg-decryptverify

(PECL gnupg >= 0.2)

gnupg_decryptverify — Decrypts and verifies a given text

### Description

```
gnupg_decryptverify(resource $identifier, string $text, string &$plaintext): array|false
```

Decrypts and verifies a given text and returns information about the signature.

### Parameters

The gnupg identifier, from a call to gnupg_init() or gnupg.

The text being decrypted.

The parameter plaintext gets filled with the decrypted text.

### Return Values

On success, this function returns information about the signature and fills the plaintext parameter with the decrypted text. On failure, this function returns false.

### Examples

Example #1 Procedural gnupg_decryptverify() example

```
<?php
$plaintext = "";
$res = gnupg_init();
gnupg_adddecryptkey($res,"8660281B6051D071D94B5B230549F9DC851566DC","test");
$info = gnupg_decryptverify($res,$text,$plaintext);
print_r($info);
?>
```

Example #2 OO gnupg_decryptverify() example

```
<?php
$plaintext = "";
$gpg = new gnupg();
$gpg->adddecryptkey("8660281B6051D071D94B5B230549F9DC851566DC","test");
$info = $gpg->decryptverify($text,$plaintext);
print_r($info);
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gnupg-decryptverify.php
