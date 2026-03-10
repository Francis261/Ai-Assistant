# Yaf_Application::getModules

Source: https://devdocs.io/php/yaf-application.getmodules

(Yaf >=1.0.0)

Yaf_Application::getModules — Get defined module names

### Description

```
public Yaf_Application::getModules(): array
```

Get the modules list defined in config, if no one defined, there will always be a module named "Index".

### Parameters

This function has no parameters.

### Return Values

### Examples

Example #1 Yaf_Application::getModules()example

```
<?php
$config = array(
    "application" => array(
        "directory" => realpath(dirname(__FILE__)) . "/application",
    ),
);

/** Yaf_Application */
$application = new Yaf_Application($config);
print_r($application->getModules());
?>
```

The above example will output something similar to:

```
Array
(
    [0] => Index
)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/yaf-application.getmodules.php
