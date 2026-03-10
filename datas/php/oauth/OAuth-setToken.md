# OAuth::setToken

Source: https://devdocs.io/php/oauth.settoken

(PECL OAuth >= 0.99.1)

OAuth::setToken — Sets the token and secret

### Description

```
public OAuth::setToken(string $token, string $token_secret): bool
```

Set the token and secret for subsequent requests.

### Parameters

The OAuth token.

The OAuth token secret.

### Return Values

true

### Examples

Example #1 OAuth::setToken() example

```
<?php
$oauth = new OAuth(OAUTH_CONSUMER_KEY,OAUTH_CONSUMER_SECRET);
$oauth->setToken("token","token-secret");
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/oauth.settoken.php
