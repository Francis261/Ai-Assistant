# session_module_name

Source: https://devdocs.io/php/function.session-module-name

(PHP 4, PHP 5, PHP 7, PHP 8)

session_module_name — Get and/or set the current session module

### Description

```
session_module_name(?string $module = null): string|false
```

session_module_name() gets the name of the current session module, which is also known as session.save_handler.

### Parameters

If module is specified and not null, that module will be used instead. Passing "user" to this parameter is forbidden. Instead session_set_save_handler() has to be called to set a user defined session handler.

### Return Values

Returns the name of the current session module, or false on failure.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.session-module-name.php
