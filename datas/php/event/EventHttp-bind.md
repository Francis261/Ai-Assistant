# EventHttp::bind

Source: https://devdocs.io/php/eventhttp.bind

(PECL event >= 1.2.6-beta)

EventHttp::bind — Binds an HTTP server on the specified address and port

### Description

```
public EventHttp::bind( string $address ,  int $port ): void
```

Binds an HTTP server on the specified address and port.

Can be called multiple times to bind the same HTTP server to multiple different ports.

### Parameters

A string containing the IP address to listen(2) on.

The port number to listen on.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 EventHttp::bind() example

```
<?php
$base = new EventBase();
$http = new EventHttp($base);

$socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);

if (!$http->bind("127.0.0.1", 8088)) {
    exit("bind(1) failed\n");
};
if (!$http->bind("127.0.0.1", 8089)) {
    exit("bind(2) failed\n");
};

$http->setCallback("/about", function($req) {
    echo "URI: ", $req->getUri(), PHP_EOL;
    $req->sendReply(200, "OK");
    echo "OK\n";
});

$base->dispatch();
?>
```

The above example will output something similar to:

```
Client:

$ nc 127.0.0.1 8088
GET /about HTTP/1.0
Connection: close

HTTP/1.0 200 OK
Content-Type: text/html; charset=ISO-8859-1
Connection: close

$ nc 127.0.0.1 8089
GET /unknown HTTP/1.0
Connection: close

HTTP/1.1 404 Not Found
Content-Type: text/html
Date: Wed, 13 Mar 2013 04:14:41 GMT
Content-Length: 149
Connection: close

<html><head><title>404 Not Found</title></head><body><h1>Not Found</h1><p>The requested URL /unknown was not found on this server.</p></body></html>

Server:
URI: /about
OK
```

### See Also

- EventHttp::accept() - Makes an HTTP server accept connections on the specified socket stream or resource

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventhttp.bind.php
