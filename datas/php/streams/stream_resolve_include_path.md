# stream_resolve_include_path

Source: https://devdocs.io/php/function.stream-resolve-include-path

(PHP 5 >= 5.3.2, PHP 7, PHP 8)

stream_resolve_include_path — Resolve filename against the include path

### Description

```
stream_resolve_include_path(string $filename): string|false
```

Resolve filename against the include path according to the same rules as fopen()/include.

### Parameters

The filename to resolve.

### Return Values

Returns a string containing the resolved absolute filename, or false on failure.

### Examples

Example #1 stream_resolve_include_path() example

Basic usage example.

```
<?php
var_dump(stream_resolve_include_path("test.php"));
?>
```

The above example will output something similar to:

```
string(22) "/var/www/html/test.php"
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.stream-resolve-include-path.php
