# ssh2_forward_listen

Source: https://devdocs.io/php/function.ssh2-forward-listen

(PECL ssh2 >= 0.9.0)

ssh2_forward_listen — Bind a port on the remote server and listen for connections

### Description

```
ssh2_forward_listen(
 resource $session,
 int $port,
 string $host = ?,
 int $max_connections = 16
): resource|false
```

Binds a port on the remote server and listen for connections.

This function is currently not documented; only its argument list is available.

### Parameters

An SSH Session resource, obtained from a call to ssh2_connect().

The port of the remote server.

### Return Values

Returns an SSH2 Listener, or false on failure.

### See Also

- ssh2_forward_accept() - Accept a connection created by a listener

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ssh2-forward-listen.php
