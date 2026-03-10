# ssh2_auth_pubkey_file

Source: https://devdocs.io/php/function.ssh2-auth-pubkey-file

(PECL ssh2 >= 0.9.0)

ssh2_auth_pubkey_file — Authenticate using a public key

### Description

```
ssh2_auth_pubkey_file(
 resource $session,
 string $username,
 string $pubkeyfile,
 string $privkeyfile,
 string $passphrase = ?
): bool
```

Authenticate using a public key read from a file.

### Parameters

An SSH connection link identifier, obtained from a call to ssh2_connect().

The public key file needs to be in OpenSSH's format. It should look something like:

ssh-rsa AAAAB3NzaC1yc2EAAA....NX6sqSnHA8= rsa-key-20121110

If privkeyfile is encrypted (which it should be), the passphrase must be provided.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Authentication using a public key

```
<?php
$connection = ssh2_connect('shell.example.com', 22, array('hostkey'=>'ssh-rsa'));

if (ssh2_auth_pubkey_file($connection, 'username',
                          '/home/username/.ssh/id_rsa.pub',
                          '/home/username/.ssh/id_rsa', 'secret')) {
  echo "Public Key Authentication Successful\n";
} else {
  die('Public Key Authentication Failed');
}
?>
```

### Notes

Note:

The underlying libssh library doesn't support partial auths very cleanly That is, if you need to supply both a public key and a password it will appear as if this function has failed. In this particular case a failure from this call may just mean that auth hasn't been completed yet. You would need to ignore this failure and continue on and call ssh2_auth_password() in order to complete authentication.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ssh2-auth-pubkey-file.php
