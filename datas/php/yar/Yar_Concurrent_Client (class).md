# The Yar_Concurrent_Client class

Source: https://devdocs.io/php/class.yar-concurrent-client

## Introduction

(No version information available, might only be in Git)

## Class synopsis

```
public static call(
 string $uri,
 string $method,
 array $parameters = ?,
 callable $callback = ?,
 callable $error_callback = ?,
 array $options = ?
): int
```

```
public static loop(callable $callback = ?, callable $error_callback = ?): bool
```

```
public static reset(): bool
```

## Properties

## Table of Contents

- Yar_Concurrent_Client::call — Register a concurrent call
- Yar_Concurrent_Client::loop — Send all calls
- Yar_Concurrent_Client::reset — Clean all registered calls

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.yar-concurrent-client.php
