# iconv_mime_decode

Source: https://devdocs.io/php/function.iconv-mime-decode

(PHP 5, PHP 7, PHP 8)

iconv_mime_decode — Decodes a MIME header field

### Description

```
iconv_mime_decode(string $string, int $mode = 0, ?string $encoding = null): string|false
```

Decodes a MIME header field.

### Parameters

The encoded header, as a string.

mode determines the behaviour in the event iconv_mime_decode() encounters a malformed MIME header field. You can specify any combination of the following bitmasks.

The optional encoding parameter specifies the character set to represent the result by. If omitted or null, iconv.internal_encoding will be used.

### Return Values

Returns a decoded MIME field on success, or false if an error occurs during the decoding.

### Changelog

### Examples

Example #1 iconv_mime_decode() example

```
<?php
// This yields "Subject: Prüfung Prüfung"
echo iconv_mime_decode("Subject: =?UTF-8?B?UHLDvGZ1bmcgUHLDvGZ1bmc=?=",
                       0, "ISO-8859-1");
?>
```

### See Also

- iconv_mime_decode_headers() - Decodes multiple MIME header fields at once
- mb_decode_mimeheader() - Decode string in MIME header field
- imap_mime_header_decode() - Decode MIME header elements
- imap_base64() - Decode BASE64 encoded text
- imap_qprint() - Convert a quoted-printable string to an 8 bit string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.iconv-mime-decode.php
