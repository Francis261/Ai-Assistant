# gnupg_listsignatures

Source: https://devdocs.io/php/function.gnupg-listsignatures

(PECL gnupg >= 0.5)

gnupg_listsignatures — List key signatures

### Description

```
gnupg_listsignatures(resource $identifier, string $keyid): ?array
```

### Parameters

The gnupg identifier, from a call to gnupg_init() or gnupg.

The key ID to list signatures for.

### Return Values

On success, this function returns an array of key signatures. On failure, this function returns null.

### Examples

Example #1 Procedural gnupg_listsignatures() example

```
<?php
$res = gnupg_init();
$signatures = gnupg_listsignatures($res, "8660281B6051D071D94B5B230549F9DC851566DC");
print_r($signatures);
?>
```

Example #2 OO gnupg_listsignatures() example

```
<?php
$gpg = new gnupg();
$signatures = $gpg->listsignatures("8660281B6051D071D94B5B230549F9DC851566DC");
print_r($signatures);
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gnupg-listsignatures.php
