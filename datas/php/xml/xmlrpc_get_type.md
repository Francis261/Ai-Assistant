# xmlrpc_get_type

Source: https://devdocs.io/php/function.xmlrpc-get-type

(PHP 4 >= 4.1.0, PHP 5, PHP 7)

xmlrpc_get_type — Gets xmlrpc type for a PHP value

### Description

```
xmlrpc_get_type(mixed $value): string
```

This function is EXPERIMENTAL. The behaviour of this function, its name, and surrounding documentation may change without notice in a future release of PHP. This function should be used at your own risk.

This function is especially useful for base64 and datetime strings.

### Parameters

PHP value

### Return Values

Returns the XML-RPC type.

### Examples

Example #1 XML-RPC type example

```
<?php
echo xmlrpc_get_type(null) . "\n"; // base64
echo xmlrpc_get_type(false) . "\n"; // boolean
echo xmlrpc_get_type(1) . "\n"; // int
echo xmlrpc_get_type(1.0) . "\n"; // double
echo xmlrpc_get_type("") . "\n"; // string
echo xmlrpc_get_type(array()) . "\n"; // array
echo xmlrpc_get_type(new stdClass) . "\n"; // array
echo xmlrpc_get_type(STDIN) . "\n"; // int
?>
```

### See Also

- xmlrpc_set_type() - Sets xmlrpc type, base64 or datetime, for a PHP string value

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.xmlrpc-get-type.php
