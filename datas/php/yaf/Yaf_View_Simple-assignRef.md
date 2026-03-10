# Yaf_View_Simple::assignRef

Source: https://devdocs.io/php/yaf-view-simple.assignref

(Yaf >=1.0.0)

Yaf_View_Simple::assignRef — The assignRef purpose

### Description

```
public Yaf_View_Simple::assignRef(string $name, mixed &$value): bool
```

unlike Yaf_View_Simple::assign(), this method assign a ref value to engine.

### Parameters

A string name which will be used to access the value in the tempalte.

mixed value

### Return Values

### Examples

Example #1 Yaf_View_Simple::assignRef()example

```
<?php
class IndexController extends Yaf_Controller_Abstract {
    public function indexAction() {
        $value = "bar";
        $this->getView()->assign("foo", $value);

        /* plz note that there was a bug before Yaf 2.1.4, 
         * which make following output "bar";
         */
        $dummy = $this->getView()->render("index/index.phtml");
        echo $value;

        //prevent the auto-render
        Yaf_Dispatcher::getInstance()->autoRender(FALSE);
    }
}
?>
```

Example #2 Template example

```
<html>
 <head>
  <title><?php echo $foo;  $foo = "changed"; ?></title>
 </head>  
<body>
</body>
</html>
```

The above example will output something similar to:

```
/* access the index controller will result: */
changed
```

### See Also

- Yaf_View_Simple::assign() - Assign values
- Yaf_View_Simple::__set() - Set value to engine

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/yaf-view-simple.assignref.php
