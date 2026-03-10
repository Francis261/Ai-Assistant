# ssh2_sftp_symlink

Source: https://devdocs.io/php/function.ssh2-sftp-symlink

(PECL ssh2 >= 0.9.0)

ssh2_sftp_symlink — Create a symlink

### Description

```
ssh2_sftp_symlink(resource $sftp, string $target, string $link): bool
```

Creates a symbolic link named link on the remote filesystem pointing to target.

### Parameters

An SSH2 SFTP resource opened by ssh2_sftp().

Target of the symbolic link.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Creating a symbolic link

```
<?php
$connection = ssh2_connect('shell.example.com', 22);
ssh2_auth_password($connection, 'username', 'password');
$sftp = ssh2_sftp($connection);

ssh2_sftp_symlink($sftp, '/var/run/mysql.sock', '/tmp/mysql.sock');
?>
```

### See Also

- ssh2_sftp_readlink() - Return the target of a symbolic link
- symlink() - Creates a symbolic link

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ssh2-sftp-symlink.php
