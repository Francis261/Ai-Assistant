# Yaf_Request_Http::isXmlHttpRequest

Source: https://devdocs.io/php/yaf-request-http.isxmlhttprequest

(Yaf >=1.0.0)

Yaf_Request_Http::isXmlHttpRequest — Determin if request is Ajax Request

### Description

```
public Yaf_Request_Http::isXmlHttpRequest(): bool
```

Check the request whether it is a Ajax Request.

Note:

This method depends on the request header: HTTP_X_REQUESTED_WITH, some Javascript library doesn't set this header while doing Ajax request

### Parameters

This function has no parameters.

### Return Values

boolean

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/yaf-request-http.isxmlhttprequest.php
