# mailparse_rfc822_parse_addresses

Source: https://devdocs.io/php/function.mailparse-rfc822-parse-addresses

(PECL mailparse >= 0.9.0)

mailparse_rfc822_parse_addresses — Parse RFC 822 compliant addresses

### Description

```
mailparse_rfc822_parse_addresses(string $addresses): array
```

Parses a » RFC 822 compliant recipient list, such as that found in the To: header.

### Parameters

A string containing addresses, like in: Wez Furlong <wez@example.com>, doe@example.com

Note:

This string must not include the header name.

### Return Values

Returns an array of associative arrays with the following keys for each recipient:

### Examples

Example #1 mailparse_rfc822_parse_addresses() example

```
<?php

$to = 'Wez Furlong <wez@example.com>, doe@example.com';
var_dump(mailparse_rfc822_parse_addresses($to));

?>
```

The above example will output:

```
array(2) {
  [0]=>
  array(3) {
    ["display"]=>
    string(11) "Wez Furlong"
    ["address"]=>
    string(15) "wez@example.com"
    ["is_group"]=>
    bool(false)
  }
  [1]=>
  array(3) {
    ["display"]=>
    string(15) "doe@example.com"
    ["address"]=>
    string(15) "doe@example.com"
    ["is_group"]=>
    bool(false)
  }
}
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mailparse-rfc822-parse-addresses.php
