# EventHttp::__construct

Source: https://devdocs.io/php/eventhttp.construct

(PECL event >= 1.2.6-beta)

EventHttp::__construct — Constructs EventHttp object (the HTTP server)

### Description

```
public EventHttp::__construct( EventBase $base ,  EventSslContext $ctx  = null )
```

Constructs the HTTP server object.

### Parameters

Associated event base.

EventSslContext class object. Turns plain HTTP server into HTTPS server. It means that if ctx is configured correctly, then the underlying buffer events will be based on OpenSSL sockets. Thus, all traffic will pass through the SSL or TLS.

Note:

This parameter is available only if Event is compiled with OpenSSL support and only with Libevent
 2.1.0-alpha and higher.

### Changelog

### Examples

Example #1 Simple HTTP server

```
<?php
/*
 * Simple HTTP server.
 *
 * To test it:
 * 1) Run it on a port of your choice, e.g.:
 * $ php examples/http.php 8010
 * 2) In another terminal connect to some address on this port
 * and make GET or POST request(others are turned off here), e.g.:
 * $ nc -t 127.0.0.1 8010
 * POST /about HTTP/1.0
 * Content-Type: text/plain
 * Content-Length: 4
 * Connection: close
 * (press Enter)
 *
 * It will output
 * a=12
 * HTTP/1.0 200 OK
 * Content-Type: text/html; charset=ISO-8859-1
 * Connection: close
 *
 * $ nc -t 127.0.0.1 8010
 * GET /dump HTTP/1.0
 * Content-Type: text/plain
 * Content-Encoding: UTF-8
 * Connection: close
 * (press Enter)
 *
 * It will output:
 * HTTP/1.0 200 OK
 * Content-Type: text/html; charset=ISO-8859-1
 * Connection: close
 * (press Enter)
 *
 * $ nc -t 127.0.0.1 8010
 * GET /unknown HTTP/1.0
 * Connection: close
 *
 * It will output:
 * HTTP/1.0 200 OK
 * Content-Type: text/html; charset=ISO-8859-1
 * Connection: close
 *
 * 3) See what the server outputs on the previous terminal window.
 */

function _http_dump($req, $data) {
    static $counter      = 0;
    static $max_requests = 2;

    if (++$counter >= $max_requests)  {
        echo "Counter reached max requests $max_requests. Exiting\n";
        exit();
    }

    echo __METHOD__, " called\n";
    echo "request:"; var_dump($req);
    echo "data:"; var_dump($data);

    echo "\n===== DUMP =====\n";
    echo "Command:", $req->getCommand(), PHP_EOL;
    echo "URI:", $req->getUri(), PHP_EOL;
    echo "Input headers:"; var_dump($req->getInputHeaders());
    echo "Output headers:"; var_dump($req->getOutputHeaders());

    echo "\n >> Sending reply ...";
    $req->sendReply(200, "OK");
    echo "OK\n";

    echo "\n >> Reading input buffer ...\n";
    $buf = $req->getInputBuffer();
    while ($s = $buf->readLine(EventBuffer::EOL_ANY)) {
        echo $s, PHP_EOL;
    }
    echo "No more data in the buffer\n";
}

function _http_about($req) {
    echo __METHOD__, PHP_EOL;
    echo "URI: ", $req->getUri(), PHP_EOL;
    echo "\n >> Sending reply ...";
    $req->sendReply(200, "OK");
    echo "OK\n";
}

function _http_default($req, $data) {
    echo __METHOD__, PHP_EOL;
    echo "URI: ", $req->getUri(), PHP_EOL;
    echo "\n >> Sending reply ...";
    $req->sendReply(200, "OK");
    echo "OK\n";
}

$port = 8010;
if ($argc > 1) {
    $port = (int) $argv[1];
}
if ($port <= 0 || $port > 65535) {
    exit("Invalid port");
}

$base = new EventBase();
$http = new EventHttp($base);
$http->setAllowedMethods(EventHttpRequest::CMD_GET | EventHttpRequest::CMD_POST);

$http->setCallback("/dump", "_http_dump", array(4, 8));
$http->setCallback("/about", "_http_about");
$http->setDefaultCallback("_http_default", "custom data value");

$http->bind("0.0.0.0", 8010);
$base->loop();
?>
```

The above example will output something similar to:

```
a=12
HTTP/1.0 200 OK
Content-Type: text/html; charset=ISO-8859-1
Connection: close

HTTP/1.0 200 OK
Content-Type: text/html; charset=ISO-8859-1
Connection: close
(press Enter)

HTTP/1.0 200 OK
Content-Type: text/html; charset=ISO-8859-1
Connection: close
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventhttp.construct.php
