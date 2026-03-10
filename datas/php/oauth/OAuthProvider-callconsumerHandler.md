# OAuthProvider::callconsumerHandler

Source: https://devdocs.io/php/oauthprovider.callconsumerhandler

(No version information available, might only be in Git)

OAuthProvider::callconsumerHandler — Calls the consumerNonceHandler callback

### Description

```
public OAuthProvider::callconsumerHandler(): void
```

Calls the registered consumer handler callback function, which is set with OAuthProvider::consumerHandler().

This function is currently not documented; only its argument list is available.

### Parameters

This function has no parameters.

### Return Values

No value is returned.

### Errors/Exceptions

Emits an E_ERROR level error if the callback function cannot be called, or was not specified.

### See Also

- OAuthProvider::consumerHandler() - Set the consumerHandler handler callback

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/oauthprovider.callconsumerhandler.php
