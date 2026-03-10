# Yaf_Application::environ

Source: https://devdocs.io/php/yaf-application.environ

(Yaf >=1.0.0)

Yaf_Application::environ — Retrive environ

### Description

```
public Yaf_Application::environ(): void
```

Retrive environ which was defined in yaf.environ which has a default value "product".

### Parameters

This function has no parameters.

### Return Values

### Examples

Example #1 Yaf_Application::environ()example

```
<?php
$config = array(
    "application" => array(
        "directory" => realpath(dirname(__FILE__)) . "/application",
    ),
);

/** Yaf_Application */
$application = new Yaf_Application($config);
print_r($application->environ());
?>
```

The above example will output something similar to:

```
product
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/yaf-application.environ.php
