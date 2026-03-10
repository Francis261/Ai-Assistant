# Ev::supportedBackends

Source: https://devdocs.io/php/ev.supportedbackends

(PECL ev >= 0.2.0)

Ev::supportedBackends — Returns the set of backends supported by current libev configuration

### Description

```
final public static Ev::supportedBackends(): int
```

Returns the set of backends supported by current libev configuration.

### Parameters

This function has no parameters.

### Return Values

Returns a bit mask which can containing backend flags combined using bitwise OR operator.

### Examples

Example #1 Embedding loop created with kqueue backend into the default loop

```
<?php
/*
* Check if kqueue is available but not recommended and create a kqueue backend
* for use with sockets (which usually work with any kqueue implementation).
* Store the kqueue/socket-only event loop in loop_socket. (One might optionally
* use EVFLAG_NOENV, too)
*
* Example borrowed from
* http://pod.tst.eu/http://cvs.schmorp.de/libev/ev.pod#Examples_CONTENT-9
*/
$loop        = EvLoop::defaultLoop();
$socket_loop = NULL;
$embed       = NULL;

if (Ev::supportedBackends() & ~Ev::recommendedBackends() & Ev::BACKEND_KQUEUE) {
 if (($socket_loop = new EvLoop(Ev::BACKEND_KQUEUE))) {
  $embed = new EvEmbed($loop);
 }
}

if (!$socket_loop) {
 $socket_loop = $loop;
}

// Now use $socket_loop for all sockets, and $loop for anything else
?>
```

### See Also

- EvEmbed
- Ev::recommendedBackends() - Returns a bit mask of recommended backends for current platform
- Ev::embeddableBackends() - Returns the set of backends that are embeddable in other event loops
- Backend flags
- Examples

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ev.supportedbackends.php
