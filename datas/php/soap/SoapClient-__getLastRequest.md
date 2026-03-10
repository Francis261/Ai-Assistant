# SoapClient::__getLastRequest

Source: https://devdocs.io/php/soapclient.getlastrequest

(PHP 5, PHP 7, PHP 8)

SoapClient::__getLastRequest — Returns last SOAP request

### Description

```
public SoapClient::__getLastRequest(): ?string
```

Returns the XML sent in the last SOAP request.

Note:

This method works only if the SoapClient object was created with the trace option set to true.

### Parameters

This function has no parameters.

### Return Values

The last SOAP request, as an XML string.

### Examples

Example #1 SoapClient::__getLastRequest() example

```
<?php
$client = new SoapClient("some.wsdl", array('trace' => 1));
$result = $client->SomeFunction();
echo "REQUEST:\n" . $client->__getLastRequest() . "\n";
?>
```

### See Also

- SoapClient::__getLastRequestHeaders() - Returns the SOAP headers from the last request
- SoapClient::__getLastResponse() - Returns last SOAP response
- SoapClient::__getLastResponseHeaders() - Returns the SOAP headers from the last response

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/soapclient.getlastrequest.php
