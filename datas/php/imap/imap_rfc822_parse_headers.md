# imap_rfc822_parse_headers

Source: https://devdocs.io/php/function.imap-rfc822-parse-headers

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_rfc822_parse_headers — Parse mail headers from a string

### Description

```
imap_rfc822_parse_headers(string $headers, string $default_hostname = "UNKNOWN"): stdClass
```

Gets an object of various header elements, similar to imap_header().

### Parameters

The parsed headers data

The default host name

### Return Values

Returns an object similar to the one returned by imap_header(), except for the flags and other properties that come from the IMAP server.

### See Also

- imap_rfc822_parse_adrlist() - Parses an address string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.imap-rfc822-parse-headers.php
