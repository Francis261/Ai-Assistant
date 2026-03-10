# addslashes

Source: https://devdocs.io/php/function.addslashes

(PHP 4, PHP 5, PHP 7, PHP 8)

addslashes — Quote string with slashes

### Description

```
addslashes(string $string): string
```

Returns a string with backslashes added before characters that need to be escaped. These characters are:

- single quote (')
- double quote (")
- backslash (\)
- NUL (the NUL byte)

A use case of addslashes() is escaping the aforementioned characters in a string that is to be evaluated by PHP:

Example #1 Escaping Characters

```
<?php
$str = "O'Reilly?";
eval("echo '" . addslashes($str) . "';");
?>
```

The addslashes() is sometimes incorrectly used to try to prevent SQL Injection. Instead, database-specific escaping functions and/or prepared statements should be used.

### Parameters

The string to be escaped.

### Return Values

Returns the escaped string.

### Examples

Example #2 An addslashes() example

```
<?php
$str = "Is your name O'Reilly?";

// Outputs: Is your name O\'Reilly?
echo addslashes($str);
?>
```

### See Also

- stripcslashes() - Un-quote string quoted with addcslashes
- stripslashes() - Un-quotes a quoted string
- addcslashes() - Quote string with slashes in a C style
- htmlspecialchars() - Convert special characters to HTML entities
- quotemeta() - Quote meta characters
- get_magic_quotes_gpc() - Gets the current configuration setting of magic_quotes_gpc

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.addslashes.php
