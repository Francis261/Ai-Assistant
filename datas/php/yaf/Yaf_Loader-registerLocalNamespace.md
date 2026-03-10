# Yaf_Loader::registerLocalNamespace

Source: https://devdocs.io/php/yaf-loader.registerlocalnamespace

(Yaf >=1.0.0)

Yaf_Loader::registerLocalNamespace — Register local class prefix

### Description

```
public Yaf_Loader::registerLocalNamespace(mixed $prefix): void
```

Register local class prefix name, Yaf_Loader search classes in two library directories, the one is configured via application.library.directory(in application.ini) which is called local libraray directory; the other is configured via yaf.library (in php.ini) which is callled global library directory, since it can be shared by many applications in the same server.

When an autloading is trigger, Yaf_Loader will determine which library directory should be searched in by exame the prefix name of the missed classname. If the prefix name is registered as a localnamespack then look for it in local library directory, otherwise look for it in global library directory.

Note:

If yaf.library is not configured, then the global library directory is assumed to be the local library directory. in that case, all autoloading will look for local library directory. But if you want your Yaf application be strong, then always register your own classes as local classes.

### Parameters

a string or a array of class name prefix. all class prefix with these prefix will be loaded in local library path.

### Return Values

bool

### Examples

Example #1 Yaf_Loader::registerLocalNamespace()example

```
<?php
$loader = Yaf_Loader::getInstance('/local/library/', '/global/library');
$loader->registerLocalNamespace("Baidu");
$loader->registerLocalNamespace(array("Sina", "Weibo"));

$loader->autoload("Baidu_Name"); // search in '/local/library/'
$loader->autoload("Sina");       // search '/local/library/'
$loader->autoload("Global_Name");// search in '/global/library/'
$loader->autoload("Foo_Bar");    // search in '/global/library/'

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/yaf-loader.registerlocalnamespace.php
