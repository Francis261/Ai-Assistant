# ibase_param_info

Source: https://devdocs.io/php/function.ibase-param-info

(PHP 5, PHP 7 < 7.4.0)

ibase_param_info — Return information about a parameter in a prepared query

### Description

```
ibase_param_info(resource $query, int $param_number): array
```

Returns an array with information about a parameter after a query has been prepared.

### Parameters

An InterBase prepared query handle.

Parameter offset.

### Return Values

Returns an array with the following keys: name, alias, relation, length and type.

### See Also

- ibase_field_info() - Get information about a field
- ibase_num_params() - Return the number of parameters in a prepared query

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ibase-param-info.php
