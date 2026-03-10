# ibase_field_info

Source: https://devdocs.io/php/function.ibase-field-info

(PHP 5, PHP 7 < 7.4.0)

ibase_field_info — Get information about a field

### Description

```
ibase_field_info(resource $result, int $field_number): array
```

Returns an array with information about a field after a select query has been run.

### Parameters

An InterBase result identifier.

Field offset.

### Return Values

Returns an array with the following keys: name, alias, relation, length and type.

### Examples

Example #1 ibase_field_info() example

```
<?php
$rs = ibase_query("SELECT * FROM tablename");
$coln = ibase_num_fields($rs);
for ($i = 0; $i < $coln; $i++) {
    $col_info = ibase_field_info($rs, $i);
    echo "name: ". $col_info['name']. "\n";
    echo "alias: ". $col_info['alias']. "\n";
    echo "relation: ". $col_info['relation']. "\n";
    echo "length: ". $col_info['length']. "\n";
    echo "type: ". $col_info['type']. "\n";
}
?>
```

### See Also

- ibase_num_fields() - Get the number of fields in a result set

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ibase-field-info.php
