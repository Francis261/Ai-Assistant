# ReflectionClass::__toString

Source: https://devdocs.io/php/reflectionclass.tostring

(PHP 5, PHP 7, PHP 8)

ReflectionClass::__toString — Returns the string representation of the ReflectionClass object

### Description

```
public ReflectionClass::__toString(): string
```

Returns the string representation of the ReflectionClass object.

### Parameters

This function has no parameters.

### Return Values

A string representation of this ReflectionClass instance.

### Examples

Example #1 ReflectionClass::__toString() example

```
<?php
$reflectionClass = new ReflectionClass('Exception');
echo $reflectionClass->__toString();
?>
```

The above example will output:

```
Class [ <internal:Core> class Exception ] {

  - Constants [0] {
  }

  - Static properties [0] {
  }

  - Static methods [0] {
  }

  - Properties [7] {
    Property [ <default> protected $message ]
    Property [ <default> private $string ]
    Property [ <default> protected $code ]
    Property [ <default> protected $file ]
    Property [ <default> protected $line ]
    Property [ <default> private $trace ]
    Property [ <default> private $previous ]
  }

  - Methods [10] {
    Method [ <internal:Core> final private method __clone ] {
    }

    Method [ <internal:Core, ctor> public method __construct ] {

      - Parameters [3] {
        Parameter #0 [ <optional> $message ]
        Parameter #1 [ <optional> $code ]
        Parameter #2 [ <optional> $previous ]
      }
    }

    Method [ <internal:Core> final public method getMessage ] {
    }

    Method [ <internal:Core> final public method getCode ] {
    }

    Method [ <internal:Core> final public method getFile ] {
    }

    Method [ <internal:Core> final public method getLine ] {
    }

    Method [ <internal:Core> final public method getTrace ] {
    }

    Method [ <internal:Core> final public method getPrevious ] {
    }

    Method [ <internal:Core> final public method getTraceAsString ] {
    }

    Method [ <internal:Core> public method __toString ] {
    }
  }
}
```

### See Also

- ReflectionClass::export() - Exports a class
- __toString()

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionclass.tostring.php
