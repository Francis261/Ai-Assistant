# OAuth::getLastResponseInfo

Source: https://devdocs.io/php/oauth.getlastresponseinfo

(PECL OAuth >= 0.99.1)

OAuth::getLastResponseInfo — Get HTTP information about the last response

### Description

```
public OAuth::getLastResponseInfo(): array
```

Get HTTP information about the last response.

### Parameters

This function has no parameters.

### Return Values

Returns an array containing the response information for the last request. Constants from curl_getinfo() may be used.

### See Also

- OAuth::fetch() - Fetch an OAuth protected resource
- OAuth::getLastResponse() - Get the last response

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/oauth.getlastresponseinfo.php
