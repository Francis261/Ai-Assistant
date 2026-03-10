# gnupg_import

Source: https://devdocs.io/php/function.gnupg-import

(PECL gnupg >= 0.3)

gnupg_import — Imports a key

### Description

```
gnupg_import(resource $identifier, string $keydata): array|false
```

Imports the key keydata and returns an array with information about the importprocess.

### Parameters

The gnupg identifier, from a call to gnupg_init() or gnupg.

The data key that is being imported.

### Return Values

On success, this function returns and info-array about the importprocess. On failure, this function returns false.

### Examples

Example #1 Procedural gnupg_import() example

```
<?php
$res = gnupg_init();
$info = gnupg_import($res,$keydata);
print_r($info);
?>
```

Example #2 OO gnupg_import() example

```
<?php
$gpg = new gnupg();
$info = $gpg->import($keydata);
print_r($info);
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gnupg-import.php
