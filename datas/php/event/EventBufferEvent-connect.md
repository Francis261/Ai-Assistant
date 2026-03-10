# EventBufferEvent::connect

Source: https://devdocs.io/php/eventbufferevent.connect

(PECL event >= 1.2.6-beta)

EventBufferEvent::connect — Connect buffer event's file descriptor to given address or UNIX socket

### Description

```
public EventBufferEvent::connect( string $addr ): bool
```

Connect buffer event's file descriptor to given address(optionally with port), or a UNIX domain socket.

If socket is not assigned to the buffer event, this function allocates a new socket and makes it non-blocking internally.

To resolve DNS names(asyncronously), use EventBufferEvent::connectHost() method.

### Parameters

Should contain an IP address with optional port number, or a path to UNIX domain socket. Recognized formats are:

```
[IPv6Address]:port
[IPv6Address]
IPv6Address
IPv4Address:port
IPv4Address
unix:path
```

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 EventBufferEvent::connect() example

```
<?php
/*
 * 1. Connect to 127.0.0.1 at port 80
 * by means of EventBufferEvent::connect().
 *
 * 2. Request /index.cphp via HTTP/1.0
 * using the output buffer.
 *
 * 3. Asyncronously read the response and print it to stdout.
 */

/* Read callback */
function readcb($bev, $base) {
    $input = $bev->getInput();

    while (($n = $input->remove($buf, 1024)) > 0) {
        echo $buf;
    }
}

/* Event callback */
function eventcb($bev, $events, $base) {
    if ($events & EventBufferEvent::CONNECTED) {
        echo "Connected.\n";
    } elseif ($events & (EventBufferEvent::ERROR | EventBufferEvent::EOF)) {
        if ($events & EventBufferEvent::ERROR) {
            echo "DNS error: ", $bev->getDnsErrorString(), PHP_EOL;
        }

        echo "Closing\n";
        $base->exit();
        exit("Done\n");
    }
}

$base = new EventBase();

echo "step 1\n";
$bev = new EventBufferEvent($base, /* use internal socket */ NULL,
    EventBufferEvent::OPT_CLOSE_ON_FREE | EventBufferEvent::OPT_DEFER_CALLBACKS);
if (!$bev) {
    exit("Failed creating bufferevent socket\n");
}

echo "step 2\n";
$bev->setCallbacks("readcb", /* writecb */ NULL, "eventcb", $base);
$bev->enable(Event::READ | Event::WRITE);

echo "step 3\n";
/* Send request */
$output = $bev->getOutput();
if (!$output->add(
    "GET /index.cphp HTTP/1.0\r\n".
    "Connection: Close\r\n\r\n"
)) {
    exit("Failed adding request to output buffer\n");
}

/* Connect to the host syncronously.
 * We know the IP, and don't need to resolve DNS. */
if (!$bev->connect("127.0.0.1:80")) {
    exit("Can't connect to host\n");
}

/* Dispatch pending events */
$base->dispatch();
```

The above example will output something similar to:

```
step 1
step 2
step 3
Connected.
HTTP/1.1 200 OK
Server: nginx/1.2.6
Date: Sat, 09 Mar 2013 10:06:58 GMT
Content-Type: text/html; charset=utf-8
Connection: close
X-Powered-By: PHP/5.4.11--pl2-gentoo

sdfsdfsf
Closing
Done
```

Example #2 Connect to UNIX domain socket which presumably is served by a server, read response from the server and output it to the console

```
<?php
class MyUnixSocketClient {
    private $base, $bev;

    function __construct($base, $sock_path) {
        $this->base = $base;
        $this->bev = new EventBufferEvent($base, NULL, EventBufferEvent::OPT_CLOSE_ON_FREE,
            array ($this, "read_cb"), NULL, array ($this, "event_cb"));

        if (!$this->bev->connect("unix:$sock_path")) {
            trigger_error("Failed to connect to socket `$sock_path'", E_USER_ERROR);
        }

        $this->bev->enable(Event::READ);
    }

    function __destruct() {
        if ($this->bev) {
            $this->bev->free();
            $this->bev = NULL;
        }
    }

    function dispatch() {
        $this->base->dispatch();
    }

    function read_cb($bev, $unused) {
        $in = $bev->input;

        printf("Received %ld bytes\n", $in->length);
        printf("----- data ----\n");
        printf("%ld:\t%s\n", (int) $in->length, $in->pullup(-1));

        $this->bev->free();
        $this->bev = NULL;
        $this->base->exit(NULL);
    }

    function event_cb($bev, $events, $unused) {
        if ($events & EventBufferEvent::ERROR) {
            echo "Error from bufferevent\n";
        }

        if ($events & (EventBufferEvent::EOF | EventBufferEvent::ERROR)) {
            $bev->free();
            $bev = NULL;
        } elseif ($events & EventBufferEvent::CONNECTED) {
            $bev->output->add("test\n");
        }
    }
}

if ($argc <= 1) {
    exit("Socket path is not provided\n");
}
$sock_path = $argv[1];

$base = new EventBase();
$cl = new MyUnixSocketClient($base, $sock_path);
$cl->dispatch();
?>
```

The above example will output something similar to:

```
Received 5 bytes
----- data ----
5:  test
```

### See Also

- EventBufferEvent::connectHost() - Connects to a hostname with optionally asyncronous DNS resolving

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventbufferevent.connect.php
