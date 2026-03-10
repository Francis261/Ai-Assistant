# The Yaf_View_Interface class

Source: https://devdocs.io/php/class.yaf-view-interface

## Introduction

(Yaf >=1.0.0)

Yaf provides a ability for developers to use custom view engine instead of built-in engine which is Yaf_View_Simple. There is a example to explain how to do this, please see Yaf_Dispatcher::setView().

## Class synopsis

```
abstract public assign(string $name, string $value = ?): bool
```

```
abstract public display(string $tpl, array $tpl_vars = ?): bool
```

```
abstract public getScriptPath(): void
```

```
abstract public render(string $tpl, array $tpl_vars = ?): string
```

```
abstract public setScriptPath(string $template_dir): void
```

## Table of Contents

- Yaf_View_Interface::assign — Assign value to View engine
- Yaf_View_Interface::display — Render and output a template
- Yaf_View_Interface::getScriptPath — The getScriptPath purpose
- Yaf_View_Interface::render — Render a template
- Yaf_View_Interface::setScriptPath — The setScriptPath purpose

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.yaf-view-interface.php
