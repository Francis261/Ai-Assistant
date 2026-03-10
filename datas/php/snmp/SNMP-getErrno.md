# SNMP::getErrno

Source: https://devdocs.io/php/snmp.geterrno

(PHP 5 >= 5.4.0, PHP 7, PHP 8)

SNMP::getErrno — Get last error code

### Description

```
public SNMP::getErrno(): int
```

Returns error code from last SNMP request.

### Parameters

This function has no parameters.

### Return Values

Returns one of SNMP error code values described in constants chapter.

### Examples

Example #1 SNMP::getErrno() example

```
<?php
$session = new SNMP(SNMP::VERSION_2c, '127.0.0.1', 'boguscommunity');
var_dump(@$session->get('.1.3.6.1.2.1.1.1.0'));
var_dump($session->getErrno() == SNMP::ERRNO_TIMEOUT);
?>
```

The above example will output:

```
bool(false)
bool(true)
```

### See Also

- SNMP::getError() - Get last error message

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/snmp.geterrno.php
