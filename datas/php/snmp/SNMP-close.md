# SNMP::close

Source: https://devdocs.io/php/snmp.close

(PHP 5 >= 5.4.0, PHP 7, PHP 8)

SNMP::close — Close SNMP session

### Description

```
public SNMP::close(): bool
```

Frees previously allocated SNMP session object.

### Parameters

This function has no parameters.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 SNMP::close() example

```
<?php
  $session = new SNMP(SNMP::VERSION_1, "127.0.0.1", "public");
  # ...
  # get, walk, etc goes here
  # ...
  $session->close();
?>
```

### See Also

- SNMP::__construct() - Creates SNMP instance representing session to remote SNMP agent

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/snmp.close.php
