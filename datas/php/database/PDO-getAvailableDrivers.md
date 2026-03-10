# PDO::getAvailableDrivers

Source: https://devdocs.io/php/pdo.getavailabledrivers

# pdo_drivers

(PHP 5 >= 5.1.0, PHP 7, PHP 8, PECL pdo >= 1.0.3)

PDO::getAvailableDrivers -- pdo_drivers — Return an array of available PDO drivers

### Description

```
public static PDO::getAvailableDrivers(): array
```

```
pdo_drivers(): array
```

This function returns all currently available PDO drivers which can be used in DSN parameter of PDO::__construct().

### Parameters

This function has no parameters.

### Return Values

PDO::getAvailableDrivers() returns an array of PDO driver names. If no drivers are available, it returns an empty array.

### Examples

Example #1 A PDO::getAvailableDrivers() example

```
<?php
print_r(PDO::getAvailableDrivers());
?>
```

The above example will output something similar to:

```
Array
(
    [0] => mysql
    [1] => sqlite
)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/pdo.getavailabledrivers.php
