# EvWatcher::keepalive

Source: https://devdocs.io/php/evwatcher.keepalive

(PECL ev >= 0.2.0)

EvWatcher::keepalive — Configures whether to keep the loop from returning

### Description

```
public EvWatcher::keepalive( bool $value  = ?): bool
```

Configures whether to keep the loop from returning. With keepalive value set to false the watcher won't keep Ev::run() / EvLoop::run() from returning even though the watcher is active.

Watchers have keepalive value true by default.

Clearing keepalive status is useful when returning from Ev::run() / EvLoop::run() just because of the watcher is undesirable. It could be a long running UDP socket watcher or so.

### Parameters

With keepalive value set to false the watcher won't keep Ev::run() / EvLoop::run() from returning even though the watcher is active.

### Return Values

Returns the previous state.

### Examples

Example #1 Register an I/O watcher for some UDP socket but do not keep the event loop from running just because of that watcher.

```
<?php
$udp_socket = ...
$udp_watcher = new EvIo($udp_socket, Ev::READ, function () { /* ... */ });
$udp_watcher->keepalive(FALSE);
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/evwatcher.keepalive.php
