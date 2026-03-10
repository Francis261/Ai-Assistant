# SoapClient::__call

Source: https://devdocs.io/php/soapclient.call

(PHP 5, PHP 7, PHP 8)

SoapClient::__call — Calls a SOAP function (deprecated)

### Description

```
public SoapClient::__call(string $name, array $args): mixed
```

Calling this method directly is deprecated. Usually, SOAP functions can be called as methods of the SoapClient object; in situations where this is not possible or additional options are needed, use SoapClient::__soapCall().

### Parameters

The name of the SOAP function to call.

An array of the arguments to pass to the function. This can be either an ordered or an associative array. Note that most SOAP servers require parameter names to be provided, in which case this must be an associative array.

### Return Values

SOAP functions may return one, or multiple values. If only one value is returned by the SOAP function, the return value will be a scalar. If multiple values are returned, an associative array of named output parameters is returned instead.

On error, if the SoapClient object was constructed with the exceptions option set to false, a SoapFault object will be returned.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/soapclient.call.php
