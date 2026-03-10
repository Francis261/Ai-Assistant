# The XSLTProcessor class

Source: https://devdocs.io/php/class.xsltprocessor

## Introduction

(PHP 5, PHP 7, PHP 8)

## Class synopsis

```
public getParameter(string $namespace, string $name): string|false
```

```
public getSecurityPrefs(): int
```

```
public hasExsltSupport(): bool
```

```
public importStylesheet(object $stylesheet): bool
```

```
public registerPHPFunctionNS(string $namespaceURI, string $name, callable $callable): void
```

```
public registerPHPFunctions(array|string|null $functions = null): void
```

```
public removeParameter(string $namespace, string $name): bool
```

```
public setParameter(string $namespace, string $name, string $value): bool
```

```
public setParameter(string $namespace, array $options): bool
```

```
public setProfiling(?string $filename): true
```

```
public setSecurityPrefs(int $preferences): int
```

```
public transformToDoc(object $document, ?string $returnClass = null): object|false
```

```
public transformToUri(object $document, string $uri): int
```

```
public transformToXml(object $document): string|null|false
```

## Properties

## Changelog

## Table of Contents

- XSLTProcessor::__construct — Creates a new XSLTProcessor object
- XSLTProcessor::getParameter — Get value of a parameter
- XSLTProcessor::getSecurityPrefs — Get security preferences
- XSLTProcessor::hasExsltSupport — Determine if PHP has EXSLT support
- XSLTProcessor::importStylesheet — Import stylesheet
- XSLTProcessor::registerPHPFunctionNS — Register a PHP function as namespaced XSLT function
- XSLTProcessor::registerPHPFunctions — Enables the ability to use PHP functions as XSLT functions
- XSLTProcessor::removeParameter — Remove parameter
- XSLTProcessor::setParameter — Set value for a parameter
- XSLTProcessor::setProfiling — Sets profiling output file
- XSLTProcessor::setSecurityPrefs — Set security preferences
- XSLTProcessor::transformToDoc — Transform to a document
- XSLTProcessor::transformToUri — Transform to URI
- XSLTProcessor::transformToXml — Transform to XML

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.xsltprocessor.php
