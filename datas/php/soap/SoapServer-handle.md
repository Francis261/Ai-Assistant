# SoapServer::handle

Source: https://devdocs.io/php/soapserver.handle

(PHP 5, PHP 7, PHP 8)

SoapServer::handle — Handles a SOAP request

### Description

```
public SoapServer::handle(?string $request = null): void
```

Processes a SOAP request, calls necessary functions, and sends a response back.

### Parameters

The SOAP request. If this argument is omitted, the request is assumed to be in the raw POST data of the HTTP request.

### Return Values

No value is returned.

### Changelog

### Examples

Example #1 SoapServer::handle() example

```
<?php
function test($x)
{
    return $x;
}

$server = new SoapServer(null, array('uri' => "http://test-uri/"));
$server->addFunction("test");
$server->handle();
?>
```

### See Also

- SoapServer::__construct() - SoapServer constructor

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/soapserver.handle.php
