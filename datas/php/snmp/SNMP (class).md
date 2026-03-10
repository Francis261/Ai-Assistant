# The SNMP class

Source: https://devdocs.io/php/class.snmp

## Introduction

(PHP 5 >= 5.4.0, PHP 7, PHP 8)

Represents SNMP session.

## Class synopsis

```
public close(): bool
```

```
public get(array|string $objectId, bool $preserveKeys = false): mixed
```

```
public getErrno(): int
```

```
public getError(): string
```

```
public getnext(array|string $objectId): mixed
```

```
public set(array|string $objectId, array|string $type, array|string $value): bool
```

```
public setSecurity(
 string $securityLevel,
 string $authProtocol = "",
 string $authPassphrase = "",
 string $privacyProtocol = "",
 string $privacyPassphrase = "",
 string $contextName = "",
 string $contextEngineId = ""
): bool
```

```
public walk(
 array|string $objectId,
 bool $suffixAsKey = false,
 int $maxRepetitions = -1,
 int $nonRepeaters = -1
): array|false
```

## Properties

Maximum OID per GET/SET/GETBULK request

Controls the method how the SNMP values will be returned

Value of quick_print within the NET-SNMP library

Sets the value of quick_print within the NET-SNMP library. When this is set (1), the SNMP library will return 'quick printed' values. This means that just the value will be printed. When quick_print is not enabled (default) the NET-SNMP library prints extra information including the type of the value (i.e. IpAddress or OID). Additionally, if quick_print is not enabled, the library prints additional hex values for all strings of three characters or less.

Controls the way enum values are printed

Parameter toggles if walk/get etc. should automatically lookup enum values in the MIB and return them together with their human readable string.

Controls OID output format

Controls disabling check for increasing OID while walking OID tree

Some SNMP agents are known for returning OIDs out of order but can complete the walk anyway. Other agents return OIDs that are out of order and can cause SNMP::walk() to loop indefinitely until memory limit will be reached. PHP SNMP library by default performs OID increasing check and stops walking on OID tree when it detects possible loop with issuing warning about non-increasing OID faced. Set oid_increasing_check to false to disable this check.

Controls which failures will raise SNMPException instead of warning. Use bitwise OR'ed SNMP::ERRNO_* constants. By default all SNMP exceptions are disabled.

Read-only property with remote agent configuration: hostname, port, default timeout, default retries count

## Predefined Constants

## SNMP Error Types

No SNMP-specific error occurred.

A generic SNMP error occurred.

Request to SNMP agent timed out.

SNMP agent returned an error in reply.

SNMP agent faced OID cycling reporning non-increasing OID while executing (BULK)WALK command. This indicates bogus remote SNMP agent.

Library failed while parsing OID (and/or type for SET command). No queries has been made.

Library will use multiple queries for SET operation requested. That means that operation will be performed in a non-transaction manner and second or subsequent chunks may fail if a type or value failure will be faced.

All SNMP::ERRNO_* codes bitwise OR'ed.

## SNMP Protocol Versions

## Table of Contents

- SNMP::close — Close SNMP session
- SNMP::__construct — Creates SNMP instance representing session to remote SNMP agent
- SNMP::get — Fetch an SNMP object
- SNMP::getErrno — Get last error code
- SNMP::getError — Get last error message
- SNMP::getnext — Fetch an SNMP object which follows the given object id
- SNMP::set — Set the value of an SNMP object
- SNMP::setSecurity — Configures security-related SNMPv3 session parameters
- SNMP::walk — Fetch SNMP object subtree

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.snmp.php
