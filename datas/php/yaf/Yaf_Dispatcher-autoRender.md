# Yaf_Dispatcher::autoRender

Source: https://devdocs.io/php/yaf-dispatcher.autorender

(Yaf >=1.0.0)

Yaf_Dispatcher::autoRender — Switch on/off autorendering

### Description

```
public Yaf_Dispatcher::autoRender(bool $flag = ?): Yaf_Dispatcher
```

Yaf_Dispatcher will render automatically after dispatches a incoming request, you can prevent the rendering by calling this method with flag true

Note:

you can simply return false in a action to prevent the auto-rendering of that action

### Parameters

bool

Note:

since 2.2.0, if this parameter is not given, then the current state will be returned

### Return Values

### Examples

Example #1 Yaf_Dispatcher::autoRender() example

```
<?php
class IndexController extends Yaf_Controller_Abstract {
     /* init method will be called as soon as a controller is initialized */ 
     public function init() {
         if ($this->getRequest()->isXmlHttpRequest()) {
             //do not call render for ajax request
             //we will outpu a json string
             Yaf_Dispatcher::getInstance()->autoRender(FALSE);
         }
     } 

}
?>
```

The above example will output something similar to:

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/yaf-dispatcher.autorender.php
