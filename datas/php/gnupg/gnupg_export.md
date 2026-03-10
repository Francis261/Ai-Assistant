# gnupg_export

Source: https://devdocs.io/php/function.gnupg-export

(PECL gnupg >= 0.1)

gnupg_export — Exports a key

### Description

```
gnupg_export(resource $identifier, string $fingerprint): string|false
```

Exports the key fingerprint.

### Parameters

The gnupg identifier, from a call to gnupg_init() or gnupg.

The fingerprint key.

### Return Values

On success, this function returns the keydata. On failure, this function returns false.

### Examples

Example #1 Procedural gnupg_export() example

```
<?php
$res = gnupg_init();
$export = gnupg_export($res,"8660281B6051D071D94B5B230549F9DC851566DC");
echo $export;
?>
```

Example #2 OO gnupg_export() example

```
<?php
$gpg = new gnupg();
$export = $gpg->export("8660281B6051D071D94B5B230549F9DC851566DC");
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gnupg-export.php
