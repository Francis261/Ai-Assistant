# ReflectionFunction::invokeArgs

Source: https://devdocs.io/php/reflectionfunction.invokeargs

(PHP 5 >= 5.1.2, PHP 7, PHP 8)

ReflectionFunction::invokeArgs — Invokes function args

### Description

```
public ReflectionFunction::invokeArgs(array $args): mixed
```

Invokes the function and pass its arguments as array.

### Parameters

The passed arguments to the function as an array, much like call_user_func_array() works.

### Return Values

Returns the result of the invoked function

### Changelog

### Examples

Example #1 ReflectionFunction::invokeArgs() example

```
<?php
function title($title, $name)
{
    return sprintf("%s. %s\r\n", $title, $name);
}

$function = new ReflectionFunction('title');

echo $function->invokeArgs(array('Dr', 'Phil'));
?>
```

The above example will output:

```
Dr. Phil
```

Example #2 ReflectionFunction::invokeArgs() with references example

```
<?php
function get_false_conditions(array $conditions, array &$false_conditions)
{
    foreach ($conditions as $condition) {
        if (!$condition) {
            $false_conditions[] = $condition;
        }
    }
}

$function_ref     = new ReflectionFunction('get_false_conditions');

$conditions       = array(true, false, -1, 0, 1);
$false_conditions = array();

$function_ref->invokeArgs(array($conditions, &$false_conditions));

var_dump($false_conditions);
?>
```

The above example will output:

```
array(2) {
  [0]=>
  bool(false)
  [1]=>
  int(0)
}
```

### Notes

Note:

If the function has arguments that need to be references, then they must be references in the passed argument list.

### See Also

- ReflectionFunction::invoke() - Invokes function
- ReflectionFunctionAbstract::getNumberOfParameters() - Gets number of parameters
- __invoke()
- call_user_func_array() - Call a callback with an array of parameters

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionfunction.invokeargs.php
