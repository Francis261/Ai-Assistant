# ReflectionFunction::__toString

Source: https://devdocs.io/php/reflectionfunction.tostring

(PHP 5, PHP 7, PHP 8)

ReflectionFunction::__toString — Returns the string representation of the ReflectionFunction object

### Description

```
public ReflectionFunction::__toString(): string
```

Get a human-readable description of the function, its parameters and return values.

### Parameters

This function has no parameters.

### Return Values

The string.

### Examples

Example #1 ReflectionFunction::__toString() example

```
<?php
function title($title, $name)
{
    return sprintf("%s. %s\r\n", $title, $name);
}

echo new ReflectionFunction('title');
?>
```

The above example will output something similar to:

```
Function [ <user> function title ] {
  @@ Command line code 1 - 1

  - Parameters [2] {
    Parameter #0 [ <required> $title ]
    Parameter #1 [ <required> $name ]
  }
}
```

### See Also

- ReflectionFunction::export() - Exports function
- __toString()

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionfunction.tostring.php
