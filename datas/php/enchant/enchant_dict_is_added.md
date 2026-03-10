# enchant_dict_is_added

Source: https://devdocs.io/php/function.enchant-dict-is-added

(PHP 8)

enchant_dict_is_added — Whether or not 'word' exists in this spelling-session

### Description

```
enchant_dict_is_added(EnchantDictionary $dictionary, string $word): bool
```

Tells whether or not a word already exists in the current session.

### Parameters

An Enchant dictionary returned by enchant_broker_request_dict() or enchant_broker_request_pwl_dict().

The word to lookup

### Return Values

Returns true if the word exists or false

### Changelog

### See Also

- enchant_dict_add_to_session() - Add 'word' to this spell-checking session

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.enchant-dict-is-added.php
