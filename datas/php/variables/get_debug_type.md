# get_debug_type

Source: https://devdocs.io/php/function.get-debug-type

(PHP 8)

get_debug_type — Gets the type name of a variable in a way that is suitable for debugging

### Description

```
get_debug_type(mixed $value): string
```

Returns the resolved name of the PHP variable value. This function will resolve objects to their class name, resources to their resource type name, and scalar values to their common name as would be used in type declarations.

This function differs from gettype() in that it returns type names that are more consistent with actual usage, rather than those present for historical reasons.

### Parameters

The variable being type checked.

### Return Values

Possible values for the returned string are:

### Examples

Example #1 get_debug_type() example

```
<?php

namespace Foo;

echo get_debug_type(null), PHP_EOL;
echo get_debug_type(true), PHP_EOL;
echo get_debug_type(1), PHP_EOL;
echo get_debug_type(0.1), PHP_EOL;
echo get_debug_type("foo"), PHP_EOL;
echo get_debug_type([]), PHP_EOL;

$fp = fopen('/examples/book.xml', 'rb');
echo get_debug_type($fp), PHP_EOL;

fclose($fp);
echo get_debug_type($fp), PHP_EOL;

echo get_debug_type(new \stdClass), PHP_EOL;
echo get_debug_type(new class {}), PHP_EOL;

interface A {}
interface B {}
class C {}

echo get_debug_type(new class implements A {}), PHP_EOL;
echo get_debug_type(new class implements A,B {}), PHP_EOL;
echo get_debug_type(new class extends C {}), PHP_EOL;
echo get_debug_type(new class extends C implements A {}), PHP_EOL;

?>
```

The above example will output something similar to:

```
null
bool
int
float
string
array
resource (stream)
resource (closed)
stdClass
class@anonymous
Foo\A@anonymous
Foo\A@anonymous
Foo\C@anonymous
Foo\C@anonymous
```

### See Also

- gettype() - Get the type of a variable
- get_class() - Returns the name of the class of an object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.get-debug-type.php
