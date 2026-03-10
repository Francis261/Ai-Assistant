# GearmanWorker::addFunction

Source: https://devdocs.io/php/gearmanworker.addfunction

(PECL gearman >= 0.5.0)

GearmanWorker::addFunction — Register and add callback function

### Description

```
public GearmanWorker::addFunction(
 string $function_name,
 callable $function,
 mixed $context = null,
 int $timeout = 0
): bool
```

Registers a function name with the job server and specifies a callback corresponding to that function. Optionally specify extra application context data to be used when the callback is called and a timeout.

### Parameters

The name of a function to register with the job server

A callback that gets called when a job for the registered function name is submitted

A reference to arbitrary application context data that can be modified by the worker function

An interval of time in seconds

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Simple worker making use of extra application context data

```
<?php

# get a gearman worker
$worker= new GearmanWorker(); 

# add the default server (localhost)
$worker->addServer(); 

# define a variable to hold application data
$count= 0; 

# add the "reverse" function
$worker->addFunction("reverse", "reverse_cb", $count);

# start the worker
while ($worker->work());

function reverse_cb($job, &$count) 
{ 
  $count++; 
  return "$count: " . strrev($job->workload()); 
} 

?>
```

Running a client that submits two jobs for the reverse function would have output similar to the following:

```
1: olleh
2: dlrow
```

### See Also

- GearmanClient::do() - Run a single task and return a result [deprecated]

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gearmanworker.addfunction.php
