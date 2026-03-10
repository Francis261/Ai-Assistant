# Yaf_Response_Abstract::appendBody

Source: https://devdocs.io/php/yaf-response-abstract.appendbody

(Yaf >=1.0.0)

Yaf_Response_Abstract::appendBody — Append to response body

### Description

```
public Yaf_Response_Abstract::appendBody(string $content, string $key = ?): bool
```

Append a content to a exists content block

### Parameters

content string

the content key, you can set a content with a key, if you don't specific, then Yaf_Response_Abstract::DEFAULT_BODY will be used

Note:

this parameter is introduced as of 2.2.0

### Return Values

bool

### Examples

Example #1 Yaf_Response_Abstract::appendBody()example

```
<?php
$response = new Yaf_Response_Http();

$response->setBody("Hello")->appendBody(" World");

echo $response;
?>
```

The above example will output something similar to:

```
Hello World
```

### See Also

- Yaf_Config_Ini
- Yaf_Response_Abstract::getBody() - Retrieve a exists content
- Yaf_Response_Abstract::setBody() - Set content to response
- Yaf_Response_Abstract::prependBody() - The prependBody purpose
- Yaf_Response_Abstract::clearBody() - Discard all exists response body

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/yaf-response-abstract.appendbody.php
