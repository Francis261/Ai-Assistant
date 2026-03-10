# The SolrResponse class

Source: https://devdocs.io/php/class.solrresponse

## Introduction

(PECL solr >= 0.9.2)

Represents a response from the Solr server.

## Class synopsis

```
public getDigestedResponse(): string
```

```
public getHttpStatus(): int
```

```
public getHttpStatusMessage(): string
```

```
public getRawRequest(): string
```

```
public getRawRequestHeaders(): string
```

```
public getRawResponse(): string
```

```
public getRawResponseHeaders(): string
```

```
public getRequestUrl(): string
```

```
public getResponse(): SolrObject
```

```
public setParseMode(int $parser_mode = 0): bool
```

```
public success(): bool
```

## Properties

The http status of the response.

Whether to parse the solr documents as SolrObject or SolrDocument instances.

Was there an error during the request

Detailed message on http status

The request URL

A string of raw headers sent during the request.

The raw request sent to the server

Response headers from the Solr server.

The response message from the server.

The response in PHP serialized format.

## Predefined Constants

## SolrResponse Class Constants

Documents should be parsed as SolrObject instances

Documents should be parsed as SolrDocument instances.

## Table of Contents

- SolrResponse::getDigestedResponse — Returns the XML response as serialized PHP data
- SolrResponse::getHttpStatus — Returns the HTTP status of the response
- SolrResponse::getHttpStatusMessage — Returns more details on the HTTP status
- SolrResponse::getRawRequest — Returns the raw request sent to the Solr server
- SolrResponse::getRawRequestHeaders — Returns the raw request headers sent to the Solr server
- SolrResponse::getRawResponse — Returns the raw response from the server
- SolrResponse::getRawResponseHeaders — Returns the raw response headers from the server
- SolrResponse::getRequestUrl — Returns the full URL the request was sent to
- SolrResponse::getResponse — Returns a SolrObject representing the XML response from the server
- SolrResponse::setParseMode — Sets the parse mode
- SolrResponse::success — Was the request a success

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.solrresponse.php
