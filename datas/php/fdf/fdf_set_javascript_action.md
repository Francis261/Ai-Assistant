# fdf_set_javascript_action

Source: https://devdocs.io/php/function.fdf-set-javascript-action

(PHP 4 >= 4.0.2, PHP 5 < 5.3.0, PECL fdf SVN)

fdf_set_javascript_action — Sets an javascript action of a field

### Description

```
fdf_set_javascript_action(
 resource $fdf_document,
 string $fieldname,
 int $trigger,
 string $script
): bool
```

Sets a javascript action for the given field.

### Parameters

The FDF document handle, returned by fdf_create(), fdf_open() or fdf_open_string().

Name of the FDF field, as a string.

### Return Values

Returns true on success or false on failure.

### See Also

- fdf_set_submit_form_action() - Sets a submit form action of a field

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.fdf-set-javascript-action.php
