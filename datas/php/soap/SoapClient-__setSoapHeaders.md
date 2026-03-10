# SoapClient::__setSoapHeaders

Source: https://devdocs.io/php/soapclient.setsoapheaders

(PHP 5 >= 5.0.5, PHP 7, PHP 8)

SoapClient::__setSoapHeaders — Sets SOAP headers for subsequent calls

### Description

```
public SoapClient::__setSoapHeaders(SoapHeader|array|null $headers = null): bool
```

Defines headers to be sent along with the SOAP requests.

Note:

Calling this method will replace any previous values.

### Parameters

The headers to be set. It could be SoapHeader object or array of SoapHeader objects. If not specified or set to null, the headers will be deleted.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 SoapClient::__setSoapHeaders() example

```
<?php

$client = new SoapClient(null, array('location' => "http://localhost/soap.php",
                                     'uri'      => "http://test-uri/"));
$header = new SoapHeader('http://soapinterop.org/echoheader/', 
                            'echoMeStringRequest',
                            'hello world');

$client->__setSoapHeaders($header);

$client->__soapCall("echoVoid", null);
?>
```

Example #2 Set Multiple Headers

```
<?php

$client = new SoapClient(null, array('location' => "http://localhost/soap.php",
                                     'uri'      => "http://test-uri/"));
$headers = array();

$headers[] = new SoapHeader('http://soapinterop.org/echoheader/', 
                            'echoMeStringRequest',
                            'hello world');

$headers[] = new SoapHeader('http://soapinterop.org/echoheader/', 
                            'echoMeStringRequest',
                            'hello world again');

$client->__setSoapHeaders($headers);

$client->__soapCall("echoVoid", null);
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/soapclient.setsoapheaders.php
