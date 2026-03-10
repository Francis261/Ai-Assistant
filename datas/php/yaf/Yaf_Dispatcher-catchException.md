# Yaf_Dispatcher::catchException

Source: https://devdocs.io/php/yaf-dispatcher.catchexception

(Yaf >=1.0.0)

Yaf_Dispatcher::catchException — Switch on/off exception catching

### Description

```
public Yaf_Dispatcher::catchException(bool $flag = ?): Yaf_Dispatcher
```

While the application.dispatcher.throwException is On(you can also calling to Yaf_Dispatcher::throwException(TRUE)() to enable it), Yaf will throw Exception when error occurs instead of trigger error.

then if you enable Yaf_Dispatcher::catchException()(also can enabled by set application.dispatcher.catchException), all uncaught Exceptions will be caught by ErrorController::error if you have defined one.

### Parameters

bool

### Return Values

### Examples

Example #1 Yaf_Dispatcher::catchException() example

```
/* if you defined a ErrorController like following */
<?php
class ErrorController extends Yaf_Controller_Abstract {
     /** 
      * you can also call to Yaf_Request_Abstract::getException to get the 
      * un-caught exception.
      */
     public function errorAction($exception) {
        /* error occurs */
        switch ($exception->getCode()) {
            case YAF_ERR_NOTFOUND_MODULE:
            case YAF_ERR_NOTFOUND_CONTROLLER:
            case YAF_ERR_NOTFOUND_ACTION:
            case YAF_ERR_NOTFOUND_VIEW:
                echo 404, ":", $exception->getMessage();
                break;
            default :
                $message = $exception->getMessage();
                echo 0, ":", $exception->getMessage();
                break;
        }
     } 
}
?>
```

The above example will output something similar to:

```
/* now if some error occur, assuming access a non-exists controller(or you can throw a exception yourself): */
404:Could not find controller script **/application/controllers/No-exists-controller.php
```

### See Also

- Yaf_Dispatcher::throwException() - Switch on/off exception throwing
- Yaf_Dispatcher::setErrorHandler() - Set error handler

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/yaf-dispatcher.catchexception.php
