# Yar_Client::__construct

Source: https://devdocs.io/php/yar-client.construct

(PECL yar >= 1.0.0)

Yar_Client::__construct — Create a client

### Description

```
final public Yar_Client::__construct(string $url, array $options = ?)
```

Create a Yar_Client to a Yar_Server.

### Parameters

Yar Server URL.

### Return Values

Yar_Client instance.

### Examples

Example #1 Yar_Client::__construct() example

```
<?php
$client = new Yar_Client("http://host/api/");
?>
```

The above example will output something similar to:

### See Also

- Yar_Client::__call() - Call service
- Yar_Client::setOpt() - Set calling contexts

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/yar-client.construct.php
