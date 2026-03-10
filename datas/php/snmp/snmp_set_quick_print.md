# snmp_set_quick_print

Source: https://devdocs.io/php/function.snmp-set-quick-print

(PHP 4, PHP 5, PHP 7, PHP 8)

snmp_set_quick_print — Set the value of enable within the NET-SNMP library

### Description

```
snmp_set_quick_print(bool $enable): true
```

Sets the value of enable within the NET-SNMP library. When this is set (1), the SNMP library will return 'quick printed' values. This means that just the value will be printed. When enable is not enabled (default) the NET-SNMP library prints extra information including the type of the value (i.e. IpAddress or OID). Additionally, if quick_print is not enabled, the library prints additional hex values for all strings of three characters or less.

By default the NET-SNMP library returns verbose values, quick_print is used to return only the value.

Currently strings are still returned with extra quotes, this will be corrected in a later release.

### Parameters

### Return Values

Always returns true.

### Changelog

### Examples

Setting quick_print is often used when using the information returned rather than displaying it.

Example #1 Using snmp_set_quick_print()

```
<?php
snmp_set_quick_print(0);
$a = snmpget("127.0.0.1", "public", ".1.3.6.1.2.1.2.2.1.9.1");
echo "$a\n";
snmp_set_quick_print(1);
$a = snmpget("127.0.0.1", "public", ".1.3.6.1.2.1.2.2.1.9.1");
echo "$a\n";
?>
```

The above example will output something similar to:

```
'Timeticks: (0) 0:00:00.00'
'0:00:00.00'
```

### See Also

- snmp_get_quick_print() - Fetches the current value of the NET-SNMP library's quick_print setting

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.snmp-set-quick-print.php
