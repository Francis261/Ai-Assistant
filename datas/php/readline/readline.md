# readline

Source: https://devdocs.io/php/function.readline

(PHP 4, PHP 5, PHP 7, PHP 8)

readline — Reads a line

### Description

```
readline(?string $prompt = null): string|false
```

Reads a single line from the user. You must add this line to the history yourself using readline_add_history().

### Parameters

You may specify a string with which to prompt the user.

### Return Values

Returns a single string from the user. The line returned has the ending newline removed. If there is no more data to read, then false is returned.

### Examples

Example #1 readline() Example

```
<?php
//get 3 commands from user
for ($i=0; $i < 3; $i++) {
        $line = readline("Command: ");
        readline_add_history($line);
}

//dump history
print_r(readline_list_history());

//dump variables
print_r(readline_info());
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.readline.php
