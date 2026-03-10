# ssh2_sftp_chmod

Source: https://devdocs.io/php/function.ssh2-sftp-chmod

(PECL ssh2 >= 0.12)

ssh2_sftp_chmod — Changes file mode

### Description

```
ssh2_sftp_chmod(resource $sftp, string $filename, int $mode): bool
```

Attempts to change the mode of the specified file to that given in mode.

### Parameters

An SSH2 SFTP resource opened by ssh2_sftp().

Path to the file.

Permissions on the file. See the chmod() for more details on this parameter.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Changing the mode of a file on a remote server

```
<?php
$connection = ssh2_connect('shell.example.com', 22);
ssh2_auth_password($connection, 'username', 'password');
$sftp = ssh2_sftp($connection);

ssh2_sftp_chmod($sftp, '/somedir/somefile', 0755);
?>
```

### See Also

- chmod() - Changes file mode
- ssh2_sftp() - Initialize SFTP subsystem
- ssh2_connect() - Connect to an SSH server

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ssh2-sftp-chmod.php
