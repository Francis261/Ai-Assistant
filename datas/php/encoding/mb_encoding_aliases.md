# mb_encoding_aliases

Source: https://devdocs.io/php/function.mb-encoding-aliases

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

mb_encoding_aliases — Get aliases of a known encoding type

### Description

```
mb_encoding_aliases(string $encoding): array
```

Returns an array of aliases for a known encoding type.

### Parameters

The encoding type being checked, for aliases.

### Return Values

Returns a numerically indexed array of encoding aliases.

### Errors/Exceptions

Throws a ValueError if encoding is unknown.

### Changelog

### Examples

Example #1 mb_encoding_aliases() example

```
<?php
$encoding        = 'ASCII';
$known_encodings = mb_list_encodings();

if (in_array($encoding, $known_encodings)) {

    $aliases = mb_encoding_aliases($encoding);
    print_r($aliases);

} else {

    echo "Unknown ($encoding) encoding.\n";

}
?>
```

The above example will output something similar to:

```
Array
(
    [0] => ANSI_X3.4-1968
    [1] => iso-ir-6
    [2] => ANSI_X3.4-1986
    [3] => ISO_646.irv:1991
    [4] => US-ASCII
    [5] => ISO646-US
    [6] => us
    [7] => IBM367
    [8] => cp367
    [9] => csASCII
)
```

### See Also

- mb_list_encodings() - Returns an array of all supported encodings

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mb-encoding-aliases.php
