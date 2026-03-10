# ob_get_contents

Source: https://devdocs.io/php/function.ob-get-contents

(PHP 4, PHP 5, PHP 7, PHP 8)

ob_get_contents — Return the contents of the output buffer

### Description

```
ob_get_contents(): string|false
```

Gets the contents of the output buffer without clearing it.

### Parameters

This function has no parameters.

### Return Values

This will return the contents of the output buffer or false, if output buffering isn't active.

### Examples

Example #1 A simple ob_get_contents() example

```
<?php

ob_start();

echo "Hello ";

$out1 = ob_get_contents();

echo "World";

$out2 = ob_get_contents();

ob_end_clean();

var_dump($out1, $out2);
?>
```

The above example will output:

```
string(6) "Hello "
string(11) "Hello World"
```

### See Also

- ob_start() - Turn on output buffering
- ob_get_length() - Return the length of the output buffer

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ob-get-contents.php
