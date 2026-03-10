# mb_substitute_character

Source: https://devdocs.io/php/function.mb-substitute-character

(PHP 4 >= 4.0.6, PHP 5, PHP 7, PHP 8)

mb_substitute_character — Set/Get substitution character

### Description

```
mb_substitute_character(string|int|null $substitute_character = null): string|int|bool
```

Specifies a substitution character when input character encoding is invalid or character code does not exist in output character encoding. Invalid characters may be substituted "none" (no output), string or int value (Unicode character code value).

This setting affects mb_convert_encoding(), mb_convert_variables(), mb_output_handler(), mb_scrub(), and mb_send_mail().

### Parameters

Specify the Unicode value as an int, or as one of the following strings:

- "none": no output
- "long": Output character code value (Example: U+3000, JIS+7E7E)
- "entity": Output character entity (Example: &#x200;)

### Return Values

If substitute_character is set, it returns true for success, otherwise returns false. If substitute_character is not set, it returns the current setting.

### Changelog

### Examples

Example #1 mb_substitute_character() example

```
<?php
/* Set with Unicode U+3013 (GETA MARK) */
mb_substitute_character(0x3013);

/* Set hex format */
mb_substitute_character("long");

/* Display current setting */
echo mb_substitute_character();
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mb-substitute-character.php
