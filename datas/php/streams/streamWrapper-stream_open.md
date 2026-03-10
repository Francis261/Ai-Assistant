# streamWrapper::stream_open

Source: https://devdocs.io/php/streamwrapper.stream-open

(PHP 4 >= 4.3.2, PHP 5, PHP 7, PHP 8)

streamWrapper::stream_open — Opens file or URL

### Description

```
public streamWrapper::stream_open(
 string $path,
 string $mode,
 int $options,
 ?string &$opened_path
): bool
```

This method is called immediately after the wrapper is initialized (f.e. by fopen() and file_get_contents()).

### Parameters

Specifies the URL that was passed to the original function.

Note:

The URL can be broken apart with parse_url(). Note that only URLs delimited by :// are supported. : and :/ while technically valid URLs, are not.

The mode used to open the file, as detailed for fopen().

Note:

Remember to check if the mode is valid for the path requested.

Holds additional flags set by the streams API. It can hold one or more of the following values OR'd together.

If the path is opened successfully, and STREAM_USE_PATH is set in options, opened_path should be set to the full path of the file/resource that was actually opened.

### Return Values

Returns true on success or false on failure.

### Errors/Exceptions

Emits E_WARNING if call to this method fails (i.e. not implemented).

### Notes

Note:

The streamWrapper::$context property is updated if a valid context is passed to the caller function.

### See Also

- fopen() - Opens file or URL
- parse_url() - Parse a URL and return its components

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/streamwrapper.stream-open.php
