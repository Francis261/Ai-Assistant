# SNMP::getError

Source: https://devdocs.io/php/snmp.geterror

(PHP 5 >= 5.4.0, PHP 7, PHP 8)

SNMP::getError — Get last error message

### Description

```
public SNMP::getError(): string
```

Returns string with error from last SNMP request.

### Parameters

This function has no parameters.

### Return Values

String describing error from last SNMP request.

### Examples

Example #1 SNMP::getError() example

```
<?php
$session = new SNMP(SNMP::VERSION_2c, '127.0.0.1', 'boguscommunity');
var_dump(@$session->get('.1.3.6.1.2.1.1.1.0'));
var_dump($session->getError());
?>
```

The above example will output:

```
bool(false)
string(26) "No response from 127.0.0.1"
```

### See Also

- SNMP::getErrno() - Get last error code

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/snmp.geterror.php
