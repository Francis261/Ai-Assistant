# Spoofchecker::isSuspicious

Source: https://devdocs.io/php/spoofchecker.issuspicious

(PHP 5 >= 5.4.0, PHP 7, PHP 8, PECL intl >= 2.0.0)

Spoofchecker::isSuspicious — Checks if a given text contains any suspicious characters

### Description

```
public Spoofchecker::isSuspicious(string $string, int &$errorCode = null): bool
```

Checks if given string contains any suspicious characters like letters which are almost identical visually, but are Unicode characters from different sets.

### Parameters

String to test.

This variable is set by-reference to int containing an error, if there was any.

### Return Values

Returns true if there are suspicious characters, false otherwise.

### Examples

Example #1 Spoofchecker::isSuspicious() example

```
<?php
$checker = new Spoofchecker();

$checker->isSuspicious('google.com'); // FALSE: only ASCII characters

$checker->isSuspicious('Рaypal.com'); // TRUE
// The first letter is from Cyrylic, not a regular latin "P"
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/spoofchecker.issuspicious.php
