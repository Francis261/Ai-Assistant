# The Yac class

Source: https://devdocs.io/php/class.yac

## Introduction

(PECL yac >= 1.0.0)

## Class synopsis

```
public add(string $keys, mixed $value, int $ttl = 0): bool
```

```
public add(array $key_vals): bool
```

```
public delete(string|array $keys, int $ttl = ?): bool
```

```
public dump(int $$num): mixed
```

```
public flush(): bool
```

```
public get(string|array $key, int &$cas = null): mixed
```

```
public __get(string $key): mixed
```

```
public info(): array
```

```
public set(string $keys, mixed $value, int $ttl = 0): bool
```

```
public add(array $key_vals): bool
```

```
public __set(string $keys, mixed $value): mixed
```

## Properties

## Table of Contents

- Yac::add — Store into cache
- Yac::__construct — Constructor
- Yac::delete — Remove items from cache
- Yac::dump — Dump cache
- Yac::flush — Flush the cache
- Yac::get — Retrieve values from cache
- Yac::__get — Getter
- Yac::info — Status of cache
- Yac::set — Store into cache
- Yac::__set — Setter

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.yac.php
