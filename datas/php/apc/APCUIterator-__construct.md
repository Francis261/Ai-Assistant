# APCUIterator::__construct

Source: https://devdocs.io/php/apcuiterator.construct

(PECL apcu >= 5.0.0)

APCUIterator::__construct — Constructs an APCUIterator iterator object

### Description

Constructs an APCUIterator object.

### Parameters

Either a PCRE regular expression that matches against APCu key names, given as a string. Or an array of strings with APCu key names. Or, optionally null to skip the search.

The desired format, as configured with one or more of the APC_ITER_* constants.

The chunk size. Must be a value greater than 0. The default value is 100.

The type to list. Either pass in APC_LIST_ACTIVE or APC_LIST_DELETED.

### Examples

Example #1 A APCUIterator::__construct() example

```
<?php
foreach (new APCUIterator('/^counter\./') as $counter) {
    echo "$counter[key]: $counter[value]\n";
    apc_dec($counter['key'], $counter['value']);
}
?>
```

### See Also

- apcu_exists() - Checks if entry exists
- apcu_cache_info() - Retrieves cached information from APCu's data store

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/apcuiterator.construct.php
