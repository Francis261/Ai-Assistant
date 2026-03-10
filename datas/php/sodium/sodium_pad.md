# sodium_pad

Source: https://devdocs.io/php/function.sodium-pad

(PHP 7 >= 7.2.0, PHP 8)

sodium_pad — Add padding data

### Description

```
sodium_pad(#[\SensitiveParameter] string $string, int $block_size): string
```

Right-pad a string to a desired length. Timing-safe.

### Parameters

Unpadded string.

The string will be padded until it is an even multiple of the block size.

### Return Values

Padded string.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sodium-pad.php
