# SoapClient::__getTypes

Source: https://devdocs.io/php/soapclient.gettypes

(PHP 5, PHP 7, PHP 8)

SoapClient::__getTypes — Returns a list of SOAP types

### Description

```
public SoapClient::__getTypes(): ?array
```

Returns an array of types described in the WSDL for the Web service.

Note:

This function only works in WSDL mode.

### Parameters

This function has no parameters.

### Return Values

The array of SOAP types, detailing all structures and types.

### Examples

Example #1 SoapClient::__getTypes() example

```
<?php
$client = new SoapClient('http://soap.amazon.com/schemas3/AmazonWebServices.wsdl');
var_dump($client->__getTypes());
?>
```

The above example will output:

```
array(88) {
  [0]=>
  string(30) "ProductLine ProductLineArray[]"
  [1]=>
  string(85) "struct ProductLine {
 string Mode;
 string RelevanceRank;
 ProductInfo ProductInfo;
}"
  [2]=>
  string(105) "struct ProductInfo {
 string TotalResults;
 string TotalPages;
 string ListName;
 DetailsArray Details;
}"
...
  [85]=>
  string(32) "ShortSummary ShortSummaryArray[]"
  [86]=>
  string(121) "struct GetTransactionDetailsRequest {
 string tag;
 string devtag;
 string key;
 OrderIdArray OrderIds;
 string locale;
}"
  [87]=>
  string(75) "struct GetTransactionDetailsResponse {
 ShortSummaryArray ShortSummaries;
}"
}
```

### See Also

- SoapClient::__construct() - SoapClient constructor

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/soapclient.gettypes.php
