# ssh2_tunnel

Source: https://devdocs.io/php/function.ssh2-tunnel

(PECL ssh2 >= 0.9.0)

ssh2_tunnel — Open a tunnel through a remote server

### Description

```
ssh2_tunnel(resource $session, string $host, int $port): resource
```

Open a socket stream to an arbitrary host/port by way of the currently connected SSH server.

### Parameters

An SSH connection link identifier, obtained from a call to ssh2_connect().

### Return Values

### Examples

Example #1 Opening a tunnel to an arbitrary host

```
<?php
$connection = ssh2_connect('shell.example.com', 22);
ssh2_auth_pubkey_file($connection, 'username', 'id_dsa.pub', 'id_dsa');

$tunnel = ssh2_tunnel($connection, '10.0.0.101', 12345);
?>
```

### See Also

- ssh2_connect() - Connect to an SSH server
- fsockopen() - Open Internet or Unix domain socket connection

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ssh2-tunnel.php
