# gnupg_verify

Source: https://devdocs.io/php/function.gnupg-verify

(PECL gnupg >= 0.1)

gnupg_verify — Verifies a signed text

### Description

```
gnupg_verify(
 resource $identifier,
 string $signed_text,
 string $signature,
 string &$plaintext = ?
): array|false
```

Verifies the given signed_text and returns information about the signature.

### Parameters

The gnupg identifier, from a call to gnupg_init() or gnupg.

The signed text.

The signature. To verify a clearsigned text, set signature to false.

The plain text. If this optional parameter is passed, it is filled with the plain text.

### Return Values

On success, this function returns information about the signature. On failure, this function returns false.

### Examples

Example #1 Procedural gnupg_verify() example

```
<?php
$plaintext = "";
$res = gnupg_init();
// clearsigned
$info = gnupg_verify($res,$signed_text,false,$plaintext);
print_r($info);
// detached signature
$info = gnupg_verify($res,$signed_text,$signature);
print_r($info);
?>
```

Example #2 OO gnupg_verify() example

```
<?php
$plaintext = "";
$gpg = new gnupg();
// clearsigned
$info = $gpg->verify($signed_text,false,$plaintext);
print_r($info);
// detached signature
$info = $gpg->verify($signed_text,$signature);
print_r($info);
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gnupg-verify.php
