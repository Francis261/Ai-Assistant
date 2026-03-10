# SoapServer::setClass

Source: https://devdocs.io/php/soapserver.setclass

(PHP 5, PHP 7, PHP 8)

SoapServer::setClass — Sets the class which handles SOAP requests

### Description

```
public SoapServer::setClass(string $class, mixed ...$args): void
```

Exports all methods from specified class.

The object can be made persistent across request for a given PHP session with the SoapServer::setPersistence() method.

### Parameters

The name of the exported class.

These optional parameters will be passed to the default class constructor during object creation.

### Return Values

No value is returned.

### See Also

- SoapServer::__construct() - SoapServer constructor
- SoapServer::addFunction() - Adds one or more functions to handle SOAP requests
- SoapServer::setPersistence() - Sets SoapServer persistence mode

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/soapserver.setclass.php
