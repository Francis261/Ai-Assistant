# ezmlm_hash

Source: https://devdocs.io/php/function.ezmlm-hash

(PHP 4 >= 4.0.2, PHP 5, PHP 7)

ezmlm_hash — Calculate the hash value needed by EZMLM

This function has been DEPRECATED as of PHP 7.4.0, and REMOVED as of PHP 8.0.0. Relying on this function is highly discouraged.

### Description

```
ezmlm_hash(string $addr): int
```

ezmlm_hash() calculates the hash value needed when keeping EZMLM mailing lists in a MySQL database.

### Parameters

The email address that's being hashed.

### Return Values

The hash value of addr.

### Changelog

### Examples

Example #1 Calculating the hash and subscribing a user

```
<?php

$user = "joecool@example.com";
$hash = ezmlm_hash($user);
$query = sprintf("INSERT INTO sample VALUES (%s, '%s')", $hash, $user);
$db->query($query); // using PHPLIB db interface

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ezmlm-hash.php
