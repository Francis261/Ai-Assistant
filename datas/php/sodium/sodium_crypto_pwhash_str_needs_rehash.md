# sodium_crypto_pwhash_str_needs_rehash

Source: https://devdocs.io/php/function.sodium-crypto-pwhash-str-needs-rehash

(PHP 7 >= 7.2.0, PHP 8)

sodium_crypto_pwhash_str_needs_rehash — Determine whether or not to rehash a password

### Description

```
sodium_crypto_pwhash_str_needs_rehash(string $password, int $opslimit, int $memlimit): bool
```

Determine whether or not to rehash a password, based on the current hash opslimit and memlimit.

### Parameters

Password hash

Configured opslimit; see sodium_crypto_pwhash_str()

Configured memlimit; see sodium_crypto_pwhash_str()

### Return Values

Returns true if the provided memlimit/opslimit do not match what's stored in the hash. Returns false if they match.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sodium-crypto-pwhash-str-needs-rehash.php
