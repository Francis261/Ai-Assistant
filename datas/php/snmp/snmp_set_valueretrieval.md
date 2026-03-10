# snmp_set_valueretrieval

Source: https://devdocs.io/php/function.snmp-set-valueretrieval

(PHP 4 >= 4.3.3, PHP 5, PHP 7, PHP 8)

snmp_set_valueretrieval — Specify the method how the SNMP values will be returned

### Description

```
snmp_set_valueretrieval(int $method): true
```

### Parameters

### Return Values

Always returns true.

### Changelog

### Examples

Example #1 Using snmp_set_valueretrieval()

```
<?php
 snmp_set_valueretrieval(SNMP_VALUE_LIBRARY);
 $ret = snmpget('localhost', 'public', 'IF-MIB::ifName.1');
 // $ret = "STRING: lo"

 snmp_set_valueretrieval(SNMP_VALUE_PLAIN);
 $ret = snmpget('localhost', 'public', 'IF-MIB::ifName.1');
 // $ret = "lo";

 snmp_set_valueretrieval(SNMP_VALUE_OBJECT);
 $ret = snmpget('localhost', 'public', 'IF-MIB::ifName.1');
 // stdClass Object
 // (
 //   [type] => 4        <-- SNMP_OCTET_STR, see constants
 //   [value] => lo
 // )

 snmp_set_valueretrieval(SNMP_VALUE_OBJECT | SNMP_VALUE_PLAIN);
 $ret = snmpget('localhost', 'public', 'IF-MIB::ifName.1');
 // stdClass Object
 // (
 //   [type] => 4        <-- SNMP_OCTET_STR, see constants
 //   [value] => lo
 // )

 snmp_set_valueretrieval(SNMP_VALUE_OBJECT | SNMP_VALUE_LIBRARY);
 $ret = snmpget('localhost', 'public', 'IF-MIB::ifName.1');
 // stdClass Object
 // (
 //   [type] => 4        <-- SNMP_OCTET_STR, see constants
 //   [value] => STRING: lo
 // )

?>
```

### See Also

- snmp_get_valueretrieval() - Return the method how the SNMP values will be returned
- Predefined Constants

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.snmp-set-valueretrieval.php
