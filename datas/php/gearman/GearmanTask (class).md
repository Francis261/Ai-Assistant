# The GearmanTask class

Source: https://devdocs.io/php/class.gearmantask

## Introduction

(PECL gearman >= 0.5.0)

## Class synopsis

```
public data(): false|string
```

```
public dataSize(): int|false
```

```
public functionName(): false|string
```

```
public isKnown(): bool
```

```
public isRunning(): bool
```

```
public jobHandle(): false|string
```

```
public recvData(int $data_len): false|array
```

```
public returnCode(): int
```

```
public sendWorkload(string $data): int|false
```

```
public taskDenominator(): false|int
```

```
public taskNumerator(): false|int
```

```
public unique(): false|string
```

## Table of Contents

- GearmanTask::__construct — Create a GearmanTask instance
- GearmanTask::create — Create a task (deprecated)
- GearmanTask::data — Get data returned for a task
- GearmanTask::dataSize — Get the size of returned data
- GearmanTask::function — Get associated function name (deprecated)
- GearmanTask::functionName — Get associated function name
- GearmanTask::isKnown — Determine if task is known
- GearmanTask::isRunning — Test whether the task is currently running
- GearmanTask::jobHandle — Get the job handle
- GearmanTask::recvData — Read work or result data into a buffer for a task
- GearmanTask::returnCode — Get the last return code
- GearmanTask::sendData — Send data for a task (deprecated)
- GearmanTask::sendWorkload — Send data for a task
- GearmanTask::taskDenominator — Get completion percentage denominator
- GearmanTask::taskNumerator — Get completion percentage numerator
- GearmanTask::unique — Get the unique identifier for a task
- GearmanTask::uuid — Get the unique identifier for a task (deprecated)

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.gearmantask.php
