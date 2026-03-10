# ssh2_fingerprint

Source: https://devdocs.io/php/function.ssh2-fingerprint

(PECL ssh2 >= 0.9.0)

ssh2_fingerprint — Retrieve fingerprint of remote server

### Description

```
ssh2_fingerprint(resource $session, int $flags = SSH2_FINGERPRINT_MD5 | SSH2_FINGERPRINT_HEX): string
```

Returns a server hostkey hash from an active session.

### Parameters

An SSH connection link identifier, obtained from a call to ssh2_connect().

flags may be either of SSH2_FINGERPRINT_MD5 or SSH2_FINGERPRINT_SHA1 logically ORed with SSH2_FINGERPRINT_HEX or SSH2_FINGERPRINT_RAW.

### Return Values

Returns the hostkey hash as a string.

### Examples

Example #1 Checking the fingerprint against a known value

```
<?php
$known_host = '6F89C2F0A719B30CC38ABDF90755F2E4';

$connection = ssh2_connect('shell.example.com', 22);

$fingerprint = ssh2_fingerprint($connection,
               SSH2_FINGERPRINT_MD5 | SSH2_FINGERPRINT_HEX);

if ($fingerprint != $known_host) {
  die("HOSTKEY MISMATCH!\n" .
      "Possible Man-In-The-Middle Attack?");
}
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ssh2-fingerprint.php
