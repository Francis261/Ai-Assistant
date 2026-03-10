# getopt

Source: https://devdocs.io/php/function.getopt

(PHP 4 >= 4.3.0, PHP 5, PHP 7, PHP 8)

getopt — Gets options from the command line argument list

### Description

```
getopt(string $short_options, array $long_options = [], int &$rest_index = null): array|false
```

Parses options passed to the script.

### Parameters

The short_options parameter may contain the following elements:

- Individual characters (do not accept values)
- Characters followed by a colon (parameter requires value)
- Characters followed by two colons (optional value)

Note: Optional values do not accept " " (space) as a separator.

The long_options array values may contain:

- String (parameter does not accept any value)
- String followed by a colon (parameter requires value)
- String followed by two colons (optional value)

Note:

The format for the short_options and long_options is almost the same, the only difference is that long_options takes an array of options (where each element is the option) whereas short_options takes a string (where each character is the option).

### Return Values

This function will return an array of option / argument pairs, or false on failure.

Note:

The parsing of options will end at the first non-option found, anything that follows is discarded.

### Changelog

### Examples

Example #1 getopt() example: The basics

```
<?php
// Script example.php
$options = getopt("f:hp:");
var_dump($options);
?>
```

```
shell> php example.php -fvalue -h
```

The above example will output:

```
array(2) {
  ["f"]=>
  string(5) "value"
  ["h"]=>
  bool(false)
}
```

Example #2 getopt() example: Introducing long options

```
<?php
// Script example.php
$shortopts  = "";
$shortopts .= "f:";  // Required value
$shortopts .= "v::"; // Optional value
$shortopts .= "abc"; // These options do not accept values

$longopts  = array(
    "required:",     // Required value
    "optional::",    // Optional value
    "option",        // No value
    "opt",           // No value
);
$options = getopt($shortopts, $longopts);
var_dump($options);
?>
```

```
shell> php example.php -f "value for f" -v -a --required value --optional="optional value" --option
```

The above example will output:

```
array(6) {
  ["f"]=>
  string(11) "value for f"
  ["v"]=>
  bool(false)
  ["a"]=>
  bool(false)
  ["required"]=>
  string(5) "value"
  ["optional"]=>
  string(14) "optional value"
  ["option"]=>
  bool(false)
}
```

Example #3 getopt() example: Passing multiple options as one

```
<?php
// Script example.php
$options = getopt("abc");
var_dump($options);
?>
```

```
shell> php example.php -aaac
```

The above example will output:

```
array(2) {
  ["a"]=>
  array(3) {
    [0]=>
    bool(false)
    [1]=>
    bool(false)
    [2]=>
    bool(false)
  }
  ["c"]=>
  bool(false)
}
```

Example #4 getopt() example: Using rest_index

```
<?php
// Script example.php
$rest_index = null;
$opts = getopt('a:b:', [], $rest_index);
$pos_args = array_slice($argv, $rest_index);
var_dump($pos_args);
```

```
shell> php example.php -a 1 -b 2 -- test
```

The above example will output:

```
array(1) {
  [0]=>
  string(4) "test"
}
```

### See Also

- $argv

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.getopt.php
