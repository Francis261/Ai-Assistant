# EvLoop::embed

Source: https://devdocs.io/php/evloop.embed

(PECL ev >= 0.2.0)

EvLoop::embed — Creates an instance of EvEmbed watcher associated with the current EvLoop object

### Description

```
final public EvLoop::embed(
  string $other ,
  string $callback  = ?,
  string $data  = ?,
  string $priority  = ?
): EvEmbed
```

Creates an instance of EvEmbed watcher associated with the current EvLoop object.

### Parameters

All parameters have the same meaning as for EvEmbed::__construct().

### Return Values

Returns EvEmbed object on success.

### See Also

- EvEmbed::__construct() - Constructs the EvEmbed object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/evloop.embed.php
