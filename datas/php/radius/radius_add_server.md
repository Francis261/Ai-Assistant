# radius_add_server

Source: https://devdocs.io/php/function.radius-add-server

(PECL radius >= 1.1.0)

radius_add_server — Adds a server

### Description

```
radius_add_server(
 resource $radius_handle,
 string $hostname,
 int $port,
 string $secret,
 int $timeout,
 int $max_tries
): bool
```

radius_add_server() may be called multiple times, and it may be used together with radius_config(). At most 10 servers may be specified. When multiple servers are given, they are tried in round-robin fashion until a valid response is received, or until each server's max_tries limit has been reached.

### Parameters

The hostname parameter specifies the server host, either as a fully qualified domain name or as a dotted-quad IP address in text form.

The port specifies the UDP port to contact on the server. If port is given as 0, the library looks up the radius/udp or radacct/udp service in the network services database, and uses the port found there. If no entry is found, the library uses the standard Radius ports, 1812 for authentication and 1813 for accounting.

The shared secret for the server host is passed to the secret parameter. The Radius protocol ignores all but the leading 128 bytes of the shared secret.

The timeout for receiving replies from the server is passed to the timeout parameter, in units of seconds.

The maximum number of repeated requests to make before giving up is passed into the max_tries.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 radius_add_server() example

```
<?php
if (!radius_add_server($res, 'radius.example.com', 1812, 'testing123', 3, 3)) {
    echo 'RadiusError:' . radius_strerror($res). "\n<br>";
    exit;
}
?>
```

### See Also

- radius_config() - Causes the library to read the given configuration file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.radius-add-server.php
