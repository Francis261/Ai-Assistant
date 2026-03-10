# ReflectionExtension::getFunctions

Source: https://devdocs.io/php/reflectionextension.getfunctions

(PHP 5, PHP 7, PHP 8)

ReflectionExtension::getFunctions — Gets extension functions

### Description

```
public ReflectionExtension::getFunctions(): array
```

Get defined functions from an extension.

### Parameters

This function has no parameters.

### Return Values

An associative array of ReflectionFunction objects, for each function defined in the extension with the keys being the function names. If no function are defined, an empty array is returned.

### Examples

Example #1 ReflectionExtension::getFunctions() example

```
<?php
$dom = new ReflectionExtension('SimpleXML');

print_r($dom->getFunctions());
?>
```

The above example will output something similar to:

```
Array
(
    [simplexml_load_file] => ReflectionFunction Object
        (
            [name] => simplexml_load_file
        )

    [simplexml_load_string] => ReflectionFunction Object
        (
            [name] => simplexml_load_string
        )

    [simplexml_import_dom] => ReflectionFunction Object
        (
            [name] => simplexml_import_dom
        )

)
```

### See Also

- ReflectionExtension::getClasses() - Gets classes
- get_extension_funcs() - Returns an array with the names of the functions of a module

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionextension.getfunctions.php
