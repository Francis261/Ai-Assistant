# The Yaf_Dispatcher class

Source: https://devdocs.io/php/class.yaf-dispatcher

## Introduction

(Yaf >=1.0.0)

Yaf_Dispatcher purpose is to initialize the request environment, route the incoming request, and then dispatch any discovered actions; it aggregates any responses and returns them when the process is complete.

Yaf_Dispatcher also implements the Singleton pattern, meaning only a single instance of it may be available at any given time. This allows it to also act as a registry on which the other objects in the dispatch process may draw.

## Class synopsis

```
public autoRender(bool $flag = ?): Yaf_Dispatcher
```

```
public catchException(bool $flag = ?): Yaf_Dispatcher
```

```
public disableView(): bool
```

```
public dispatch(Yaf_Request_Abstract $request): Yaf_Response_Abstract
```

```
public enableView(): Yaf_Dispatcher
```

```
public flushInstantly(bool $flag = ?): Yaf_Dispatcher
```

```
public getApplication(): Yaf_Application
```

```
public getDefaultAction(): string
```

```
public getDefaultController(): string
```

```
public getDefaultModule(): string
```

```
public static getInstance(): Yaf_Dispatcher
```

```
public getRequest(): Yaf_Request_Abstract
```

```
public getRouter(): Yaf_Router
```

```
public initView(string $templates_dir, array $options = ?): Yaf_View_Interface
```

```
public registerPlugin(Yaf_Plugin_Abstract $plugin): Yaf_Dispatcher
```

```
public returnResponse(bool $flag): Yaf_Dispatcher
```

```
public setDefaultAction(string $action): Yaf_Dispatcher
```

```
public setDefaultController(string $controller): Yaf_Dispatcher
```

```
public setDefaultModule(string $module): Yaf_Dispatcher
```

```
public setErrorHandler(call $callback, int $error_types): Yaf_Dispatcher
```

```
public setRequest(Yaf_Request_Abstract $request): Yaf_Dispatcher
```

```
public setView(Yaf_View_Interface $view): Yaf_Dispatcher
```

```
public throwException(bool $flag = ?): Yaf_Dispatcher
```

## Properties

## Table of Contents

- Yaf_Dispatcher::autoRender — Switch on/off autorendering
- Yaf_Dispatcher::catchException — Switch on/off exception catching
- Yaf_Dispatcher::__construct — Yaf_Dispatcher constructor
- Yaf_Dispatcher::disableView — Disable view rendering
- Yaf_Dispatcher::dispatch — Dispatch a request
- Yaf_Dispatcher::enableView — Enable view rendering
- Yaf_Dispatcher::flushInstantly — Switch on/off the instant flushing
- Yaf_Dispatcher::getApplication — Retrieve the application
- Yaf_Dispatcher::getDefaultAction — Retrive the default action name
- Yaf_Dispatcher::getDefaultController — Retrive the default controller name
- Yaf_Dispatcher::getDefaultModule — Retrive the default module name
- Yaf_Dispatcher::getInstance — Retrive the dispatcher instance
- Yaf_Dispatcher::getRequest — Retrive the request instance
- Yaf_Dispatcher::getRouter — Retrive router instance
- Yaf_Dispatcher::initView — Initialize view and return it
- Yaf_Dispatcher::registerPlugin — Register a plugin
- Yaf_Dispatcher::returnResponse — The returnResponse purpose
- Yaf_Dispatcher::setDefaultAction — Change default action name
- Yaf_Dispatcher::setDefaultController — Change default controller name
- Yaf_Dispatcher::setDefaultModule — Change default module name
- Yaf_Dispatcher::setErrorHandler — Set error handler
- Yaf_Dispatcher::setRequest — The setRequest purpose
- Yaf_Dispatcher::setView — Set a custom view engine
- Yaf_Dispatcher::throwException — Switch on/off exception throwing

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.yaf-dispatcher.php
