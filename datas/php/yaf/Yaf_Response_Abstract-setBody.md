# Yaf_Response_Abstract::setBody

Source: https://devdocs.io/php/yaf-response-abstract.setbody

(Yaf >=1.0.0)

Yaf_Response_Abstract::setBody — Set content to response

### Description

```
public Yaf_Response_Abstract::setBody(string $content, string $key = ?): bool
```

Set content to response

### Parameters

content string

the content key, you can set a content with a key, if you don't specific, then Yaf_Response_Abstract::DEFAULT_BODY will be used

Note:

this parameter is introduced as of 2.2.0

### Return Values

### Examples

Example #1 Yaf_Response_Abstract::setBody()example

```
<?php
$response = new Yaf_Response_Http();

$response->setBody("Hello")->setBody(" World", "footer");

print_r($response);
echo $response;
?>
```

The above example will output something similar to:

```
Yaf_Response_Http Object
(
    [_header:protected] => Array
        (
        )

    [_body:protected] => Array
        (
            [content] => Hello
            [footer] =>  World
        )

    [_sendheader:protected] => 1
    [_response_code:protected] => 200
)
Hello World
```

### See Also

- Yaf_Response_Abstract::getBody() - Retrieve a exists content
- Yaf_Response_Abstract::appendBody() - Append to response body
- Yaf_Response_Abstract::prependBody() - The prependBody purpose
- Yaf_Response_Abstract::clearBody() - Discard all exists response body

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/yaf-response-abstract.setbody.php
