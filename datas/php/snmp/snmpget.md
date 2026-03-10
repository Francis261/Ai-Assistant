# snmpget

Source: https://devdocs.io/php/function.snmpget

(PHP 4, PHP 5, PHP 7, PHP 8)

snmpget — Fetch an SNMP object

### Description

```
snmpget(
 string $hostname,
 string $community,
 array|string $object_id,
 int $timeout = -1,
 int $retries = -1
): mixed
```

The snmpget() function is used to read the value of an SNMP object specified by the object_id.

### Parameters

The SNMP agent.

The read community.

The SNMP object.

The number of microseconds until the first timeout.

The number of times to retry if timeouts occur.

### Return Values

Returns SNMP object value on success or false on error.

### Examples

Example #1 Using snmpget()

```
<?php
$syscontact = snmpget("127.0.0.1", "public", "system.SysContact.0");
?>
```

### See Also

- snmpset() - Set the value of an SNMP object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.snmpget.php
