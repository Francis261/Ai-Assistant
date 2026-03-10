# xmlrpc_set_type

Source: https://devdocs.io/php/function.xmlrpc-set-type

(PHP 4 >= 4.1.0, PHP 5, PHP 7)

xmlrpc_set_type — Sets xmlrpc type, base64 or datetime, for a PHP string value

### Description

```
xmlrpc_set_type(string &$value, string $type): bool
```

Sets xmlrpc type, base64 or datetime, for a PHP string value.

This function is EXPERIMENTAL. The behaviour of this function, its name, and surrounding documentation may change without notice in a future release of PHP. This function should be used at your own risk.

### Parameters

Value to set the type

'base64' or 'datetime'

### Return Values

Returns true on success or false on failure. If successful, value is converted to an object.

### Errors/Exceptions

Issues E_WARNING with type unsupported by XMLRPC.

### Examples

Example #1 A xmlrpc_set_type() example

```
<?php

$params = date("Ymd\TH:i:s", time());
xmlrpc_set_type($params, 'datetime');
echo xmlrpc_encode($params);

?>
```

The above example will output something similar to:

```
<?xml version="1.0" encoding="utf-8"?>
<params>
<param>
 <value>
  <dateTime.iso8601>20090322T23:43:03</dateTime.iso8601>
 </value>
</param>
</params>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.xmlrpc-set-type.php
