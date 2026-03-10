# Yaf_Response_Abstract::response

Source: https://devdocs.io/php/yaf-response-abstract.response

(Yaf >=1.0.0)

Yaf_Response_Abstract::response — Send response

### Description

```
public Yaf_Response_Abstract::response(): void
```

send response

### Parameters

This function has no parameters.

### Return Values

### Examples

Example #1 Yaf_Response_Abstract::response()example

```
<?php
$response = new Yaf_Response_Http();

$response->setBody("Hello")->setBody(" World", "footer");

$response->response();
?>
```

The above example will output something similar to:

```
Hello World
```

### See Also

- Yaf_Response_Abstract::setBody() - Set content to response
- Yaf_Response_Abstract::clearBody() - Discard all exists response body

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/yaf-response-abstract.response.php
