# Yaf_View_Simple::__set

Source: https://devdocs.io/php/yaf-view-simple.set

(Yaf >=1.0.0)

Yaf_View_Simple::__set — Set value to engine

### Description

```
public Yaf_View_Simple::__set(string $name, mixed $value): void
```

This is a alternative and easier way to Yaf_View_Simple::assign().

### Parameters

A string value name.

Mixed value.

### Return Values

### Examples

Example #1 Yaf_View_Simple::__set()example

```
<?php
class IndexController extends Yaf_Controller_Abstract {
    public function indexAction() {
        $this->getView()->foo = "bar"; // same as assign("foo", "bar");
    }
}
?>
```

### See Also

- Yaf_View_Simple::assignRef() - The assignRef purpose
- Yaf_View_Interface::assign() - Assign value to View engine

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/yaf-view-simple.set.php
