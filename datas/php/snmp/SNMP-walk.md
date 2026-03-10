# SNMP::walk

Source: https://devdocs.io/php/snmp.walk

(PHP 5 >= 5.4.0, PHP 7, PHP 8)

SNMP::walk — Fetch SNMP object subtree

### Description

```
public SNMP::walk(
 array|string $objectId,
 bool $suffixAsKey = false,
 int $maxRepetitions = -1,
 int $nonRepeaters = -1
): array|false
```

SNMP::walk() is used to read SNMP subtree rooted at specified objectId.

### Parameters

Root of subtree to be fetched

By default full OID notation is used for keys in output array. If set to true subtree prefix will be removed from keys leaving only suffix of object_id.

This specifies the number of supplied variables that should not be iterated over. The default is to use this value from SNMP object.

This specifies the maximum number of iterations over the repeating variables. The default is to use this value from SNMP object.

### Return Values

Returns an associative array of the SNMP object ids and their values on success or false on error. When a SNMP error occures SNMP::getErrno() and SNMP::getError() can be used for retrieving error number (specific to SNMP extension, see class constants) and error message respectively.

### Errors/Exceptions

This method does not throw any exceptions by default. To enable throwing an SNMPException exception when some of library errors occur the SNMP class parameter exceptions_enabled should be set to a corresponding value. See SNMP::$exceptions_enabled explanation for more details.

### Examples

Example #1 SNMP::walk() example

```
<?php
  $session = new SNMP(SNMP::VERSION_1, "127.0.0.1", "public");
  $fulltree = $session->walk(".");
  print_r($fulltree);
  $session->close();
?>
```

The above example will output something similar to:

```
Array
(
    [SNMPv2-MIB::sysDescr.0] => STRING: Test server
    [SNMPv2-MIB::sysObjectID.0] => OID: NET-SNMP-MIB::netSnmpAgentOIDs.8
    [DISMAN-EVENT-MIB::sysUpTimeInstance] => Timeticks: (1150681750) 133 days, 4:20:17.50
    [SNMPv2-MIB::sysContact.0] => STRING: Nobody
    [SNMPv2-MIB::sysName.0] => STRING: server.localdomain
    ...
)
```

Example #2 suffixAsKey example

suffixAsKey may be used when merging multiple SNMP subtrees into one. This example maps interface names to their type.

```
<?php
  $session = new SNMP(SNMP::VERSION_1, "127.0.0.1", "public");
  $session->valueretrieval = SNMP_VALUE_PLAIN;
  $ifDescr = $session->walk(".1.3.6.1.2.1.2.2.1.2", TRUE);
  $session->valueretrieval = SNMP_VALUE_LIBRARY;
  $ifType = $session->walk(".1.3.6.1.2.1.2.2.1.3", TRUE);
  print_r($ifDescr);
  print_r($ifType);
  $result = array();
  foreach($ifDescr as $i => $n) {
    $result[$n] = $ifType[$i];
  }
  print_r($result);
?>
```

The above example will output something similar to:

```
Array
(
    [1] => igb0
    [2] => igb1
    [3] => ipfw0
    [4] => lo0
    [5] => lagg0
)
Array
(
    [1] => INTEGER: ieee8023adLag(161)
    [2] => INTEGER: ieee8023adLag(161)
    [3] => INTEGER: ethernetCsmacd(6)
    [4] => INTEGER: softwareLoopback(24)
    [5] => INTEGER: ethernetCsmacd(6)
)
Array
(
    [igb0] => INTEGER: ieee8023adLag(161)
    [igb1] => INTEGER: ieee8023adLag(161)
    [ipfw0] => INTEGER: ethernetCsmacd(6)
    [lo0] => INTEGER: softwareLoopback(24)
    [lagg0] => INTEGER: ethernetCsmacd(6)
)
```

### See Also

- SNMP::getErrno() - Get last error code
- SNMP::getError() - Get last error message

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/snmp.walk.php
