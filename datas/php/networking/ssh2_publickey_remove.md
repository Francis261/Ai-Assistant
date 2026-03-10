# ssh2_publickey_remove

Source: https://devdocs.io/php/function.ssh2-publickey-remove

(PECL ssh2 >= 0.10)

ssh2_publickey_remove — Remove an authorized publickey

### Description

```
ssh2_publickey_remove(resource $pkey, string $algoname, string $blob): bool
```

Removes an authorized publickey.

### Parameters

Publickey Subsystem Resource

Publickey algorithm (e.g.): ssh-dss, ssh-rsa

Publickey blob as raw binary data

### Return Values

Returns true on success or false on failure.

### Notes

Note: The public key subsystem is used for managing public keys on a server to which the client is already authenticated. To authenticate to a remote system using public key authentication, use the ssh2_auth_pubkey_file() function instead.

### See Also

- ssh2_publickey_init() - Initialize Publickey subsystem
- ssh2_publickey_add() - Add an authorized publickey
- ssh2_publickey_list() - List currently authorized publickeys

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ssh2-publickey-remove.php
