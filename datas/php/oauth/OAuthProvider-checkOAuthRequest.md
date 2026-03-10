# OAuthProvider::checkOAuthRequest

Source: https://devdocs.io/php/oauthprovider.checkoauthrequest

(PECL OAuth >= 1.0.0)

OAuthProvider::checkOAuthRequest — Check an oauth request

### Description

```
public OAuthProvider::checkOAuthRequest(string $uri = ?, string $method = ?): void
```

Checks an OAuth request.

This function is currently not documented; only its argument list is available.

### Parameters

The optional URI, or endpoint.

The HTTP method. Optionally pass in one of the OAUTH_HTTP_METHOD_* OAuth constants.

### Return Values

No value is returned.

### Errors/Exceptions

Emits an E_ERROR level error if the HTTP method cannot be detected.

### See Also

- OAuthProvider::reportProblem() - Report a problem

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/oauthprovider.checkoauthrequest.php
