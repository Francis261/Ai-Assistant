# ssh2_sftp_realpath

Source: https://devdocs.io/php/function.ssh2-sftp-realpath

(PECL ssh2 >= 0.9.0)

ssh2_sftp_realpath — Resolve the realpath of a provided path string

### Description

```
ssh2_sftp_realpath(resource $sftp, string $filename): string
```

Translates filename into the effective real path on the remote filesystem.

### Parameters

An SSH2 SFTP resource opened by ssh2_sftp().

### Return Values

Returns the real path as a string.

### Examples

Example #1 Resolving a pathname

```
<?php
$connection = ssh2_connect('shell.example.com', 22);
ssh2_auth_password($connection, 'username', 'password');
$sftp = ssh2_sftp($connection);

$realpath = ssh2_sftp_realpath($sftp, '/home/username/../../../..//./usr/../etc/passwd');
/* $realpath is now: '/etc/passwd' */
?>
```

### See Also

- realpath() - Returns canonicalized absolute pathname
- ssh2_sftp_symlink() - Create a symlink
- ssh2_sftp_readlink() - Return the target of a symbolic link

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ssh2-sftp-realpath.php
