# gnupg_gettrustlist

Source: https://devdocs.io/php/function.gnupg-gettrustlist

(PECL gnupg >= 0.5)

gnupg_gettrustlist — Search the trust items

### Description

```
gnupg_gettrustlist(resource $identifier, string $pattern): ?array
```

### Parameters

The gnupg identifier, from a call to gnupg_init() or gnupg.

Expression to limit the list of trust items to only the ones matching the pattern.

### Return Values

On success, this function returns an array of trust items. On failure, this function returns null.

### Examples

Example #1 Procedural gnupg_gettrustlist() example

```
<?php
$res = gnupg_init();
$items = gnupg_gettrustlist($res);
print_r($items);
?>
```

Example #2 OO gnupg_gettrustlist() example

```
<?php
$gpg = new gnupg();
$items = $gpg->gettrustlist();
print_r($items);
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gnupg-gettrustlist.php
