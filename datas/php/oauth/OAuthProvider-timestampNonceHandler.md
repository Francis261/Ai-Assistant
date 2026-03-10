# OAuthProvider::timestampNonceHandler

Source: https://devdocs.io/php/oauthprovider.timestampnoncehandler

(PECL OAuth >= 1.0.0)

OAuthProvider::timestampNonceHandler — Set the timestampNonceHandler handler callback

### Description

```
public OAuthProvider::timestampNonceHandler(callable $callback_function): void
```

Sets the timestamp nonce handler callback, which will later be called with OAuthProvider::callTimestampNonceHandler(). Errors related to timestamp/nonce are thrown to this callback.

This function is currently not documented; only its argument list is available.

### Parameters

The callable functions name.

### Return Values

No value is returned.

### Examples

Example #1 Example OAuthProvider::timestampNonceHandler() callback

```
<?php
function timestampNonceChecker($provider) {

    if ($provider->nonce === 'bad') {
        return OAUTH_BAD_NONCE;
    } elseif ($provider->timestamp == '0') {
        return OAUTH_BAD_TIMESTAMP;
    }
    
    return OAUTH_OK;
}
?>
```

### See Also

- OAuthProvider::callTimestampNonceHandler() - Calls the timestampNonceHandler callback

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/oauthprovider.timestampnoncehandler.php
