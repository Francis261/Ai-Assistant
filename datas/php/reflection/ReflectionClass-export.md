# ReflectionClass::export

Source: https://devdocs.io/php/reflectionclass.export

(PHP 5, PHP 7)

ReflectionClass::export — Exports a class

This function has been DEPRECATED as of PHP 7.4.0, and REMOVED as of PHP 8.0.0. Relying on this function is highly discouraged.

### Description

```
public static ReflectionClass::export(mixed $argument, bool $return = false): string
```

Exports a reflected class.

### Parameters

The reflection to export.

Setting to true will return the export, as opposed to emitting it. Setting to false (the default) will do the opposite.

### Return Values

If the return parameter is set to true, then the export is returned as a string, otherwise null is returned.

### Examples

Example #1 Basic usage of ReflectionClass::export()

```
<?php
class Apple {
    public $var1;
    public $var2 = 'Orange';

    public function type() {
        return 'Apple';
    }
}
ReflectionClass::export('Apple');
?>
```

The above example will output something similar to:

```
Class [ <user> class Apple ] {
  @@ php shell code 1-8

  - Constants [0] {
  }

  - Static properties [0] {
  }

  - Static methods [0] {
  }

  - Properties [2] {
    Property [ <default> public $var1 ]
    Property [ <default> public $var2 ]
  }

  - Methods [1] {
    Method [ <user> public method type ] {
      @@ php shell code 5 - 7
    }
  }
}
```

### See Also

- ReflectionClass::getName() - Gets class name
- ReflectionClass::__toString() - Returns the string representation of the ReflectionClass object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionclass.export.php
