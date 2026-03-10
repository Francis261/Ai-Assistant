# Yar_Concurrent_Client::call

Source: https://devdocs.io/php/yar-concurrent-client.call

(PECL yar >= 1.0.0)

Yar_Concurrent_Client::call — Register a concurrent call

### Description

```
public static Yar_Concurrent_Client::call(
 string $uri,
 string $method,
 array $parameters = ?,
 callable $callback = ?,
 callable $error_callback = ?,
 array $options = ?
): int
```

Register a RPC call, but won't sent it immediately, it will be send while further call to Yar_Concurrent_Client::loop()

### Parameters

The RPC server URI(http, tcp)

Service name(aka the method name)

Parameters

A function callback, which will be called while the response return.

### Return Values

An unique id, can be used to identified which call it is.

### Examples

Example #1 Yar_Concurrent_Client::call() example

```
<?php
function callback($retval, $callinfo) {
     var_dump($retval);
}

function error_callback($type, $error, $callinfo) {
    error_log($error);
}

Yar_Concurrent_Client::call("http://host/api/", "some_method", array("parameters"), "callback");
Yar_Concurrent_Client::call("http://host/api/", "some_method", array("parameters"));   // if the callback is not specificed, 
                                                                               // callback in loop will be used
Yar_Concurrent_Client::call("http://host/api/", "some_method", array("parameters"), "callback", NULL, array(YAR_OPT_PACKAGER => "json"));
                                                                               //this server accept json packager
Yar_Concurrent_Client::call("http://host/api/", "some_method", array("parameters"), "callback", NULL, array(YAR_OPT_TIMEOUT=>1));
                                                                               //custom timeout 

//The requests are not sent yet
?>
```

The above example will output something similar to:

### See Also

- Yar_Concurrent_Client::loop() - Send all calls
- Yar_Concurrent_Client::reset() - Clean all registered calls
- Yar_Server::__construct() - Register a server
- Yar_Server::handle() - Start RPC Server

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/yar-concurrent-client.call.php
