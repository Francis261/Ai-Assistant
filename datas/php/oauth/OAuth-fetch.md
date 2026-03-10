# OAuth::fetch

Source: https://devdocs.io/php/oauth.fetch

(PECL OAuth >= 0.99.1)

OAuth::fetch — Fetch an OAuth protected resource

### Description

```
public OAuth::fetch(
 string $protected_resource_url,
 array $extra_parameters = ?,
 string $http_method = ?,
 array $http_headers = ?
): mixed
```

Fetch a resource.

### Parameters

URL to the OAuth protected resource.

Extra parameters to send with the request for the resource.

One of the OAUTH_HTTP_METHOD_* OAUTH constants, which includes GET, POST, PUT, HEAD, or DELETE.

HEAD (OAUTH_HTTP_METHOD_HEAD) can be useful for discovering information prior to the request (if OAuth credentials are in the Authorization header).

HTTP client headers (such as User-Agent, Accept, etc.)

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 OAuth::fetch() example

```
<?php
try {
    $oauth = new OAuth("consumer_key","consumer_secret",OAUTH_SIG_METHOD_HMACSHA1,OAUTH_AUTH_TYPE_AUTHORIZATION);
    $oauth->setToken("access_token","access_token_secret");

    $oauth->fetch("http://photos.example.net/photo?file=vacation.jpg");

    $response_info = $oauth->getLastResponseInfo();
    header("Content-Type: {$response_info["content_type"]}");
    echo $oauth->getLastResponse();
} catch(OAuthException $E) {
    echo "Exception caught!\n";
    echo "Response: ". $E->lastResponse . "\n";
}
?>
```

### See Also

- OAuth::getLastResponse() - Get the last response
- OAuth::getLastResponseInfo() - Get HTTP information about the last response
- OAuth::setToken() - Sets the token and secret

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/oauth.fetch.php
