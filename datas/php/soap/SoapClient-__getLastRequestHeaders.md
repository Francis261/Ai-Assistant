# SoapClient::__getLastRequestHeaders

Source: https://devdocs.io/php/soapclient.getlastrequestheaders

(PHP 5, PHP 7, PHP 8)

SoapClient::__getLastRequestHeaders — Returns the SOAP headers from the last request

### Description

```
public SoapClient::__getLastRequestHeaders(): ?string
```

Returns the SOAP headers from the last request.

Note:

This function only works if the SoapClient object was created with the trace option set to true.

### Parameters

This function has no parameters.

### Return Values

The last SOAP request headers.

### Examples

Example #1 SoapClient::__getLastRequestHeaders() example

```
<?php
$client = SoapClient("some.wsdl", array('trace' => 1));
$result = $client->SomeFunction();
echo "REQUEST HEADERS:\n" . $client->__getLastRequestHeaders() . "\n";
?>
```

### See Also

- SoapClient::__getLastResponseHeaders() - Returns the SOAP headers from the last response
- SoapClient::__getLastRequest() - Returns last SOAP request
- SoapClient::__getLastResponse() - Returns last SOAP response

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/soapclient.getlastrequestheaders.php
