# SoapFault::__construct

Source: https://devdocs.io/php/soapfault.construct

(PHP 5, PHP 7, PHP 8)

SoapFault::__construct — SoapFault constructor

### Description

This class is used to send SOAP fault responses from the PHP handler. faultcode, faultstring, faultactor and detail are standard elements of a SOAP Fault.

### Parameters

The error code of the SoapFault.

The error message of the SoapFault.

A string identifying the actor that caused the error.

More details about the cause of the error.

Can be used to select the proper fault encoding from WSDL.

Can be used during SOAP header handling to report an error in the response header.

### Examples

Example #1 Some examples

```
<?php
function test($x)
{
    return new SoapFault("Server", "Some error message");
}

$server = new SoapServer(null, array('uri' => "http://test-uri/"));
$server->addFunction("test");
$server->handle();
?>
```

It is possible to use PHP exception mechanism to throw SOAP Fault.

Example #2 Some examples

```
<?php
function test($x)
{
    throw new SoapFault("Server", "Some error message");
}

$server = new SoapServer(null, array('uri' => "http://test-uri/"));
$server->addFunction("test");
$server->handle();
?>
```

### See Also

- SoapServer::fault() - Issue SoapServer fault indicating an error
- is_soap_fault() - Checks if a SOAP call has failed

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/soapfault.construct.php
