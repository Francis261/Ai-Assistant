# Yaf_Application::getLastErrorNo

Source: https://devdocs.io/php/yaf-application.getlasterrorno

(Yaf >=2.1.2)

Yaf_Application::getLastErrorNo — Get code of last occurred error

### Description

```
public Yaf_Application::getLastErrorNo(): int
```

### Parameters

This function has no parameters.

### Return Values

### Examples

Example #1 Yaf_Application::getLastErrorNo()example

```
<?php
function error_handler($errno, $errstr, $errfile, $errline) {
   var_dump(Yaf_Application::app()->getLastErrorNo());
   var_dump(Yaf_Application::app()->getLastErrorNo() == YAF_ERR_NOTFOUND_CONTROLLER);
}

$config = array(
  "application" => array(
   "directory" => "/tmp/notexists",
     "dispatcher" => array(
       "throwException" => 0, //trigger error instead of throw exception when error occure
      ),
  ),
);

$app = new Yaf_Application($config);
$app->getDispatcher()->setErrorHandler("error_handler", E_RECOVERABLE_ERROR);
$app->run();
?>
```

The above example will output something similar to:

```
int(516)
bool(true)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/yaf-application.getlasterrorno.php
