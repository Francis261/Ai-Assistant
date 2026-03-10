# EvEmbed::__construct

Source: https://devdocs.io/php/evembed.construct

(PECL ev >= 0.2.0)

EvEmbed::__construct — Constructs the EvEmbed object

### Description

This is a rather advanced watcher type that lets to embed one event loop into another(currently only IO events are supported in the embedded loop, other types of watchers might be handled in a delayed or incorrect fashion and must not be used).

See » the libev documentation for details.

This watcher is most useful on BSD systems without working kqueue to still be able to handle a large number of sockets. See example below.

### Parameters

Instance of EvLoop. The loop to embed, this loop must be embeddable(see Ev::embeddableBackends() ).

See Watcher callbacks.

Custom data associated with the watcher.

Watcher priority

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

- Ev::embeddableBackends() - Returns the set of backends that are embeddable in other event loops

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/evembed.construct.php
