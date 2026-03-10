# ldap_escape

Source: https://devdocs.io/php/function.ldap-escape

(PHP 5 >= 5.6.0, PHP 7, PHP 8)

ldap_escape — Escape a string for use in an LDAP filter or DN

### Description

```
ldap_escape(string $value, string $ignore = "", int $flags = 0): string
```

Escapes value for use in the context implied by flags.

### Parameters

The value to escape.

Characters to ignore when escaping.

The context the escaped string will be used in: LDAP_ESCAPE_FILTER for filters to be used with ldap_search(), or LDAP_ESCAPE_DN for DNs. If neither flag is passed, all chars are escaped.

### Return Values

Returns the escaped string.

### Examples

When building an LDAP filter, you should use ldap_escape with LDAP_ESCAPE_FILTER flag.

Example #1 Searching for an email address

```
<?php
// $ds is a valid LDAP\Connection instance for a directory server

// $mail is an email address provided by the user in a form

$base   = "o=My Company, c=US";
$filter = "(mail=".ldap_escape($mail, "", LDAP_ESCAPE_FILTER).")";

$sr = ldap_search($ds, $base, $filter, array("sn", "givenname", "mail"));

$info = ldap_get_entries($ds, $sr);

echo $info["count"]." entries returned\n";
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ldap-escape.php
