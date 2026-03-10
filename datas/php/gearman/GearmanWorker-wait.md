# GearmanWorker::wait

Source: https://devdocs.io/php/gearmanworker.wait

(PECL gearman >= 0.6.0)

GearmanWorker::wait — Wait for activity from one of the job servers

### Description

```
public GearmanWorker::wait(): bool
```

Causes the worker to wait for activity from one of the Gearman job servers when operating in non-blocking I/O mode. On failure, issues a E_WARNING with the last Gearman error encountered.

### Parameters

This function has no parameters.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Running worker in non-blocking mode

```
<?php

echo "Starting\n";

# Create our worker object
$worker= new GearmanWorker();

# Make the worker non-blocking
$worker->addOptions(GEARMAN_WORKER_NON_BLOCKING); 

# Add the default server (localhost, port 4730)
$worker->addServer(); 

# Add our reverse function
$worker->addFunction('reverse', 'reverse_fn');

# Try to grab a job
while (@$worker->work() ||
       $worker->returnCode() == GEARMAN_IO_WAIT ||
       $worker->returnCode() == GEARMAN_NO_JOBS)
{
  if ($worker->returnCode() == GEARMAN_SUCCESS)
    continue;

  echo "Waiting for next job...\n";
  if (!@$worker->wait()) 
  { 
    if ($worker->returnCode() == GEARMAN_NO_ACTIVE_FDS) 
    { 
      # We are not connected to any servers, so wait a bit before 
      # trying to reconnect. 
      sleep(5); 
      continue; 
    } 
    break; 
  } 
} 

echo "Worker Error: " . $worker->error() . "\n";

function reverse_fn($job)
{
  return strrev($job->workload());
}

?>
```

### See Also

- GearmanWorker::work() - Wait for and perform jobs

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gearmanworker.wait.php
