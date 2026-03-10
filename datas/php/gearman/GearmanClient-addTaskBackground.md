# GearmanClient::addTaskBackground

Source: https://devdocs.io/php/gearmanclient.addtaskbackground

(PECL gearman >= 0.5.0)

GearmanClient::addTaskBackground — Add a background task to be run in parallel

### Description

```
public GearmanClient::addTaskBackground(
 string $function_name,
 string|int|float $workload,
 mixed $context = null,
 ?string $unique_key = null
): GearmanTask|false
```

Adds a background task to be run in parallel with other tasks. Call this method for all the tasks to be run in parallel, then call GearmanClient::runTasks() to perform the work.

### Parameters

A registered function the worker is to execute

Serialized data to be processed

Application context to associate with a task

A unique ID used to identify a particular task

### Return Values

A GearmanTask object or false if the task could not be added.

### Examples

Example #1 Two tasks, one background and one not

This example illustrates the difference between running a background task and a normal task. The client adds two tasks to execute the same function, but one is added with addTaskBackground(). A callback is set so that progress of the job can be tracked. A simple worker with an artificial delay reports on the job progress and the client picks this up through the callback. Two workers are run for this example. Note that the background task does not show in the client output.

```
<?php

# The client script

# create our gearman client
$gmc= new GearmanClient();

# add the default job server
$gmc->addServer();

# set a couple of callbacks so we can track progress
$gmc->setCompleteCallback("reverse_complete");
$gmc->setStatusCallback("reverse_status");

# add a task for the "reverse" function
$task= $gmc->addTask("reverse", "Hello World!", null, "1");

# add another task, but this one to run in the background
$task= $gmc->addTaskBackground("reverse", "!dlroW olleH", null, "2");

if (! $gmc->runTasks())
{
    echo "ERROR " . $gmc->error() . "\n";
    exit;
}

echo "DONE\n";

function reverse_status($task)
{
    echo "STATUS: " . $task->unique() . ", " . $task->jobHandle() . " - " . $task->taskNumerator() . 
         "/" . $task->taskDenominator() . "\n";
}

function reverse_complete($task)
{
    echo "COMPLETE: " . $task->unique() . ", " . $task->data() . "\n";
}

?>
```

```
<?php

# The worker script

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
    echo "Sending status: " . ($x + 1) . "/$workload_size complete\n";
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

Worker output for two workers running:

```
Received job: H:foo.local:65
Workload: !dlroW olleH (12)
1/12 complete
Received job: H:foo.local:66
Workload: Hello World! (12)
Sending status: 1/12 complete
Sending status: 2/12 complete
Sending status: 2/12 complete
Sending status: 3/12 complete
Sending status: 3/12 complete
Sending status: 4/12 complete
Sending status: 4/12 complete
Sending status: 5/12 complete
Sending status: 5/12 complete
Sending status: 6/12 complete
Sending status: 6/12 complete
Sending status: 7/12 complete
Sending status: 7/12 complete
Sending status: 8/12 complete
Sending status: 8/12 complete
Sending status: 9/12 complete
Sending status: 9/12 complete
Sending status: 10/12 complete
Sending status: 10/12 complete
Sending status: 11/12 complete
Sending status: 11/12 complete
Sending status: 12/12 complete
Sending status: 12/12 complete
Result: !dlroW olleH
Result: Hello World!
```

Client output:

```
STATUS: 1, H:foo.local:66 - 1/12
STATUS: 1, H:foo.local:66 - 2/12
STATUS: 1, H:foo.local:66 - 3/12
STATUS: 1, H:foo.local:66 - 4/12
STATUS: 1, H:foo.local:66 - 5/12
STATUS: 1, H:foo.local:66 - 6/12
STATUS: 1, H:foo.local:66 - 7/12
STATUS: 1, H:foo.local:66 - 8/12
STATUS: 1, H:foo.local:66 - 9/12
STATUS: 1, H:foo.local:66 - 10/12
STATUS: 1, H:foo.local:66 - 11/12
STATUS: 1, H:foo.local:66 - 12/12
COMPLETE: 1, !dlroW olleH
DONE
```

### See Also

- GearmanClient::addTask() - Add a task to be run in parallel
- GearmanClient::addTaskHigh() - Add a high priority task to run in parallel
- GearmanClient::addTaskLow() - Add a low priority task to run in parallel
- GearmanClient::addTaskHighBackground() - Add a high priority background task to be run in parallel
- GearmanClient::addTaskLowBackground() - Add a low priority background task to be run in parallel
- GearmanClient::runTasks() - Run a list of tasks in parallel

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gearmanclient.addtaskbackground.php
