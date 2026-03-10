# String Operators

Source: https://devdocs.io/php/language.operators.string

## String Operators

There are two string operators. The first is the concatenation operator ('.'), which returns the concatenation of its right and left arguments. The second is the concatenating assignment operator ('.='), which appends the argument on the right side to the argument on the left side. Please read Assignment Operators for more information.

Example #1 String Concatenating

```
<?php
$a = "Hello ";
$b = $a . "World!"; // now $b contains "Hello World!"
var_dump($b);

$a = "Hello ";
$a .= "World!";     // now $a contains "Hello World!"
var_dump($a);
?>
```

### See Also

- String type
- String functions

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/language.operators.string.php
