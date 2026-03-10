# iconv_mime_encode

Source: https://devdocs.io/php/function.iconv-mime-encode

(PHP 5, PHP 7, PHP 8)

iconv_mime_encode — Composes a MIME header field

### Description

```
iconv_mime_encode(string $field_name, string $field_value, array $options = []): string|false
```

Composes and returns a string that represents a valid MIME header field, which looks like the following:

```
Subject: =?ISO-8859-1?Q?Pr=FCfung_f=FCr?= Entwerfen von einer MIME kopfzeile
```

### Parameters

The field name.

The field value.

You can control the behaviour of iconv_mime_encode() by specifying an associative array that contains configuration items to the optional third parameter options. The items supported by iconv_mime_encode() are listed below. Note that item names are treated case-sensitive.

### Return Values

Returns an encoded MIME field on success, or false if an error occurs during the encoding.

### Examples

Example #1 iconv_mime_encode() example

```
<?php
$preferences = array(
    "input-charset" => "ISO-8859-1",
    "output-charset" => "UTF-8",
    "line-length" => 76,
    "line-break-chars" => "\n"
);
$preferences["scheme"] = "Q";
// This yields "Subject: =?UTF-8?Q?Pr=C3=BCfung=20Pr=C3=BCfung?="
echo iconv_mime_encode("Subject", "Prüfung Prüfung", $preferences);

$preferences["scheme"] = "B";
// This yields "Subject: =?UTF-8?B?UHLDvGZ1bmcgUHLDvGZ1bmc=?="
echo iconv_mime_encode("Subject", "Prüfung Prüfung", $preferences);
?>
```

### See Also

- imap_binary() - Convert an 8bit string to a base64 string
- mb_encode_mimeheader() - Encode string for MIME header
- imap_8bit() - Convert an 8bit string to a quoted-printable string
- quoted_printable_encode() - Convert a 8 bit string to a quoted-printable string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.iconv-mime-encode.php
