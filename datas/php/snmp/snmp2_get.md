# snmp2_get

Source: https://devdocs.io/php/function.snmp2-get

(PHP 5 >= 5.2.0, PHP 7, PHP 8)

snmp2_get — Fetch an SNMP object

### Description

```
snmp2_get(
 string $hostname,
 string $community,
 array|string $object_id,
 int $timeout = -1,
 int $retries = -1
): mixed
```

The snmp2_get() function is used to read the value of an SNMP object specified by the object_id.

### Parameters

The SNMP agent.

The read community.

The SNMP object.

The number of microseconds until the first timeout.

The number of times to retry if timeouts occur.

### Return Values

Returns SNMP object value on success or false on error.

### Examples

Example #1 Using snmp2_get()

```
<?php
$syscontact = snmp2_get("127.0.0.1", "public", "system.SysContact.0");
?>
```

### See Also

- snmp2_set() - Set the value of an SNMP object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.snmp2-get.php
