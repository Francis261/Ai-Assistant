# Yar_Client::setOpt

Source: https://devdocs.io/php/yar-client.setopt

(PECL yar >= 1.0.0)

Yar_Client::setOpt — Set calling contexts

### Description

```
public Yar_Client::setOpt(int $name, mixed $value): Yar_Client|false
```

### Parameters

it can be: YAR_OPT_PACKAGER, YAR_OPT_PERSISTENT (Need server support), YAR_OPT_TIMEOUT, YAR_OPT_CONNECT_TIMEOUT, YAR_OPT_HEADER (as of 2.0.4), YAR_OPT_PROXY (as of 2.2.0)

### Return Values

Returns $this on success or false on failure.

### Examples

Example #1 Yar_Client::setOpt() example

```
<?php

$cient = new Yar_Client("http://host/api/");

//Set timeout to 1s
$client->SetOpt(YAR_OPT_CONNECT_TIMEOUT, 1000);

//Set packager to JSON
$client->SetOpt(YAR_OPT_PACKAGER, "json");

//Set Custom headers
$client->SetOpt(YAR_OPT_HEADER, array("hr1: val1", "hd2: val2"));

// Set Http Proxy
$client->SetOpt(YAR_OPT_PROXY, "127.0.0.1:8888");

/* call remote service */
$result = $client->some_method("parameter");
?>
```

The above example will output something similar to:

### See Also

- Yar_Client::__call() - Call service

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/yar-client.setopt.php
