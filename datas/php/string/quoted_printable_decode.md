# quoted_printable_decode

Source: https://devdocs.io/php/function.quoted-printable-decode

(PHP 4, PHP 5, PHP 7, PHP 8)

quoted_printable_decode — Convert a quoted-printable string to an 8 bit string

### Description

```
quoted_printable_decode(string $string): string
```

This function returns an 8-bit binary string corresponding to the decoded quoted printable string (according to » RFC2045, section 6.7, not » RFC2821, section 4.5.2, so additional periods are not stripped from the beginning of line).

This function is similar to imap_qprint(), except this one does not require the IMAP module to work.

### Parameters

The input string.

### Return Values

Returns the 8-bit binary string.

### Examples

Example #1 quoted_printable_decode() example

```
<?php

$encoded = quoted_printable_encode('Möchten Sie ein paar Äpfel?');

var_dump($encoded);
var_dump(quoted_printable_decode($encoded));
?>
```

The above example will output:

```
string(37) "M=C3=B6chten Sie ein paar =C3=84pfel?"
string(29) "Möchten Sie ein paar Äpfel?"
```

### See Also

- quoted_printable_encode() - Convert a 8 bit string to a quoted-printable string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.quoted-printable-decode.php
