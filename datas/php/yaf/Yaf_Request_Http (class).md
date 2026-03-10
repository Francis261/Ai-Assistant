# The Yaf_Request_Http class

Source: https://devdocs.io/php/class.yaf-request-http

## Introduction

(Yaf >=1.0.0)

Any request from client is initialized as a Yaf_Request_Http. you can get the request information like, uri query and post parameters via methods of this class.

Note:

For security, $_GET/$_POST are readonly in Yaf, which means if you set a value to these global variables, you can not get it from Yaf_Request_Http::getQuery() or Yaf_Request_Http::getPost().

But there do is some usage need such feature, like unit testing. thus Yaf can be built with --enable-yaf-debug, which will allow Yaf read the value user set via script.

in such case, Yaf will throw a E_STRICT warning to remind you about that: Strict Standards: you are running yaf in debug mode

## Class synopsis

```
public get(string $name, string $default = ?): mixed
```

```
public getCookie(string $name, string $default = ?): mixed
```

```
public getFiles(): void
```

```
public getPost(string $name, string $default = ?): mixed
```

```
public getQuery(string $name, string $default = ?): mixed
```

```
public getRaw(): mixed
```

```
public getRequest(): void
```

```
public isXmlHttpRequest(): bool
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

## Table of Contents

- Yaf_Request_Http::__construct — Constructor of Yaf_Request_Http
- Yaf_Request_Http::get — Retrieve variable from client
- Yaf_Request_Http::getCookie — Retrieve Cookie variable
- Yaf_Request_Http::getFiles — The getFiles purpose
- Yaf_Request_Http::getPost — Retrieve POST variable
- Yaf_Request_Http::getQuery — Fetch a query parameter
- Yaf_Request_Http::getRaw — Retrieve Raw request body
- Yaf_Request_Http::getRequest — The getRequest purpose
- Yaf_Request_Http::isXmlHttpRequest — Determin if request is Ajax Request

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.yaf-request-http.php
