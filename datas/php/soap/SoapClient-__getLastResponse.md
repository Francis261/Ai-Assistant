# SoapClient::__getLastResponse

Source: https://devdocs.io/php/soapclient.getlastresponse

(PHP 5, PHP 7, PHP 8)

SoapClient::__getLastResponse — Returns last SOAP response

### Description

```
public SoapClient::__getLastResponse(): ?string
```

Returns the XML received in the last SOAP response.

Note:

This method works only if the SoapClient object was created with the trace option set to true.

### Parameters

This function has no parameters.

### Return Values

The last SOAP response, as an XML string.

### Examples

Example #1 SoapClient::__getLastResponse() example

```
<?php
$client = SoapClient("some.wsdl", array('trace' => 1));
$result = $client->SomeFunction();
echo "Response:\n" . $client->__getLastResponse() . "\n";
?>
```

### See Also

- SoapClient::__getLastResponseHeaders() - Returns the SOAP headers from the last response
- SoapClient::__getLastRequest() - Returns last SOAP request
- SoapClient::__getLastRequestHeaders() - Returns the SOAP headers from the last request

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/soapclient.getlastresponse.php
