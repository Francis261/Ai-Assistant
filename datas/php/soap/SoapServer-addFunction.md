# SoapServer::addFunction

Source: https://devdocs.io/php/soapserver.addfunction

(PHP 5, PHP 7, PHP 8)

SoapServer::addFunction — Adds one or more functions to handle SOAP requests

### Description

```
public SoapServer::addFunction(array|string|int $functions): void
```

Exports one or more functions for remote clients

### Parameters

To export one function, pass the function name into this parameter as a string.

To export several functions, pass an array of function names.

To export all the functions, pass a special constant SOAP_FUNCTIONS_ALL.

Note:

functions must receive all input arguments in the same order as defined in the WSDL file (They should not receive any output parameters as arguments) and return one or more values. To return several values they must return an array with named output parameters.

### Return Values

No value is returned.

### Examples

Example #1 SoapServer::addFunction() example

```
<?php

function echoString($inputString)
{
    return $inputString;
}

$server->addFunction("echoString");

function echoTwoStrings($inputString1, $inputString2)
{
    return array("outputString1" => $inputString1,
                 "outputString2" => $inputString2);
}
$server->addFunction(array("echoString", "echoTwoStrings"));

$server->addFunction(SOAP_FUNCTIONS_ALL);

?>
```

### See Also

- SoapServer::__construct() - SoapServer constructor
- SoapServer::setClass() - Sets the class which handles SOAP requests

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/soapserver.addfunction.php
