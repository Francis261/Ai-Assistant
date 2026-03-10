# Threaded::extend

Source: https://devdocs.io/php/threaded.extend

(PECL pthreads >= 2.0.8)

Threaded::extend — Runtime Manipulation

### Description

```
public Threaded::extend(string $class): bool
```

Makes thread safe standard class at runtime

### Parameters

The class to extend

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Runtime inheritance

```
<?php
class My {}

Threaded::extend(My::class);

$my = new My();

var_dump($my instanceof Threaded);
?>
```

The above example will output:

```
bool(true)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/threaded.extend.php
