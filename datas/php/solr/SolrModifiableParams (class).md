# The SolrModifiableParams class

Source: https://devdocs.io/php/class.solrmodifiableparams

## Introduction

(PECL solr >= 0.9.2)

Represents a collection of name-value pairs sent to the Solr server during a request.

## Class synopsis

```
final public SolrParams::add(string $name, string $value): SolrParams
```

```
public SolrParams::addParam(string $name, string $value): SolrParams
```

```
final public SolrParams::get(string $param_name): mixed
```

```
final public SolrParams::getParam(string $param_name = ?): mixed
```

```
final public SolrParams::getParams(): array
```

```
final public SolrParams::getPreparedParams(): array
```

```
final public SolrParams::serialize(): string
```

```
final public SolrParams::set(string $name, string $value): void
```

```
public SolrParams::setParam(string $name, string $value): SolrParams
```

```
final public SolrParams::toString(bool $url_encode = false): string
```

```
final public SolrParams::unserialize(string $serialized): void
```

## Table of Contents

- SolrModifiableParams::__construct — Constructor
- SolrModifiableParams::__destruct — Destructor

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.solrmodifiableparams.php
