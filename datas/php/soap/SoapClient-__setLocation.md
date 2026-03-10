# SoapClient::__setLocation

Source: https://devdocs.io/php/soapclient.setlocation

(PHP 5 >= 5.0.4, PHP 7, PHP 8)

SoapClient::__setLocation — Sets the location of the Web service to use

### Description

```
public SoapClient::__setLocation(?string $location = null): ?string
```

Sets the endpoint URL that will be touched by following SOAP requests. This is equivalent to specifying the location option when constructing the SoapClient.

Note:

Calling this method is optional. The SoapClient uses the endpoint from the WSDL file by default.

### Parameters

The new endpoint URL.

### Return Values

The old endpoint URL.

### Changelog

### Examples

Example #1 SoapClient::__setLocation() example

```
<?php
$client = new SoapClient('http://example.com/webservice.php?wsdl');

$client->__setLocation('http://www.somethirdparty.com');

$old_location = $client->__setLocation(); // unsets the location option

echo $old_location;

?>
```

The above example will output something similar to:

```
http://www.somethirdparty.com
```

### See Also

- SoapClient::__construct() - SoapClient constructor

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/soapclient.setlocation.php
