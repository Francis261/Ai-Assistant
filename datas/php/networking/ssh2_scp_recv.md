# ssh2_scp_recv

Source: https://devdocs.io/php/function.ssh2-scp-recv

(PECL ssh2 >= 0.9.0)

ssh2_scp_recv — Request a file via SCP

### Description

```
ssh2_scp_recv(resource $session, string $remote_file, string $local_file): bool
```

Copy a file from the remote server to the local filesystem using the SCP protocol.

### Parameters

An SSH connection link identifier, obtained from a call to ssh2_connect().

Path to the remote file.

Path to the local file.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Downloading a file via SCP

```
<?php
$connection = ssh2_connect('shell.example.com', 22);
ssh2_auth_password($connection, 'username', 'password');

ssh2_scp_recv($connection, '/remote/filename', '/local/filename');
?>
```

### See Also

- ssh2_scp_send() - Send a file via SCP
- copy() - Copies file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ssh2-scp-recv.php
