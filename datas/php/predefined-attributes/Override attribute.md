# The Override attribute

Source: https://devdocs.io/php/class.override

## Introduction

(PHP 8 >= 8.3.0)

This attribute is used to indicate that a method or a property is intended to override a method or a property of a parent class or that it implements a method or a property defined in an interface.

If no method or property with the same name exists in a parent class or in an implemented interface a compile-time error will be emitted.

The attribute cannot be used on the __construct() method, which is exempt from signature checks.

## Class synopsis

## Changelog

## Examples

Example #1 Usage with methods

```
<?php

class Base {
    protected function foo(): void {}
}

final class Extended extends Base {
    #[\Override]
    protected function boo(): void {}
}

?>
```

Output of the above example in PHP 8.3 is similar to:

```
Fatal error: Extended::boo() has #[\Override] attribute, but no matching parent method exists
```

Example #2 Usage with properties

```
<?php

class Base {
    protected string $foo;
}

final class Extended extends Base {
    #[\Override]
    protected string $boo;
}

?>
```

Output of the above example in PHP 8.5 is similar to:

```
Fatal error: Extended::$boo has #[\Override] attribute, but no matching parent property exists
```

## See Also

- Attributes overview

## Table of Contents

- Override::__construct — Construct a new Override attribute instance

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.override.php
