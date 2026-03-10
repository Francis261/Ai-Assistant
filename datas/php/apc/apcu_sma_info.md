# apcu_sma_info

Source: https://devdocs.io/php/function.apcu-sma-info

(PECL apcu >= 4.0.0)

apcu_sma_info — Retrieves APCu Shared Memory Allocation information

### Description

```
apcu_sma_info(bool $limited = false): array|false
```

Retrieves APCu Shared Memory Allocation information.

### Parameters

When set to false (default) apcu_sma_info() will return a detailed information about each segment.

### Return Values

Array of Shared Memory Allocation data; false on failure.

### Examples

Example #1 A apcu_sma_info() example

```
<?php
print_r(apcu_sma_info());
?>
```

The above example will output something similar to:

```
Array
(
    [num_seg] => 1
    [seg_size] => 31457280
    [avail_mem] => 31448408
    [block_lists] => Array
        (
            [0] => Array
                (
                    [0] => Array
                        (
                            [size] => 31448408
                            [offset] => 8864
                        )

                )

        )

)
```

### See Also

- APCu configuration directives

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.apcu-sma-info.php
