# SoapServer::getFunctions

Source: https://devdocs.io/php/soapserver.getfunctions

(PHP 5, PHP 7, PHP 8)

SoapServer::getFunctions — Returns list of defined functions

### Description

```
public SoapServer::getFunctions(): array
```

Returns a list of the defined functions in the SoapServer object. This method returns the list of all functions added by SoapServer::addFunction() or SoapServer::setClass().

### Parameters

This function has no parameters.

### Return Values

An array of the defined functions.

### Examples

Example #1 SoapServer::getFunctions() example

```
<?php
$server = new SoapServer(NULL, array("uri" => "http://test-uri"));
$server->addFunction(SOAP_FUNCTIONS_ALL);
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $server->handle();
} else {
  echo "This SOAP server can handle following functions: ";
  $functions = $server->getFunctions();
  foreach($functions as $func) {
    echo $func . "\n";
  }
}
?>
```

### See Also

- SoapServer::__construct() - SoapServer constructor
- SoapServer::addFunction() - Adds one or more functions to handle SOAP requests
- SoapServer::setClass() - Sets the class which handles SOAP requests

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/soapserver.getfunctions.php
