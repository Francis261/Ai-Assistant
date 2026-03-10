# is_resource

Source: https://devdocs.io/php/function.is-resource

(PHP 4, PHP 5, PHP 7, PHP 8)

is_resource — Finds whether a variable is a resource

### Description

```
is_resource(mixed $value): bool
```

Finds whether the given variable is a resource.

### Parameters

The variable being evaluated.

### Return Values

Returns true if value is a resource, false otherwise.

### Examples

Example #1 is_resource() example

```
<?php

$handle = fopen("php://stdout", "w");
if (is_resource($handle)) {
    echo '$handle is a resource';
}

?>
```

The above example will output:

```
$handle is a resource
```

### Notes

Note:

is_resource() is not a strict type-checking method: it will return false if value is a resource variable that has been closed.

### See Also

- The resource-type documentation
- get_resource_type() - Returns the resource type

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.is-resource.php
