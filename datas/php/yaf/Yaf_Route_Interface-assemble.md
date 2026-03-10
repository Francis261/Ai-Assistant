# Yaf_Route_Interface::assemble

Source: https://devdocs.io/php/yaf-route-interface.assemble

(Yaf >=2.3.0)

Yaf_Route_Interface::assemble — Assemble a request

### Description

```
abstract public Yaf_Route_Interface::assemble(array $info, array $query = ?): string
```

this method returns a url according to the argument info, and append query strings to the url according to the argument query.

a route should implement this method according to its own route rules, and do a reverse progress.

### Parameters

### Return Values

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/yaf-route-interface.assemble.php
