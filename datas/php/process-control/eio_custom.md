# eio_custom

Source: https://devdocs.io/php/function.eio-custom

(PECL eio >= 0.0.1dev)

eio_custom — Execute custom request like any other eio_* call

### Description

```
eio_custom(
 callable $execute,
 int $pri,
 callable $callback,
 mixed $data = NULL
): resource
```

eio_custom() executes custom function specified by execute processing it just like any other eio_* call.

### Parameters

Specifies the request function that should match the following prototype:

```
      mixed execute(mixed data);
      
```

```
      void callback(mixed data, mixed result);
      
```

The request priority: EIO_PRI_DEFAULT, EIO_PRI_MIN, EIO_PRI_MAX, or null. If null passed, pri internally is set to EIO_PRI_DEFAULT.

callback function is called when the request is done. It should match the following prototype:

```
void callback(mixed $data, int $result[, resource $req]);
```

is custom data passed to the request.

request-specific result value; basically, the value returned by corresponding system call.

is optional request resource which can be used with functions like eio_get_last_error().

Arbitrary variable passed to callback.

### Return Values

eio_custom() returns request resource on success, or false on failure.

### Examples

Example #1 eio_custom() example

```
<?php
/* Callback for the custom callback */
function my_custom_callback($data, $result) {
    var_dump($data);
    var_dump(count($result));
    var_dump($result['data_modified']);
    var_dump($result['result']);
}

/* The custom request */
function my_custom($data) {
    var_dump($data);

    $result  = array(
        'result'        => 1001,
        'data_modified' => "my custom data",
    );

    return $result;
}

$data = "my_custom_data";
$req = eio_custom("my_custom", EIO_PRI_DEFAULT, "my_custom_callback", $data);
var_dump($req);
eio_event_loop();
?>
```

The above example will output something similar to:

```
resource(4) of type (EIO Request Descriptor)
string(14) "my_custom_data"
string(14) "my_custom_data"
int(2)
string(14) "my custom data"
int(1001)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.eio-custom.php
