# Spoofchecker::areConfusable

Source: https://devdocs.io/php/spoofchecker.areconfusable

(PHP 5 >= 5.4.0, PHP 7, PHP 8, PECL intl >= 2.0.0)

Spoofchecker::areConfusable — Checks if given strings can be confused

### Description

```
public Spoofchecker::areConfusable(string $string1, string $string2, int &$errorCode = null): bool
```

Checks whether two given strings can easily be mistaken.

### Parameters

First string to check.

Second string to check.

This variable is set by-reference to int containing an error, if there was any.

### Return Values

Returns true if two given strings can be confused, false otherwise.

### Examples

Example #1 Spoofchecker::areConfusable() example

```
<?php
$checker = new Spoofchecker();

$checker->areConfusable('google.com', 'goog1e.com'); // true
// Lower l can be confused with digit one

$checker->areConfusable('google.com', 'g00g1e.com'); // false
// Zero (0) cannot be easily confused with "o" letter
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/spoofchecker.areconfusable.php
