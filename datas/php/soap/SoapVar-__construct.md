# SoapVar::__construct

Source: https://devdocs.io/php/soapvar.construct

(PHP 5, PHP 7, PHP 8)

SoapVar::__construct — SoapVar constructor

### Description

Constructs a new SoapVar object.

### Parameters

The data to pass or return.

The encoding ID, one of the XSD_... constants.

The type name.

The type namespace.

The XML node name.

The XML node namespace.

### Changelog

### Examples

Example #1 SoapVar::__construct() example

```
<?php
class SOAPStruct {
    function SOAPStruct($s, $i, $f)
    {
        $this->varString = $s;
        $this->varInt = $i;
        $this->varFloat = $f;
    }
}
$client = new SoapClient(null, array('location' => "http://localhost/soap.php",
                                     'uri'      => "http://test-uri/"));
$struct = new SOAPStruct('arg', 34, 325.325);
$soapstruct = new SoapVar($struct, SOAP_ENC_OBJECT, "SOAPStruct", "http://soapinterop.org/xsd");
$client->echoStruct(new SoapParam($soapstruct, "inputStruct"));
?>
```

### See Also

- SoapClient::__soapCall() - Calls a SOAP function
- SoapParam::__construct() - SoapParam constructor

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/soapvar.construct.php
