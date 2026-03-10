# GearmanClient::doNormal

Source: https://devdocs.io/php/gearmanclient.donormal

(No version information available, might only be in Git)

GearmanClient::doNormal — Run a single task and return a result

### Description

```
public GearmanClient::doNormal(string $function, string $workload, ?string $unique = null): string
```

Runs a single task and returns a string representation of the result. It is up to the GearmanClient and GearmanWorker to agree on the format of the result.

### Parameters

A registered function the worker is to execute

Serialized data to be processed

A unique ID used to identify a particular task

### Return Values

A string representing the results of running a task.

### Examples

Example #1 Simple job submission with immediate return

```
<?php

?>
```

```
<?php

# Client code

echo "Starting\n";

# Create our client object.
$gmclient= new GearmanClient();

# Add default server (localhost).
$gmclient->addServer();

echo "Sending job\n";

$result = $gmclient->doNormal("reverse", "Hello!");

echo "Success: $result\n";

?>
```

```
<?php

echo "Starting\n";

# Create our worker object.
$gmworker= new GearmanWorker();

# Add default server (localhost).
$gmworker->addServer();

# Register function "reverse" with the server. Change the worker function to
# "reverse_fn_fast" for a faster worker with no output.
$gmworker->addFunction("reverse", "reverse_fn");

print "Waiting for job...\n";
while($gmworker->work())
{
  if ($gmworker->returnCode() != GEARMAN_SUCCESS)
  {
    echo "return_code: " . $gmworker->returnCode() . "\n";
    break;
  }
}

function reverse_fn($job)
{
  return strrev($job->workload());
}

?>
```

The above example will output something similar to:

```
Starting
Sending job
Success: !olleH
```

Example #2 Submitting a job and retrieving incremental status

A job is submitted and the script loops to retrieve status information. The worker has an artificial delay which results in a long running job and sends status and data as processing occurs. Each subsequent call to GearmanClient::doNormal() produces status information on the running job.

```
<?php

# Client code

# Create our client object.
$gmclient= new GearmanClient();

# Add default server (localhost).
$gmclient->addServer();

echo "Sending job\n";

# Send reverse job
do
{
  $result = $gmclient->doNormal("reverse", "Hello!");
  # Check for various return packets and errors.

  switch($gmclient->returnCode())
  {
    case GEARMAN_WORK_DATA:
      echo "Data: $result\n";
      break;
    case GEARMAN_WORK_STATUS:
      list($numerator, $denominator)= $gmclient->doStatus();
      echo "Status: $numerator/$denominator complete\n";
      break;
    case GEARMAN_WORK_FAIL:
      echo "Failed\n";
      exit;
    case GEARMAN_SUCCESS:
      break;
    default:
      echo "RET: " . $gmclient->returnCode() . "\n";
      echo "Error: " . $gmclient->error() . "\n";
      echo "Errno: " . $gmclient->getErrno() . "\n";
      exit;
  }
}
while($gmclient->returnCode() != GEARMAN_SUCCESS);

echo "Success: $result\n";

?>
```

```
<?php

# Worker code

echo "Starting\n";

# Create our worker object.
$gmworker= new GearmanWorker();

# Add default server (localhost).
$gmworker->addServer();

# Register function "reverse" with the server.
$gmworker->addFunction("reverse", "reverse_fn");

print "Waiting for job...\n";
while($gmworker->work())
{
  if ($gmworker->returnCode() != GEARMAN_SUCCESS)
  {
    echo "return_code: " . $gmworker->returnCode() . "\n";
    break;
  }
}

function reverse_fn($job)
{
  echo "Received job: " . $job->handle() . "\n";

  $workload = $job->workload();
  $workload_size = $job->workloadSize();

  echo "Workload: $workload ($workload_size)\n";

  # This status loop is not needed, just showing how it works
  for ($x= 0; $x < $workload_size; $x++)
  {
    echo "Sending status: " + $x + 1 . "/$workload_size complete\n";
    $job->sendStatus($x+1, $workload_size);
    $job->sendData(substr($workload, $x, 1));
    sleep(1);
  }

  $result= strrev($workload);
  echo "Result: $result\n";

  # Return what we want to send back to the client.
  return $result;
}

?>
```

The above example will output something similar to:

Worker output:

```
Starting
Waiting for job...
Received job: H:foo.local:106
Workload: Hello! (6)
1/6 complete
2/6 complete
3/6 complete
4/6 complete
5/6 complete
6/6 complete
Result: !olleH
```

Client output:

```
Starting
Sending job
Status: 1/6 complete
Data: H
Status: 2/6 complete
Data: e
Status: 3/6 complete
Data: l
Status: 4/6 complete
Data: l
Status: 5/6 complete
Data: o
Status: 6/6 complete
Data: !
Success: !olleH
```

### See Also

- GearmanClient::doHigh() - Run a single high priority task
- GearmanClient::doLow() - Run a single low priority task
- GearmanClient::doBackground() - Run a task in the background
- GearmanClient::doHighBackground() - Run a high priority task in the background
- GearmanClient::doLowBackground() - Run a low priority task in the background

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gearmanclient.donormal.php
