# snmp_set_oid_output_format

Source: https://devdocs.io/php/function.snmp-set-oid-output-format

(PHP 5 >= 5.2.0, PHP 7, PHP 8)

snmp_set_oid_output_format — Set the OID output format

### Description

```
snmp_set_oid_output_format(int $format): true
```

snmp_set_oid_output_format() sets the output format to be full or numeric.

### Parameters

### Return Values

Always returns true.

### Changelog

### Examples

Example #1 Using snmprealwalk()

```
<?php

 snmp_read_mib("/usr/share/mibs/netsnmp/NET-SNMP-TC");

 // default or SNMP_OID_OUTPUT_MODULE
 print_r( snmprealwalk('localhost', 'public', 'RFC1213-MIB::sysObjectID') );

 snmp_set_oid_output_format(SNMP_OID_OUTPUT_NUMERIC);
 print_r( snmprealwalk('localhost', 'public', 'RFC1213-MIB::sysObjectID') );

 snmp_set_oid_output_format(SNMP_OID_OUTPUT_FULL);
 print_r( snmprealwalk('localhost', 'public', 'RFC1213-MIB::sysObjectID') );
?>
```

The above would output:

```
Array
 (
    [RFC1213-MIB::sysObjectID.0] => OID: NET-SNMP-TC::linux
 )
 Array
 (
    [.1.3.6.1.2.1.1.2.0] => OID: .1.3.6.1.4.1.8072.3.2.10
 )
 Array
 (
    [.iso.org.dod.internet.mgmt.mib-2.system.sysObjectID.0] => OID: .iso.org.dod.internet.private.enterprises.netSnmp.netSnmpEnumerations.netSnmpAgentOIDs.linux
 )
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.snmp-set-oid-output-format.php
