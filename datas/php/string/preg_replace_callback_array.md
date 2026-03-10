# preg_replace_callback_array

Source: https://devdocs.io/php/function.preg-replace-callback-array

(PHP 7, PHP 8)

preg_replace_callback_array — Perform a regular expression search and replace using callbacks

### Description

```
preg_replace_callback_array(
 array $pattern,
 string|array $subject,
 int $limit = -1,
 int &$count = null,
 int $flags = 0
): string|array|null
```

The behavior of this function is similar to preg_replace_callback(), except that callbacks are executed on a per-pattern basis.

### Parameters

An associative array mapping patterns (keys) to callables (values).

The string or an array with strings to search and replace.

The maximum possible replacements for each pattern in each subject string. Defaults to -1 (no limit).

If specified, this variable will be filled with the number of replacements done.

flags can be a combination of the PREG_OFFSET_CAPTURE and PREG_UNMATCHED_AS_NULL flags, which influence the format of the matches array. See the description in preg_match() for more details.

### Return Values

preg_replace_callback_array() returns an array if the subject parameter is an array, or a string otherwise. On errors the return value is null

If matches are found, the new subject will be returned, otherwise subject will be returned unchanged.

### Errors/Exceptions

If the regex pattern passed does not compile to a valid regex, an E_WARNING is emitted.

### Changelog

### Examples

Example #1 preg_replace_callback_array() example

```
<?php
$subject = 'Aaaaaa Bbb';

preg_replace_callback_array(
    [
        '~[a]+~i' => function ($match) {
            echo strlen($match[0]), ' matches for "a" found', PHP_EOL;
        },
        '~[b]+~i' => function ($match) {
            echo strlen($match[0]), ' matches for "b" found', PHP_EOL;
        }
    ],
    $subject
);
?>
```

The above example will output:

```
6 matches for "a" found
3 matches for "b" found
```

### See Also

- PCRE Patterns
- preg_replace_callback() - Perform a regular expression search and replace using a callback
- preg_quote() - Quote regular expression characters
- preg_replace() - Perform a regular expression search and replace
- preg_last_error() - Returns the error code of the last PCRE regex execution
- Anonymous functions

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.preg-replace-callback-array.php
