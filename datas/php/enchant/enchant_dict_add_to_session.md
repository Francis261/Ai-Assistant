# enchant_dict_add_to_session

Source: https://devdocs.io/php/function.enchant-dict-add-to-session

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL enchant >= 0.1.0 )

enchant_dict_add_to_session — Add 'word' to this spell-checking session

### Description

```
enchant_dict_add_to_session(EnchantDictionary $dictionary, string $word): void
```

Add a word to the given dictionary. It will be added only for the active spell-checking session.

### Parameters

An Enchant dictionary returned by enchant_broker_request_dict() or enchant_broker_request_pwl_dict().

The word to add

### Return Values

No value is returned.

### Changelog

### See Also

- enchant_broker_request_dict() - Create a new dictionary using a tag

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.enchant-dict-add-to-session.php
