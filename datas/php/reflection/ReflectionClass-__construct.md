# ReflectionClass::__construct

Source: https://devdocs.io/php/reflectionclass.construct

(PHP 5, PHP 7, PHP 8)

ReflectionClass::__construct — Constructs a ReflectionClass

### Description

Constructs a new ReflectionClass object.

### Parameters

Either a string containing the name of the class to reflect, or an object.

### Errors/Exceptions

Throws ReflectionException if the class to reflect does not exist.

### Examples

Example #1 Basic usage ReflectionClass

```
<?php
$reflection = new ReflectionClass('Exception');
echo $reflection;
?>
```

The above example will output something similar to:

```
Class [ <internal:Core> class Exception implements Stringable, Throwable ] {

  - Constants [0] {
  }

  - Static properties [0] {
  }

  - Static methods [0] {
  }

  - Properties [7] {
    Property [ protected $message = '' ]
    Property [ private string $string = '' ]
    Property [ protected $code = 0 ]
    Property [ protected string $file = '' ]
    Property [ protected int $line = 0 ]
    Property [ private array $trace = [] ]
    Property [ private ?Throwable $previous = NULL ]
  }

  - Methods [11] {
    Method [ <internal:Core> private method __clone ] {

      - Parameters [0] {
      }
      - Return [ void ]
    }

    Method [ <internal:Core, ctor> public method __construct ] {

      - Parameters [3] {
        Parameter #0 [ <optional> string $message = "" ]
        Parameter #1 [ <optional> int $code = 0 ]
        Parameter #2 [ <optional> ?Throwable $previous = null ]
      }
    }

    Method [ <internal:Core> public method __wakeup ] {

      - Parameters [0] {
      }
      - Tentative return [ void ]
    }

    Method [ <internal:Core, prototype Throwable> final public method getMessage ] {

      - Parameters [0] {
      }
      - Return [ string ]
    }

    Method [ <internal:Core, prototype Throwable> final public method getCode ] {

      - Parameters [0] {
      }
    }

    Method [ <internal:Core, prototype Throwable> final public method getFile ] {

      - Parameters [0] {
      }
      - Return [ string ]
    }

    Method [ <internal:Core, prototype Throwable> final public method getLine ] {

      - Parameters [0] {
      }
      - Return [ int ]
    }

    Method [ <internal:Core, prototype Throwable> final public method getTrace ] {

      - Parameters [0] {
      }
      - Return [ array ]
    }

    Method [ <internal:Core, prototype Throwable> final public method getPrevious ] {

      - Parameters [0] {
      }
      - Return [ ?Throwable ]
    }

    Method [ <internal:Core, prototype Throwable> final public method getTraceAsString ] {

      - Parameters [0] {
      }
      - Return [ string ]
    }

    Method [ <internal:Core, prototype Stringable> public method __toString ] {

      - Parameters [0] {
      }
      - Return [ string ]
    }
  }
}
```

### See Also

- ReflectionObject::__construct() - Constructs a ReflectionObject
- Constructors

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionclass.construct.php
