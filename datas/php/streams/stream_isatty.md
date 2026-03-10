# stream_isatty

Source: https://devdocs.io/php/function.stream-isatty

(PHP 7 >= 7.2.0, PHP 8)

stream_isatty — Check if a stream is a TTY

### Description

```
stream_isatty(resource $stream): bool
```

Determines if stream stream refers to a valid terminal type device. This is a more portable version of posix_isatty(), since it works on Windows systems too.

### Parameters

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 stream_isatty() example

This command can be used to determine if a standard output / standard error stream is redirected to a file.

```
php -r "var_export(stream_isatty(STDERR));"
```

The above example will output something similar to:

```
php -r "var_export(stream_isatty(STDERR));" 2>output.txt
```

The above example will output something similar to:

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.stream-isatty.php
