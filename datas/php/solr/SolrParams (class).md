# The SolrParams class

Source: https://devdocs.io/php/class.solrparams

## Introduction

(PECL solr >= 0.9.2)

Represents a collection of name-value pairs sent to the Solr server during a request.

## Class synopsis

```
final public add(string $name, string $value): SolrParams
```

```
public addParam(string $name, string $value): SolrParams
```

```
final public get(string $param_name): mixed
```

```
final public getParam(string $param_name = ?): mixed
```

```
final public getParams(): array
```

```
final public getPreparedParams(): array
```

```
final public serialize(): string
```

```
final public set(string $name, string $value): void
```

```
public setParam(string $name, string $value): SolrParams
```

```
final public toString(bool $url_encode = false): string
```

```
final public unserialize(string $serialized): void
```

## Table of Contents

- SolrParams::add — Alias of SolrParams::addParam
- SolrParams::addParam — Adds a parameter to the object
- SolrParams::get — Alias of SolrParams::getParam
- SolrParams::getParam — Returns a parameter value
- SolrParams::getParams — Returns an array of non URL-encoded parameters
- SolrParams::getPreparedParams — Returns an array of URL-encoded parameters
- SolrParams::serialize — Used for custom serialization
- SolrParams::set — Alias of SolrParams::setParam
- SolrParams::setParam — Sets the parameter to the specified value
- SolrParams::toString — Returns all the name-value pair parameters in the object
- SolrParams::unserialize — Used for custom serialization

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.solrparams.php
