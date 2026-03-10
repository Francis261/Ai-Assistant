# SoapClient::__setCookie

Source: https://devdocs.io/php/soapclient.setcookie

(PHP 5 >= 5.0.4, PHP 7, PHP 8)

SoapClient::__setCookie — Defines a cookie for SOAP requests

### Description

```
public SoapClient::__setCookie(string $name, ?string $value = null): void
```

Defines a cookie to be sent along with the SOAP requests.

Note:

Calling this method will affect all following calls to SoapClient methods.

### Parameters

The name of the cookie.

The value of the cookie. If not specified, the cookie will be deleted.

### Return Values

No value is returned.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/soapclient.setcookie.php
