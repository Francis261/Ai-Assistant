# file

Source: https://devdocs.io/php/function.file

(PHP 4, PHP 5, PHP 7, PHP 8)

file — Reads entire file into an array

### Description

```
file(string $filename, int $flags = 0, ?resource $context = null): array|false
```

Reads an entire file into an array.

Note:

You can use file_get_contents() to return the contents of a file as a string.

### Parameters

Path to the file.

A URL can be used as a filename with this function if the fopen wrappers have been enabled. See fopen() for more details on how to specify the filename. See the Supported Protocols and Wrappers for links to information about what abilities the various wrappers have, notes on their usage, and information on any predefined variables they may provide.

The optional parameter flags can be one, or more, of the following constants:

A context stream resource.

### Return Values

Returns the file in an array. Each element of the array corresponds to a line in the file, with the newline still attached. Upon failure, file() returns false.

Note:

Each line in the resulting array will include the line ending, unless FILE_IGNORE_NEW_LINES is used.

Note: If PHP is not properly recognizing the line endings when reading files either on or created by a Macintosh computer, enabling the auto_detect_line_endings run-time configuration option may help resolve the problem.

### Errors/Exceptions

As of PHP 8.3.0, throws a ValueError if flags includes any invalid values, such as FILE_APPEND.

Emits an E_WARNING level error if the file does not exist.

### Changelog

### Examples

Example #1 file() example

```
<?php
// Get a file into an array.  In this example we'll go through HTTP to get
// the HTML source of a URL.
$lines = file('http://www.example.com/');

// Loop through our array, show HTML source as HTML source; and line numbers too.
foreach ($lines as $line_num => $line) {
    echo "Line #<b>{$line_num}</b> : " . htmlspecialchars($line) . "<br />\n";
}

// Using the optional flags parameter
$trimmed = file('somefile.txt', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
?>
```

### Notes

When using SSL, Microsoft IIS will violate the protocol by closing the connection without sending a close_notify indicator. PHP will report this as "SSL: Fatal Protocol Error" when you reach the end of the data. To work around this, the value of error_reporting should be lowered to a level that does not include warnings. PHP can detect buggy IIS server software when you open the stream using the https:// wrapper and will suppress the warning. When using fsockopen() to create an ssl:// socket, the developer is responsible for detecting and suppressing this warning.

### See Also

- file_get_contents() - Reads entire file into a string
- readfile() - Outputs a file
- fopen() - Opens file or URL
- fsockopen() - Open Internet or Unix domain socket connection
- popen() - Opens process file pointer
- include - include
- stream_context_create() - Creates a stream context

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.file.php
