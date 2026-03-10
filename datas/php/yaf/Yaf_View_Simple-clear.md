# Yaf_View_Simple::clear

Source: https://devdocs.io/php/yaf-view-simple.clear

(Yaf >=2.2.0)

Yaf_View_Simple::clear — Clear Assigned values

### Description

```
public Yaf_View_Simple::clear(string $name = ?): bool
```

clear assigned variable

### Parameters

assigned variable name

if empty, will clear all assigned variables

### Return Values

### Examples

Example #1 Yaf_View_Simple::clear()example

```
<?php
class IndexController extends Yaf_Controller_Abstract {
    public function indexAction() {
        $this->getView()->clear("foo")->clear("bar"); // clear "foo" and "bar"
        $this->_view->clear(); //clear all assigned variables
    }
}
?>
```

### See Also

- Yaf_View_Simple::assignRef() - The assignRef purpose
- Yaf_View_Interface::assign() - Assign value to View engine
- Yaf_View_Simple::__set() - Set value to engine

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/yaf-view-simple.clear.php
