# Yaf_Action_Abstract::execute

Source: https://devdocs.io/php/yaf-action-abstract.execute

(Yaf >=1.0.0)

Yaf_Action_Abstract::execute — Action entry point

### Description

```
abstract publicYaf_Action_Abstract::execute(mixed ...$args): mixed
```

user should always define this method for a action, this is the entry point of an action. Yaf_Action_Abstract::execute() may have agruments.

Note:

The value retrived from the request is not safe. you should do some filtering work before you use it.

### Parameters

### Return Values

### Examples

Example #1 Yaf_Action_Abstract::execute()example

```
<?php
/** 
 * A controller example
 */
class ProductController extends Yaf_Controller_Abstract {
      protected $actions = array(
          "index" => "actions/Index.php",
      );
}
?>
```

Example #2 Yaf_Action_Abstract::execute()example

```
<?php
/** 
 * ListAction
 */
class ListAction extends Yaf_Action_Abstract {
     public function execute ($name, $id) {
         assert($name == $this->getRequest()->getParam("name"));
         assert($id   == $this->getRequest()->getParam("id"));
     }
}
?>
```

The above example will output something similar to:

```
/**
 * Now assuming we are using the Yaf_Route_Static route 
 * for request: http://yourdomain/product/list/name/yaf/id/22
 * will result:
 */
 bool(true)
 bool(true)
```

### See Also

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/yaf-action-abstract.execute.php
