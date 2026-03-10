# enchant_broker_free

Source: https://devdocs.io/php/function.enchant-broker-free

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL enchant >= 0.1.0 )

enchant_broker_free — Free the broker resource and its dictionaries

This function has been DEPRECATED as of PHP 8.0.0. Relying on this function is highly discouraged.

### Description

```
#[\Deprecated] 
 enchant_broker_free(EnchantBroker $broker): bool
```

Free a broker with all its dictionaries. As of PHP 8.0.0, it is recommended to unset the object instead of calling this function.

### Parameters

An Enchant broker returned by enchant_broker_init().

### Return Values

Returns true on success or false on failure.

### Changelog

### See Also

- enchant_broker_init() - Create a new broker object capable of requesting

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.enchant-broker-free.php
