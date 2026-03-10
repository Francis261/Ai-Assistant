# Yar_Server::handle

Source: https://devdocs.io/php/yar-server.handle

(PECL yar >= 1.0.0)

Yar_Server::handle — Start RPC Server

### Description

```
public Yar_Server::handle(): bool
```

Start a RPC HTTP server, and ready for accpet RPC requests.

Note:

Usual RPC calls will be issued as HTTP POST requests. If a HTTP GET request is issued to the uri, the service information (commented section above) will be printed on the page

### Parameters

This function has no parameters.

### Return Values

boolean

### Examples

Example #1 Yar_Server::handle() example

```
<?php
class API {
    /**
     * the doc info will be generated automatically into service info page.
     * @params 
     * @return
     */
    public function some_method($parameter, $option = "foo") {
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

- Yar_Server::__construct() - Register a server

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/yar-server.handle.php
