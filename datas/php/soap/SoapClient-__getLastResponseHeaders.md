# SoapClient::__getLastResponseHeaders

Source: https://devdocs.io/php/soapclient.getlastresponseheaders

(PHP 5, PHP 7, PHP 8)

SoapClient::__getLastResponseHeaders — Returns the SOAP headers from the last response

### Description

```
public SoapClient::__getLastResponseHeaders(): ?string
```

Returns the SOAP headers from the last response.

Note:

This function only works if the SoapClient object was created with the trace option set to true.

### Parameters

This function has no parameters.

### Return Values

The last SOAP response headers.

### Examples

Example #1 SoapClient::__getLastResponse() example

```
<?php
$client = SoapClient("some.wsdl", array('trace' => 1));
$result = $client->SomeFunction();
echo "RESPONSE HEADERS:\n" . $client->__getLastResponseHeaders() . "\n";
?>
```

### See Also

- SoapClient::__getLastRequestHeaders() - Returns the SOAP headers from the last request
- SoapClient::__getLastRequest() - Returns last SOAP request
- SoapClient::__getLastResponse() - Returns last SOAP response

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/soapclient.getlastresponseheaders.php
