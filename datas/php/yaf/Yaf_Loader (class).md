# The Yaf_Loader class

Source: https://devdocs.io/php/class.yaf-loader

## Introduction

(Yaf >=1.0.0)

Yaf_Loader introduces a comprehensive autoloading solution for Yaf.

The first time an instance of Yaf_Application is retrieved, Yaf_Loader will instance a singleton, and registers itself with spl_autoload. You retrieve an instance using the Yaf_Loader::getInstance()

Yaf_Loader attempt to load a class only one shot, if failed, depend on yaf.use_spl_auload, if this config is On Yaf_Loader::autoload() will return false, thus give the chance to other autoload function. if it is Off (by default), Yaf_Loader::autoload() will return true, and more important is that a very useful warning will be triggered (very useful to find out why a class could not be loaded).

Note:

Please keep yaf.use_spl_autoload Off unless there is some library have their own autoload mechanism and impossible to rewrite it.

By default, Yaf_Loader assume all library (class defined script) store in the global library directory, which is defined in the php.ini(yaf.library).

If you want Yaf_Loader search some classes(libraries) in the local class directory(which is defined in application.ini, and by default, it is application.directory . "/library"), you should register the class prefix using the Yaf_Loader::registerLocalNameSpace()

Let's see some examples(assuming APPLICATION_PATH is application.directory):

Example #1 Config example

```
// Assuming the following configure in php.ini:
yaf.library = "/global_dir"

//Assuming the following configure in application.ini
application.library = APPLICATION_PATH "/library"
```

Example #2 Register localnamespace

```
<?php
class Bootstrap extends Yaf_Bootstrap_Abstract{
     public function _initLoader($dispatcher) {
          Yaf_Loader::getInstance()->registerLocalNameSpace(array("Foo", "Bar"));
     }
}
?>
```

Example #3 Load class example

```
class Foo_Bar_Test =>
  // APPLICATION_PATH/library/Foo/Bar/Test.php
  
class GLO_Name  =>
  // /global_dir/Glo/Name.php
 
class BarNon_Test
  // /global_dir/Barnon/Test.php
```

Example #4 Load namespace class example

```
class \Foo\Bar\Dummy =>
   // APPLICATION_PATH/library/Foo/Bar/Dummy.php

class \FooBar\Bar\Dummy =>
   // /global_dir/FooBar/Bar/Dummy.php
```

You may noticed that all the folder with the first letter capitalized, you can make them lowercase by set yaf.lowcase_path = On in php.ini

Yaf_Loader is also designed to load the MVC classes, and the rule is:

Example #5 MVC class loading example

```
Controller Classes =>
// APPLICATION_PATH/controllers/

Model Classes =>
// APPLICATION_PATH/models/

Plugin Classes =>
// APPLICATION_PATH/plugins/
```

Example #6 MVC class distinctions

```
Controller Classes =>
    // ***Controller

Model Classes =>
    // ***Model

Plugin Classes =>
    // ***Plugin
```

Example #7 MVC loading example

```
class IndexController
    // APPLICATION_PATH/controllers/Index.php

class DataModel =>
   // APPLICATION_PATH/models/Data.php

class DummyPlugin =>
  // APPLICATION_PATH/plugins/Dummy.php

class A_B_TestModel =>
  // APPLICATION_PATH/models/A/B/Test.php
```

Note:

As of 2.1.18, Yaf supports Controllers autoloading for user script side, (which means the autoloading triggered by user php script, eg: access a controller static property in Bootstrap or Plugins), but autoloader only try to locate controller class script under the default module folder, which is "APPLICATION_PATH/controllers/".

## Class synopsis

```
public autoload(): void
```

```
public clearLocalNamespace(): void
```

```
public static getInstance(): void
```

```
public getLibraryPath(bool $is_global = false): Yaf_Loader
```

```
public getLocalNamespace(): void
```

```
public getNamespacePath(string $namespaces): string
```

```
public getNamespaces(): array
```

```
public static import(): void
```

```
public isLocalName(): void
```

```
public registerLocalNamespace(mixed $prefix): void
```

```
public registerNamespace(string|array $namespaces, string $path = ?): bool
```

```
public setLibraryPath(string $directory, bool $is_global = false): Yaf_Loader
```

## Properties

By default, this value is application.directory . "/library", you can change this either in the application.ini(application.library) or call to Yaf_Loader::setLibraryPath()

## Table of Contents

- Yaf_Loader::autoload — The autoload purpose
- Yaf_Loader::clearLocalNamespace — The clearLocalNamespace purpose
- Yaf_Loader::__construct — The __construct purpose
- Yaf_Loader::getInstance — The getInstance purpose
- Yaf_Loader::getLibraryPath — Get the library path
- Yaf_Loader::getLocalNamespace — The getLocalNamespace purpose
- Yaf_Loader::getNamespacePath — Retieve path of a registered namespace
- Yaf_Loader::getLocalNamespace — Retrive all register namespaces info
- Yaf_Loader::import — The import purpose
- Yaf_Loader::isLocalName — The isLocalName purpose
- Yaf_Loader::registerLocalNamespace — Register local class prefix
- Yaf_Loader::registerNamespace — Register namespace with searching path
- Yaf_Loader::setLibraryPath — Change the library path

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.yaf-loader.php
