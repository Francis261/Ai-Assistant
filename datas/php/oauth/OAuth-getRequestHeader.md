# OAuth::getRequestHeader

Source: https://devdocs.io/php/oauth.getrequestheader

(No version information available, might only be in Git)

OAuth::getRequestHeader — Generate OAuth header string signature

### Description

```
public OAuth::getRequestHeader(string $http_method, string $url, mixed $extra_parameters = ?): string|false
```

Generate OAuth header string signature based on the final HTTP method, URL and a string/array of parameters

### Parameters

HTTP method for request.

URL for request.

String or array of additional parameters.

### Return Values

A string containing the generated request header or false on failure

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/oauth.getrequestheader.php
