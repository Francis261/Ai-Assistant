# addcslashes

Source: https://devdocs.io/php/function.addcslashes

(PHP 4, PHP 5, PHP 7, PHP 8)

addcslashes — Quote string with slashes in a C style

### Description

```
addcslashes(string $string, string $characters): string
```

Returns a string with backslashes before characters that are listed in characters parameter.

### Parameters

The string to be escaped.

A list of characters to be escaped. If characters contains characters \n, \r etc., they are converted in C-like style, while other non-alphanumeric characters with ASCII codes lower than 32 and higher than 126 converted to octal representation.

When you define a sequence of characters in the characters argument make sure that you know what characters come between the characters that you set as the start and end of the range.

Example #1 addcslashes() with Ranges

```
<?php
echo addcslashes('foo[ ]', 'A..z');
// output:  \f\o\o\[ \]
// All upper and lower-case letters will be escaped
// ... but so will the [\]^_`
?>
```

Example #2 addcslashes() with Characters in Wrong Order

```
<?php
echo addcslashes("zoo['.']", 'z..A');
// output:  \zoo['\.']
?>
```

Be careful if you choose to escape characters 0, a, b, f, n, r, t and v. They will be converted to \0, \a, \b, \f, \n, \r, \t and \v, all of which are predefined escape sequences in C. Many of these sequences are also defined in other C-derived languages, including PHP, meaning that you may not get the desired result if you use the output of addcslashes() to generate code in those languages with these characters defined in characters.

### Return Values

Returns the escaped string.

### Examples

characters like "\0..\37", which would escape all characters with ASCII code between 0 and 31.

Example #3 addcslashes() example

```
<?php
$not_escaped = "PHP isThirty\nYears Old!\tYay to the Elephant!\n";
$escaped = addcslashes($not_escaped, "\0..\37!@\177..\377");
echo $escaped;
?>
```

### See Also

- stripcslashes() - Un-quote string quoted with addcslashes
- stripslashes() - Un-quotes a quoted string
- addslashes() - Quote string with slashes
- htmlspecialchars() - Convert special characters to HTML entities
- quotemeta() - Quote meta characters

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.addcslashes.php
