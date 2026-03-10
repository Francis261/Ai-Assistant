# GearmanWorker::work

Source: https://devdocs.io/php/gearmanworker.work

(PECL gearman >= 0.5.0)

GearmanWorker::work — Wait for and perform jobs

### Description

```
public GearmanWorker::work(): bool
```

Waits for a job to be assigned and then calls the appropriate callback function. Issues an E_WARNING with the last Gearman error if the return code is not one of GEARMAN_SUCCESS, GEARMAN_IO_WAIT, or GEARMAN_WORK_FAIL.

### Parameters

This function has no parameters.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 GearmanWorker::work() example

```
<?php

# create the worker
$worker = new GearmanWorker(); 

# add the default job server (localhost)
$worker->addServer(); 

# add the reverse function
$worker->addFunction("reverse", "my_reverse_function"); 

# start te worker listening for job submissions
while ($worker->work()); 
 
function my_reverse_function($job) 
{ 
  return strrev($job->workload()); 
}

?>
```

### See Also

- GearmanWorker::addFunction() - Register and add callback function

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gearmanworker.work.php
