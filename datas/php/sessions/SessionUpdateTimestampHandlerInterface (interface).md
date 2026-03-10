# The SessionUpdateTimestampHandlerInterface interface

Source: https://devdocs.io/php/class.sessionupdatetimestamphandlerinterface

## Introduction

(PHP 7, PHP 8)

SessionUpdateTimestampHandlerInterface is an interface which defines optional methods for creating a custom session handler. In order to pass a custom session handler to session_set_save_handler() using its OOP invocation, the class can implement this interface.

Note that the callback methods of classes implementing this interface are designed to be called internally by PHP and are not meant to be called from user-space code.

## Class synopsis

```
public updateTimestamp(string $id, string $data): bool
```

```
public validateId(string $id): bool
```

## Table of Contents

- SessionUpdateTimestampHandlerInterface::updateTimestamp — Update timestamp
- SessionUpdateTimestampHandlerInterface::validateId — Validate ID

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.sessionupdatetimestamphandlerinterface.php
