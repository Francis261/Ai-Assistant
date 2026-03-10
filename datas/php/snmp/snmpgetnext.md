# snmpgetnext

Source: https://devdocs.io/php/function.snmpgetnext

(PHP 5, PHP 7, PHP 8)

snmpgetnext — Fetch the SNMP object which follows the given object id

### Description

```
snmpgetnext(
 string $hostname,
 string $community,
 array|string $object_id,
 int $timeout = -1,
 int $retries = -1
): mixed
```

The snmpgetnext() function is used to read the value of the SNMP object that follows the specified object_id.

### Parameters

The hostname of the SNMP agent (server).

The read community.

The SNMP object id which precedes the wanted one.

The number of microseconds until the first timeout.

The number of times to retry if timeouts occur.

### Return Values

Returns SNMP object value on success or false on error. In case of an error, an E_WARNING message is shown.

### Examples

Example #1 Using snmpgetnext()

```
<?php
$nameOfSecondInterface = snmpgetnetxt('localhost', 'public', 'IF-MIB::ifName.1');
?>
```

### See Also

- snmpget() - Fetch an SNMP object
- snmpwalk() - Fetch all the SNMP objects from an agent

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.snmpgetnext.php
