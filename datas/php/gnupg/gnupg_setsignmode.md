# gnupg_setsignmode

Source: https://devdocs.io/php/function.gnupg-setsignmode

(PECL gnupg >= 0.1)

gnupg_setsignmode — Sets the mode for signing

### Description

```
gnupg_setsignmode(resource $identifier, int $signmode): bool
```

Sets the mode for signing.

### Parameters

The gnupg identifier, from a call to gnupg_init() or gnupg.

The mode for signing.

signmode takes a constant indicating what type of signature should be produced. The possible values are GNUPG_SIG_MODE_NORMAL, GNUPG_SIG_MODE_DETACH and GNUPG_SIG_MODE_CLEAR. By default GNUPG_SIG_MODE_CLEAR is used.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Procedural gnupg_setsignmode() example

```
<?php
$res = gnupg_init();
gnupg_setsignmode($res,GNUPG_SIG_MODE_DETACH); // produce a detached signature
?>
```

Example #2 OO gnupg_setsignmode() example

```
<?php
$gpg = new gnupg();
$gpg->setsignmode(gnupg::SIG_MODE_DETACH); // produce a detached signature
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gnupg-setsignmode.php
