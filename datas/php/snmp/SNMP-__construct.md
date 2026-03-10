# SNMP::__construct

Source: https://devdocs.io/php/snmp.construct

(PHP 5 >= 5.4.0, PHP 7, PHP 8)

SNMP::__construct — Creates SNMP instance representing session to remote SNMP agent

### Description

Creates SNMP instance representing session to remote SNMP agent.

### Parameters

SNMP protocol version: SNMP::VERSION_1, SNMP::VERSION_2C, SNMP::VERSION_3.

The SNMP agent. hostname may be suffixed with optional SNMP agent port after colon. IPv6 addresses must be enclosed in square brackets if used with port. If FQDN is used for hostname it will be resolved by PHP SNMP extension, not by Net-SNMP engine. Usage of IPv6 addresses when specifying FQDN may be forced by enclosing FQDN into square brackets. Here are some examples:

Specifies the security level for given version. The purpose of community access string is SNMP version specific:

The number of microseconds until the first timeout.

The number of retries in case timeout occurs.

### Errors/Exceptions

SNMP::__construct() throws an exception when parameters count or types are wrong or unknown SNMP protocol version specified.

### Examples

Example #1 Fetching the physical location of the host

```
<?php

$session = new SNMP(SNMP::VERSION_1, "127.0.0.1", "public");
$sysdescr = $session->get("sysDescr.0");
echo "$sysdescr\n";

?>
```

The above example will output something similar to:

```
STRING: Test server
```

### See Also

- SNMP::close() - Close SNMP session

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/snmp.construct.php
