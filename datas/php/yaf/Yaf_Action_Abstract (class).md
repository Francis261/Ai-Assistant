# The Yaf_Action_Abstract class

Source: https://devdocs.io/php/class.yaf-action-abstract

## Introduction

(Yaf >=1.0.0)

A action can be defined in a separate file in Yaf(see Yaf_Controller_Abstract). that is a action method can also be a Yaf_Action_Abstract class.

Since there should be a entry point which can be called by Yaf, you must implement the abstract method Yaf_Action_Abstract::execute() in your custom action class.

## Class synopsis

```
abstract publicexecute(mixed ...$args): mixed
```

```
publicgetController(): Yaf_Controller_Abstract
```

```
public getControllerName(): string
```

```
protected Yaf_Controller_Abstract::display(string $tpl, array $parameters = ?): bool
```

```
public Yaf_Controller_Abstract::forward(string $action, array $paramters = ?): bool
```

```
public Yaf_Controller_Abstract::getInvokeArg(string $name): void
```

```
public Yaf_Controller_Abstract::getInvokeArgs(): void
```

```
public Yaf_Controller_Abstract::getModuleName(): string
```

```
public Yaf_Controller_Abstract::getName(): string
```

```
public Yaf_Controller_Abstract::getRequest(): Yaf_Request_Abstract
```

```
public Yaf_Controller_Abstract::getResponse(): Yaf_Response_Abstract
```

```
public Yaf_Controller_Abstract::getView(): Yaf_View_Interface
```

```
public Yaf_Controller_Abstract::getViewpath(): string
```

```
public Yaf_Controller_Abstract::init(): void
```

```
public Yaf_Controller_Abstract::initView(array $options = ?): void
```

```
public Yaf_Controller_Abstract::redirect(string $url): bool
```

```
protected Yaf_Controller_Abstract::render(string $tpl, array $parameters = ?): string
```

```
public Yaf_Controller_Abstract::setViewpath(string $view_directory): void
```

## Properties

## Table of Contents

- Yaf_Action_Abstract::execute — Action entry point
- Yaf_Action_Abstract::getController — Retrieve controller object
- Yaf_Action_Abstract::getControllerName — Get controller name

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.yaf-action-abstract.php
