# The SolrPingResponse class

Source: https://devdocs.io/php/class.solrpingresponse

## Introduction

(PECL solr >= 0.9.2)

Represents a response to a ping request to the server

## Class synopsis

```
public getResponse(): string
```

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

## Properties

The http status of the response.

Whether to parse the solr documents as SolrObject or SolrDocument instances.

Was there an error during the request

Detailed message on http status

The request URL

A string of raw headers sent during the request

The raw request sent to the server

Response headers from the Solr server

The response message from the server

The response in PHP serialized format.

## Predefined Constants

## SolrPingResponse Class Constants

Documents should be parsed as SolrObject instances

Documents should be parsed as SolrDocument instances.

## Table of Contents

- SolrPingResponse::__construct — Constructor
- SolrPingResponse::__destruct — Destructor
- SolrPingResponse::getResponse — Returns the response from the server

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.solrpingresponse.php
