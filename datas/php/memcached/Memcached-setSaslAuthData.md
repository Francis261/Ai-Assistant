# Memcached::setSaslAuthData

Source: https://devdocs.io/php/memcached.setsaslauthdata

(PECL memcached >= 2.0.0)

Memcached::setSaslAuthData — Set the credentials to use for authentication

### Description

```
public Memcached::setSaslAuthData(string $username, string $password): bool
```

Memcached::setSaslAuthData() sets the username and password that should be used for SASL authentication with the memcache servers.

This method is only available when the memcached extension is built with SASL support. Please refer to Memcached setup for how to do this.

### Parameters

The username to use for authentication.

The password to use for authentication.

### Return Values

Returns true on success or false on failure.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/memcached.setsaslauthdata.php
