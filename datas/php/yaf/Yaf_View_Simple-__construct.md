# Yaf_View_Simple::__construct

Source: https://devdocs.io/php/yaf-view-simple.construct

(Yaf >=1.0.0)

Yaf_View_Simple::__construct — Constructor of Yaf_View_Simple

### Description

### Parameters

The base directory of the templates, by default, it is APPLICATOIN . "/views" for Yaf.

```
Options for the engine, as of Yaf 2.1.13, you can use short tag
      "<?=$var?>" in your template(regardless of "short_open_tag"), 
      so comes a option named "short_tag",  you can switch this off 
      to prevent use short_tag in template.
```

### Examples

Example #1 Yaf_View_Simple::__construct() example

```
<?php
   define ("TEMPLATE_DIRECTORY", APPLICATOIN_PATH . '/views');
   $view = new Yaf_View_Simple(TEMPLATE_DIRECTORY, array(
                           'short_tag' => false //doesn't allow use short tag in template
   ));
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/yaf-view-simple.construct.php
