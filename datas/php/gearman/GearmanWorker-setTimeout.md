# GearmanWorker::setTimeout

Source: https://devdocs.io/php/gearmanworker.settimeout

(PECL gearman >= 0.6.0)

GearmanWorker::setTimeout — Set socket I/O activity timeout

### Description

```
public GearmanWorker::setTimeout(int $timeout): true
```

Sets the interval of time to wait for socket I/O activity.

### Parameters

An interval of time in milliseconds. A negative value indicates an infinite timeout.

### Return Values

Always returns true.

### Examples

Example #1 A simple worker with a 5 second timeout

```
<?php

echo "Starting\n";

# Create our worker object.
$gmworker= new GearmanWorker();

# Add default server (localhost).
$gmworker->addServer();

# Register function "reverse" with the server.
$gmworker->addFunction("reverse", "reverse_fn");

# Set the timeout to 5 seconds
$gmworker->setTimeout(5000);

echo "Waiting for job...\n";
while(@$gmworker->work() || $gmworker->returnCode() == GEARMAN_TIMEOUT)
{
  if ($gmworker->returnCode() == GEARMAN_TIMEOUT)
  {
    # Normally one would want to do something useful here ...
    echo "Timeout. Waiting for next job...\n";
    continue;
  }

  if ($gmworker->returnCode() != GEARMAN_SUCCESS)
  {
    echo "return_code: " . $gmworker->returnCode() . "\n";
    break;
  }
}

echo "Done\n";

function reverse_fn($job)
{
  return strrev($job->workload());
}

?>
```

Running the worker with no submitted jobs will generate output that looks like the following:

```
Starting
Waiting for job...
Timeout. Waiting for next job...
Timeout. Waiting for next job...
Timeout. Waiting for next job...
```

### See Also

- GearmanWorker::timeout() - Get socket I/O activity timeout

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gearmanworker.settimeout.php
