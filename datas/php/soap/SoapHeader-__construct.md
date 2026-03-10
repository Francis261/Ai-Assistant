# SoapHeader::__construct

Source: https://devdocs.io/php/soapheader.construct

(PHP 5, PHP 7, PHP 8)

SoapHeader::__construct — SoapHeader constructor

### Description

Constructs a new SoapHeader object.

### Parameters

The namespace of the SOAP header element.

The name of the SoapHeader object.

A SOAP header's content. It can be a PHP value or a SoapVar object.

Value of the mustUnderstand attribute of the SOAP header element.

Value of the actor attribute of the SOAP header element.

### Examples

Example #1 SoapHeader::__construct() example

```
<?php
$client = new SoapClient(null, array('location' => "http://localhost/soap.php",
                                     'uri'      => "http://test-uri/"));
$client->__soapCall("echoVoid", null, null,
                new SoapHeader('http://soapinterop.org/echoheader/',
                               'echoMeStringRequest',
                               'hello world'));
?>
```

### See Also

- SoapClient::__soapCall() - Calls a SOAP function
- SoapVar::__construct() - SoapVar constructor
- SoapParam::__construct() - SoapParam constructor
- SoapServer::addSoapHeader() - Add a SOAP header to the response

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/soapheader.construct.php
