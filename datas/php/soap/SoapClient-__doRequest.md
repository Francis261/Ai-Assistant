# SoapClient::__doRequest

Source: https://devdocs.io/php/soapclient.dorequest

(PHP 5, PHP 7, PHP 8)

SoapClient::__doRequest — Performs a SOAP request

### Description

```
public SoapClient::__doRequest(
 string $request,
 string $location,
 string $action,
 int $version,
 bool $oneWay = false
): ?string
```

Performs SOAP request over HTTP.

This method can be overridden in subclasses to implement different transport layers, perform additional XML processing or other purpose.

### Parameters

The XML SOAP request.

The URL to request.

The SOAP action.

The SOAP version.

If oneWay is set to true, this method returns nothing. Use this where a response is not expected.

### Return Values

The XML SOAP response.

### Changelog

### Examples

Example #1 SoapClient::__doRequest() example

```
<?php

function Add($x, $y)
{
    return $x + $y;
}

class LocalSoapClient extends SoapClient
{
    private $server;

    public function __construct($wsdl, $options)
    {
        parent::__construct($wsdl, $options);
        $this->server = new SoapServer($wsdl, $options);
        $this->server->addFunction('Add');
    }

    public function __doRequest(
        $request,
        $location,
        $action,
        $version,
        $one_way = false,
    ): ?string {
        ob_start();
        $this->server->handle($request);
        $response = ob_get_contents();
        ob_end_clean();

        return $response;
    }
}

$x = new LocalSoapClient(
    null,
    [
        'location' => 'test://',
        'uri' => 'http://testuri.org',
    ]
);

var_dump($x->Add(3, 4));

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/soapclient.dorequest.php
