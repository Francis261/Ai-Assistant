# Yaf_Request_Abstract::setControllerName

Source: https://devdocs.io/php/yaf-request-abstract.setcontrollername

(Yaf >=1.0.0)

Yaf_Request_Abstract::setControllerName — Set controller name

### Description

```
public Yaf_Request_Abstract::setControllerName(string $controller, bool $format_name = true): void
```

set controller name to request, this is usually used by custom router to set route result controller name.

### Parameters

string, controller name, this should be in camel style, like "Index" or "Foo_Bar"

this is introduced in Yaf 3.2.0, by default Yaf will format the name into camel mode, if this is set to false , Yaf will set the original name to request.

### Return Values

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/yaf-request-abstract.setcontrollername.php
