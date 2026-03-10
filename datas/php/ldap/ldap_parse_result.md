# ldap_parse_result

Source: https://devdocs.io/php/function.ldap-parse-result

(PHP 4 >= 4.0.5, PHP 5, PHP 7, PHP 8)

ldap_parse_result — Extract information from result

### Description

```
ldap_parse_result(
 LDAP\Connection $ldap,
 LDAP\Result $result,
 int &$error_code,
 string &$matched_dn = null,
 string &$error_message = null,
 array &$referrals = null,
 array &$controls = null
): bool
```

Parses an LDAP search result.

### Parameters

An LDAP\Connection instance, returned by ldap_connect().

An LDAP\Result instance, returned by ldap_list() or ldap_search().

A reference to a variable that will be set to the LDAP error code in the result, or 0 if no error occurred.

A reference to a variable that will be set to a matched DN if one was recognised within the request, otherwise it will be set to null.

A reference to a variable that will be set to the LDAP error message in the result, or an empty string if no error occurred.

A reference to a variable that will be set to an array set to all of the referral strings in the result, or an empty array if no referrals were returned.

An array of LDAP Controls which have been sent with the response.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 ldap_parse_result() example

```
<?php
$result = ldap_search($ldap, "cn=userref,dc=my-domain,dc=com", "(cn=user*)");
$errcode = $dn = $errmsg = $refs =  null;
if (ldap_parse_result($ldap, $result, $errcode, $dn, $errmsg, $refs)) {
    // do something with $errcode, $dn, $errmsg and $refs
}
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ldap-parse-result.php
