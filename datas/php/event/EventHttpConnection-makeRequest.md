# EventHttpConnection::makeRequest

Source: https://devdocs.io/php/eventhttpconnection.makerequest

(PECL event >= 1.4.0-beta)

EventHttpConnection::makeRequest — Makes an HTTP request over the specified connection

### Description

```
public EventHttpConnection::makeRequest( EventHttpRequest $req ,  int $type ,  string $uri ): bool
```

Makes an HTTP request over the specified connection. type is one of EventHttpRequest::CMD_* constants.

### Parameters

The connection object over which to send the request.

One of EventHttpRequest::CMD_* constants.

The URI associated with the request.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 EventHttpConnection::makeRequest() example

```
<?php
function _request_handler($req, $base) {
    echo __FUNCTION__, PHP_EOL;

    if (is_null($req)) {
        echo "Timed out\n";
    } else {
        $response_code = $req->getResponseCode();

        if ($response_code == 0) {
            echo "Connection refused\n";
        } elseif ($response_code != 200) {
            echo "Unexpected response: $response_code\n";
        } else {
            echo "Success: $response_code\n";
            $buf = $req->getInputBuffer();
            echo "Body:\n";
            while ($s = $buf->readLine(EventBuffer::EOL_ANY)) {
                echo $s, PHP_EOL;
            }
        }
    }

    $base->exit(NULL);
}

$address = "127.0.0.1";
$port = 80;

$base = new EventBase();
$conn = new EventHttpConnection($base, NULL, $address, $port);
$conn->setTimeout(5);
$req = new EventHttpRequest("_request_handler", $base);

$req->addHeader("Host", $address, EventHttpRequest::OUTPUT_HEADER);
$req->addHeader("Content-Length", "0", EventHttpRequest::OUTPUT_HEADER);
$conn->makeRequest($req, EventHttpRequest::CMD_GET, "/index.cphp");

$base->loop();
?>
```

The above example will output something similar to:

```
_request_handler
Success: 200
Body:
PHP, date:
2013-03-13T20:27:52+05:00
```

### See Also

- EventHttpRequest::addHeader() - Adds an HTTP header to the headers of the request

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventhttpconnection.makerequest.php
