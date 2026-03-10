# Event::add

Source: https://devdocs.io/php/event.add

(PECL event >= 1.2.6-beta)

Event::add — Makes event pending

### Description

```
public Event::add( float $timeout  = ?): bool
```

Marks event pending. Non-pending event will never occur, and the event callback will never be called. In conjunction with Event::del() an event could be re-scheduled by user at any time.

If Event::add() is called on an already pending event, libevent will leave it pending and re-schedule it with the given timeout(if specified). If in this case timeout is not specified, Event::add() has no effect.

### Parameters

Timeout in seconds.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Adding a custom signal

```
<?php
/*
Launch it in a terminal window:

$ php examples/signal.php

In another terminal window find out the pid and send SIGTERM, e.g.:

$ ps aux | grep examp
ruslan    3976  0.2  0.0 139896 11256 pts/1    S+   10:25   0:00 php examples/signal.php
ruslan    3978  0.0  0.0   9572   864 pts/2    S+   10:26   0:00 grep --color=auto examp
$ kill -TERM 3976

At the first terminal window you should catch the following:

Caught signal 15
*/
class MyEventSignal {
    private $base, $ev;

    public function __construct($base) {
        $this->base = $base;
        $this->ev = Event::signal($base, SIGTERM, array($this, 'eventSighandler'));
        $this->ev->add();
    }

    public function eventSighandler($no, $c) {
        echo "Caught signal $no\n";
        $this->base->exit();
    }
}

$base = new EventBase();
$c    = new MyEventSignal($base);

$base->loop();
?>
```

The above example will output something similar to:

```
Caught signal 15
```

Example #2 Adding a timer

```
<?php
$base = new EventBase();
$n = 2;
$e = Event::timer($base, function($n) use (&$e) {
    echo "$n seconds elapsed\n";
    $e->delTimer();
}, $n);
$e->add($n);
$base->loop();
?>
```

The above example will output something similar to:

```
2 seconds elapsed
```

### See Also

- Event::add()
- Event::del() - Makes event non-pending
- Event::signal() - Constructs signal event object
- Event::timer() - Constructs timer event object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/event.add.php
