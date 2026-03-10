# The SolrException class

Source: https://devdocs.io/php/class.solrexception

## Introduction

(PECL solr >= 0.9.2)

This is the base class for all exception thrown by the Solr extension classes.

## Class synopsis

```
public getInternalInfo(): array
```

```
final public Exception::getMessage(): string
```

```
final public Exception::getPrevious(): ?Throwable
```

```
final public Exception::getCode(): int
```

```
final public Exception::getFile(): string
```

```
final public Exception::getLine(): int
```

```
final public Exception::getTrace(): array
```

```
final public Exception::getTraceAsString(): string
```

```
public Exception::__toString(): string
```

```
private Exception::__clone(): void
```

## Properties

The line in c-space source file where exception was generated

The c-space source file where exception was generated

The c-space function where exception was generated

## Table of Contents

- SolrException::getInternalInfo — Returns internal information where the Exception was thrown

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.solrexception.php
