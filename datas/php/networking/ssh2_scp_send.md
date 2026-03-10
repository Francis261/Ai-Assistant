# ssh2_scp_send

Source: https://devdocs.io/php/function.ssh2-scp-send

(PECL ssh2 >= 0.9.0)

ssh2_scp_send — Send a file via SCP

### Description

```
ssh2_scp_send(
 resource $session,
 string $local_file,
 string $remote_file,
 int $create_mode = 0644
): bool
```

Copy a file from the local filesystem to the remote server using the SCP protocol.

### Parameters

An SSH connection link identifier, obtained from a call to ssh2_connect().

Path to the local file.

Path to the remote file.

The file will be created with the mode specified by create_mode.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Uploading a file via SCP

```
<?php
$connection = ssh2_connect('shell.example.com', 22);
ssh2_auth_password($connection, 'username', 'password');

ssh2_scp_send($connection, '/local/filename', '/remote/filename', 0644);
?>
```

### See Also

- ssh2_scp_recv() - Request a file via SCP
- copy() - Copies file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ssh2-scp-send.php
