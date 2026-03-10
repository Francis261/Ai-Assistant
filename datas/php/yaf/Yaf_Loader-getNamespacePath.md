# Yaf_Loader::getNamespacePath

Source: https://devdocs.io/php/yaf-loader.getnamespacepath

(Yaf >=3.2.0)

Yaf_Loader::getNamespacePath — Retieve path of a registered namespace

### Description

```
public Yaf_Loader::getNamespacePath(string $namespaces): string
```

retrieve path of a registered namespace

### Parameters

a string of namespace.

### Return Values

string path, if the namespace is not registered, then null default library will be returned

### Examples

Example #1 Yaf_Loader::registerNamespace()example

```
<?php
$loader = Yaf_Loader::getInstance("/var/application/lib");
$loader->registerNamespace("\Vendor\PHP", "/var/lib/php");

$loader->getNamespacePath("\Vendor\PHP"); // '/var/lib/php'
$loader->getNamespacePath("\Vendor\JSP"); // '/var/application/lib'

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/yaf-loader.getnamespacepath.php
