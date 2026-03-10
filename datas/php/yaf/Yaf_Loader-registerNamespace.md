# Yaf_Loader::registerNamespace

Source: https://devdocs.io/php/yaf-loader.registernamespace

(Yaf >=3.2.0)

Yaf_Loader::registerNamespace — Register namespace with searching path

### Description

```
public Yaf_Loader::registerNamespace(string|array $namespaces, string $path = ?): bool
```

Register a namespace with searching path, Yaf_Loader searchs classes under this namespace in path, the one is also could be configureded via application.library.directory.namespace(in application.ini);

Note:

Yaf still think underline as folder separator.

### Parameters

a string of namespace, or a array of namespaces with paths.

a string of path, it is better to use abosolute path here for performance

### Return Values

bool

### Examples

Example #1 Yaf_Loader::registerNamespace()example

```
<?php
$loader = Yaf_Loader::getInstance();
$loader->registerNamespace("\Vendor\PHP", "/var/lib/php");
$loader->registerNamespace(array(
     "\Vendor\ASP" => "/var/lib/asp",
     "\Vendor\JSP" => "/usr/lib/vendor/",
));

$loader->autoload("\Vendor\PHP\Dummy");   //load '/var/lib/php/Dummy.php'
$loader->autoload("\Vendor\PHP\Foo_Bar"); //load '/var/lib/php/Foo/Bar.php'
$loader->autoload("\Vendor\JSP\Dummy");   //load '/usr/lib/vendor/Dummy.php'

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/yaf-loader.registernamespace.php
