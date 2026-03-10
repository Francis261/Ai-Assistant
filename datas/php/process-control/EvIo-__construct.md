# EvIo::__construct

Source: https://devdocs.io/php/evio.construct

(PECL ev >= 0.2.0)

EvIo::__construct — Constructs EvIo watcher object

### Description

Constructs EvIo watcher object and starts the watcher automatically.

### Parameters

Can be a stream opened with fopen() or similar functions, numeric file descriptor, or socket.

Ev::READ and/or Ev::WRITE. See the bit masks.

See Watcher callbacks.

Custom data associated with the watcher.

Watcher priority

### See Also

- EvIo::createStopped() - Create stopped EvIo watcher object
- EvLoop::io() - Create EvIo watcher object associated with the current event loop instance

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/evio.construct.php
