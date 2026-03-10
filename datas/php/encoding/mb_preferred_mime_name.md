# mb_preferred_mime_name

Source: https://devdocs.io/php/function.mb-preferred-mime-name

(PHP 4 >= 4.0.6, PHP 5, PHP 7, PHP 8)

mb_preferred_mime_name — Get MIME charset string

### Description

```
mb_preferred_mime_name(string $encoding): string|false
```

Get a MIME charset string for a specific encoding.

### Parameters

The encoding being checked.

### Return Values

The MIME charset string for character encoding encoding, or false if no charset is preferred for the given encoding.

### Examples

Example #1 mb_preferred_mime_name() example

```
<?php
$outputenc = "sjis-win";
mb_http_output($outputenc);
ob_start("mb_output_handler");
header("Content-Type: text/html; charset=" . mb_preferred_mime_name($outputenc));
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mb-preferred-mime-name.php
