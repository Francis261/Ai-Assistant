# SoapServer::fault

Source: https://devdocs.io/php/soapserver.fault

(PHP 5, PHP 7, PHP 8)

SoapServer::fault — Issue SoapServer fault indicating an error

### Description

```
public SoapServer::fault(
 string $code,
 string $string,
 string $actor = "",
 mixed $details = null,
 string $name = ""
): void
```

Sends a response to the client of the current request indicating an error.

Note:

This can only be called when handling a request.

### Parameters

The error code to return

A brief description of the error

A string identifying the actor that caused the fault.

More details of the fault

The name of the fault. This can be used to select a name from a WSDL file.

### Return Values

No value is returned.

### See Also

- SoapFault::__construct() - SoapFault constructor

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/soapserver.fault.php
