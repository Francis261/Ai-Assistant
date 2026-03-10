# ArrayAccess::offsetExists

Source: https://devdocs.io/php/arrayaccess.offsetexists

(PHP 5, PHP 7, PHP 8)

ArrayAccess::offsetExists — Whether an offset exists

### Description

```
public ArrayAccess::offsetExists(mixed $offset): bool
```

Whether or not an offset exists.

This method is executed when using isset() or empty() on objects implementing ArrayAccess.

Note:

When using empty() ArrayAccess::offsetGet() will be called and checked if empty only if ArrayAccess::offsetExists() returns true.

### Parameters

An offset to check for.

### Return Values

Returns true on success or false on failure.

Note:

The return value will be casted to bool if non-boolean was returned.

### Examples

Example #1 ArrayAccess::offsetExists() example

```
<?php
class obj implements ArrayAccess {
    public function offsetSet($offset, $value): void {
        var_dump(__METHOD__);
    }
    public function offsetExists($var): bool {
        var_dump(__METHOD__);
        if ($var == "foobar") {
            return true;
        }
        return false;
    }
    public function offsetUnset($var): void {
        var_dump(__METHOD__);
    }
    #[\ReturnTypeWillChange]
    public function offsetGet($var) {
        var_dump(__METHOD__);
        return "value";
    }
}

$obj = new obj;

echo "Runs obj::offsetExists()\n";
var_dump(isset($obj["foobar"]));

echo "\nRuns obj::offsetExists() and obj::offsetGet()\n";
var_dump(empty($obj["foobar"]));

echo "\nRuns obj::offsetExists(), *not* obj:offsetGet() as there is nothing to get\n";
var_dump(empty($obj["foobaz"]));
?>
```

The above example will output something similar to:

```
Runs obj::offsetExists()
string(17) "obj::offsetExists"
bool(true)

Runs obj::offsetExists() and obj::offsetGet()
string(17) "obj::offsetExists"
string(14) "obj::offsetGet"
bool(false)

Runs obj::offsetExists(), *not* obj:offsetGet() as there is nothing to get
string(17) "obj::offsetExists"
bool(true)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/arrayaccess.offsetexists.php
