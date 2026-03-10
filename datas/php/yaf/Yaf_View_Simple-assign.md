# Yaf_View_Simple::assign

Source: https://devdocs.io/php/yaf-view-simple.assign

(Yaf >=1.0.0)

Yaf_View_Simple::assign — Assign values

### Description

```
public Yaf_View_Simple::assign(string $name, mixed $value = ?): bool
```

assign variable to view engine

### Parameters

A string or an array.

if is string, then the next argument $value is required.

mixed value

### Return Values

### Examples

Example #1 Yaf_View_Simple::assign()example

```
<?php
class IndexController extends Yaf_Controller_Abstract {
    public function indexAction() {
        $this->getView()->assign("foo", "bar");
        $this->_view->assign( array( "key" => "value", "name" => "value"));
    }
}
?>
```

Example #2 Template example

```
<html>
 <head>
  <title><?php echo $foo; ?></title>
 </head>  
<body>
  <?php 
    foreach ($this->_tpl_vars as $name => $value) {
         echo $$name; // or echo $this->_tpl_vars[$name];
    }
  ?>
</body>
</html>
```

### See Also

- Yaf_View_Simple::assignRef() - The assignRef purpose
- Yaf_View_Interface::clear()
- Yaf_View_Simple::__set() - Set value to engine

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/yaf-view-simple.assign.php
