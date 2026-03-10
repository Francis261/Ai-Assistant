# ssh2_auth_hostbased_file

Source: https://devdocs.io/php/function.ssh2-auth-hostbased-file

(PECL ssh2 >= 0.9.0)

ssh2_auth_hostbased_file — Authenticate using a public hostkey

### Description

```
ssh2_auth_hostbased_file(
 resource $session,
 string $username,
 string $hostname,
 string $pubkeyfile,
 string $privkeyfile,
 string $passphrase = ?,
 string $local_username = ?
): bool
```

Authenticate using a public hostkey read from a file.

### Parameters

An SSH connection link identifier, obtained from a call to ssh2_connect().

If privkeyfile is encrypted (which it should be), the passphrase must be provided.

If local_username is omitted, then the value for username will be used for it.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Authentication using a public hostkey

```
<?php
$connection = ssh2_connect('shell.example.com', 22, array('hostkey'=>'ssh-rsa'));

if (ssh2_auth_hostbased_file($connection, 'remoteusername', 'myhost.example.com',
                             '/usr/local/etc/hostkey_rsa.pub',
                             '/usr/local/etc/hostkey_rsa', 'secret',
                             'localusername')) {
  echo "Public Key Hostbased Authentication Successful\n";
} else {
  die('Public Key Hostbased Authentication Failed');
}
?>
```

### Notes

Note:

ssh2_auth_hostbased_file() requires libssh2 >= 0.7 and PHP/SSH2 >= 0.7

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ssh2-auth-hostbased-file.php
