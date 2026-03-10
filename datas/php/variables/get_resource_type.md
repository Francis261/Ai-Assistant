# get_resource_type

Source: https://devdocs.io/php/function.get-resource-type

(PHP 4 >= 4.0.2, PHP 5, PHP 7, PHP 8)

get_resource_type — Returns the resource type

### Description

```
get_resource_type(resource $resource): string
```

This function gets the type of the given resource.

### Parameters

The evaluated resource handle.

### Return Values

If the given resource is a resource, this function will return a string representing its type. If the type is not identified by this function, the return value will be the string Unknown.

This function will return null and generate an error if resource is not a resource.

### Examples

Example #1 get_resource_type() example

```
<?php
$fp = fopen("foo", "w");
echo get_resource_type($fp) . "\n";
?>
```

Output of the above example in PHP 7:

```
stream
```

### See Also

- get_resource_id() - Returns an integer identifier for the given resource

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.get-resource-type.php
