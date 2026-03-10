# Yaf_Application::execute

Source: https://devdocs.io/php/yaf-application.execute

(Yaf >=1.0.0)

Yaf_Application::execute — Execute a callback

### Description

```
public Yaf_Application::execute(callable $entry, string ...$args): void
```

This method is typically used to run Yaf_Application in a crontab work. Make the crontab work can also use the autoloader and Bootstrap mechanism.

### Parameters

a valid callback

parameters will pass to the callback

### Return Values

### Examples

Example #1 Yaf_Application::execute()example

```
<?php
function main($argc, $argv) {
}

$config = array(
    "application" => array(
        "directory" => realpath(dirname(__FILE__)) . "/application",
    ),
);

/** Yaf_Application */
$application = new Yaf_Application($config);
$application->execute("main", $argc,  $argv);
?>
```

The above example will output something similar to:

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/yaf-application.execute.php
