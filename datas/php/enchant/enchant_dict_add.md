# enchant_dict_add

Source: https://devdocs.io/php/function.enchant-dict-add

(PHP 8)

enchant_dict_add — Add a word to personal word list

### Description

```
enchant_dict_add(EnchantDictionary $dictionary, string $word): void
```

Add a word to personal word list of the given dictionary.

### Parameters

An Enchant dictionary returned by enchant_broker_request_dict() or enchant_broker_request_pwl_dict().

The word to add

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 Adding a word to a PWL

```
<?php

$filename = './my_word_list.pwl';
$word = 'Supercalifragilisticexpialidocious';

$broker = enchant_broker_init();
$dict = enchant_broker_request_pwl_dict($broker, $filename);

enchant_dict_add($dict, $word);

?>
```

### See Also

- enchant_broker_request_pwl_dict() - Creates a dictionary using a PWL file
- enchant_broker_request_dict() - Create a new dictionary using a tag

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.enchant-dict-add.php
