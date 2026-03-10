# The ZookeeperConfig class

Source: https://devdocs.io/php/class.zookeeperconfig

## Introduction

(PECL zookeeper >= 0.6.0, ZooKeeper >= 3.5.0)

The ZooKeeper Config handling class.

## Class synopsis

```
public add(string $members, int $version = -1, array &$stat = null): void
```

```
public get(callable $watcher_cb = null, array &$stat = null): string
```

```
public remove(string $id_list, int $version = -1, array &$stat = null): void
```

```
public set(string $members, int $version = -1, array &$stat = null): void
```

## Table of Contents

- ZookeeperConfig::add — Add servers to the ensemble
- ZookeeperConfig::get — Gets the last committed configuration of the ZooKeeper cluster as it is known to the server to which the client is connected, synchronously
- ZookeeperConfig::remove — Remove servers from the ensemble
- ZookeeperConfig::set — Change ZK cluster ensemble membership and roles of ensemble peers

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.zookeeperconfig.php
