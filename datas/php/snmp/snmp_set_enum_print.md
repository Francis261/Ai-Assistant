# snmp_set_enum_print

Source: https://devdocs.io/php/function.snmp-set-enum-print

(PHP 4 >= 4.3.0, PHP 5, PHP 7, PHP 8)

snmp_set_enum_print — Return all values that are enums with their enum value instead of the raw integer

### Description

```
snmp_set_enum_print(bool $enable): true
```

This function toggles if snmpwalk/snmpget etc. should automatically lookup enum values in the MIB and return them together with their human readable string.

### Parameters

As the value is interpreted as boolean by the Net-SNMP library, it can only be "0" or "1".

### Return Values

Always returns true.

### Changelog

### Examples

Example #1 Using snmp_set_enum_print()

```
<?php
 snmp_set_enum_print(0);
 echo snmpget('localhost', 'public', 'IF-MIB::ifOperStatus.3') . "\n";
 snmp_set_enum_print(1);
 echo snmpget('localhost', 'public', 'IF-MIB::ifOperStatus.3') . "\n";
?>
```

The above would return

```
INTEGER: up(1)
 INTEGER: 1
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.snmp-set-enum-print.php
