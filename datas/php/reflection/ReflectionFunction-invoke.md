# ReflectionFunction::invoke

Source: https://devdocs.io/php/reflectionfunction.invoke

(PHP 5, PHP 7, PHP 8)

ReflectionFunction::invoke — Invokes function

### Description

```
public ReflectionFunction::invoke(mixed ...$args): mixed
```

Invokes a reflected function.

### Parameters

The passed in argument list. It accepts a variable number of arguments which are passed to the function much like call_user_func() is.

### Return Values

Returns the result of the invoked function call.

### Examples

Example #1 ReflectionFunction::invoke() example

```
<?php
function title($title, $name)
{
    return sprintf("%s. %s\r\n", $title, $name);
}

$function = new ReflectionFunction('title');

echo $function->invoke('Dr', 'Phil');
?>
```

The above example will output:

```
Dr. Phil
```

### Notes

Note:

ReflectionFunction::invoke() cannot be used when reference parameters are expected. ReflectionFunction::invokeArgs() has to be used instead (passing references in the argument list).

### See Also

- ReflectionFunction::export() - Exports function
- __invoke()
- call_user_func() - Call the callback given by the first parameter

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionfunction.invoke.php
