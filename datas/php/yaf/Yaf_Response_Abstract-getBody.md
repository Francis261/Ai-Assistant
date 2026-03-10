# Yaf_Response_Abstract::getBody

Source: https://devdocs.io/php/yaf-response-abstract.getbody

(Yaf >=1.0.0)

Yaf_Response_Abstract::getBody — Retrieve a exists content

### Description

```
public Yaf_Response_Abstract::getBody(string $key = ?): mixed
```

Retrieve a exists content

### Parameters

the content key, if you don't specific, then Yaf_Response_Abstract::DEFAULT_BODY will be used. if you pass in a null, then all contents will be returned as a array

Note:

this parameter is introduced as of 2.2.0

### Return Values

### Examples

Example #1 Yaf_Response_Abstract::getBody()example

```
<?php
$response = new Yaf_Response_Http();

$response->setBody("Hello")->setBody(" World", "footer");

var_dump($response->getBody()); //default 
var_dump($response->getBody(Yaf_Response_Abstract::DEFAULT_BODY)); //same as above
var_dump($response->getBody("footer"));
var_dump($response->getBody(NULL)); //get all
?>
```

The above example will output something similar to:

```
string(5) "Hello"
string(5) "Hello"
string(6) " World"
array(2) {
  ["content"]=>
  string(5) "Hello"
  ["footer"]=>
  string(6) " World"
}
```

### See Also

- Yaf_Response_Abstract::setBody() - Set content to response
- Yaf_Response_Abstract::appendBody() - Append to response body
- Yaf_Response_Abstract::prependBody() - The prependBody purpose
- Yaf_Response_Abstract::clearBody() - Discard all exists response body

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/yaf-response-abstract.getbody.php
