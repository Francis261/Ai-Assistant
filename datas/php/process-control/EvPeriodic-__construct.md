# EvPeriodic::__construct

Source: https://devdocs.io/php/evperiodic.construct

(PECL ev >= 0.2.0)

EvPeriodic::__construct — Constructs EvPeriodic watcher object

### Description

Constructs EvPeriodic watcher object and starts it automatically. EvPeriodic::createStopped() method creates stopped periodic watcher.

### Parameters

See Periodic watcher operation modes

See Periodic watcher operation modes

Reschedule callback. You can pass null. See Periodic watcher operation modes

See Watcher callbacks.

Custom data associated with the watcher.

Watcher priority

### Examples

Example #1 Periodic timer. Use reschedule callback

```
<?php
// Tick each 10.5 seconds

function reschedule_cb ($watcher, $now) {
 return $now + (10.5. - fmod($now, 10.5));
}

$w = new EvPeriodic(0., 0., "reschedule_cb", function ($w, $revents) {
 echo time(), PHP_EOL;
});
Ev::run();
?>
```

Example #2 Periodic timer. Tick every 10.5 seconds starting at now

```
<?php
// Tick every 10.5 seconds starting at now
$w = new EvPeriodic(fmod(Ev::now(), 10.5), 10.5, NULL, function ($w, $revents) {
 echo time(), PHP_EOL;
});
Ev::run();
?>
```

Example #3 Hourly watcher

```
<?php
$hourly = EvPeriodic(0, 3600, NULL, function () {
 echo "once per hour\n";
});
?>
```

### See Also

- Periodic watcher operation modes
- EvTimer
- EvPeriodic::createStopped() - Create a stopped EvPeriodic watcher

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/evperiodic.construct.php
