# imap_utf8

Source: https://devdocs.io/php/function.imap-utf8

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_utf8 — Converts MIME-encoded text to UTF-8

### Description

```
imap_utf8(string $mime_encoded_text): string
```

Converts the given mime_encoded_text to UTF-8, if the declared charset is known to libc-client. Otherwise the given text is decoded, but not converted to UTF-8.

### Parameters

A MIME encoded string. MIME encoding method and the UTF-8 specification are described in » RFC2047 and » RFC2044 respectively.

### Return Values

Returns the decoded string, if possible converted to UTF-8.

### Examples

Example #1 Basic imap_utf8() Usage

```
<?php
echo imap_utf8("Johannes =?ISO-8859-1?Q?Schl=FCter?=");
?>
```

The above example will output something similar to:

```
Johannes Schlüter
```

### See Also

- imap_mime_header_decode() - Decode MIME header elements

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imap-utf8.php
