# EvLoop::defaultLoop

Source: https://devdocs.io/php/evloop.defaultloop

(PECL ev >= 0.2.0)

EvLoop::defaultLoop — Returns or creates the default event loop

### Description

```
public static EvLoop::defaultLoop(
  int $flags  = Ev::FLAG_AUTO ,
  mixed $data  = NULL ,
  float $io_interval  = 0. ,
  float $timeout_interval  = 0. 
): EvLoop
```

If the default event loop is not created, EvLoop::defaultLoop() creates it with the specified parameters. Otherwise, it just returns the object representing previously created instance ignoring all the parameters.

### Parameters

One of the event loop flags

Custom data to associate with the loop.

See io_interval

See timeout_interval

### Return Values

Returns EvLoop object on success.

### See Also

- EvLoop::__construct() - Constructs the event loop object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/evloop.defaultloop.php
