# OAuthProvider::callTimestampNonceHandler

Source: https://devdocs.io/php/oauthprovider.calltimestampnoncehandler

(PECL OAuth >= 1.0.0)

OAuthProvider::callTimestampNonceHandler — Calls the timestampNonceHandler callback

### Description

```
public OAuthProvider::callTimestampNonceHandler(): void
```

Calls the registered timestamp handler callback function, which is set with OAuthProvider::timestampNonceHandler().

This function is currently not documented; only its argument list is available.

### Parameters

This function has no parameters.

### Return Values

No value is returned.

### Errors/Exceptions

Emits an E_ERROR level error if the callback function cannot be called, or was not specified.

### See Also

- OAuthProvider::timestampNonceHandler() - Set the timestampNonceHandler handler callback

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/oauthprovider.calltimestampnoncehandler.php
