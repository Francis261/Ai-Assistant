# The Yaf_Request_Simple class

Source: https://devdocs.io/php/class.yaf-request-simple

## Introduction

(Yaf >=1.0.0)

Yaf_Request_Simple is particularlly used for test puporse. ie. simulate some espacial request under CLI mode.

## Class synopsis

```
public get(): void
```

```
public getCookie(): void
```

```
public getFiles(): void
```

```
public getPost(): void
```

```
public getQuery(): void
```

```
public getRequest(): void
```

```
public isXmlHttpRequest(): void
```

```
public Yaf_Request_Abstract::clearParams(): bool
```

```
public Yaf_Request_Abstract::getActionName(): void
```

```
public Yaf_Request_Abstract::getBaseUri(): void
```

```
public Yaf_Request_Abstract::getControllerName(): void
```

```
public Yaf_Request_Abstract::getEnv(string $name, string $default = ?): void
```

```
public Yaf_Request_Abstract::getException(): void
```

```
public Yaf_Request_Abstract::getLanguage(): void
```

```
public Yaf_Request_Abstract::getMethod(): string
```

```
public Yaf_Request_Abstract::getModuleName(): void
```

```
public Yaf_Request_Abstract::getParam(string $name, string $default = ?): mixed
```

```
public Yaf_Request_Abstract::getParams(): array
```

```
public Yaf_Request_Abstract::getRequestUri(): void
```

```
public Yaf_Request_Abstract::getServer(string $name, string $default = ?): void
```

```
public Yaf_Request_Abstract::isCli(): bool
```

```
public Yaf_Request_Abstract::isDispatched(): bool
```

```
public Yaf_Request_Abstract::isGet(): bool
```

```
public Yaf_Request_Abstract::isHead(): bool
```

```
public Yaf_Request_Abstract::isOptions(): bool
```

```
public Yaf_Request_Abstract::isPost(): bool
```

```
public Yaf_Request_Abstract::isPut(): bool
```

```
public Yaf_Request_Abstract::isRouted(): bool
```

```
public Yaf_Request_Abstract::isXmlHttpRequest(): bool
```

```
public Yaf_Request_Abstract::setActionName(string $action, bool $format_name = true): void
```

```
public Yaf_Request_Abstract::setBaseUri(string $uir): bool
```

```
public Yaf_Request_Abstract::setControllerName(string $controller, bool $format_name = true): void
```

```
public Yaf_Request_Abstract::setDispatched(): void
```

```
public Yaf_Request_Abstract::setModuleName(string $module, bool $format_name = true): void
```

```
public Yaf_Request_Abstract::setParam(string $name, string $value = ?): bool
```

```
public Yaf_Request_Abstract::setRequestUri(string $uir): void
```

```
public Yaf_Request_Abstract::setRouted(string $flag = ?): void
```

## Properties

## Predefined Constants

## Table of Contents

- Yaf_Request_Simple::__construct — Constructor of Yaf_Request_Simple
- Yaf_Request_Simple::get — The get purpose
- Yaf_Request_Simple::getCookie — The getCookie purpose
- Yaf_Request_Simple::getFiles — The getFiles purpose
- Yaf_Request_Simple::getPost — The getPost purpose
- Yaf_Request_Simple::getQuery — The getQuery purpose
- Yaf_Request_Simple::getRequest — The getRequest purpose
- Yaf_Request_Simple::isXmlHttpRequest — Determin if request is AJAX request

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.yaf-request-simple.php
