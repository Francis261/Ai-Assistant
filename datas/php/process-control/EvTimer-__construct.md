# EvTimer::__construct

Source: https://devdocs.io/php/evtimer.construct

(PECL ev >= 0.2.0)

EvTimer::__construct — Constructs an EvTimer watcher object

### Description

Constructs an EvTimer watcher object.

### Parameters

Configures the timer to trigger after after seconds.

If repeat is 0.0, then it will automatically be stopped once the timeout is reached. If it is positive, then the timer will automatically be configured to trigger again every repeat seconds later, until stopped manually.

See Watcher callbacks.

Custom data associated with the watcher.

Watcher priority

### Examples

Example #1 Simple timers

```
<?php
// Create and start timer firing after 2 seconds
$w1 = new EvTimer(2, 0, function () {
    echo "2 seconds elapsed\n";
});

// Create and launch timer firing after 2 seconds repeating each second
// until we manually stop it
$w2 = new EvTimer(2, 1, function ($w) {
    echo "is called every second, is launched after 2 seconds\n";
    echo "iteration = ", Ev::iteration(), PHP_EOL;

    // Stop the watcher after 5 iterations
    Ev::iteration() == 5 and $w->stop();
    // Stop the watcher if further calls cause more than 10 iterations
    Ev::iteration() >= 10 and $w->stop();
});

// Create stopped timer. It will be inactive until we start it ourselves
$w_stopped = EvTimer::createStopped(10, 5, function($w) {
    echo "Callback of a timer created as stopped\n";

    // Stop the watcher after 2 iterations
    Ev::iteration() >= 2 and $w->stop();
});

// Loop until Ev::stop() is called or all of watchers stop
Ev::run();

// Start and look if it works
$w_stopped->start();
echo "Run single iteration\n";
Ev::run(Ev::RUN_ONCE);

echo "Restart the second watcher and try to handle the same events, but don't block\n";
$w2->again();
Ev::run(Ev::RUN_NOWAIT);

$w = new EvTimer(10, 0, function() {});
echo "Running a blocking loop\n";
Ev::run();
echo "END\n";
?>
```

The above example will output something similar to:

```
2 seconds elapsed
is called every second, is launched after 2 seconds
iteration = 1
is called every second, is launched after 2 seconds
iteration = 2
is called every second, is launched after 2 seconds
iteration = 3
is called every second, is launched after 2 seconds
iteration = 4
is called every second, is launched after 2 seconds
iteration = 5
Run single iteration
Callback of a timer created as stopped
Restart the second watcher and try to handle the same events, but don't block
Running a blocking loop
is called every second, is launched after 2 seconds
iteration = 8
is called every second, is launched after 2 seconds
iteration = 9
is called every second, is launched after 2 seconds
iteration = 10
END
```

### See Also

- EvTimer::createStopped() - Creates EvTimer stopped watcher object
- EvPeriodic
- » ev_timer - relative and optionally repeating timeouts
- » Be smart about timeouts

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/evtimer.construct.php
