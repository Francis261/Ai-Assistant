# xdiff_string_patch

Source: https://devdocs.io/php/function.xdiff-string-patch

(PECL xdiff >= 0.2.0)

xdiff_string_patch — Patch a string with an unified diff

### Description

```
xdiff_string_patch(
 string $str,
 string $patch,
 int $flags = ?,
 string &$error = ?
): string
```

Patches a str string with an unified patch in patch parameter and returns the result. patch has to be an unified diff created by xdiff_file_diff()/xdiff_string_diff() function. An optional flags parameter specifies mode of operation. Any rejected parts of the patch will be stored inside error variable if it is provided.

### Parameters

The original string.

The unified patch string. It has to be created using xdiff_string_diff(), xdiff_file_diff() functions or compatible tools.

flags can be either XDIFF_PATCH_NORMAL (default mode, normal patch) or XDIFF_PATCH_REVERSE (reversed patch).

Starting from version 1.5.0, you can also use binary OR to enable XDIFF_PATCH_IGNORESPACE flag.

If provided then rejected parts are stored inside this variable.

### Return Values

Returns the patched string, or false on error.

### Examples

Example #1 xdiff_string_patch() example

The following code applies changes to some article.

```
<?php
$old_article = file_get_contents('./old_article.txt');
$diff = $_SERVER['patch']; /* Let's say that someone pasted a patch to html form */

$errors = '';

$new_article = xdiff_string_patch($old_article, $diff, XDIFF_PATCH_NORMAL, $errors);
if (is_string($new_article)) {
    echo "New article:\n";
    echo $new_article;
}

if (strlen($errors)) {
    echo "Rejects: \n";
    echo $errors;
}

?>
```

### See Also

- xdiff_string_diff() - Make unified diff of two strings

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.xdiff-string-patch.php
