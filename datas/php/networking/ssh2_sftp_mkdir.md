# ssh2_sftp_mkdir

Source: https://devdocs.io/php/function.ssh2-sftp-mkdir

(PECL ssh2 >= 0.9.0)

ssh2_sftp_mkdir — Create a directory

### Description

```
ssh2_sftp_mkdir(
 resource $sftp,
 string $dirname,
 int $mode = 0777,
 bool $recursive = false
): bool
```

Creates a directory on the remote file server with permissions set to mode.

This function is similar to using mkdir() with the ssh2.sftp:// wrapper.

### Parameters

An SSH2 SFTP resource opened by ssh2_sftp().

Path of the new directory.

Permissions on the new directory. The actual mode is affected by the current umask.

If recursive is true any parent directories required for dirname will be automatically created as well.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Creating a directory on a remote server

```
<?php
$connection = ssh2_connect('shell.example.com', 22);
ssh2_auth_password($connection, 'username', 'password');
$sftp = ssh2_sftp($connection);

ssh2_sftp_mkdir($sftp, '/home/username/newdir');
/* Or:  mkdir("ssh2.sftp://$sftp/home/username/newdir"); */
?>
```

### See Also

- mkdir() - Makes directory
- ssh2_sftp_rmdir() - Remove a directory

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ssh2-sftp-mkdir.php
