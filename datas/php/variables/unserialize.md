# unserialize

Source: https://devdocs.io/php/function.unserialize

(PHP 4, PHP 5, PHP 7, PHP 8)

unserialize — Creates a PHP value from a stored representation

### Description

```
unserialize(string $data, array $options = []): mixed
```

unserialize() takes a single serialized variable and converts it back into a PHP value.

Do not pass untrusted user input to unserialize() regardless of the options value of allowed_classes. Unserialization can result in code being loaded and executed due to object instantiation and autoloading, and a malicious user may be able to exploit this. Use a safe, standard data interchange format such as JSON (via json_decode() and json_encode()) if you need to pass serialized data to the user.

If you need to unserialize externally-stored serialized data, consider using hash_hmac() for data validation. Make sure data is not modified by anyone but you.

### Parameters

The serialized string.

If the variable being unserialized is an object, after successfully reconstructing the object PHP will automatically attempt to call the __unserialize() or __wakeup() methods (if one exists).

Note: unserialize_callback_func directive

The callback specified in the unserialize_callback_func directive is called when an undefined class is unserialized. If no callback is specified, the object will be instantiated as __PHP_Incomplete_Class.

Any options to be provided to unserialize(), as an associative array.

### Return Values

The converted value is returned, and can be a bool, int, float, string, array or object.

In case the passed string is not unserializeable, false is returned and E_WARNING is issued.

### Errors/Exceptions

Objects may throw Throwables in their unserialization handlers.

As of PHP 8.4.0, if the allowed_classes element of options is not an array of class names, unserialize() throws TypeErrors and ValueErrors.

### Changelog

### Examples

Example #1 unserialize() example

```
<?php
// Here, we use unserialize() to load session data to the
// $session_data array from the string selected from a database.
// This example complements the one described with serialize().

$conn = odbc_connect("webdb", "php", "chicken");
$stmt = odbc_prepare($conn, "SELECT data FROM sessions WHERE id = ?");
$sqldata = array($_SERVER['PHP_AUTH_USER']);
if (!odbc_execute($stmt, $sqldata) || !odbc_fetch_into($stmt, $tmp)) {
    // if the execute or fetch fails, initialize to empty array
    $session_data = array();
} else {
    // we should now have the serialized data in $tmp[0].
    $session_data = unserialize($tmp[0]);
    if (!is_array($session_data)) {
        // something went wrong, initialize to empty array
        $session_data = array();
    }
}
?>
```

Example #2 unserialize_callback_func example

```
<?php
$serialized_object='O:1:"a":1:{s:5:"value";s:3:"100";}';

ini_set('unserialize_callback_func', 'mycallback'); // set your callback_function

function mycallback($classname)
{
    // just include a file containing your class definition
    // you get $classname to figure out which class definition is required
    var_dump($classname);
}

unserialize($serialized_object);
?>
```

### Notes

false is returned both in the case of an error and if unserializing the serialized false value. It is possible to catch this special case by comparing data with serialize(false) or by catching the issued E_NOTICE.

### See Also

- json_encode() - Returns the JSON representation of a value
- json_decode() - Decodes a JSON string
- hash_hmac() - Generate a keyed hash value using the HMAC method
- serialize() - Generates a storable representation of a value
- Autoloading Classes
- unserialize_callback_func
- unserialize_max_depth
- __wakeup()
- __serialize()
- __unserialize()

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.unserialize.php
