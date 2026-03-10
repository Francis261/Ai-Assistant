# OAuth::getRequestToken

Source: https://devdocs.io/php/oauth.getrequesttoken

(PECL OAuth >= 0.99.1)

OAuth::getRequestToken — Fetch a request token

### Description

```
public OAuth::getRequestToken(string $request_token_url, string $callback_url = ?, string $http_method = ?): array
```

Fetch a request token, secret and any additional response parameters from the service provider.

### Parameters

URL to the request token API.

OAuth callback URL. If callback_url is passed and is an empty value, it is set to "oob" to address the OAuth 2009.1 advisory.

HTTP method to use, e.g. GET or POST.

### Return Values

Returns an array containing the parsed OAuth response on success or false on failure.

### Changelog

### Examples

Example #1 OAuth::getRequestToken() example

```
<?php
try {
    $oauth = new OAuth(OAUTH_CONSUMER_KEY,OAUTH_CONSUMER_SECRET);
    $request_token_info = $oauth->getRequestToken("https://example.com/oauth/request_token");
    if(!empty($request_token_info)) {
        print_r($request_token_info);
    } else {
        print "Failed fetching request token, response was: " . $oauth->getLastResponse();
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

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/oauth.getrequesttoken.php
