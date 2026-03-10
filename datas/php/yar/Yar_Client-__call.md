# Yar_Client::__call

Source: https://devdocs.io/php/yar-client.call

(PECL yar >= 1.0.0)

Yar_Client::__call — Call service

### Description

```
public Yar_Client::__call(string $method, array $parameters): void
```

Issue a call to remote RPC method.

### Parameters

Remote RPC method name.

Parameters.

### Return Values

### Examples

Example #1 Yar_Client::__call() example

```
<?php

$client = new Yar_Client("http://host/api/");

/* call remote service */
$result = $client->some_method("parameter");
?>
```

The above example will output something similar to:

### See Also

- Yar_Client::setOpt() - Set calling contexts

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/yar-client.call.php
