# SoapServer::__construct

Source: https://devdocs.io/php/soapserver.construct

(PHP 5, PHP 7, PHP 8)

SoapServer::__construct — SoapServer constructor

### Description

This constructor allows the creation of SoapServer objects in WSDL or non-WSDL mode.

### Parameters

To use the SoapServer in WSDL mode, pass the URI of a WSDL file. Otherwise, pass null and set the uri option to the target namespace for the server.

Allow setting a default SOAP version (soap_version), internal character encoding (encoding), and actor URI (actor).

The classmap option can be used to map some WSDL types to PHP classes. This option must be an array with WSDL types as keys and names of PHP classes as values.

The typemap option is an array of type mappings. Type mapping is an array with keys type_name, type_ns (namespace URI), from_xml (callback accepting one string parameter) and to_xml (callback accepting one object parameter).

The cache_wsdl option is one of WSDL_CACHE_NONE, WSDL_CACHE_DISK, WSDL_CACHE_MEMORY or WSDL_CACHE_BOTH.

There is also a features option which can be set to SOAP_WAIT_ONE_WAY_CALLS, SOAP_SINGLE_ELEMENT_ARRAYS, SOAP_USE_XSI_ARRAY_TYPE.

The send_errors option can be set to false to sent a generic error message ("Internal error") instead of the specific error message sent otherwise.

### Examples

Example #1 SoapServer::__construct() example

```
<?php

$server = new SoapServer("some.wsdl");

$server = new SoapServer("some.wsdl", array('soap_version' => SOAP_1_2));

$server = new SoapServer("some.wsdl", array('actor' => "http://example.org/ts-tests/C"));

$server = new SoapServer("some.wsdl", array('encoding'=>'ISO-8859-1'));

$server = new SoapServer(null, array('uri' => "http://test-uri/"));

class MyBook {
    public $title;
    public $author;
}

$server = new SoapServer("books.wsdl", array('classmap' => array('book' => "MyBook")));

?>
```

### See Also

- SoapClient::__construct() - SoapClient constructor

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/soapserver.construct.php
