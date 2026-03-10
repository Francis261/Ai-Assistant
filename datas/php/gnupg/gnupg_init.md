# gnupg_init

Source: https://devdocs.io/php/function.gnupg-init

(PECL gnupg >= 0.4)

gnupg_init — Initialize a connection

### Description

```
gnupg_init(?array $options = null): resource
```

### Parameters

Must be an associative array. It is used to change the default configuration of the crypto engine.

### Return Values

A GnuPG resource connection used by other GnuPG functions.

### Changelog

### Examples

Example #1 Procedural gnupg_init() example with default setting

```
<?php
$res = gnupg_init();
?>
```

Example #2 Procedural gnupg_init() example with overriden file name and home dir

```
<?php
$res = gnupg_init(["file_name" => "/usr/bin/gpg2", "home_dir" => "/var/www/.gnupg"]);
?>
```

Example #3 OO gnupg initializer example with default setting

```
<?php
$gpg = new gnupg();
?>
```

Example #4 OO gnupg initializer example with overriden file name and home dir

```
<?php
$gpg = new gnupg(["file_name" => "/usr/bin/gpg2", "home_dir" => "/var/www/.gnupg"]);
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gnupg-init.php
