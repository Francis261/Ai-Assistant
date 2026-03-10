# The Yaf_View_Simple class

Source: https://devdocs.io/php/class.yaf-view-simple

## Introduction

(Yaf >=1.0.0)

Yaf_View_Simple is the built-in template engine in Yaf, it is a simple but fast template engine, and only support PHP script template.

## Class synopsis

```
public assign(string $name, mixed $value = ?): bool
```

```
public assignRef(string $name, mixed &$value): bool
```

```
public clear(string $name = ?): bool
```

```
public display(string $tpl, array $tpl_vars = ?): bool
```

```
public eval(string $tpl_content, array $tpl_vars = ?): string
```

```
public __get(string $name = ?): void
```

```
public getScriptPath(): string
```

```
public __isset(string $name): void
```

```
public render(string $tpl, array $tpl_vars = ?): string
```

```
public __set(string $name, mixed $value): void
```

```
public setScriptPath(string $template_dir): bool
```

## Properties

## Table of Contents

- Yaf_View_Simple::assign — Assign values
- Yaf_View_Simple::assignRef — The assignRef purpose
- Yaf_View_Simple::clear — Clear Assigned values
- Yaf_View_Simple::__construct — Constructor of Yaf_View_Simple
- Yaf_View_Simple::display — Render and display
- Yaf_View_Simple::eval — Render template
- Yaf_View_Simple::__get — Retrieve assigned variable
- Yaf_View_Simple::getScriptPath — Get templates directory
- Yaf_View_Simple::__isset — The __isset purpose
- Yaf_View_Simple::render — Render template
- Yaf_View_Simple::__set — Set value to engine
- Yaf_View_Simple::setScriptPath — Set tempaltes directory

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.yaf-view-simple.php
