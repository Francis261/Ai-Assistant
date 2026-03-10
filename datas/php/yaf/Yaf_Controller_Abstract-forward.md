# Yaf_Controller_Abstract::forward

Source: https://devdocs.io/php/yaf-controller-abstract.forward

(Yaf >=1.0.0)

Yaf_Controller_Abstract::forward — Forward to another action

### Description

```
public Yaf_Controller_Abstract::forward(string $action, array $paramters = ?): bool
```

```
public Yaf_Controller_Abstract::forward(string $controller, string $action, array $paramters = ?): bool
```

```
public Yaf_Controller_Abstract::forward(
 string $module,
 string $controller,
 string $action,
 array $paramters = ?
): bool
```

forward current execution process to other action.

Note:

this method doesn't switch to the destination action immediately, it will take place after current flow finish.

### Parameters

destination module name, if NULL was given, then default module name is assumed

destination controller name

destination action name

calling arguments

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Yaf_Controller_Abstract::forward()example

```
<?php
class IndexController extends Yaf_Controller_Abstract
{
    public function indexAction(){   
         $logined = $_SESSION["login"];
         if (!$logined) {
             $this->forward("login", array("from" => "Index")); // forward to login action
             return FALSE;  // this is important, this finish current working flow
                            // and tell the Yaf do not doing auto-render
         }

         // other processes
    }

    public function loginAction() {
         echo "login, redirected from ", $this->_request->getParam("from") , " action";
    }
}
?>
```

The above example will output something similar to:

```
login, redirected from Index action
```

### See Also

- Yaf_Request_Abstrace::getParam()

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/yaf-controller-abstract.forward.php
