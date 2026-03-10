# mb_encode_mimeheader

Source: https://devdocs.io/php/function.mb-encode-mimeheader

(PHP 4 >= 4.0.6, PHP 5, PHP 7, PHP 8)

mb_encode_mimeheader — Encode string for MIME header

### Description

```
mb_encode_mimeheader(
 string $string,
 ?string $charset = null,
 ?string $transfer_encoding = null,
 string $newline = "\r\n",
 int $indent = 0
): string
```

Encodes a given string string by the MIME header encoding scheme.

### Parameters

The string being encoded. Its encoding should be same as mb_internal_encoding().

charset specifies the name of the character set in which string is represented in. The default value is determined by the current NLS setting (mbstring.language).

transfer_encoding specifies the scheme of MIME encoding. It should be either "B" (Base64) or "Q" (Quoted-Printable). Falls back to "B" if not given.

newline specifies the EOL (end-of-line) marker with which mb_encode_mimeheader() performs line-folding (a » RFC term, the act of breaking a line longer than a certain length into multiple lines. The length is currently hard-coded to 74 characters). Falls back to "\r\n" (CRLF) if not given.

Indentation of the first line (number of characters in the header before string).

### Return Values

A converted version of the string represented in ASCII.

### Changelog

### Examples

Example #1 mb_encode_mimeheader() example

```
<?php
$name = "太郎"; // kanji
$mbox = "kru";
$doma = "gtinn.mon";
$addr = '"' . addcslashes(mb_encode_mimeheader($name, "UTF-7", "Q"), '"') . '" <' . $mbox . "@" . $doma . ">";
echo $addr;
?>
```

The above example will output:

```
"=?UTF-7?Q?+WSqQzg-?=" <kru@gtinn.mon>
```

### Notes

Note:

This function isn't designed to break lines at higher-level contextual break points (word boundaries, etc.). This behaviour may clutter up the original string with unexpected spaces.

### See Also

- mb_decode_mimeheader() - Decode string in MIME header field

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mb-encode-mimeheader.php
