# enchant_broker_free_dict

Source: https://devdocs.io/php/function.enchant-broker-free-dict

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL enchant >= 0.1.0 )

enchant_broker_free_dict — Free a dictionary resource

This function has been DEPRECATED as of PHP 8.0.0. Relying on this function is highly discouraged.

### Description

```
#[\Deprecated] 
 enchant_broker_free_dict(EnchantDictionary $dictionary): bool
```

Free a dictionary. As of PHP 8.0.0, it is recommended to unset the object instead of calling this function.

### Parameters

An Enchant dictionary returned by enchant_broker_request_dict() or enchant_broker_request_pwl_dict().

### Return Values

Returns true on success or false on failure.

### Changelog

### See Also

- enchant_broker_request_dict() - Create a new dictionary using a tag
- enchant_broker_request_pwl_dict() - Creates a dictionary using a PWL file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.enchant-broker-free-dict.php
