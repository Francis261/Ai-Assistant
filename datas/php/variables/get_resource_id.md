# get_resource_id

Source: https://devdocs.io/php/function.get-resource-id

(PHP 8)

get_resource_id — Returns an integer identifier for the given resource

### Description

```
get_resource_id(resource $resource): int
```

This function provides a type-safe way for generating the integer identifier for a resource.

### Parameters

The evaluated resource handle.

### Return Values

The int identifier for the given resource.

This function is essentially an int cast of resource to make it easier to retrieve the resource ID.

### Examples

Example #1 get_resource_id() produces the same result as an int cast

```
<?php
$handle = fopen("php://stdout", "w");

echo (int) $handle . "\n";

echo get_resource_id($handle);

?>
```

The above example will output something similar to:

```
698
698
```

### See Also

- get_resource_type() - Returns the resource type

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.get-resource-id.php
