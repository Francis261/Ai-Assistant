# enchant_dict_suggest

Source: https://devdocs.io/php/function.enchant-dict-suggest

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL enchant >= 0.1.0 )

enchant_dict_suggest — Will return a list of values if any of those pre-conditions are not met

### Description

```
enchant_dict_suggest(EnchantDictionary $dictionary, string $word): array
```

### Parameters

An Enchant dictionary returned by enchant_broker_request_dict() or enchant_broker_request_pwl_dict().

Word to use for the suggestions.

### Return Values

Will returns an array of suggestions if the word is bad spelled.

### Changelog

### Examples

Example #1 A enchant_dict_suggest() example

```
<?php
$tag = 'en_US';
$r = enchant_broker_init();
if (enchant_broker_dict_exists($r,$tag)) {
    $d = enchant_broker_request_dict($r, $tag);

    $wordcorrect = enchant_dict_check($d, "soong");
    if (!$wordcorrect) {
        $suggs = enchant_dict_suggest($d, "soong");
        echo "Suggestions for 'soong':";
        print_r($suggs);
    }
}
?>
```

### See Also

- enchant_dict_check() - Check whether a word is correctly spelled or not
- enchant_dict_quick_check() - Check the word is correctly spelled and provide suggestions

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.enchant-dict-suggest.php
