# ssh2_exec

Source: https://devdocs.io/php/function.ssh2-exec

(PECL ssh2 >= 0.9.0)

ssh2_exec — Execute a command on a remote server

### Description

```
ssh2_exec(
 resource $session,
 string $command,
 string $pty = ?,
 array $env = ?,
 int $width = 80,
 int $height = 25,
 int $width_height_type = SSH2_TERM_UNIT_CHARS
): resource|false
```

Execute a command at the remote end and allocate a channel for it.

### Parameters

An SSH connection link identifier, obtained from a call to ssh2_connect().

env may be passed as an associative array of name/value pairs to set in the target environment.

Width of the virtual terminal.

Height of the virtual terminal.

width_height_type should be one of SSH2_TERM_UNIT_CHARS or SSH2_TERM_UNIT_PIXELS.

### Return Values

Returns a stream on success or false on failure.

### Examples

Example #1 Executing a command

```
<?php
$connection = ssh2_connect('shell.example.com', 22);
ssh2_auth_password($connection, 'username', 'password');

$stream = ssh2_exec($connection, '/usr/local/bin/php -i');
?>
```

### See Also

- ssh2_connect() - Connect to an SSH server
- ssh2_shell() - Request an interactive shell
- ssh2_tunnel() - Open a tunnel through a remote server

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ssh2-exec.php
