# OAuthProvider::calltokenHandler

Source: https://devdocs.io/php/oauthprovider.calltokenhandler

(PECL OAuth >= 1.0.0)

OAuthProvider::calltokenHandler — Calls the tokenNonceHandler callback

### Description

```
public OAuthProvider::calltokenHandler(): void
```

Calls the registered token handler callback function, which is set with OAuthProvider::tokenHandler().

This function is currently not documented; only its argument list is available.

### Parameters

This function has no parameters.

### Return Values

No value is returned.

### Errors/Exceptions

Emits an E_ERROR level error if the callback function cannot be called, or was not specified.

### See Also

- OAuthProvider::tokenHandler() - Set the tokenHandler handler callback

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/oauthprovider.calltokenhandler.php
