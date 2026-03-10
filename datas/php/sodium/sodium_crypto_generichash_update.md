# sodium_crypto_generichash_update

Source: https://devdocs.io/php/function.sodium-crypto-generichash-update

(PHP 7 >= 7.2.0, PHP 8)

sodium_crypto_generichash_update — Add message to a hash

### Description

```
sodium_crypto_generichash_update(string &$state, string $message): true
```

Appends a message to the internal hash state.

### Parameters

The return value of sodium_crypto_generichash_init().

Data to append to the hashing state.

### Return Values

Always returns true.

### Examples

Example #1 sodium_crypto_generichash_update() example

```
<?php
$messages = [random_bytes(32), random_bytes(32), random_bytes(16)];
$state = sodium_crypto_generichash_init();
foreach ($messages as $message) {
    sodium_crypto_generichash_update($state, $message);
}
$final = sodium_crypto_generichash_final($state);
var_dump(sodium_bin2hex($final));

$allAtOnce = sodium_crypto_generichash(implode('', $messages));
var_dump(sodium_bin2hex($allAtOnce));
?>
```

The above example will output something similar to:

```
string(64) "e16e28bbbbcc39d9f5b1cbc33c41f1d217808640103e57a41f24870f79831e04"
string(64) "e16e28bbbbcc39d9f5b1cbc33c41f1d217808640103e57a41f24870f79831e04"
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sodium-crypto-generichash-update.php
