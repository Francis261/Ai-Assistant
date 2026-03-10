# Yaf_Request_Abstract::setActionName

Source: https://devdocs.io/php/yaf-request-abstract.setactionname

(Yaf >=1.0.0)

Yaf_Request_Abstract::setActionName — Set action name

### Description

```
public Yaf_Request_Abstract::setActionName(string $action, bool $format_name = true): void
```

set action name to request, this is usually used by custom router to set route result controller name.

### Parameters

string, action name, it should in lower case style, like "index" or "foo_bar"

this is introduced in Yaf 3.2.0, by default Yaf will format the name into lower case style, if this is set to false , Yaf will set the original name to request.

### Return Values

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/yaf-request-abstract.setactionname.php
