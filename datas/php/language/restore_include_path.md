# restore_include_path

Source: https://devdocs.io/php/function.restore-include-path

(PHP 4 >= 4.3.0, PHP 5, PHP 7)

restore_include_path — Restores the value of the include_path configuration option

This function has been DEPRECATED as of PHP 7.4.0, and REMOVED as of PHP 8.0.0. Relying on this function is highly discouraged.

### Description

```
restore_include_path(): void
```

Restores the include_path configuration option back to its original master value as set in php.ini

### Parameters

This function has no parameters.

### Return Values

No value is returned.

### Changelog

### Examples

Example #1 restore_include_path() example

```
<?php

echo get_include_path();  // .:/usr/local/lib/php

set_include_path('/inc');

echo get_include_path();  // /inc

restore_include_path();

// Or using ini_restore()
ini_restore('include_path');

echo get_include_path();  // .:/usr/local/lib/php

?>
```

### See Also

- ini_restore() - Restores the value of a configuration option
- get_include_path() - Gets the current include_path configuration option
- set_include_path() - Sets the include_path configuration option
- include - include

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.restore-include-path.php
