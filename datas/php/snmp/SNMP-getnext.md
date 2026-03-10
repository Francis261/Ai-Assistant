# SNMP::getnext

Source: https://devdocs.io/php/snmp.getnext

(PHP 5 >= 5.4.0, PHP 7, PHP 8)

SNMP::getnext — Fetch an SNMP object which follows the given object id

### Description

```
public SNMP::getnext(array|string $objectId): mixed
```

Fetch an SNMP object that follows specified objectId.

### Parameters

If objectId is a string, then SNMP::getnext() will return SNMP object as string. If objectId is a array, all requested SNMP objects will be returned as associative array of the SNMP object ids and their values.

The SNMP object (OID) or objects

### Return Values

Returns SNMP objects requested as string or array depending on objectId type or false on error.

### Errors/Exceptions

This method does not throw any exceptions by default. To enable throwing an SNMPException exception when some of library errors occur the SNMP class parameter exceptions_enabled should be set to a corresponding value. See SNMP::$exceptions_enabled explanation for more details.

### Examples

Example #1 Single SNMP object

Single SNMP object may be requested in two ways: as string resulting string return value or as single-element array with associative array as output.

```
<?php
  $session = new SNMP(SNMP::VERSION_1, "127.0.0.1", "public");
  $nsysdescr = $session->getnext("sysDescr.0");
  echo "$nsysdescr\n";
  $nsysdescr = $session->getnext(array("sysDescr.0"));
  print_r($nsysdescr);
?>
```

The above example will output something similar to:

```
OID: NET-SNMP-MIB::netSnmpAgentOIDs.8
Array
(
    [SNMPv2-MIB::sysObjectID.0] => OID: NET-SNMP-MIB::netSnmpAgentOIDs.8
)
```

Example #2 Miltiple SNMP objects

```
<?php
  $session = new SNMP(SNMP::VERSION_1, "127.0.0.1", "public");
  $results = $session->getnext(array("sysDescr.0", "sysName.0"));
  print_r($results);
  $session->close();
?>
```

The above example will output something similar to:

```
Array
(
    [SNMPv2-MIB::sysObjectID.0] => OID: NET-SNMP-MIB::netSnmpAgentOIDs.8
    [SNMPv2-MIB::sysLocation.0] => STRING: Nowhere
)
```

### See Also

- SNMP::getErrno() - Get last error code
- SNMP::getError() - Get last error message

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/snmp.getnext.php
