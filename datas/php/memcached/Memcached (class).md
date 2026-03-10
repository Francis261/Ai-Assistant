# The Memcached class

Source: https://devdocs.io/php/class.memcached

## Introduction

(PECL memcached >= 0.1.0)

Represents a connection to a set of memcached servers.

## Class synopsis

```
public add(string $key, mixed $value, int $expiration = 0): bool
```

```
public addByKey(
 string $server_key,
 string $key,
 mixed $value,
 int $expiration = 0
): bool
```

```
public addServer(string $host, int $port, int $weight = 0): bool
```

```
public addServers(array $servers): bool
```

```
public append(string $key, string $value): ?bool
```

```
public appendByKey(string $server_key, string $key, string $value): ?bool
```

```
public cas(
 string|int|float $cas_token,
 string $key,
 mixed $value,
 int $expiration = 0
): bool
```

```
public casByKey(
 string|int|float $cas_token,
 string $server_key,
 string $key,
 mixed $value,
 int $expiration = 0
): bool
```

```
public decrement(
 string $key,
 int $offset = 1,
 int $initial_value = 0,
 int $expiry = 0
): int|false
```

```
public decrementByKey(
 string $server_key,
 string $key,
 int $offset = 1,
 int $initial_value = 0,
 int $expiry = 0
): int|false
```

```
public delete(string $key, int $time = 0): bool
```

```
public deleteByKey(string $server_key, string $key, int $time = 0): bool
```

```
public deleteMulti(array $keys, int $time = 0): array
```

```
public deleteMultiByKey(string $server_key, array $keys, int $time = 0): array
```

```
public fetch(): array|false
```

```
public fetchAll(): array|false
```

```
public flush(int $delay = 0): bool
```

```
public get(string $key, ?callable $cache_cb = null, int $get_flags = 0): mixed
```

```
public getAllKeys(): array|false
```

```
public getByKey(
 string $server_key,
 string $key,
 ?callable $cache_cb = null,
 int $get_flags = 0
): mixed
```

```
public getDelayed(array $keys, bool $with_cas = false, ?callable $value_cb = null): bool
```

```
public getDelayedByKey(
 string $server_key,
 array $keys,
 bool $with_cas = false,
 ?callable $value_cb = null
): bool
```

```
public getMulti(array $keys, int $get_flags = 0): array|false
```

```
public getMultiByKey(string $server_key, array $keys, int $get_flags = 0): array|false
```

```
public getOption(int $option): mixed
```

```
public getResultCode(): int
```

```
public getResultMessage(): string
```

```
public getServerByKey(string $server_key): array|false
```

```
public getServerList(): array
```

```
public getStats(?string $type = null): array|false
```

```
public getVersion(): array|false
```

```
public increment(
 string $key,
 int $offset = 1,
 int $initial_value = 0,
 int $expiry = 0
): int|false
```

```
public incrementByKey(
 string $server_key,
 string $key,
 int $offset = 1,
 int $initial_value = 0,
 int $expiry = 0
): int|false
```

```
public isPersistent(): bool
```

```
public isPristine(): bool
```

```
public prepend(string $key, string $value): ?bool
```

```
public prependByKey(string $server_key, string $key, string $value): ?bool
```

```
public quit(): bool
```

```
public replace(string $key, mixed $value, int $expiration = 0): bool
```

```
public replaceByKey(
 string $server_key,
 string $key,
 mixed $value,
 int $expiration = 0
): bool
```

```
public resetServerList(): bool
```

```
public set(string $key, mixed $value, int $expiration = 0): bool
```

```
public setByKey(
 string $server_key,
 string $key,
 mixed $value,
 int $expiration = 0
): bool
```

```
public setEncodingKey(string $key): bool
```

```
public setMulti(array $items, int $expiration = 0): bool
```

```
public setMultiByKey(string $server_key, array $items, int $expiration = 0): bool
```

```
public setOption(int $option, mixed $value): bool
```

```
public setOptions(array $options): bool
```

```
public setSaslAuthData(string $username, string $password): bool
```

```
public touch(string $key, int $expiration = 0): bool
```

```
public touchByKey(string $server_key, string $key, int $expiration = 0): bool
```

## Table of Contents

- Memcached::add — Add an item under a new key
- Memcached::addByKey — Add an item under a new key on a specific server
- Memcached::addServer — Add a server to the server pool
- Memcached::addServers — Add multiple servers to the server pool
- Memcached::append — Append data to an existing item
- Memcached::appendByKey — Append data to an existing item on a specific server
- Memcached::cas — Compare and swap an item
- Memcached::casByKey — Compare and swap an item on a specific server
- Memcached::__construct — Create a Memcached instance
- Memcached::decrement — Decrement numeric item's value
- Memcached::decrementByKey — Decrement numeric item's value, stored on a specific server
- Memcached::delete — Delete an item
- Memcached::deleteByKey — Delete an item from a specific server
- Memcached::deleteMulti — Delete multiple items
- Memcached::deleteMultiByKey — Delete multiple items from a specific server
- Memcached::fetch — Fetch the next result
- Memcached::fetchAll — Fetch all the remaining results
- Memcached::flush — Invalidate all items in the cache
- Memcached::get — Retrieve an item
- Memcached::getAllKeys — Gets the keys stored on all the servers
- Memcached::getByKey — Retrieve an item from a specific server
- Memcached::getDelayed — Request multiple items
- Memcached::getDelayedByKey — Request multiple items from a specific server
- Memcached::getMulti — Retrieve multiple items
- Memcached::getMultiByKey — Retrieve multiple items from a specific server
- Memcached::getOption — Retrieve a Memcached option value
- Memcached::getResultCode — Return the result code of the last operation
- Memcached::getResultMessage — Return the message describing the result of the last operation
- Memcached::getServerByKey — Map a key to a server
- Memcached::getServerList — Get the list of the servers in the pool
- Memcached::getStats — Get server pool statistics
- Memcached::getVersion — Get server pool version info
- Memcached::increment — Increment numeric item's value
- Memcached::incrementByKey — Increment numeric item's value, stored on a specific server
- Memcached::isPersistent — Check if a persitent connection to memcache is being used
- Memcached::isPristine — Check if the instance was recently created
- Memcached::prepend — Prepend data to an existing item
- Memcached::prependByKey — Prepend data to an existing item on a specific server
- Memcached::quit — Close any open connections
- Memcached::replace — Replace the item under an existing key
- Memcached::replaceByKey — Replace the item under an existing key on a specific server
- Memcached::resetServerList — Clears all servers from the server list
- Memcached::set — Store an item
- Memcached::setByKey — Store an item on a specific server
- Memcached::setEncodingKey — Set AES encryption key for data in Memcached
- Memcached::setMulti — Store multiple items
- Memcached::setMultiByKey — Store multiple items on a specific server
- Memcached::setOption — Set a Memcached option
- Memcached::setOptions — Set Memcached options
- Memcached::setSaslAuthData — Set the credentials to use for authentication
- Memcached::touch — Set a new expiration on an item
- Memcached::touchByKey — Set a new expiration on an item on a specific server

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.memcached.php
