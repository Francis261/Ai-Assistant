# snmp2_getnext

Source: https://devdocs.io/php/function.snmp2-getnext

(PHP >= 5.2.0, PHP 7, PHP 8)

snmp2_getnext — Fetch the SNMP object which follows the given object id

### Description

```
snmp2_getnext(
 string $hostname,
 string $community,
 array|string $object_id,
 int $timeout = -1,
 int $retries = -1
): mixed
```

The snmp2_get_next() function is used to read the value of the SNMP object that follows the specified object_id.

### Parameters

The hostname of the SNMP agent (server).

The read community.

The SNMP object id which precedes the wanted one.

The number of microseconds until the first timeout.

The number of times to retry if timeouts occur.

### Return Values

Returns SNMP object value on success or false on error. In case of an error, an E_WARNING message is shown.

### Examples

Example #1 Using snmp2_get_next()

```
<?php
$nameOfSecondInterface = snmp2_get_next('localhost', 'public', 'IF-MIB::ifName.1');
?>
```

### See Also

- snmp2_get() - Fetch an SNMP object
- snmp2_walk() - Fetch all the SNMP objects from an agent

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.snmp2-getnext.php
