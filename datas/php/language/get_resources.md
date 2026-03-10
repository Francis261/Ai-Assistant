# get_resources

Source: https://devdocs.io/php/function.get-resources

(PHP 7, PHP 8)

get_resources — Returns active resources

### Description

```
get_resources(?string $type = null): array
```

Returns an array of all currently active resources, optionally filtered by resource type.

Note: This function is meant for debugging and testing purposes. It is not supposed to be used in production environments, especially not to access or even manipulate resources which are normally not accessible (e.g. the underlying stream resource of SplFileObject instances).

### Parameters

If defined, this will cause get_resources() to only return resources of the given type. A list of resource types is available.

If the string Unknown is provided as the type, then only resources that are of an unknown type will be returned.

If omitted, all resources will be returned.

### Return Values

Returns an array of currently active resources, indexed by resource number.

### Changelog

### Examples

Example #1 Unfiltered get_resources()

```
<?php
$fp = tmpfile();
var_dump(get_resources());
?>
```

The above example will output something similar to:

```
array(1) {
  [1]=>
  resource(1) of type (stream)
}
```

Example #2 Filtered get_resources()

```
<?php
$fp = tmpfile();
var_dump(get_resources('stream'));
var_dump(get_resources('curl'));
?>
```

The above example will output something similar to:

```
array(1) {
  [1]=>
  resource(1) of type (stream)
}
array(0) {
}
```

### See Also

- get_loaded_extensions() - Returns an array with the names of all modules compiled and loaded
- get_defined_constants() - Returns an associative array with the names of all the constants and their values
- get_defined_functions() - Returns an array of all defined functions
- get_defined_vars() - Returns an array of all defined variables

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.get-resources.php
