# SoapServer::__getLastResponse

Source: https://devdocs.io/php/soapserver.getlastresponse

(PHP 8 >= 8.4)

SoapServer::__getLastResponse — Returns last SOAP response

### Description

```
public SoapServer::__getLastResponse(): ?string
```

Returns the XML sent in the last SOAP response.

Note: This method works only if the SoapServer object was created with the trace option set to true.

### Parameters

This function has no parameters.

### Return Values

The last SOAP response, as an XML string.

### Examples

Example #1 SoapServer::__getLastResponse() example

```
<?php
$server = SoapServer("some.wsdl", ["trace" => 1]);
$server->handle();
echo "Response:\n" . $server->__getLastResponse() . "\n";
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/soapserver.getlastresponse.php
