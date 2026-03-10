# snmp_read_mib

Source: https://devdocs.io/php/function.snmp-read-mib

(PHP 5, PHP 7, PHP 8)

snmp_read_mib — Reads and parses a MIB file into the active MIB tree

### Description

```
snmp_read_mib(string $filename): bool
```

This function is used to load additional, e.g. vendor specific, MIBs so that human readable OIDs like VENDOR-MIB::foo.1 instead of error prone numeric OIDs can be used.

The order in which the MIBs are loaded does matter as the underlying Net-SNMP library will print warnings if referenced objects cannot be resolved.

### Parameters

The filename of the MIB.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Using snmp_read_mib()

```
<?php
 print_r( snmprealwalk('localhost', 'public', '.1.3.6.1.2.1.2.3.4.5') );
 
 snmp_read_mib('./FOO-BAR-MIB.txt');
 print_r( snmprealwalk('localhost', 'public', 'FOO-BAR-MIB::someTable') );
?>
```

The above example is made up but the results would look like:

```
Array
(
    [iso.3.6.1.2.1.2.3.4.5.0] => Gauge32: 6
)
Array
(
    [FOO-BAR-MIB::someTable.0] => Gauge32: 6
)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.snmp-read-mib.php
