# SoapClient::__getFunctions

Source: https://devdocs.io/php/soapclient.getfunctions

(PHP 5, PHP 7, PHP 8)

SoapClient::__getFunctions — Returns list of available SOAP functions

### Description

```
public SoapClient::__getFunctions(): ?array
```

Returns an array of functions described in the WSDL for the Web service.

Note:

This function only works in WSDL mode.

### Parameters

This function has no parameters.

### Return Values

The array of SOAP function prototypes, detailing the return type, the function name and parameter types.

### Examples

Example #1 SoapClient::__getFunctions() example

```
<?php
$client = new SoapClient('http://soap.amazon.com/schemas3/AmazonWebServices.wsdl');
var_dump($client->__getFunctions());
?>
```

The above example will output:

```
array(26) {
  [0]=>
  string(70) "ProductInfo KeywordSearchRequest(KeywordRequest $KeywordSearchRequest)"
  [1]=>
  string(79) "ProductInfo TextStreamSearchRequest(TextStreamRequest $TextStreamSearchRequest)"
  [2]=>
  string(64) "ProductInfo PowerSearchRequest(PowerRequest $PowerSearchRequest)"
...
  [23]=>
  string(107) "ShoppingCart RemoveShoppingCartItemsRequest(RemoveShoppingCartItemsRequest $RemoveShoppingCartItemsRequest)"
  [24]=>
  string(107) "ShoppingCart ModifyShoppingCartItemsRequest(ModifyShoppingCartItemsRequest $ModifyShoppingCartItemsRequest)"
  [25]=>
  string(118) "GetTransactionDetailsResponse GetTransactionDetailsRequest(GetTransactionDetailsRequest $GetTransactionDetailsRequest)"
}
```

### See Also

- SoapClient::__construct() - SoapClient constructor

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/soapclient.getfunctions.php
