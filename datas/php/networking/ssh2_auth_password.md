# ssh2_auth_password

Source: https://devdocs.io/php/function.ssh2-auth-password

(PECL ssh2 >= 0.9.0)

ssh2_auth_password — Authenticate over SSH using a plain password

### Description

```
ssh2_auth_password(resource $session, string $username, string $password): bool
```

Authenticate over SSH using a plain password. Since version 0.12 this function also supports keyboard_interactive method.

### Parameters

An SSH connection link identifier, obtained from a call to ssh2_connect().

Remote user name.

Password for username

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Authenticating with a password

```
<?php
$connection = ssh2_connect('shell.example.com', 22);

if (ssh2_auth_password($connection, 'username', 'secret')) {
  echo "Authentication Successful!\n";
} else {
  die('Authentication Failed...');
}
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ssh2-auth-password.php
