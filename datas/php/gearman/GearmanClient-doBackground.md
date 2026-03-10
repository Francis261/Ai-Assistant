# GearmanClient::doBackground

Source: https://devdocs.io/php/gearmanclient.dobackground

(PECL gearman >= 0.5.0)

GearmanClient::doBackground — Run a task in the background

### Description

```
public GearmanClient::doBackground(string $function, string $workload, ?string $unique = null): string
```

Runs a task in the background, returning a job handle which can be used to get the status of the running task.

### Parameters

A registered function the worker is to execute

Serialized data to be processed

A unique ID used to identify a particular task

### Return Values

The job handle for the submitted task.

### Examples

Example #1 Submit and monitor a background job

The worker in this example has an artificial delay introduced to mimic a long running job. The client script periodically checks the status of the running job.

```
<?php

/* create our object */
$gmclient= new GearmanClient();

/* add the default server */
$gmclient->addServer();

/* run reverse client */
$job_handle = $gmclient->doBackground("reverse", "this is a test");

if ($gmclient->returnCode() != GEARMAN_SUCCESS)
{
  echo "bad return code\n";
  exit;
}

$done = false;
do
{
   sleep(3);
   $stat = $gmclient->jobStatus($job_handle);
   if (!$stat[0]) // the job is known so it is not done
      $done = true;
   echo "Running: " . ($stat[1] ? "true" : "false") . ", numerator: " . $stat[2] . ", denominator: " . $stat[3] . "\n";
}
while(!$done);

echo "done!\n";

?>
```

The above example will output something similar to:

```
Running: true, numerator: 3, denominator: 14
Running: true, numerator: 6, denominator: 14
Running: true, numerator: 9, denominator: 14
Running: true, numerator: 12, denominator: 14
Running: false, numerator: 0, denominator: 0
done!
```

### See Also

- GearmanClient::doNormal() - Run a single task and return a result
- GearmanClient::doHigh() - Run a single high priority task
- GearmanClient::doLow() - Run a single low priority task
- GearmanClient::doHighBackground() - Run a high priority task in the background
- GearmanClient::doLowBackground() - Run a low priority task in the background

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gearmanclient.dobackground.php
