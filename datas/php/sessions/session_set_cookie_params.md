# session_set_cookie_params

Source: https://devdocs.io/php/function.session-set-cookie-params

(PHP 4, PHP 5, PHP 7, PHP 8)

session_set_cookie_params — Set the session cookie parameters

### Description

```
session_set_cookie_params(
 int $lifetime_or_options,
 ?string $path = null,
 ?string $domain = null,
 ?bool $secure = null,
 ?bool $httponly = null
): bool
```

Alternative signature available as of PHP 7.3.0:

```
session_set_cookie_params(array $lifetime_or_options): bool
```

Set cookie parameters defined in the php.ini file. The effect of this function only lasts for the duration of the script. Thus, you need to call session_set_cookie_params() for every request and before session_start() is called.

This function updates the runtime ini values of the corresponding PHP ini configuration keys which can be retrieved with the ini_get().

### Parameters

When using the first signature, lifetime of the session cookie, defined in seconds.

When using the second signature, an associative array which may have any of the keys lifetime, path, domain, secure, httponly and samesite. The values have the same meaning as described for the parameters with the same name. The value of the samesite element should be either Lax or Strict. If any of the allowed options are not given, their default values are the same as the default values of the explicit parameters. If the samesite element is omitted, no SameSite cookie attribute is set.

Path on the domain where the cookie will work. Use a single slash ('/') for all paths on the domain.

Cookie domain, for example 'www.php.net'. To make cookies visible on all subdomains then the domain must be prefixed with a dot like '.php.net'.

If true cookie will only be sent over secure connections.

If set to true then PHP will attempt to send the httponly flag when setting the session cookie.

### Return Values

Returns true on success or false on failure.

### Changelog

### See Also

- session.cookie_lifetime
- session.cookie_path
- session.cookie_domain
- session.cookie_secure
- session.cookie_httponly
- session.cookie_samesite
- session_get_cookie_params() - Get the session cookie parameters

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.session-set-cookie-params.php
