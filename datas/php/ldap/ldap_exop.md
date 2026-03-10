# ldap_exop

Source: https://devdocs.io/php/function.ldap-exop

(PHP 7 >= 7.2.0, PHP 8)

ldap_exop — Performs an extended operation

### Description

```
ldap_exop(
 LDAP\Connection $ldap,
 string $request_oid,
 string $request_data = null,
 array $controls = null,
 string &$response_data = ?,
 string &$response_oid = ?
): mixed
```

Performs an extended operation on the specified ldap with request_oid the OID of the operation and request_data the data.

### Parameters

An LDAP\Connection instance, returned by ldap_connect().

The extended operation request OID. You may use one of LDAP_EXOP_START_TLS, LDAP_EXOP_MODIFY_PASSWD, LDAP_EXOP_REFRESH, LDAP_EXOP_WHO_AM_I, LDAP_EXOP_TURN, or a string with the OID of the operation you want to send.

The extended operation request data. May be NULL for some operations like LDAP_EXOP_WHO_AM_I, may also need to be BER encoded.

Array of LDAP Controls to send with the request.

Will be filled with the extended operation response data if provided. If not provided you may use ldap_parse_exop on the result object later to get this data.

Will be filled with the response OID if provided, usually equal to the request OID.

### Return Values

When used with response_data, returns true on success or false on error. When used without response_data, returns a result identifier or false on error.

### Changelog

### Examples

Example #1 Whoami extended operation

```
<?php
$ds = ldap_connect("localhost");  // assuming the LDAP server is on this host

if ($ds) {
    // bind with appropriate dn to give update access
    $bind = ldap_bind($ds, "cn=root, o=My Company, c=US", "secret");
    if (!$bind) {
      echo "Unable to bind to LDAP server";
      exit;
    }

    // Call WHOAMI EXOP
    $r = ldap_exop($ds, LDAP_EXOP_WHO_AM_I);

    // Parse the result object
    ldap_parse_exop($ds, $r, $retdata);
    // Output: string(31) "dn:cn=root, o=My Company, c=US"
    var_dump($retdata);

    // Same thing using $response_data parameter
    $success = ldap_exop($ds, LDAP_EXOP_WHO_AM_I, NULL, NULL, $retdata, $retoid);
    if ($success) {
      var_dump($retdata);
    }

    ldap_close($ds);
} else {
    echo "Unable to connect to LDAP server";
}
?>
```

### See Also

- ldap_parse_result() - Extract information from result
- ldap_parse_exop() - Parse result object from an LDAP extended operation
- ldap_exop_whoami() - WHOAMI extended operation helper
- ldap_exop_refresh() - Refresh extended operation helper
- ldap_exop_passwd() - PASSWD extended operation helper

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ldap-exop.php
