# ssh2_sftp_unlink

Source: https://devdocs.io/php/function.ssh2-sftp-unlink

(PECL ssh2 >= 0.9.0)

ssh2_sftp_unlink — Delete a file

### Description

```
ssh2_sftp_unlink(resource $sftp, string $filename): bool
```

Deletes a file on the remote filesystem.

### Parameters

An SSH2 SFTP resource opened by ssh2_sftp().

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Deleting a file

```
<?php
$connection = ssh2_connect('shell.example.com', 22);
ssh2_auth_password($connection, 'username', 'password');
$sftp = ssh2_sftp($connection);

ssh2_sftp_unlink($sftp, '/home/username/stale_file');
?>
```

### See Also

- unlink() - Deletes a file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ssh2-sftp-unlink.php
