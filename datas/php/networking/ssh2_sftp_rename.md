# ssh2_sftp_rename

Source: https://devdocs.io/php/function.ssh2-sftp-rename

(PECL ssh2 >= 0.9.0)

ssh2_sftp_rename — Rename a remote file

### Description

```
ssh2_sftp_rename(resource $sftp, string $from, string $to): bool
```

Renames a file on the remote filesystem.

### Parameters

An SSH2 SFTP resource opened by ssh2_sftp().

The current file that is being renamed.

The new file name that replaces from.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Renaming a file via sftp

```
<?php
$connection = ssh2_connect('shell.example.com', 22);
ssh2_auth_password($connection, 'username', 'password');
$sftp = ssh2_sftp($connection);

ssh2_sftp_rename($sftp, '/home/username/oldname', '/home/username/newname');
?>
```

### See Also

- rename() - Renames a file or directory

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ssh2-sftp-rename.php
