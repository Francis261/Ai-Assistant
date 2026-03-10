# SNMP::setSecurity

Source: https://devdocs.io/php/snmp.setsecurity

(PHP 5 >= 5.4.0, PHP 7, PHP 8)

SNMP::setSecurity — Configures security-related SNMPv3 session parameters

### Description

```
public SNMP::setSecurity(
 string $securityLevel,
 string $authProtocol = "",
 string $authPassphrase = "",
 string $privacyProtocol = "",
 string $privacyPassphrase = "",
 string $contextName = "",
 string $contextEngineId = ""
): bool
```

setSecurity configures security-related session parameters used in SNMP protocol version 3

### Parameters

the security level (noAuthNoPriv|authNoPriv|authPriv)

the authentication protocol (MD5 or SHA)

the authentication pass phrase

the privacy protocol (DES or AES)

the privacy pass phrase

the context name

the context EngineID

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 SNMP::setSecurity() example

```
<?php
  $session = new SNMP(SNMP::VERSION_3, $hostname, $rwuser, $timeout, $retries);
  $session->setSecurity('authPriv', 'MD5', $auth_pass, 'AES', $priv_pass, '', 'aeeeff');
?>
```

### See Also

- SNMP::__construct() - Creates SNMP instance representing session to remote SNMP agent

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/snmp.setsecurity.php
