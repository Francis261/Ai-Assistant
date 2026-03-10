# ssh2_sftp_readlink

Source: https://devdocs.io/php/function.ssh2-sftp-readlink

(PECL ssh2 >= 0.9.0)

ssh2_sftp_readlink — Return the target of a symbolic link

### Description

```
ssh2_sftp_readlink(resource $sftp, string $link): string
```

Returns the target of a symbolic link.

### Parameters

An SSH2 SFTP resource opened by ssh2_sftp().

Path of the symbolic link.

### Return Values

Returns the target of the symbolic link.

### Examples

Example #1 Reading a symbolic link

```
<?php
$connection = ssh2_connect('shell.example.com', 22);
ssh2_auth_password($connection, 'username', 'password');
$sftp = ssh2_sftp($connection);

$target = ssh2_sftp_readlink($sftp, '/tmp/mysql.sock');
/* $target is now (e.g.): '/var/run/mysql.sock' */
?>
```

### See Also

- readlink() - Returns the target of a symbolic link
- ssh2_sftp_symlink() - Create a symlink

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ssh2-sftp-readlink.php
