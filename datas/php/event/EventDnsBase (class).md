# The EventDnsBase class

Source: https://devdocs.io/php/class.eventdnsbase

## Introduction

(PECL event >= 1.2.6-beta)

Represents Libevent's DNS base structure. Used to resolve DNS asyncronously, parse configuration files like resolv.conf etc.

## Class synopsis

```
public addNameserverIp( string $ip ): bool
```

```
public addSearch( string $domain ): void
```

```
public clearSearch(): void
```

```
public countNameservers(): int
```

```
public loadHosts( string $hosts ): bool
```

```
public parseResolvConf( int $flags ,  string $filename ): bool
```

```
public setOption( string $option ,  string $value ): bool
```

```
public setSearchNdots( int $ndots ): bool
```

## Predefined Constants

Tells to read the domain and search fields from the resolv.conf file and the ndots option, and use them to decide which domains(if any) to search for hostnames that aren’t fully-qualified.

Tells to learn the nameservers from the resolv.conf file.

Tells to read a list of hosts from /etc/hosts as part of loading the resolv.conf file.

Tells to learn as much as it can from the resolv.conf file.

Do not prevent the libevent event loop from exiting when we have no active DNS requests.

Process the resolv.conf.

Do not add default nameserver if there are no nameservers in the resolv.conf.

## Table of Contents

- EventDnsBase::addNameserverIp — Adds a nameserver to the DNS base
- EventDnsBase::addSearch — Adds a domain to the list of search domains
- EventDnsBase::clearSearch — Removes all current search suffixes
- EventDnsBase::__construct — Constructs EventDnsBase object
- EventDnsBase::countNameservers — Gets the number of configured nameservers
- EventDnsBase::loadHosts — Loads a hosts file (in the same format as /etc/hosts) from hosts file
- EventDnsBase::parseResolvConf — Scans the resolv.conf-formatted file
- EventDnsBase::setOption — Set the value of a configuration option
- EventDnsBase::setSearchNdots — Set the 'ndots' parameter for searches

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.eventdnsbase.php
