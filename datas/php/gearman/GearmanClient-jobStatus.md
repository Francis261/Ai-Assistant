# GearmanClient::jobStatus

Source: https://devdocs.io/php/gearmanclient.jobstatus

# gearman_job_status

(PECL gearman >= 0.5.0)

GearmanClient::jobStatus -- gearman_job_status — Get the status of a background job

### Description

Object-oriented style (method):

```
public GearmanClient::jobStatus(string $job_handle): array
```

Gets the status for a background job given a job handle. The status information will specify whether the job is known, whether the job is currently running, and the percentage completion.

### Parameters

The job handle assigned by the Gearman server

### Return Values

An array containing status information for the job corresponding to the supplied job handle. The first array element is a boolean indicating whether the job is even known, the second is a boolean indicating whether the job is still running, and the third and fourth elements correspond to the numerator and denominator of the fractional completion percentage, respectively.

### Examples

Example #1 Monitor the status of a long running background job

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
   echo "Running: " . ($stat[1] ? "true" : "false") . ", numerator: " . $stat[2] . ", denomintor: " . $stat[3] . "\n";
}
while(!$done);

echo "done!\n";

?>
```

The above example will output something similar to:

```
Running: true, numerator: 3, denomintor: 14
Running: true, numerator: 6, denomintor: 14
Running: true, numerator: 9, denomintor: 14
Running: true, numerator: 12, denomintor: 14
Running: false, numerator: 0, denomintor: 0
done!
```

### See Also

- GearmanClient::doStatus() - Get the status for the running task

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gearmanclient.jobstatus.php
