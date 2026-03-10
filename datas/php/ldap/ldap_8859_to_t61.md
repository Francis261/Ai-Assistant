# ldap_8859_to_t61

Source: https://devdocs.io/php/function.ldap-8859-to-t61

(PHP 4 >= 4.0.2, PHP 5, PHP 7, PHP 8)

ldap_8859_to_t61 — Translate 8859 characters to t61 characters

### Description

```
ldap_8859_to_t61(string $value): string|false
```

Translate ISO-8859 characters to t61 characters.

This function is useful if you have to talk to a legacy LDAPv2 server.

### Parameters

The text to be translated.

### Return Values

Return the t61 translation of value, or false on failure.

### See Also

- ldap_t61_to_8859() - Translate t61 characters to 8859 characters

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ldap-8859-to-t61.php
