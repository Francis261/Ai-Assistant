# SoapParam::__construct

Source: https://devdocs.io/php/soapparam.construct

(PHP 5, PHP 7, PHP 8)

SoapParam::__construct — SoapParam constructor

### Description

Constructs a new SoapParam object.

### Parameters

The data to pass or return. This parameter can be passed directly as PHP value, but in this case it will be named as paramN and the SOAP service may not understand it.

The parameter name.

### Examples

Example #1 SoapParam::__construct() example

```
<?php
$client = new SoapClient(null,array('location' => "http://localhost/soap.php",
                                    'uri'      => "http://test-uri/"));
$client->SomeFunction(new SoapParam($a, "a"),
                      new SoapParam($b, "b"),
                      new SoapParam($c, "c"));
?>
```

### See Also

- SoapClient::__soapCall() - Calls a SOAP function
- SoapVar::__construct() - SoapVar constructor

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/soapparam.construct.php
