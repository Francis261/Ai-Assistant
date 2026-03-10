# OAuth::setNonce

Source: https://devdocs.io/php/oauth.setnonce

(PECL OAuth >= 0.99.1)

OAuth::setNonce — Set the nonce for subsequent requests

### Description

```
public OAuth::setNonce(string $nonce): mixed
```

Sets the nonce for all subsequent requests.

### Parameters

The value for oauth_nonce.

### Return Values

Returns true on success, or false if the nonce is considered invalid.

### Changelog

### See Also

- OAuth::setToken() - Sets the token and secret
- OAuth::setAuthType() - Set authorization type
- OAuth::setVersion() - Set the OAuth version

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/oauth.setnonce.php
