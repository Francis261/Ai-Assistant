# GearmanClient::addTask

Source: https://devdocs.io/php/gearmanclient.addtask

(PECL gearman >= 0.5.0)

GearmanClient::addTask — Add a task to be run in parallel

### Description

```
public GearmanClient::addTask(
 string $function_name,
 string|int|float $workload,
 mixed $context = null,
 ?string $unique_key = null
): GearmanTask|false
```

Adds a task to be run in parallel with other tasks. Call this method for all the tasks to be run in parallel, then call GearmanClient::runTasks() to perform the work. Note that enough workers need to be available for the tasks to all run in parallel.

### Parameters

A registered function the worker is to execute

Serialized data to be processed

Application context to associate with a task

A unique ID used to identify a particular task

### Return Values

A GearmanTask object or false if the task could not be added.

### Examples

Example #1 Basic submission of two tasks

```
<?php

# Create our gearman client
$gmclient= new GearmanClient(); 

# add the default job server
$gmclient->addServer(); 

# set a function to be called when the work is complete
$gmclient->setCompleteCallback("complete"); 

# add a task to perform the "reverse" function on the string "Hello World!"
$gmclient->addTask("reverse", "Hello World!", null, "1"); 

# add another task to perform the "reverse" function on the string "!dlroW olleH"
$gmclient->addTask("reverse", "!dlroW olleH", null, "2"); 

# run the tasks
$gmclient->runTasks(); 

function complete($task) 
{ 
  print "COMPLETE: " . $task->unique() . ", " . $task->data() . "\n"; 
}

?>
```

The above example will output something similar to:

```
COMPLETE: 2, Hello World!
COMPLETE: 1, !dlroW olleH
```

Example #2 Basic submission of two tasks with passing application context

```
<?php

$client = new GearmanClient();
$client->addServer();

# set a function to be called when the work is complete
$client->setCompleteCallback("reverse_complete");

# Add some tasks for a placeholder of where to put the results
$results = array();
$client->addTask("reverse", "Hello World!", $results, "t1");
$client->addTask("reverse", "!dlroW olleH", $results, "t2");

$client->runTasks();

# The results should now be filled in from the callbacks
foreach ($results as $id => $result)
   echo $id . ": " . $result['handle'] . ", " . $result['data'] . "\n";

function reverse_complete($task, $results)
{
   $results[$task->unique()] = array("handle"=>$task->jobHandle(), "data"=>$task->data());
}

?>
```

The above example will output something similar to:

```
t2: H.foo:21, Hello World!
t1: H:foo:22, !dlroW olleH
```

### See Also

- GearmanClient::addTaskHigh() - Add a high priority task to run in parallel
- GearmanClient::addTaskLow() - Add a low priority task to run in parallel
- GearmanClient::addTaskBackground() - Add a background task to be run in parallel
- GearmanClient::addTaskHighBackground() - Add a high priority background task to be run in parallel
- GearmanClient::addTaskLowBackground() - Add a low priority background task to be run in parallel
- GearmanClient::runTasks() - Run a list of tasks in parallel

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gearmanclient.addtask.php
