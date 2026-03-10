# OAuth::getAccessToken

Source: https://devdocs.io/php/oauth.getaccesstoken

(PECL OAuth >= 0.99.1)

OAuth::getAccessToken — Fetch an access token

### Description

```
public OAuth::getAccessToken(
 string $access_token_url,
 string $auth_session_handle = ?,
 string $verifier_token = ?,
 string $http_method = ?
): array
```

Fetch an access token, secret and any additional response parameters from the service provider.

### Parameters

URL to the access token API.

Authorization session handle, this parameter does not have any citation in the core OAuth 1.0 specification but may be implemented by large providers. » See ScalableOAuth for more information.

For service providers which support 1.0a, a verifier_token must be passed while exchanging the request token for the access token. If the verifier_token is present in $_GET or $_POST it is passed automatically and the caller does not need to specify a verifier_token (usually if the access token is exchanged at the oauth_callback URL). » See ScalableOAuth for more information.

HTTP method to use, e.g. GET or POST.

### Return Values

Returns an array containing the parsed OAuth response on success or false on failure.

### Changelog

### Examples

Example #1 OAuth::getAccessToken() example

```
<?php
try {
    $oauth = new OAuth(OAUTH_CONSUMER_KEY,OAUTH_CONSUMER_SECRET);
    $oauth->setToken($request_token,$request_token_secret);
    $access_token_info = $oauth->getAccessToken("https://example.com/oauth/access_token");
    if(!empty($access_token_info)) {
        print_r($access_token_info);
    } else {
        print "Failed fetching access token, response was: " . $oauth->getLastResponse();
    }
} catch(OAuthException $E) {
    echo "Response: ". $E->lastResponse . "\n";
}
?>
```

The above example will output something similar to:

```
Array
(
    [oauth_token] => some_token
    [oauth_token_secret] => some_token_secret
)
```

### See Also

- OAuth::getLastResponse() - Get the last response
- OAuth::getLastResponseInfo() - Get HTTP information about the last response
- OAuth::setToken() - Sets the token and secret

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/oauth.getaccesstoken.php
