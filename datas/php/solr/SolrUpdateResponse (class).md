# The SolrUpdateResponse class

Source: https://devdocs.io/php/class.solrupdateresponse

## Introduction

(PECL solr >= 0.9.2)

Represents a response to an update request.

## Class synopsis

```
public SolrResponse::getDigestedResponse(): string
```

```
public SolrResponse::getHttpStatus(): int
```

```
public SolrResponse::getHttpStatusMessage(): string
```

```
public SolrResponse::getRawRequest(): string
```

```
public SolrResponse::getRawRequestHeaders(): string
```

```
public SolrResponse::getRawResponse(): string
```

```
public SolrResponse::getRawResponseHeaders(): string
```

```
public SolrResponse::getRequestUrl(): string
```

```
public SolrResponse::getResponse(): SolrObject
```

```
public SolrResponse::setParseMode(int $parser_mode = 0): bool
```

```
public SolrResponse::success(): bool
```

## Predefined Constants

## SolrUpdateResponse Class Constants

Documents should be parsed as SolrObject instances

Documents should be parsed as SolrDocument instances.

## Table of Contents

- SolrUpdateResponse::__construct — Constructor
- SolrUpdateResponse::__destruct — Destructor

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.solrupdateresponse.php
