# apcu_inc

Source: https://devdocs.io/php/function.apcu-inc

(PECL apcu >= 4.0.0)

apcu_inc — Increase a stored number

### Description

```
apcu_inc(
 string $key,
 int $step = 1,
 bool &$success = ?,
 int $ttl = 0
): int|false
```

Increases a stored number.

### Parameters

The key of the value being increased.

The step, or value to increase.

Optionally pass the success or fail boolean value to this referenced variable.

TTL to use if the operation inserts a new value (rather than incrementing an existing one).

### Return Values

Returns the current value of key's value on success, or false on failure

### Examples

Example #1 apcu_inc() example

```
<?php
echo "Let's do something with success", PHP_EOL;

apcu_store('anumber', 42);

echo apcu_fetch('anumber'), PHP_EOL;

echo apcu_inc('anumber'), PHP_EOL;
echo apcu_inc('anumber', 10), PHP_EOL;
echo apcu_inc('anumber', 10, $success), PHP_EOL;

var_dump($success);

echo "Now, let's fail", PHP_EOL, PHP_EOL;

apcu_store('astring', 'foo');

$ret = apcu_inc('astring', 1, $fail);

var_dump($ret);
var_dump($fail);
?>
```

The above example will output something similar to:

```
Let's do something with success
42
43
53
63
bool(true)
Now, let's fail

bool(false)
bool(false)
```

### See Also

- apcu_dec() - Decrease a stored number

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.apcu-inc.php
