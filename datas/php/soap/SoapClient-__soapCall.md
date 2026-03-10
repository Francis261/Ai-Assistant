# SoapClient::__soapCall

Source: https://devdocs.io/php/soapclient.soapcall

(PHP 5, PHP 7, PHP 8)

SoapClient::__soapCall — Calls a SOAP function

### Description

```
public SoapClient::__soapCall(
 string $name,
 array $args,
 ?array $options = null,
 SoapHeader|array|null $inputHeaders = null,
 array &$outputHeaders = null
): mixed
```

This is a low level API function that is used to make a SOAP call. Usually, in WSDL mode, SOAP functions can be called as methods of the SoapClient object. This method is useful in non-WSDL mode when soapaction is unknown, uri differs from the default or when sending and/or receiving SOAP Headers.

On error, a call to a SOAP function can cause PHP to throw exceptions or return a SoapFault object if exceptions are disabled. To check if the function call failed to catch the SoapFault exceptions, check the result with is_soap_fault().

### Parameters

The name of the SOAP function to call.

An array of the arguments to pass to the function. This can be either an ordered or an associative array. Note that most SOAP servers require parameter names to be provided, in which case this must be an associative array.

An associative array of options to pass to the client.

The location option is the URL of the remote Web service.

The uri option is the target namespace of the SOAP service.

The soapaction option is the action to call.

An array of headers to be sent along with the SOAP request.

If supplied, this array will be filled with the headers from the SOAP response.

### Return Values

SOAP functions may return one, or multiple values. If only one value is returned by the SOAP function, the return value will be a scalar. If multiple values are returned, an associative array of named output parameters is returned instead.

On error, if the SoapClient object was constructed with the exceptions option set to false, a SoapFault object will be returned.

### Examples

Example #1 SoapClient::__soapCall() example

```
<?php

$client = new SoapClient("some.wsdl");
$client->SomeFunction($a, $b, $c);

$client->__soapCall("SomeFunction", array($a, $b, $c));
$client->__soapCall("SomeFunction", array($a, $b, $c), NULL,
                    new SoapHeader(), $output_headers);

$client = new SoapClient(null, array('location' => "http://localhost/soap.php",
                                     'uri'      => "http://test-uri/"));
$client->SomeFunction($a, $b, $c);
$client->__soapCall("SomeFunction", array($a, $b, $c));
$client->__soapCall("SomeFunction", array($a, $b, $c),
                    array('soapaction' => 'some_action',
                          'uri'        => 'some_uri'));
?>
```

### See Also

- SoapClient::__construct() - SoapClient constructor
- SoapParam::__construct() - SoapParam constructor
- SoapVar::__construct() - SoapVar constructor
- SoapHeader::__construct() - SoapHeader constructor
- SoapFault::__construct() - SoapFault constructor
- is_soap_fault() - Checks if a SOAP call has failed

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/soapclient.soapcall.php
