# The Yaf_Response_Abstract class

Source: https://devdocs.io/php/class.yaf-response-abstract

## Introduction

(Yaf >=1.0.0)

## Class synopsis

```
public appendBody(string $content, string $key = ?): bool
```

```
public clearBody(string $key = ?): bool
```

```
public clearHeaders(): void
```

```
public getBody(string $key = ?): mixed
```

```
public getHeader(): void
```

```
public prependBody(string $content, string $key = ?): bool
```

```
public response(): void
```

```
protected setAllHeaders(): void
```

```
public setBody(string $content, string $key = ?): bool
```

```
public setHeader(string $name, string $value, bool $replace = ?): bool
```

```
public setRedirect(string $url): bool
```

```
private __toString(): string
```

## Properties

## Table of Contents

- Yaf_Response_Abstract::appendBody — Append to response body
- Yaf_Response_Abstract::clearBody — Discard all exists response body
- Yaf_Response_Abstract::clearHeaders — Discard all set headers
- Yaf_Response_Abstract::__construct — The __construct purpose
- Yaf_Response_Abstract::__destruct — The __destruct purpose
- Yaf_Response_Abstract::getBody — Retrieve a exists content
- Yaf_Response_Abstract::getHeader — The getHeader purpose
- Yaf_Response_Abstract::prependBody — The prependBody purpose
- Yaf_Response_Abstract::response — Send response
- Yaf_Response_Abstract::setAllHeaders — The setAllHeaders purpose
- Yaf_Response_Abstract::setBody — Set content to response
- Yaf_Response_Abstract::setHeader — Set reponse header
- Yaf_Response_Abstract::setRedirect — The setRedirect purpose
- Yaf_Response_Abstract::__toString — Retrieve all bodys as string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.yaf-response-abstract.php
