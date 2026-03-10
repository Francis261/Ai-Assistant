# PhpToken::isIgnorable

Source: https://devdocs.io/php/phptoken.isignorable

(PHP 8)

PhpToken::isIgnorable — Tells whether the token would be ignored by the PHP parser.

### Description

```
public PhpToken::isIgnorable(): bool
```

Tells whether the token would be ignored by the PHP parser.

### Parameters

This function has no parameters.

### Return Values

A boolean value whether the token would be ignored by the PHP parser (such as whitespace or comments).

### Examples

Example #1 PhpToken::isIgnorable() example

```
<?php
$echo = new PhpToken(T_ECHO, 'echo');
var_dump($echo->isIgnorable());   // -> bool(false)

$space = new PhpToken(T_WHITESPACE, ' ');
var_dump($space->isIgnorable());  // -> bool(true)
```

### See Also

- PhpToken::tokenize() - Splits given source into PHP tokens, represented by PhpToken objects.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phptoken.isignorable.php
