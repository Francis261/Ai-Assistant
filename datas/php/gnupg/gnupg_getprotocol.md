# gnupg_getprotocol

Source: https://devdocs.io/php/function.gnupg-getprotocol

(PECL gnupg >= 0.1)

gnupg_getprotocol — Returns the currently active protocol for all operations

### Description

```
gnupg_getprotocol(resource $identifier): int
```

### Parameters

The gnupg identifier, from a call to gnupg_init() or gnupg.

### Return Values

Returns the currently active protocol, which can be one of GNUPG_PROTOCOL_OpenPGP or GNUPG_PROTOCOL_CMS.

### Examples

Example #1 Procedural gnupg_getprotocol() example

```
<?php
$res = gnupg_init();
echo gnupg_getprotocol($res);
?>
```

Example #2 OO gnupg_getprotocol() example

```
<?php
$gpg = new gnupg();
echo $gpg->getprotocol();
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gnupg-getprotocol.php
