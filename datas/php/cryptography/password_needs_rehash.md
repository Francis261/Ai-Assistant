# password_needs_rehash

Source: https://devdocs.io/php/function.password-needs-rehash

(PHP 5 >= 5.5.0, PHP 7, PHP 8)

password_needs_rehash — Checks if the given hash matches the given options

### Description

```
password_needs_rehash(string $hash, string|int|null $algo, array $options = []): bool
```

This function checks to see if the supplied hash implements the algorithm and options provided. If not, it is assumed that the hash needs to be rehashed.

### Parameters

A hash created by password_hash().

A password algorithm constant denoting the algorithm to use when hashing the password.

An associative array containing options. See the password algorithm constants for documentation on the supported options for each algorithm.

### Return Values

Returns true if the hash should be rehashed to match the given algo and options, or false otherwise.

### Changelog

### Examples

Example #1 Usage of password_needs_rehash()

```
<?php

$password = 'rasmuslerdorf';
$hash = '$2y$12$4Umg0rCJwMswRw/l.SwHvuQV01coP0eWmGzd61QH2RvAOMANUBGC.';

$algorithm = PASSWORD_BCRYPT;
// bcrypt's cost parameter can change over time as hardware improves
$options = ['cost' => 13];

// Verify stored hash against plain-text password
if (password_verify($password, $hash)) {
    // Check if either the algorithm or the options have changed
    if (password_needs_rehash($hash, $algorithm, $options)) {
        // If so, create a new hash, and replace the old one
        $newHash = password_hash($password, $algorithm, $options);

        // Update the user record with the $newHash
    }

    // Perform the login.
}
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.password-needs-rehash.php
