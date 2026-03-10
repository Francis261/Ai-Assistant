# The Yaf_Request_Abstract class

Source: https://devdocs.io/php/class.yaf-request-abstract

## Introduction

(Yaf >=1.0.0)

## Class synopsis

```
public clearParams(): bool
```

```
public getActionName(): void
```

```
public getBaseUri(): void
```

```
public getControllerName(): void
```

```
public getEnv(string $name, string $default = ?): void
```

```
public getException(): void
```

```
public getLanguage(): void
```

```
public getMethod(): string
```

```
public getModuleName(): void
```

```
public getParam(string $name, string $default = ?): mixed
```

```
public getParams(): array
```

```
public getRequestUri(): void
```

```
public getServer(string $name, string $default = ?): void
```

```
public isCli(): bool
```

```
public isDispatched(): bool
```

```
public isGet(): bool
```

```
public isHead(): bool
```

```
public isOptions(): bool
```

```
public isPost(): bool
```

```
public isPut(): bool
```

```
public isRouted(): bool
```

```
public isXmlHttpRequest(): bool
```

```
public setActionName(string $action, bool $format_name = true): void
```

```
public setBaseUri(string $uir): bool
```

```
public setControllerName(string $controller, bool $format_name = true): void
```

```
public setDispatched(): void
```

```
public setModuleName(string $module, bool $format_name = true): void
```

```
public setParam(string $name, string $value = ?): bool
```

```
public setRequestUri(string $uir): void
```

```
public setRouted(string $flag = ?): void
```

## Properties

## Predefined Constants

## Table of Contents

- Yaf_Request_Abstract::clearParams — Remove all params
- Yaf_Request_Abstract::getActionName — The getActionName purpose
- Yaf_Request_Abstract::getBaseUri — The getBaseUri purpose
- Yaf_Request_Abstract::getControllerName — The getControllerName purpose
- Yaf_Request_Abstract::getEnv — Retrieve ENV varialbe
- Yaf_Request_Abstract::getException — The getException purpose
- Yaf_Request_Abstract::getLanguage — Retrieve client's preferred language
- Yaf_Request_Abstract::getMethod — Retrieve the request method
- Yaf_Request_Abstract::getModuleName — The getModuleName purpose
- Yaf_Request_Abstract::getParam — Retrieve calling parameter
- Yaf_Request_Abstract::getParams — Retrieve all calling parameters
- Yaf_Request_Abstract::getRequestUri — The getRequestUri purpose
- Yaf_Request_Abstract::getServer — Retrieve SERVER variable
- Yaf_Request_Abstract::isCli — Determine if request is CLI request
- Yaf_Request_Abstract::isDispatched — Determin if the request is dispatched
- Yaf_Request_Abstract::isGet — Determine if request is GET request
- Yaf_Request_Abstract::isHead — Determine if request is HEAD request
- Yaf_Request_Abstract::isOptions — Determine if request is OPTIONS request
- Yaf_Request_Abstract::isPost — Determine if request is POST request
- Yaf_Request_Abstract::isPut — Determine if request is PUT request
- Yaf_Request_Abstract::isRouted — Determin if request has been routed
- Yaf_Request_Abstract::isXmlHttpRequest — Determine if request is AJAX request
- Yaf_Request_Abstract::setActionName — Set action name
- Yaf_Request_Abstract::setBaseUri — Set base URI
- Yaf_Request_Abstract::setControllerName — Set controller name
- Yaf_Request_Abstract::setDispatched — The setDispatched purpose
- Yaf_Request_Abstract::setModuleName — Set module name
- Yaf_Request_Abstract::setParam — Set a calling parameter to a request
- Yaf_Request_Abstract::setRequestUri — The setRequestUri purpose
- Yaf_Request_Abstract::setRouted — The setRouted purpose

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.yaf-request-abstract.php
