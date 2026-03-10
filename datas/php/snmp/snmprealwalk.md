# snmprealwalk

Source: https://devdocs.io/php/function.snmprealwalk

(PHP 4, PHP 5, PHP 7, PHP 8)

snmprealwalk — Return all objects including their respective object ID within the specified one

### Description

```
snmprealwalk(
 string $hostname,
 string $community,
 array|string $object_id,
 int $timeout = -1,
 int $retries = -1
): array|false
```

The snmprealwalk() function is used to traverse over a number of SNMP objects starting from object_id and return not only their values but also their object ids.

### Parameters

The hostname of the SNMP agent (server).

The read community.

The SNMP object id which precedes the wanted one.

The number of microseconds until the first timeout.

The number of times to retry if timeouts occur.

### Return Values

Returns an associative array of the SNMP object ids and their values on success or false on error. In case of an error, an E_WARNING message is shown.

### Examples

Example #1 Using snmprealwalk()

```
<?php
 print_r(snmprealwalk("localhost", "public", "IF-MIB::ifName"));
?>
```

The above will output something like:

```
Array
      (
      [IF-MIB::ifName.1] => STRING: lo
      [IF-MIB::ifName.2] => STRING: eth0
      [IF-MIB::ifName.3] => STRING: eth2
      [IF-MIB::ifName.4] => STRING: sit0
      [IF-MIB::ifName.5] => STRING: sixxs
    )
```

### See Also

- snmpwalk() - Fetch all the SNMP objects from an agent

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.snmprealwalk.php
