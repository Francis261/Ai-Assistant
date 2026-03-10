# ibase_num_fields

Source: https://devdocs.io/php/function.ibase-num-fields

(PHP 5, PHP 7 < 7.4.0)

ibase_num_fields — Get the number of fields in a result set

### Description

```
ibase_num_fields(resource $result_id): int
```

Get the number of fields in a result set.

### Parameters

An InterBase result identifier.

### Return Values

Returns the number of fields as an integer.

### Examples

Example #1 ibase_num_fields() example

```
<?php
$rs = ibase_query("SELECT * FROM tablename");
$coln = ibase_num_fields($rs);
for ($i = 0; $i < $coln; $i++) {
    $col_info = ibase_field_info($rs, $i);
    echo "name: " . $col_info['name'] . "\n";
    echo "alias: " . $col_info['alias'] . "\n";
    echo "relation: " . $col_info['relation'] . "\n";
    echo "length: " . $col_info['length'] . "\n";
    echo "type: " . $col_info['type'] . "\n";
}
?>
```

### See Also

- ibase_field_info() - Get information about a field

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ibase-num-fields.php
