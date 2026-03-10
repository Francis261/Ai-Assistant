# GearmanClient::addTaskHigh

Source: https://devdocs.io/php/gearmanclient.addtaskhigh

(PECL gearman >= 0.5.0)

GearmanClient::addTaskHigh — Add a high priority task to run in parallel

### Description

```
public GearmanClient::addTaskHigh(
 string $function_name,
 string|int|float $workload,
 mixed $context = null,
 ?string $unique_key = null
): GearmanTask|false
```

Adds a high priority task to be run in parallel with other tasks. Call this method for all the high priority tasks to be run in parallel, then call GearmanClient::runTasks() to perform the work. Tasks with a high priority will be selected from the queue before those of normal or low priority.

### Parameters

A registered function the worker is to execute

Serialized data to be processed

Application context to associate with a task

A unique ID used to identify a particular task

### Return Values

A GearmanTask object or false if the task could not be added.

### Examples

Example #1 A high priority task along with two normal tasks

A high priority task is included among two other tasks. A single worker is available, so that tasks are run one at a time, with the high priority task run first.

```
<?php

# create the gearman client
$gmc= new GearmanClient();

# add the default job server
$gmc->addServer();

# set the callback for when the job is complete
$gmc->setCompleteCallback("reverse_complete");

# add tasks, one of which is high priority
$task= $gmc->addTask("reverse", "Hello World!", null, "1");
$task= $gmc->addTaskHigh("reverse", "!dlroW olleH", null, "2");
$task= $gmc->addTask("reverse", "Hello World!", null, "3");

if (! $gmc->runTasks())
{
    echo "ERROR " . $gmc->error() . "\n";
    exit;
}
echo "DONE\n";

function reverse_complete($task)
{
    echo "COMPLETE: " . $task->unique() . ", " . $task->data() . "\n";
}

?>
```

The above example will output something similar to:

```
COMPLETE: 2, Hello World!
COMPLETE: 3, !dlroW olleH
COMPLETE: 1, !dlroW olleH
DONE
```

### See Also

- GearmanClient::addTask() - Add a task to be run in parallel
- GearmanClient::addTaskLow() - Add a low priority task to run in parallel
- GearmanClient::addTaskBackground() - Add a background task to be run in parallel
- GearmanClient::addTaskHighBackground() - Add a high priority background task to be run in parallel
- GearmanClient::addTaskLowBackground() - Add a low priority background task to be run in parallel
- GearmanClient::runTasks() - Run a list of tasks in parallel

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gearmanclient.addtaskhigh.php
