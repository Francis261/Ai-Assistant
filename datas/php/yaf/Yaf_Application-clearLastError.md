# Yaf_Application::clearLastError

Source: https://devdocs.io/php/yaf-application.clearlasterror

(Yaf >=2.1.2)

Yaf_Application::clearLastError — Clear the last error info

### Description

```
public Yaf_Application::clearLastError(): Yaf_Application
```

### Parameters

This function has no parameters.

### Return Values

### Examples

Example #1 Yaf_Application::clearLastError()example

```
<?php
function error_handler($errno, $errstr, $errfile, $errline) {
   Yaf_Application::app()->clearLastError();
   var_dump(Yaf_Application::app()->getLastErrorNo());
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
int(0)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/yaf-application.clearlasterror.php
