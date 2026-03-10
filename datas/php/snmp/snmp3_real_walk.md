# snmp3_real_walk

Source: https://devdocs.io/php/function.snmp3-real-walk

(PHP 4, PHP 5, PHP 7, PHP 8)

snmp3_real_walk — Return all objects including their respective object ID within the specified one

### Description

```
snmp3_real_walk(
 string $hostname,
 string $security_name,
 string $security_level,
 string $auth_protocol,
 string $auth_passphrase,
 string $privacy_protocol,
 string $privacy_passphrase,
 array|string $object_id,
 int $timeout = -1,
 int $retries = -1
): array|false
```

The snmp3_real_walk() function is used to traverse over a number of SNMP objects starting from object_id and return not only their values but also their object ids.

### Parameters

The hostname of the SNMP agent (server).

the security name, usually some kind of username

the security level (noAuthNoPriv|authNoPriv|authPriv)

the authentication protocol (MD5 or SHA)

the authentication pass phrase

the authentication protocol ("MD5", "SHA", "SHA256", or "SHA512")

the privacy pass phrase

The SNMP object id.

The number of microseconds until the first timeout.

The number of times to retry if timeouts occur.

### Return Values

Returns an associative array of the SNMP object ids and their values on success or false on error. In case of an error, an E_WARNING message is shown.

### Changelog

### Examples

Example #1 Using snmp3_real_walk()

```
<?php
 var_export(snmp3_real_walk('localhost', 'james', 'authPriv', 'SHA', 'secret007', 'AES', 'secret007', 'IF-MIB::ifName'));
?>
```

The above will output something like:

```
array (
  'IF-MIB::ifName.1' => 'STRING: lo',
  'IF-MIB::ifName.2' => 'STRING: eth0',
  'IF-MIB::ifName.3' => 'STRING: eth2',
  'IF-MIB::ifName.4' => 'STRING: sit0',
  'IF-MIB::ifName.5' => 'STRING: sixxs',
)
```

### See Also

- snmpwalk() - Fetch all the SNMP objects from an agent

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.snmp3-real-walk.php
