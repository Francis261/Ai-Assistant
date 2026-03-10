# file_put_contents

Source: https://devdocs.io/php/function.file-put-contents

(PHP 5, PHP 7, PHP 8)

file_put_contents — Write data to a file

### Description

```
file_put_contents(
 string $filename,
 mixed $data,
 int $flags = 0,
 ?resource $context = null
): int|false
```

This function is identical to calling fopen(), fwrite() and fclose() successively to write data to a file.

If filename does not exist, the file is created. Otherwise, the existing file is overwritten, unless the FILE_APPEND flag is set.

### Parameters

Path to the file where to write the data.

The data to write. Can be either a string, an array or a stream resource.

If data is a stream resource, the remaining buffer of that stream will be copied to the specified file. This is similar with using stream_copy_to_stream().

You can also specify the data parameter as a single dimension array. This is equivalent to file_put_contents($filename, implode('', $array)).

The value of flags can be any combination of the following flags, joined with the binary OR (|) operator.

A valid context resource created with stream_context_create().

### Return Values

This function returns the number of bytes that were written to the file, or false on failure.

This function may return Boolean false, but may also return a non-Boolean value which evaluates to false. Please read the section on Booleans for more information. Use the === operator for testing the return value of this function.

### Examples

Example #1 Simple usage example

```
<?php
$file = 'people.txt';
// Open the file to get existing content
$current = file_get_contents($file);
// Append a new person to the file
$current .= "John Smith\n";
// Write the contents back to the file
file_put_contents($file, $current);
?>
```

Example #2 Using flags

```
<?php
$file = 'people.txt';
// The new person to add to the file
$person = "John Smith\n";
// Write the contents to the file, 
// using the FILE_APPEND flag to append the content to the end of the file
// and the LOCK_EX flag to prevent anyone else writing to the file at the same time
file_put_contents($file, $person, FILE_APPEND | LOCK_EX);
?>
```

### Notes

Note: This function is binary-safe.

A URL can be used as a filename with this function if the fopen wrappers have been enabled. See fopen() for more details on how to specify the filename. See the Supported Protocols and Wrappers for links to information about what abilities the various wrappers have, notes on their usage, and information on any predefined variables they may provide.

### See Also

- fopen() - Opens file or URL
- fwrite() - Binary-safe file write
- file_get_contents() - Reads entire file into a string
- stream_context_create() - Creates a stream context

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.file-put-contents.php
