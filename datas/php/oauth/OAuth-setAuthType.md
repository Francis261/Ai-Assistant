# OAuth::setAuthType

Source: https://devdocs.io/php/oauth.setauthtype

(PECL OAuth >= 0.99.1)

OAuth::setAuthType — Set authorization type

### Description

```
public OAuth::setAuthType(int $auth_type): bool
```

Set where the OAuth parameters should be passed.

### Parameters

auth_type can be one of the following flags (in order of decreasing preference as per OAuth 1.0 section 5.2):

### Return Values

Returns true if a parameter is correctly set, otherwise false (e.g., if an invalid auth_type is passed in.)

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/oauth.setauthtype.php
