# EventHttp::setDefaultCallback

Source: https://devdocs.io/php/eventhttp.setdefaultcallback

(PECL event >= 1.4.0-beta)

EventHttp::setDefaultCallback — Sets default callback to handle requests that are not caught by specific callbacks

### Description

```
public EventHttp::setDefaultCallback( string $cb ,  string $arg  = ?): void
```

Sets default callback to handle requests that are not caught by specific callbacks

### Parameters

The callback callable. It should match the following prototype:

```
callback( EventHttpRequest $req  = NULL ,  mixed $arg  = NULL ): void
```

EventHttpRequest object.

Custom data.

User custom data passed to the callback.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 EventHttp::setDefaultCallback() example

```
<?php
$base = new EventBase();
$http = new EventHttp($base);

$socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);

if (!$http->bind("127.0.0.1", 8088)) {
    exit("bind(1) failed\n");
};

$http->setDefaultCallback(function($req) {
    echo "URI: ", $req->getUri(), PHP_EOL;
    $req->sendReply(200, "OK");
});

$base->dispatch();
?>
```

### See Also

- EventHttp::setCallback() - Sets a callback for specified URI

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventhttp.setdefaultcallback.php
