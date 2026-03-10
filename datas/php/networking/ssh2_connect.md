# ssh2_connect

Source: https://devdocs.io/php/function.ssh2-connect

(PECL ssh2 >= 0.9.0)

ssh2_connect — Connect to an SSH server

### Description

```
ssh2_connect(
 string $host,
 int $port = 22,
 array $methods = ?,
 array $callbacks = ?
): resource|false
```

Establish a connection to a remote SSH server.

Once connected, the client should verify the server's hostkey using ssh2_fingerprint(), then authenticate using either password or public key.

### Parameters

methods may be an associative array with up to four parameters as described below.

* - Supported Values are dependent on methods supported by underlying library. See » libssh2 documentation for additional information.

Note: Crypt and MAC method "none"

For security reasons, none is disabled by the underlying » libssh2 library unless explicitly enabled during build time by using the appropriate ./configure options. See documentation for the underlying library for more information.

callbacks may be an associative array with any or all of the following parameters.

### Return Values

Returns a resource on success, or false on error.

### Examples

Example #1 ssh2_connect() example

Open a connection forcing 3des-cbc when sending packets, any strength aes cipher when receiving packets, no compression in either direction, and Group1 key exchange.

```
<?php
/* Notify the user if the server terminates the connection */
function my_ssh_disconnect($reason, $message, $language) {
  printf("Server disconnected with reason code [%d] and message: %s\n",
         $reason, $message);
}

$methods = array(
  'kex' => 'diffie-hellman-group1-sha1',
  'client_to_server' => array(
    'crypt' => '3des-cbc',
    'comp' => 'none'),
  'server_to_client' => array(
    'crypt' => 'aes256-cbc,aes192-cbc,aes128-cbc',
    'comp' => 'none'));

$callbacks = array('disconnect' => 'my_ssh_disconnect');

$connection = ssh2_connect('shell.example.com', 22, $methods, $callbacks);
if (!$connection) die('Connection failed');
?>
```

### See Also

- ssh2_fingerprint() - Retrieve fingerprint of remote server
- ssh2_auth_none() - Authenticate as "none"
- ssh2_auth_password() - Authenticate over SSH using a plain password
- ssh2_auth_pubkey_file() - Authenticate using a public key
- ssh2_disconnect() - Close a connection to a remote SSH server

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ssh2-connect.php
