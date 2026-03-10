# iconv_mime_decode_headers

Source: https://devdocs.io/php/function.iconv-mime-decode-headers

(PHP 5, PHP 7, PHP 8)

iconv_mime_decode_headers — Decodes multiple MIME header fields at once

### Description

```
iconv_mime_decode_headers(string $headers, int $mode = 0, ?string $encoding = null): array|false
```

Decodes multiple MIME header fields at once.

### Parameters

The encoded headers, as a string.

mode determines the behaviour in the event iconv_mime_decode_headers() encounters a malformed MIME header field. You can specify any combination of the following bitmasks.

The optional encoding parameter specifies the character set to represent the result by. If omitted or null, iconv.internal_encoding will be used.

### Return Values

Returns an associative array that holds a whole set of MIME header fields specified by headers on success, or false if an error occurs during the decoding.

Each key of the return value represents an individual field name and the corresponding element represents a field value. If more than one field of the same name are present, iconv_mime_decode_headers() automatically incorporates them into a numerically indexed array in the order of occurrence. Note that header names are not case-insensitive.

### Changelog

### Examples

Example #1 iconv_mime_decode_headers() example

```
<?php
$headers_string = <<<EOF
Subject: =?UTF-8?B?UHLDvGZ1bmcgUHLDvGZ1bmc=?=
To: example@example.com
Date: Thu, 1 Jan 1970 00:00:00 +0000
Message-Id: <example@example.com>
Received: from localhost (localhost [127.0.0.1]) by localhost
    with SMTP id example for <example@example.com>;
    Thu, 1 Jan 1970 00:00:00 +0000 (UTC)
    (envelope-from example-return-0000-example=example.com@example.com)
Received: (qmail 0 invoked by uid 65534); 1 Thu 2003 00:00:00 +0000

EOF;

$headers =  iconv_mime_decode_headers($headers_string, 0, "ISO-8859-1");
print_r($headers);
?>
```

The above example will output:

```
Array
(
    [Subject] => Prüfung Prüfung
    [To] => example@example.com
    [Date] => Thu, 1 Jan 1970 00:00:00 +0000
    [Message-Id] => <example@example.com>
    [Received] => Array
        (
            [0] => from localhost (localhost [127.0.0.1]) by localhost with SMTP id example for <example@example.com>; Thu, 1 Jan 1970 00:00:00 +0000 (UTC) (envelope-from example-return-0000-example=example.com@example.com)
            [1] => (qmail 0 invoked by uid 65534); 1 Thu 2003 00:00:00 +0000
        )

)
```

### See Also

- iconv_mime_decode() - Decodes a MIME header field
- mb_decode_mimeheader() - Decode string in MIME header field
- imap_mime_header_decode() - Decode MIME header elements
- imap_base64() - Decode BASE64 encoded text
- imap_qprint() - Convert a quoted-printable string to an 8 bit string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.iconv-mime-decode-headers.php
