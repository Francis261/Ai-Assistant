# enchant_broker_request_pwl_dict

Source: https://devdocs.io/php/function.enchant-broker-request-pwl-dict

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL enchant >= 0.1.0 )

enchant_broker_request_pwl_dict — Creates a dictionary using a PWL file

### Description

```
enchant_broker_request_pwl_dict(EnchantBroker $broker, string $filename): EnchantDictionary|false
```

Creates a dictionary using a PWL file. A PWL file is personal word file one word per line.

### Parameters

An Enchant broker returned by enchant_broker_init().

Path to the PWL file. If there is no such file, a new one will be created if possible.

### Return Values

Returns a dictionary resource on success or false on failure.

### Changelog

### See Also

- enchant_dict_describe() - Describes an individual dictionary
- enchant_broker_dict_exists() - Whether a dictionary exists or not. Using non-empty tag
- enchant_broker_free_dict() - Free a dictionary resource

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.enchant-broker-request-pwl-dict.php
