# ssh2_shell

Source: https://devdocs.io/php/function.ssh2-shell

(PECL ssh2 >= 0.9.0)

ssh2_shell — Request an interactive shell

### Description

```
ssh2_shell(
 resource $session,
 string $termtype = "vanilla",
 ?array $env = null,
 int $width = 80,
 int $height = 25,
 int $width_height_type = SSH2_TERM_UNIT_CHARS
): resource|false
```

Open a shell at the remote end and allocate a stream for it.

### Parameters

An SSH connection link identifier, obtained from a call to ssh2_connect().

termtype should correspond to one of the entries in the target system's /etc/termcap file.

env may be passed as an associative array of name/value pairs to set in the target environment.

Width of the virtual terminal.

Height of the virtual terminal.

width_height_type should be one of SSH2_TERM_UNIT_CHARS or SSH2_TERM_UNIT_PIXELS.

### Return Values

Returns a stream resource on success, or false on failure.

### Examples

Example #1 Requesting an interactive shell

```
<?php
$connection = ssh2_connect('shell.example.com', 22);
ssh2_auth_password($connection, 'username', 'password');

$stream = ssh2_shell($connection, 'vt102', null, 80, 24, SSH2_TERM_UNIT_CHARS);
?>
```

### See Also

- ssh2_exec() - Execute a command on a remote server
- ssh2_tunnel() - Open a tunnel through a remote server
- ssh2_fetch_stream() - Fetch an extended data stream

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ssh2-shell.php
