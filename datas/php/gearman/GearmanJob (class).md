# The GearmanJob class

Source: https://devdocs.io/php/class.gearmanjob

## Introduction

(PECL gearman >= 0.5.0)

## Class synopsis

```
public functionName(): false|string
```

```
public handle(): false|string
```

```
public returnCode(): int
```

```
public sendComplete(string $result): bool
```

```
public sendData(string $data): bool
```

```
public sendException(string $exception): bool
```

```
public sendFail(): bool
```

```
public sendStatus(int $numerator, int $denominator): bool
```

```
public sendWarning(string $warning): bool
```

```
public setReturn(int $gearman_return_t): bool
```

```
public unique(): false|string
```

```
public workload(): string
```

```
public workloadSize(): int
```

## Table of Contents

- GearmanJob::complete — Send the result and complete status (deprecated)
- GearmanJob::__construct — Create a GearmanJob instance
- GearmanJob::data — Send data for a running job (deprecated)
- GearmanJob::exception — Send exception for running job (deprecated)
- GearmanJob::fail — Send fail status (deprecated)
- GearmanJob::functionName — Get function name
- GearmanJob::handle — Get the job handle
- GearmanJob::returnCode — Get last return code
- GearmanJob::sendComplete — Send the result and complete status
- GearmanJob::sendData — Send data for a running job
- GearmanJob::sendException — Send exception for running job (exception)
- GearmanJob::sendFail — Send fail status
- GearmanJob::sendStatus — Send status
- GearmanJob::sendWarning — Send a warning
- GearmanJob::setReturn — Set a return value
- GearmanJob::status — Send status (deprecated)
- GearmanJob::unique — Get the unique identifier
- GearmanJob::warning — Send a warning (deprecated)
- GearmanJob::workload — Get workload
- GearmanJob::workloadSize — Get size of work load

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.gearmanjob.php
