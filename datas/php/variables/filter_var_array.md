# filter_var_array

Source: https://devdocs.io/php/function.filter-var-array

(PHP 5 >= 5.2.0, PHP 7, PHP 8)

filter_var_array — Gets multiple variables and optionally filters them

### Description

```
filter_var_array(array $array, array|int $options = FILTER_DEFAULT, bool $add_empty = true): array|false|null
```

Filter an associative array of values using FILTER_VALIDATE_* validation filters, FILTER_SANITIZE_* sanitization filters, or custom filters.

### Parameters

Add missing keys as null to the return value.

### Return Values

An array containing the values of the requested variables on success, or false on failure. An array value will be false if the filter fails, or null if the variable is not set.

### Examples

Example #1 A filter_var_array() example

```
<?php

$data = [
    'product_id' => 'libgd<script>',
    'component'  => '10',
    'versions'   => '2.0.33',
    'testscalar' => ['2', '23', '10', '12'],
    'testarray'  => '2',
];

$filters = [
    'product_id'   => FILTER_SANITIZE_ENCODED,
    'component'    => [
        'filter'   => FILTER_VALIDATE_INT,
        'flags'    => FILTER_FORCE_ARRAY,
        'options'  => [
            'min_range' => 1,
            'max_range' => 10,
        ],
    ],
    'versions'     => [
        'filter' => FILTER_SANITIZE_ENCODED
    ],
    'testscalar'   => [
        'filter' => FILTER_VALIDATE_INT,
        'flags'  => FILTER_REQUIRE_SCALAR,
    ],
    'testarray'    => [
        'filter' => FILTER_VALIDATE_INT,
        'flags'  => FILTER_FORCE_ARRAY,
    ],
    'doesnotexist' => FILTER_VALIDATE_INT,
];

var_dump(filter_var_array($data, $filters));

?>
```

The above example will output:

```
array(6) {
  ["product_id"]=>
  string(17) "libgd%3Cscript%3E"
  ["component"]=>
  array(1) {
    [0]=>
    int(10)
  }
  ["versions"]=>
  string(6) "2.0.33"
  ["testscalar"]=>
  bool(false)
  ["testarray"]=>
  array(1) {
    [0]=>
    int(2)
  }
  ["doesnotexist"]=>
  NULL
}
```

### See Also

- filter_input_array() - Gets external variables and optionally filters them
- filter_var() - Filters a variable with a specified filter
- filter_input() - Gets a specific external variable by name and optionally filters it
- Validation filters FILTER_VALIDATE_*
- Sanitization filters FILTER_SANITIZE_*

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.filter-var-array.php
