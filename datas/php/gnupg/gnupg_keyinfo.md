# gnupg_keyinfo

Source: https://devdocs.io/php/function.gnupg-keyinfo

(PECL gnupg >= 0.1)

gnupg_keyinfo — Returns an array with information about all keys that matches the given pattern

### Description

```
gnupg_keyinfo(resource $identifier, string $pattern): array|false
```

### Parameters

The gnupg identifier, from a call to gnupg_init() or gnupg.

The pattern being checked against the keys.

### Return Values

Returns an array with information about all keys that matches the given pattern or false, if an error has occurred.

### Examples

Example #1 Procedural gnupg_keyinfo() example

```
<?php
$res = gnupg_init();
$info = gnupg_keyinfo($res, 'test');
print_r($info);
?>
```

Example #2 OO gnupg_keyinfo() example

```
<?php
$gpg = new gnupg();
$info = $gpg->keyinfo("test");
print_r($info);
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gnupg-keyinfo.php
