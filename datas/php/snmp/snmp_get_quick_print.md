# snmp_get_quick_print

Source: https://devdocs.io/php/function.snmp-get-quick-print

(PHP 4, PHP 5, PHP 7, PHP 8)

snmp_get_quick_print — Fetches the current value of the NET-SNMP library's quick_print setting

### Description

```
snmp_get_quick_print(): bool
```

Returns the current value stored in the NET-SNMP Library for quick_print. quick_print is off by default.

### Parameters

This function has no parameters.

### Return Values

Returns true if quick_print is on, false otherwise.

### Examples

Example #1 snmp_get_quick_print() example

```
<?php
$quickprint = snmp_get_quick_print();
?>
```

### See Also

- snmp_set_quick_print() - Set the value of enable within the NET-SNMP library for a full description of what quick_print does.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.snmp-get-quick-print.php
