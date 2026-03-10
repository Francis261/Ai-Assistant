# Yaf_Request_Http::getQuery

Source: https://devdocs.io/php/yaf-request-http.getquery

(Yaf >=1.0.0)

Yaf_Request_Http::getQuery — Fetch a query parameter

### Description

```
public Yaf_Request_Http::getQuery(string $name, string $default = ?): mixed
```

Retrieve GET variable

### Parameters

the variable name

if this parameter is provide, this will be returned if the variable can not be found

### Return Values

### See Also

- Yaf_Request_Http::get() - Retrieve variable from client
- Yaf_Request_Http::getPost() - Retrieve POST variable
- Yaf_Request_Http::getCookie() - Retrieve Cookie variable
- Yaf_Request_Http::getRaw() - Retrieve Raw request body
- Yaf_Request_Abstract::getServer() - Retrieve SERVER variable
- Yaf_Request_Abstract::getParam() - Retrieve calling parameter

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/yaf-request-http.getquery.php
