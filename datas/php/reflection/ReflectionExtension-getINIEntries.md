# ReflectionExtension::getINIEntries

Source: https://devdocs.io/php/reflectionextension.getinientries

(PHP 5, PHP 7, PHP 8)

ReflectionExtension::getINIEntries — Gets extension ini entries

### Description

```
public ReflectionExtension::getINIEntries(): array
```

Get the ini entries for an extension.

### Parameters

This function has no parameters.

### Return Values

An associative array with the ini entries as keys, with their defined values as values.

### Examples

Example #1 ReflectionExtension::getINIEntries() example

```
<?php
$ext = new ReflectionExtension('mysql');

print_r($ext->getINIEntries());
?>
```

The above example will output something similar to:

```
Array
(
    [mysql.allow_persistent] => 1
    [mysql.max_persistent] => -1
    [mysql.max_links] => -1
    [mysql.default_host] => 
    [mysql.default_user] => 
    [mysql.default_password] => 
    [mysql.default_port] => 
    [mysql.default_socket] => 
    [mysql.connect_timeout] => 60
    [mysql.trace_mode] => 
    [mysql.allow_local_infile] => 1
    [mysql.cache_size] => 2000
)
```

### See Also

- ini_get_all() - Gets all configuration options
- ReflectionExtension::getConstants() - Gets constants

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionextension.getinientries.php
