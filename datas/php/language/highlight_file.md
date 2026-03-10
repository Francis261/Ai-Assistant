# highlight_file

Source: https://devdocs.io/php/function.highlight-file

(PHP 4, PHP 5, PHP 7, PHP 8)

highlight_file — Syntax highlighting of a file

### Description

```
highlight_file(string $filename, bool $return = false): string|bool
```

Prints out or returns a syntax highlighted version of the code contained in filename using the colors defined in the built-in syntax highlighter for PHP.

Many servers are configured to automatically highlight files with a phps extension. For example, example.phps when viewed will show the syntax highlighted source of the file. To enable this, add this line to the httpd.conf:

```
AddType application/x-httpd-php-source .phps
```

### Parameters

Path to the PHP file to be highlighted.

Set this parameter to true to make this function return the highlighted code.

### Return Values

If return is set to true, returns the highlighted code as a string instead of printing it out. Otherwise, it will return true on success, false on failure.

### Changelog

### Notes

Care should be taken when using the highlight_file() function to make sure that you do not inadvertently reveal sensitive information such as passwords or any other type of information that might create a potential security risk.

Note:

When the return parameter is used, this function uses internal output buffering so it cannot be used inside an ob_start() callback function.

### See Also

- highlight_string() - Syntax highlighting of a string
- Highlighting INI directives

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.highlight-file.php
