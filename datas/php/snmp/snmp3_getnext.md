# snmp3_getnext

Source: https://devdocs.io/php/function.snmp3-getnext

(PHP 5, PHP 7, PHP 8)

snmp3_getnext — Fetch the SNMP object which follows the given object id

### Description

```
snmp3_getnext(
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
): mixed
```

The snmp3_getnext() function is used to read the value of the SNMP object that follows the specified object_id.

### Parameters

The hostname of the SNMP agent (server).

the security name, usually some kind of username

the security level (noAuthNoPriv|authNoPriv|authPriv)

the authentication protocol ("MD5", "SHA", "SHA256", or "SHA512")

the authentication pass phrase

the privacy protocol (DES or AES)

the privacy pass phrase

The SNMP object id.

The number of microseconds until the first timeout.

The number of times to retry if timeouts occur.

### Return Values

Returns SNMP object value on success or false on error. In case of an error, an E_WARNING message is shown.

### Changelog

### Examples

Example #1 Using snmp3_getnext()

```
<?php
$nameOfSecondInterface = snmp3_getnext('localhost', 'james', 'authPriv', 'SHA', 'secret007', 'AES', 'secret007', 'IF-MIB::ifName.1');
?>
```

### See Also

- snmp3_get() - Fetch an SNMP object
- snmp3_walk() - Fetch all the SNMP objects from an agent

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.snmp3-getnext.php
