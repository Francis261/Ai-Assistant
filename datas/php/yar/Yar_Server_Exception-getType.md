# Yar_Server_Exception::getType

Source: https://devdocs.io/php/yar-server-exception.gettype

(PECL yar >= 1.0.0)

Yar_Server_Exception::getType — Retrieve exception's type

### Description

```
public Yar_Server_Exception::getType(): string
```

Get the exception original type threw by server

### Parameters

This function has no parameters.

### Return Values

string

### Examples

Example #1 Yar_Server_Exception::getType() example

```
//Server.php
<?php
class Custom_Exception extends Exception {};

class API {
    public function throw_exception($name) {
        throw new Custom_Exception($name);
    }
}

$service = new Yar_Server(new API());
$service->handle();
?>

//Client.php
<?php
$client = new Yar_Client("http://host/api.php");

try {
    $client->throw_exception("client");
} catch (Yar_Server_Exception $e) {
    var_dump($e->getType());
    var_dump($e->getMessage());
}
```

The above example will output something similar to:

```
string(16) "Custom_Exception"
string(6) "client"
```

### See Also

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/yar-server-exception.gettype.php
