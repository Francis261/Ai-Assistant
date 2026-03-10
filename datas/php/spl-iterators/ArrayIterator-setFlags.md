# ArrayIterator::setFlags

Source: https://devdocs.io/php/arrayiterator.setflags

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

ArrayIterator::setFlags — Set behaviour flags

### Description

```
public ArrayIterator::setFlags(int $flags): void
```

Set the flags that change the behavior of the ArrayIterator.

### Parameters

The new ArrayIterator behavior. It takes on either a bitmask, or named constants. Using named constants is strongly encouraged to ensure compatibility for future versions.

The available behavior flags are listed below. The actual meanings of these flags are described in the predefined constants.

### Return Values

No value is returned.

### See Also

- ArrayIterator::getFlags() - Get behavior flags

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/arrayiterator.setflags.php
