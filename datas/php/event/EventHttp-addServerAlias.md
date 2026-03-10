# EventHttp::addServerAlias

Source: https://devdocs.io/php/eventhttp.addserveralias

(PECL event >= 1.4.0-beta)

EventHttp::addServerAlias — Adds a server alias to the HTTP server object

### Description

```
public EventHttp::addServerAlias( string $alias ): bool
```

Adds a server alias to the HTTP server object.

### Parameters

The alias to add.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 EventHttp::addServerAlias() example

```
<?php
$base = new EventBase();
$http = new EventHttp($base);

$socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);

if (!$http->bind("127.0.0.1", 8088)) {
    exit("bind(1) failed\n");
};

if (!$http->addServerAlias("local.net")) {
    exit("Failed to add server alias\n");
}

$http->setCallback("/about", function($req) {
    echo "URI: ", $req->getUri(), PHP_EOL;
    $req->sendReply(200, "OK");
});
$base->dispatch();
?>
```

### See Also

- EventHttp::removeServerAlias() - Removes server alias

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventhttp.addserveralias.php
