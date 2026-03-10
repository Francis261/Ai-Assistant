# OAuthProvider::consumerHandler

Source: https://devdocs.io/php/oauthprovider.consumerhandler

(PECL OAuth >= 1.0.0)

OAuthProvider::consumerHandler — Set the consumerHandler handler callback

### Description

```
public OAuthProvider::consumerHandler(callable $callback_function): void
```

Sets the consumer handler callback, which will later be called with OAuthProvider::callConsumerHandler().

This function is currently not documented; only its argument list is available.

### Parameters

The callable functions name.

### Return Values

No value is returned.

### Examples

Example #1 Example OAuthProvider::consumerHandler() callback

```
<?php
function lookupConsumer($provider) {

    if ($provider->consumer_key === 'unknown') {
        return OAUTH_CONSUMER_KEY_UNKNOWN;
    } else if($provider->consumer_key == 'blacklisted' || $provider->consumer_key === 'throttled') {
        return OAUTH_CONSUMER_KEY_REFUSED;
    }

    $provider->consumer_secret = "the_consumers_secret";

    return OAUTH_OK;
}
?>
```

### See Also

- OAuthProvider::callConsumerHandler() - Calls the consumerNonceHandler callback

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/oauthprovider.consumerhandler.php
