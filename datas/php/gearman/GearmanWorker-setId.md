# GearmanWorker::setId

Source: https://devdocs.io/php/gearmanworker.setid

(No version information available, might only be in Git)

GearmanWorker::setId — Give the worker an identifier so it can be tracked when asking gearmand for the list of available workers

### Description

```
public GearmanWorker::setId(string $id): bool
```

Assigns the worker an identifier.

### Parameters

A string identifier.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 GearmanWorker::setId() example

Set an identifier for a simple worker.

```
<?php
$worker= new GearmanWorker();
$worker->setId('test');
?>
```

The above example will output something similar to:

```
Run the following command:
gearadmin --workers

Output:
30 ::3a3a:3361:3361:3a33%976303667 - : test
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gearmanworker.setid.php
