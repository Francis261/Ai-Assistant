# gnupg_getengineinfo

Source: https://devdocs.io/php/function.gnupg-getengineinfo

(PECL gnupg >= 1.5)

gnupg_getengineinfo — Returns the engine info

### Description

```
gnupg_getengineinfo(resource $identifier): array
```

### Parameters

The gnupg identifier, from a call to gnupg_init() or gnupg.

### Return Values

Returns an array with engine info consting of protocol, file_name and home_dir.

### Examples

Example #1 Procedural gnupg_getengineinfo() example

```
<?php
$res = gnupg_init();
print_r(gnupg_getengineinfo($res));
?>
```

The above example will output:

```
array(3) {
  ["protocol"]=>
  int(0)
  ["file_name"]=>
  string(12) "/usr/bin/gpg"
  ["home_dir"]=>
  string(0) ""
}
```

Example #2 OO gnupg_getengineinfo() example

```
<?php
$gpg = new gnupg(["file_name" => "/usr/bin/gpg2", "home_dir" => "/var/www/.gnupg"]);
print_r($gpg->getengineinfo());
?>
```

The above example will output:

```
array(3) {
  ["protocol"]=>
  int(0)
  ["file_name"]=>
  string(13) "/usr/bin/gpg2"
  ["home_dir"]=>
  string(15) "/var/www/.gnupg"
}
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gnupg-getengineinfo.php
