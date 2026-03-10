# header_remove

Source: https://devdocs.io/php/function.header-remove

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

header_remove — Remove previously set headers

### Description

```
header_remove(?string $name = null): void
```

Removes an HTTP header previously set using header().

### Parameters

The header name to be removed. When null, all previously set headers are removed.

Note: This parameter is case-insensitive.

### Return Values

No value is returned.

### Changelog

### Examples

Example #1 Unsetting specific header.

```
<?php
header("X-Foo: Bar");
header("X-Bar: Baz");
header_remove("X-Foo"); 
?>
```

The above example will output something similar to:

```
X-Bar: Baz
```

Example #2 Unsetting all previously set headers.

```
<?php
header("X-Foo: Bar");
header("X-Bar: Baz");
header_remove(); 
?>
```

The above example will output something similar to:

### Notes

This function will remove all headers set by PHP, including cookies, session and the X-Powered-By headers.

Note:

Headers will only be accessible and output when a SAPI that supports them is in use.

### See Also

- header() - Send a raw HTTP header
- headers_sent() - Checks if or where headers have been sent

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.header-remove.php
