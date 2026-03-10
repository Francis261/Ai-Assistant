# parse_str

Source: https://devdocs.io/php/function.parse-str

(PHP 4, PHP 5, PHP 7, PHP 8)

parse_str — Parse a string as a URL query string

### Description

```
parse_str(string $string, array &$result): void
```

Parses string as if it were the query string passed via a URL and sets keys in the provided result array. If no result is passed, values are instead set as variables in the current scope.

### Parameters

The input string.

A variable passed by reference, which will be set to an array containing the key-value pairs extracted from string. If the result parameter is not passed, a separate variable is set in the local scope for each key.

Using this function without the result parameter is highly DISCOURAGED and DEPRECATED as of PHP 7.2. As of PHP 8.0.0, the result parameter is mandatory.

### Return Values

No value is returned.

### Changelog

### Examples

Example #1 Using parse_str()

```
<?php
$str = "first=value&arr[]=foo+bar&arr[]=baz";

// Recommended
parse_str($str, $output);
echo $output['first'], PHP_EOL;  // value
echo $output['arr'][0], PHP_EOL; // foo bar
echo $output['arr'][1], PHP_EOL; // baz
?>
```

Any spaces and dots in parameter names are converted to underscores when creating array keys or local variables. This is because variable names in PHP are not allowed to contain spaces or dots, but applies even when using this function with the recommended result parameter.

Example #2 parse_str() name mangling

```
<?php
parse_str("My Value=Something", $output);
echo $output['My_Value']; // Something
?>
```

### Notes

Note:

parse_str() is affected by the max_input_vars directive. Exceeding this limit triggers an E_WARNING, and any variables beyond the limit are not added to the result array. The default is 1000; adjust max_input_vars as needed.

Note:

All values populated in the result array (or variables created if second parameter is not set) are already URL-decoded using the same rules as urldecode().

Note:

To get the query string of the current request, you may use the variable $_SERVER['QUERY_STRING']. Also, you may want to read the section on variables from external sources.

### See Also

- parse_url() - Parse a URL and return its components
- pathinfo() - Returns information about a file path
- http_build_query() - Generate URL-encoded query string
- urldecode() - Decodes URL-encoded string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.parse-str.php
