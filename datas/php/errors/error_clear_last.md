# error_clear_last

Source: https://devdocs.io/php/function.error-clear-last

(PHP 7, PHP 8)

error_clear_last — Clear the most recent error

### Description

```
error_clear_last(): void
```

### Parameters

This function has no parameters.

### Return Values

Clears the most recent errors, making it unable to be retrieved with error_get_last().

### Examples

Example #1 An error_clear_last() example

```
<?php
var_dump(error_get_last());
error_clear_last();
var_dump(error_get_last());

@$a = $b;

var_dump(error_get_last());
error_clear_last();
var_dump(error_get_last());
?>
```

The above example will output something similar to:

```
NULL
NULL
array(4) {
  ["type"]=>
  int(8)
  ["message"]=>
  string(21) "Undefined variable: b"
  ["file"]=>
  string(9) "%s"
  ["line"]=>
  int(6)
}
NULL
```

### See Also

- Error constants

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.error-clear-last.php
