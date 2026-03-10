# ssh2_sftp

Source: https://devdocs.io/php/function.ssh2-sftp

(PECL ssh2 >= 0.9.0)

ssh2_sftp — Initialize SFTP subsystem

### Description

```
ssh2_sftp(resource $session): resource|false
```

Request the SFTP subsystem from an already connected SSH2 server.

### Parameters

An SSH connection link identifier, obtained from a call to ssh2_connect().

### Return Values

This method returns an SSH2 SFTP resource for use with all other ssh2_sftp_*() methods and the ssh2.sftp:// fopen wrapper, or false on failure.

### Examples

Example #1 Opening a file via SFTP

```
<?php
$connection = ssh2_connect('shell.example.com', 22);
ssh2_auth_password($connection, 'username', 'password');

$sftp = ssh2_sftp($connection);

$stream = fopen('ssh2.sftp://' . intval($sftp) . '/path/to/file', 'r');
?>
```

### See Also

- ssh2_scp_recv() - Request a file via SCP
- ssh2_scp_send() - Send a file via SCP

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ssh2-sftp.php
