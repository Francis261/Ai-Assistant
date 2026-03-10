# OAuthProvider::tokenHandler

Source: https://devdocs.io/php/oauthprovider.tokenhandler

(PECL OAuth >= 1.0.0)

OAuthProvider::tokenHandler — Set the tokenHandler handler callback

### Description

```
public OAuthProvider::tokenHandler(callable $callback_function): void
```

Sets the token handler callback, which will later be called with OAuthProvider::callTokenHandler().

This function is currently not documented; only its argument list is available.

### Parameters

The callable functions name.

### Return Values

No value is returned.

### Examples

Example #1 Example OAuthProvider::tokenHandler() callback

```
<?php
function tokenHandler($provider) {
    
    if ($provider->token === 'rejected') {
        return OAUTH_TOKEN_REJECTED;
    } elseif ($provider->token === 'revoked') {
        return OAUTH_TOKEN_REVOKED;
    }

    $provider->token_secret = "the_tokens_secret";
    return OAUTH_OK;
}
?>
```

### See Also

- OAuthProvider::callTokenHandler() - Calls the tokenNonceHandler callback

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/oauthprovider.tokenhandler.php
