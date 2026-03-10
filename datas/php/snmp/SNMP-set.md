# SNMP::set

Source: https://devdocs.io/php/snmp.set

(PHP 5 >= 5.4.0, PHP 7, PHP 8)

SNMP::set — Set the value of an SNMP object

### Description

```
public SNMP::set(array|string $objectId, array|string $type, array|string $value): bool
```

Requests remote SNMP agent setting the value of one or more SNMP objects specified by the objectId.

### Parameters

If objectId is string, both type and value must be string too. If objectId is array value must be equal-sized array containing corresponding values, type may be either string (it's value will be used for all objectId-value pairs) or equal-sized array with per-OID value. When any other parameters' combinations are used, a number of E_WARNING messages may be shown with detailed description.

The SNMP object id

When count of OIDs in object_id array is greater than max_oids object property set method will have to use multiple queries to perform requested value updates. In this case type and value checks are made per-chunk so second or subsequent requests may fail due to wrong type or value for OID requested. To mark this a warning is raised when count of OIDs in object_id array is greater than max_oids.

The MIB defines the type of each object id. It has to be specified as a single character from the below list.

If OPAQUE_SPECIAL_TYPES was defined while compiling the SNMP library, the following are also valid:

Most of these will use the obvious corresponding ASN.1 type. 's', 'x', 'd' and 'b' are all different ways of specifying an OCTET STRING value, and the 'u' unsigned type is also used for handling Gauge32 values.

If the MIB-Files are loaded by into the MIB Tree with "snmp_read_mib" or by specifying it in the libsnmp config, '=' may be used as the type parameter for all object ids as the type can then be automatically read from the MIB.

Note that there are two ways to set a variable of the type BITS like e.g. "SYNTAX BITS {telnet(0), ftp(1), http(2), icmp(3), snmp(4), ssh(5), https(6)}":

- Using type "b" and a list of bit numbers. This method is not recommended since GET query for the same OID would return e.g. 0xF8.
- Using type "x" and a hex number but without(!) the usual "0x" prefix.

See examples section for more details.

The new value.

### Return Values

Returns true on success or false on failure.

### Errors/Exceptions

This method does not throw any exceptions by default. To enable throwing an SNMPException exception when some of library errors occur the SNMP class parameter exceptions_enabled should be set to a corresponding value. See SNMP::$exceptions_enabled explanation for more details.

### Examples

Example #1 Set single SNMP object id

```
<?php
  $session = new SNMP(SNMP::VERSION_2C, "127.0.0.1", "private");
  $session->set('SNMPv2-MIB::sysContact.0', 's', "Nobody");
?>
```

Example #2 Set multiple values using single SNMP::set() call

```
<?php
  $session = new SNMP(SNMP::VERSION_2C, "127.0.0.1", "private");
  $session->set(array('SNMPv2-MIB::sysContact.0', 'SNMPv2-MIB::sysLocation.0'), array('s', 's'), array("Nobody", "Nowhere"));
// or
  $session->set(array('SNMPv2-MIB::sysContact.0', 'SNMPv2-MIB::sysLocation.0'), 's', array("Nobody", "Nowhere"));
?>
```

Example #3 Using SNMP::set() for setting BITS SNMP object id

```
<?php
  $session = new SNMP(SNMP::VERSION_2C, "127.0.0.1", "private");
  $session->set('FOO-MIB::bar.42', 'b', '0 1 2 3 4');
// or
  $session->set('FOO-MIB::bar.42', 'x', 'F0');
?>
```

### See Also

- SNMP::get() - Fetch an SNMP object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/snmp.set.php
