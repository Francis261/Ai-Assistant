# snmpset

Source: https://devdocs.io/php/function.snmpset

(PHP 4, PHP 5, PHP 7, PHP 8)

snmpset — Set the value of an SNMP object

### Description

```
snmpset(
 string $hostname,
 string $community,
 array|string $object_id,
 array|string $type,
 array|string $value,
 int $timeout = -1,
 int $retries = -1
): bool
```

snmpset() is used to set the value of an SNMP object specified by the object_id.

### Parameters

The hostname of the SNMP agent (server).

The write community.

The SNMP object id.

The MIB defines the type of each object id. It has to be specified as a single character from the below list.

If OPAQUE_SPECIAL_TYPES was defined while compiling the SNMP library, the following are also valid:

Most of these will use the obvious corresponding ASN.1 type. 's', 'x', 'd' and 'b' are all different ways of specifying an OCTET STRING value, and the 'u' unsigned type is also used for handling Gauge32 values.

If the MIB-Files are loaded by into the MIB Tree with "snmp_read_mib" or by specifying it in the libsnmp config, '=' may be used as the type parameter for all object ids as the type can then be automatically read from the MIB.

Note that there are two ways to set a variable of the type BITS like e.g. "SYNTAX BITS {telnet(0), ftp(1), http(2), icmp(3), snmp(4), ssh(5), https(6)}":

- Using type "b" and a list of bit numbers. This method is not recommended since GET query for the same OID would return e.g. 0xF8.
- Using type "x" and a hex number but without(!) the usual "0x" prefix.

See examples section for more details.

The new value.

The number of microseconds until the first timeout.

The number of times to retry if timeouts occur.

### Return Values

Returns true on success or false on failure.

If the SNMP host rejects the data type, an E_WARNING message like "Warning: Error in packet. Reason: (badValue) The value given has the wrong type or length." is shown. If an unknown or invalid OID is specified the warning probably reads "Could not add variable".

### Examples

Example #1 Using snmpset()

```
<?php
  snmpset("localhost", "public", "IF-MIB::ifAlias.3", "s", "foo");
?>
```

Example #2 Using snmpset() for setting BITS SNMP object id

```
<?php
  snmpset("localhost", "public", 'FOO-MIB::bar.42', 'b', '0 1 2 3 4');
// or
  snmpset("localhost", "public", 'FOO-MIB::bar.42', 'x', 'F0');
?>
```

### See Also

- snmpget() - Fetch an SNMP object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.snmpset.php
