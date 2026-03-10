# stripcslashes

Source: https://devdocs.io/php/function.stripcslashes

(PHP 4, PHP 5, PHP 7, PHP 8)

stripcslashes — Un-quote string quoted with addcslashes()

### Description

```
stripcslashes(string $string): string
```

Returns a string with backslashes stripped off. Recognizes C-like \n, \r ..., octal and hexadecimal representation.

### Parameters

The string to be unescaped.

### Return Values

Returns the unescaped string.

### Examples

Example #1 stripcslashes() example

```
<?php

var_dump(stripcslashes('I\'d have a coffee.\nNot a problem.') === "I'd have a coffee.
Not a problem."); // true
?>
```

### See Also

- addcslashes() - Quote string with slashes in a C style

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.stripcslashes.php
