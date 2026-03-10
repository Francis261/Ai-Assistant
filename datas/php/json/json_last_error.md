# json_last_error

Source: https://devdocs.io/php/function.json-last-error

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

json_last_error — Returns the last error occurred

### Description

```
json_last_error(): int
```

Returns the last error (if any) occurred during the last JSON validation/encoding/decoding, which did not specify JSON_THROW_ON_ERROR.

### Parameters

This function has no parameters.

### Return Values

Returns an integer, the value can be one of the following constants:

### Examples

Example #1 json_last_error() example

```
<?php
// A valid json string
$json[] = '{"Organization": "PHP Documentation Team"}';

// An invalid json string which will cause an syntax 
// error, in this case we used ' instead of " for quotation
$json[] = "{'Organization': 'PHP Documentation Team'}";

foreach ($json as $string) {
    echo 'Decoding: ' . $string;
    json_decode($string);

    switch (json_last_error()) {
        case JSON_ERROR_NONE:
            echo ' - No errors';
        break;
        case JSON_ERROR_DEPTH:
            echo ' - Maximum stack depth exceeded';
        break;
        case JSON_ERROR_STATE_MISMATCH:
            echo ' - Underflow or the modes mismatch';
        break;
        case JSON_ERROR_CTRL_CHAR:
            echo ' - Unexpected control character found';
        break;
        case JSON_ERROR_SYNTAX:
            echo ' - Syntax error, malformed JSON';
        break;
        case JSON_ERROR_UTF8:
            echo ' - Malformed UTF-8 characters, possibly incorrectly encoded';
        break;
        default:
            echo ' - Unknown error';
        break;
    }

    echo PHP_EOL;
}
?>
```

The above example will output:

```
Decoding: {"Organization": "PHP Documentation Team"} - No errors
Decoding: {'Organization': 'PHP Documentation Team'} - Syntax error, malformed JSON
```

Example #2 json_last_error() with json_encode()

```
<?php
// An invalid UTF8 sequence
$text = "\xB1\x31";

$json  = json_encode($text);
$error = json_last_error();

var_dump($json, $error === JSON_ERROR_UTF8);
?>
```

The above example will output:

```
string(4) "null"
bool(true)
```

Example #3 json_last_error() and JSON_THROW_ON_ERROR

```
<?php
// An invalid UTF8 sequence which causes JSON_ERROR_UTF8
json_encode("\xB1\x31");

// The following does not cause a JSON error
json_encode('okay', JSON_THROW_ON_ERROR);

// The global error state has not been changed by the former json_encode()
var_dump(json_last_error() === JSON_ERROR_UTF8);
?>
```

The above example will output:

```
bool(true)
```

### See Also

- json_last_error_msg() - Returns the error string of the last json_validate(), json_encode() or json_decode() call
- json_decode() - Decodes a JSON string
- json_encode() - Returns the JSON representation of a value

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.json-last-error.php
