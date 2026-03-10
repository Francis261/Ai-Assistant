# Yar_Concurrent_Client::loop

Source: https://devdocs.io/php/yar-concurrent-client.loop

(PECL yar >= 1.0.0)

Yar_Concurrent_Client::loop — Send all calls

### Description

```
public static Yar_Concurrent_Client::loop(callable $callback = ?, callable $error_callback = ?): bool
```

Send all registed remote RPC calls.

### Parameters

If this callback is set, then Yar will call this callback after all calls are sent and before any response return, with a $callinfo NULL.

Then, if user didn't specify callback when registering concurrent call, this callback will be used to handle response, otherwise, the callback specified while registering will be used.

If this callback is set, then Yar will call this callback while error occurred.

### Return Values

### Examples

Example #1 Yar_Concurrent_Client::loop() example

```
<?php
function callback($retval, $callinfo) {
     if ($callinfo == NULL) {
        echo "Now, all requests are sent, and no any response available\n";
     } else {
        echo "This is a remote call response, the method name is", $callinfo["method"], 
             ". calling sequence is " , $callinfo["sequence"] , "\n";
        var_dump($retval);
     }
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

Yar_Concurrent_Client::loop("callback", "error_callback"); //send the requests, 
                                                           //the error_callback is optional
?>
```

The above example will output something similar to:

```
Now, all requests are sent, and no any response available
This is a remote call response, the method name issome_method. calling sequence is 4
string(11) "some_method"
This is a remote call response, the method name issome_method. calling sequence is 1
string(11) "some_method"
This is a remote call response, the method name issome_method. calling sequence is 2
string(11) "some_method"
This is a remote call response, the method name issome_method. calling sequence is 3
string(11) "some_method"
```

### See Also

- Yar_Concurrent_Client::call() - Register a concurrent call
- Yar_Concurrent_Client::reset() - Clean all registered calls
- Yar_Server::__construct() - Register a server
- Yar_Server::handle() - Start RPC Server

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/yar-concurrent-client.loop.php
