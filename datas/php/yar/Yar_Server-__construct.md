# Yar_Server::__construct

Source: https://devdocs.io/php/yar-server.construct

(PECL yar >= 1.0.0)

Yar_Server::__construct — Register a server

### Description

```
final public Yar_Server::__construct(Object $obj)
```

Set up a Yar HTTP RPC Server, All the public methods of $obj will be register as a RPC service.

### Parameters

An Object, all public methods of its will be registered as RPC services.

### Return Values

An instance of Yar_Server.

### Examples

Example #1 Yar_Server::__construct() example

```
<?php
class API {
    /**
     * the doc info will be generated automatically into service info page.
     * @params 
     * @return
     */
    public function some_method($parameter, $option = "foo") {
         return "some_method";
    }

    protected function client_can_not_see() {
    }
}

$service = new Yar_Server(new API());
$service->handle();
?>
```

The above example will output something similar to:

### See Also

- Yar_Server::handle() - Start RPC Server

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/yar-server.construct.php
