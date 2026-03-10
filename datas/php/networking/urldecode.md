# urldecode

Source: https://devdocs.io/php/function.urldecode

(PHP 4, PHP 5, PHP 7, PHP 8)

urldecode — Decodes URL-encoded string

### Description

```
urldecode(string $string): string
```

Decodes any %## encoding in the given string. Plus symbols ('+') are decoded to a space character.

### Parameters

The string to be decoded.

### Return Values

Returns the decoded string.

### Examples

Example #1 urldecode() example

```
<?php
$query = "my=apples&are=green+and+red";

foreach (explode('&', $query) as $chunk) {
    $param = explode("=", $chunk);

    if ($param) {
        printf("Value for parameter \"%s\" is \"%s\"<br/>\n", urldecode($param[0]), urldecode($param[1]));
    }
}
?>
```

### Notes

The superglobals $_GET and $_REQUEST are already decoded. Using urldecode() on an element in $_GET or $_REQUEST could have unexpected and dangerous results.

### See Also

- urlencode() - URL-encodes string
- rawurlencode() - URL-encode according to RFC 3986
- rawurldecode() - Decode URL-encoded strings
- » RFC 3986

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.urldecode.php
