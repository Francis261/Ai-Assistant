# ssh2_auth_none

Source: https://devdocs.io/php/function.ssh2-auth-none

(PECL ssh2 >= 0.9.0)

ssh2_auth_none — Authenticate as "none"

### Description

```
ssh2_auth_none(resource $session, string $username): mixed
```

Attempt "none" authentication which usually will (and should) fail. As part of the failure, this function will return an array of accepted authentication methods.

### Parameters

An SSH connection link identifier, obtained from a call to ssh2_connect().

Remote user name.

### Return Values

Returns true if the server does accept "none" as an authentication method, or an array of accepted authentication methods on failure.

### Examples

Example #1 Retrieving a list of authentication methods

```
<?php
$connection = ssh2_connect('shell.example.com', 22);

$auth_methods = ssh2_auth_none($connection, 'user');

if (in_array('password', $auth_methods)) {
  echo "Server supports password based authentication\n";
}
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ssh2-auth-none.php
