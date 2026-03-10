# The VarnishAdmin class

Source: https://devdocs.io/php/class.varnishadmin

## Introduction

(PECL varnish >= 0.3)

## Class synopsis

```
public auth(): bool
```

```
public ban(string $vcl_regex): int
```

```
public banUrl(string $vcl_regex): int
```

```
public clearPanic(): int
```

```
public connect(): bool
```

```
public __construct(array $args = ?)
```

```
public disconnect(): bool
```

```
public getPanic(): string
```

```
public getParams(): array
```

```
public isRunning(): bool
```

```
public setCompat(int $compat): void
```

```
public setHost(string $host): void
```

```
public setIdent(string $ident): void
```

```
public setParam(string $name, string|int $value): int
```

```
public setPort(int $port): void
```

```
public setSecret(string $secret): void
```

```
public setTimeout(int $timeout): void
```

```
public start(): int
```

```
public stop(): int
```

## Table of Contents

- VarnishAdmin::auth — Authenticate on a varnish instance
- VarnishAdmin::ban — Ban URLs using a VCL expression
- VarnishAdmin::banUrl — Ban an URL using a VCL expression
- VarnishAdmin::clearPanic — Clear varnish instance panic messages
- VarnishAdmin::connect — Connect to a varnish instance administration interface
- VarnishAdmin::__construct — VarnishAdmin constructor
- VarnishAdmin::disconnect — Disconnect from a varnish instance administration interface
- VarnishAdmin::getPanic — Get the last panic message on a varnish instance
- VarnishAdmin::getParams — Fetch current varnish instance configuration parameters
- VarnishAdmin::isRunning — Check if the varnish slave process is currently running
- VarnishAdmin::setCompat — Set the class compat configuration param
- VarnishAdmin::setHost — Set the class host configuration param
- VarnishAdmin::setIdent — Set the class ident configuration param
- VarnishAdmin::setParam — Set configuration param on the current varnish instance
- VarnishAdmin::setPort — Set the class port configuration param
- VarnishAdmin::setSecret — Set the class secret configuration param
- VarnishAdmin::setTimeout — Set the class timeout configuration param
- VarnishAdmin::start — Start varnish worker process
- VarnishAdmin::stop — Stop varnish worker process

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.varnishadmin.php
