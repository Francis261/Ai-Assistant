# Yaf_Application::getConfig

Source: https://devdocs.io/php/yaf-application.getconfig

(Yaf >=1.0.0)

Yaf_Application::getConfig — Retrive the config instance

### Description

```
public Yaf_Application::getConfig(): Yaf_Config_Abstract
```

### Parameters

This function has no parameters.

### Return Values

A Yaf_Config_Abstract instance

### Examples

Example #1 Yaf_Application::getConfig()example

```
<?php
$config = array(
    "application" => array(
        "directory" => realpath(dirname(__FILE__)) . "/application",
    ),
);

/** Yaf_Application */
$application = new Yaf_Application($config);
print_r($application->getConfig());
?>
```

The above example will output something similar to:

```
Yaf_Config_Simple Object
(
    [_config:protected] => Array
        (
            [application] => Array
                (
                    [directory] => /home/laruence/local/www/htdocs/application
                )

        )

    [_readonly:protected] => 1
)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/yaf-application.getconfig.php
