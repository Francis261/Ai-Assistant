# session_get_cookie_params

Source: https://devdocs.io/php/function.session-get-cookie-params

(PHP 4, PHP 5, PHP 7, PHP 8)

session_get_cookie_params — Get the session cookie parameters

### Description

```
session_get_cookie_params(): array
```

Gets the session cookie parameters.

### Parameters

This function has no parameters.

### Return Values

Returns an array with the current session cookie information, the array contains the following items:

- "lifetime" - The lifetime of the cookie in seconds.
- "path" - The path where information is stored.
- "domain" - The domain of the cookie.
- "secure" - The cookie should only be sent over secure connections.
- "httponly" - The cookie can only be accessed through the HTTP protocol.
- "samesite" - Controls the cross-domain sending of the cookie.

### Changelog

### See Also

- session.cookie_lifetime
- session.cookie_path
- session.cookie_domain
- session.cookie_secure
- session.cookie_httponly
- session.cookie_samesite
- session_set_cookie_params() - Set the session cookie parameters

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.session-get-cookie-params.php
