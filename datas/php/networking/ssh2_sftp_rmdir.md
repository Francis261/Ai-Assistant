# ssh2_sftp_rmdir

Source: https://devdocs.io/php/function.ssh2-sftp-rmdir

(PECL ssh2 >= 0.9.0)

ssh2_sftp_rmdir — Remove a directory

### Description

```
ssh2_sftp_rmdir(resource $sftp, string $dirname): bool
```

Removes a directory from the remote file server.

This function is similar to using rmdir() with the ssh2.sftp:// wrapper.

### Parameters

An SSH2 SFTP resource opened by ssh2_sftp().

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Removing a directory on a remote server

```
<?php
$connection = ssh2_connect('shell.example.com', 22);
ssh2_auth_password($connection, 'username', 'password');
$sftp = ssh2_sftp($connection);

ssh2_sftp_rmdir($sftp, '/home/username/deltodel');
/* Or:  rmdir("ssh2.sftp://$sftp/home/username/dirtodel"); */
?>
```

### See Also

- rmdir() - Removes directory
- ssh2_sftp_mkdir() - Create a directory

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ssh2-sftp-rmdir.php
