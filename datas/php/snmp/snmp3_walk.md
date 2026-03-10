# snmp3_walk

Source: https://devdocs.io/php/function.snmp3-walk

(PHP 4, PHP 5, PHP 7, PHP 8)

snmp3_walk — Fetch all the SNMP objects from an agent

### Description

```
snmp3_walk(
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

snmp3_walk() function is used to read all the values from an SNMP agent specified by the hostname.

Even if the security level does not use an auth or priv protocol/password valid values have to be specified.

### Parameters

The hostname of the SNMP agent (server).

the security name, usually some kind of username

the security level (noAuthNoPriv|authNoPriv|authPriv)

the authentication protocol ("MD5", "SHA", "SHA256", or "SHA512")

the authentication pass phrase

the privacy protocol (DES or AES)

the privacy pass phrase

If null, object_id is taken as the root of the SNMP objects tree and all objects under that tree are returned as an array.

If object_id is specified, all the SNMP objects below that object_id are returned.

The number of microseconds until the first timeout.

The number of times to retry if timeouts occur.

### Return Values

Returns an array of SNMP object values starting from the object_id as root or false on error.

### Changelog

### Examples

Example #1 snmp3_walk() Example

```
<?php
$ret = snmp3_walk('localhost', 'james', 'authPriv', 'SHA', 'secret007', 'AES', 'secret007', 'IF-MIB::ifName');
var_export($ret);
?>
```

Above function call would return all the SNMP objects from the SNMP agent running on localhost:

```
array (
  0 => 'STRING: lo',
  1 => 'STRING: eth0',
  2 => 'STRING: eth2',
  3 => 'STRING: sit0',
  4 => 'STRING: sixxs',
)
```

### See Also

- snmp3_real_walk() - Return all objects including their respective object ID within the specified one

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.snmp3-walk.php
