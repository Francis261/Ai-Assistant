# ssh2_fetch_stream

Source: https://devdocs.io/php/function.ssh2-fetch-stream

(PECL ssh2 >= 0.9.0)

ssh2_fetch_stream — Fetch an extended data stream

### Description

```
ssh2_fetch_stream(resource $channel, int $streamid): resource
```

Fetches an alternate substream associated with an SSH2 channel stream. The SSH2 protocol currently defines only one substream, STDERR, which has a substream ID of SSH2_STREAM_STDERR (defined as 1).

### Parameters

An SSH2 channel stream.

### Return Values

Returns the requested stream resource.

### Examples

Example #1 Opening a shell and retrieving the stderr stream associated with it

```
<?php
$connection = ssh2_connect('shell.example.com', 22);
ssh2_auth_password($connection, 'username', 'password');

$stdio_stream = ssh2_shell($connection);
$stderr_stream = ssh2_fetch_stream($stdio_stream, SSH2_STREAM_STDERR);
?>
```

### See Also

- ssh2_shell() - Request an interactive shell
- ssh2_exec() - Execute a command on a remote server
- ssh2_connect() - Connect to an SSH server

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ssh2-fetch-stream.php
