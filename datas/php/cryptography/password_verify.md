# password_verify

Source: https://devdocs.io/php/function.password-verify

(PHP 5 >= 5.5.0, PHP 7, PHP 8)

password_verify — Verifies that a password matches a hash

### Description

```
password_verify(#[\SensitiveParameter] string $password, string $hash): bool
```

Verifies that the given hash matches the given password. password_verify() is compatible with crypt(). Therefore, password hashes created by crypt() can be used with password_verify().

Note that password_hash() returns the algorithm, cost and salt as part of the returned hash. Therefore, all information that's needed to verify the hash is included in it. This allows the verify function to verify the hash without needing separate storage for the salt or algorithm information.

This function is safe against timing attacks.

### Parameters

The user's password.

A hash created by password_hash().

### Return Values

Returns true if the password and hash match, or false otherwise.

### Examples

Example #1 password_verify() example

This is a simplified example; it is recommended to rehash a correct password if necessary; see password_needs_rehash() for an example.

```
<?php
// See the password_hash() example to see where this came from.
$hash = '$2y$12$4Umg0rCJwMswRw/l.SwHvuQV01coP0eWmGzd61QH2RvAOMANUBGC.';

if (password_verify('rasmuslerdorf', $hash)) {
    echo 'Password is valid!';
} else {
    echo 'Invalid password.';
}
?>
```

The above example will output:

```
Password is valid!
```

### See Also

- password_needs_rehash() - Checks if the given hash matches the given options
- password_hash() - Creates a password hash
- sodium_crypto_pwhash_str_verify() - Verifies that a password matches a hash

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.password-verify.php
