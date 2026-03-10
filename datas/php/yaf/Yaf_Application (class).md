# The Yaf_Application class

Source: https://devdocs.io/php/class.yaf-application

## Introduction

(Yaf >=1.0.0)

Yaf_Application provides a bootstrapping facility for applications which provides reusable resources, common- and module-based bootstrap classes and dependency checking.

Note:

Yaf_Application implements the singleton pattern, and Yaf_Application can not be serialized or unserialized which will cause problem when you try to use PHPUnit to write some test case for Yaf.

You may use @backupGlobals annotation of PHPUnit to control the backup and restore operations for global variables. thus can solve this problem.

## Class synopsis

```
public static app(): mixed
```

```
public bootstrap(Yaf_Bootstrap_Abstract $bootstrap = ?): void
```

```
public clearLastError(): Yaf_Application
```

```
public environ(): void
```

```
public execute(callable $entry, string ...$args): void
```

```
public getAppDirectory(): Yaf_Application
```

```
public getConfig(): Yaf_Config_Abstract
```

```
public getDispatcher(): Yaf_Dispatcher
```

```
public getLastErrorMsg(): string
```

```
public getLastErrorNo(): int
```

```
public getModules(): array
```

```
public run(): void
```

```
public setAppDirectory(string $directory): Yaf_Application
```

## Properties

## Table of Contents

- Yaf_Application::app — Retrieve an Application instance
- Yaf_Application::bootstrap — Call bootstrap
- Yaf_Application::clearLastError — Clear the last error info
- Yaf_Application::__construct — Yaf_Application constructor
- Yaf_Application::__destruct — The __destruct purpose
- Yaf_Application::environ — Retrive environ
- Yaf_Application::execute — Execute a callback
- Yaf_Application::getAppDirectory — Get the application directory
- Yaf_Application::getConfig — Retrive the config instance
- Yaf_Application::getDispatcher — Get Yaf_Dispatcher instance
- Yaf_Application::getLastErrorMsg — Get message of the last occurred error
- Yaf_Application::getLastErrorNo — Get code of last occurred error
- Yaf_Application::getModules — Get defined module names
- Yaf_Application::run — Start Yaf_Application
- Yaf_Application::setAppDirectory — Change the application directory

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.yaf-application.php
