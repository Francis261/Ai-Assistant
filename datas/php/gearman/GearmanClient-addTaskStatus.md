# GearmanClient::addTaskStatus

Source: https://devdocs.io/php/gearmanclient.addtaskstatus

(PECL gearman >= 0.5.0)

GearmanClient::addTaskStatus — Add a task to get status

### Description

```
public GearmanClient::addTaskStatus(string $job_handle, mixed $context = null): GearmanTask|false
```

Used to request status information from the Gearman server, which will call the specified status callback (set using GearmanClient::setStatusCallback()).

### Parameters

The job handle for the task to get status for

Data to be passed to the status callback, generally a reference to an array or object

### Return Values

A GearmanTask object or false on failure.

### Examples

Example #1 Monitor completion of multiple background tasks

An artificial delay is introduced in the worker in this example to simulate a long running process. There is only one worker running for this example.

```
<?php

/* create our object */
$gmclient= new GearmanClient();

/* add the default server */
$gmclient->addServer();

/* start some background jobs and save the handles */
$handles = array();
$handles[0] = $gmclient->doBackground("reverse", "Hello World!");
$handles[1] = $gmclient->doBackground("reverse", "!dlroW olleH");

$gmclient->setStatusCallback("reverse_status");

/* Poll the server to see when those background jobs finish; */
/* a better method would be to use event callbacks */
do
{
   /* Use the context variable to track how many tasks have completed */
   $done = 0;
   $gmclient->addTaskStatus($handles[0], $done);
   $gmclient->addTaskStatus($handles[1], $done);
   $gmclient->runTasks();
   echo "Done: $done\n";
   sleep(1);
}
while ($done != 2);

function reverse_status($task, $done)
{
   if (!$task->isKnown())
      $done++;
}

?>
```

The above example will output something similar to:

```
Done: 0
Done: 0
Done: 0
Done: 0
Done: 0
Done: 0
Done: 0
Done: 0
Done: 0
Done: 0
Done: 0
Done: 0
Done: 1
Done: 1
Done: 1
Done: 1
Done: 1
Done: 1
Done: 1
Done: 1
Done: 1
Done: 1
Done: 1
Done: 1
Done: 2
```

### See Also

- GearmanClient::setStatusCallback() - Set a callback for collecting task status

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gearmanclient.addtaskstatus.php
