# snmpwalk

Source: https://devdocs.io/php/function.snmpwalk

(PHP 4, PHP 5, PHP 7, PHP 8)

snmpwalk — Fetch all the SNMP objects from an agent

### Description

```
snmpwalk(
 string $hostname,
 string $community,
 array|string $object_id,
 int $timeout = -1,
 int $retries = -1
): array|false
```

snmpwalk() function is used to read all the values from an SNMP agent specified by the hostname.

### Parameters

The SNMP agent (server).

The read community.

If null, object_id is taken as the root of the SNMP objects tree and all objects under that tree are returned as an array.

If object_id is specified, all the SNMP objects below that object_id are returned.

The number of microseconds until the first timeout.

The number of times to retry if timeouts occur.

### Return Values

Returns an array of SNMP object values starting from the object_id as root or false on error.

### Examples

Example #1 snmpwalk() Example

```
<?php
$a = snmpwalk("127.0.0.1", "public", ""); 

foreach ($a as $val) {
    echo "$val\n";
}

?>
```

Above function call would return all the SNMP objects from the SNMP agent running on localhost. One can step through the values with a loop

### See Also

- snmprealwalk() - Return all objects including their respective object ID within the specified one

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.snmpwalk.php
