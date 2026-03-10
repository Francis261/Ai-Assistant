# quotemeta

Source: https://devdocs.io/php/function.quotemeta

(PHP 4, PHP 5, PHP 7, PHP 8)

quotemeta — Quote meta characters

### Description

```
quotemeta(string $string): string
```

Returns a version of str with a backslash character (\) before every character that is among these:

### Parameters

The input string.

### Return Values

Returns the string with meta characters quoted, or false if an empty string is given as string.

### Examples

Example #1 quotemeta() example

```
<?php

var_dump(quotemeta('PHP is a popular scripting language. Fast, flexible, and pragmatic.'));
?>
```

The above example will output:

```
string(69) "PHP is a popular scripting language\. Fast, flexible, and pragmatic\."
```

### Notes

Note: This function is binary-safe.

### See Also

- addslashes() - Quote string with slashes
- addcslashes() - Quote string with slashes in a C style
- htmlentities() - Convert all applicable characters to HTML entities
- htmlspecialchars() - Convert special characters to HTML entities
- nl2br() - Inserts HTML line breaks before all newlines in a string
- stripslashes() - Un-quotes a quoted string
- stripcslashes() - Un-quote string quoted with addcslashes
- preg_quote() - Quote regular expression characters

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.quotemeta.php
