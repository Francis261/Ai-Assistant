# Yaf_Request_Abstract::setBaseUri

Source: https://devdocs.io/php/yaf-request-abstract.setbaseuri

(Yaf >=1.0.0)

Yaf_Request_Abstract::setBaseUri — Set base URI

### Description

```
public Yaf_Request_Abstract::setBaseUri(string $uir): bool
```

Set base URI, base URI is used when doing routing, in routing phase request URI is used to route a request, while base URI is used to skip the leadding part(base URI) of request URI. That is, if comes a request with request URI a/b/c, then if you set base URI to "a/b", only "/c" will be used in routing phase.

Note:

generally, you don't need to set this, Yaf will determine it automatically.

### Parameters

base URI

### Return Values

bool

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/yaf-request-abstract.setbaseuri.php
