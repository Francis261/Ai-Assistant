# The SoapClient class

Source: https://devdocs.io/php/class.soapclient

## Introduction

(PHP 5, PHP 7, PHP 8)

The SoapClient class provides a client for » SOAP 1.1, » SOAP 1.2 servers. It can be used in WSDL or non-WSDL mode.

## Class synopsis

```
public __call(string $name, array $args): mixed
```

```
public __doRequest(
 string $request,
 string $location,
 string $action,
 int $version,
 bool $oneWay = false
): ?string
```

```
public __getCookies(): array
```

```
public __getFunctions(): ?array
```

```
public __getLastRequest(): ?string
```

```
public __getLastRequestHeaders(): ?string
```

```
public __getLastResponse(): ?string
```

```
public __getLastResponseHeaders(): ?string
```

```
public __getTypes(): ?array
```

```
public __setCookie(string $name, ?string $value = null): void
```

```
public __setLocation(?string $location = null): ?string
```

```
public __setSoapHeaders(SoapHeader|array|null $headers = null): bool
```

```
public __soapCall(
 string $name,
 array $args,
 ?array $options = null,
 SoapHeader|array|null $inputHeaders = null,
 array &$outputHeaders = null
): mixed
```

## Properties

## Table of Contents

- SoapClient::__call — Calls a SOAP function (deprecated)
- SoapClient::__construct — SoapClient constructor
- SoapClient::__doRequest — Performs a SOAP request
- SoapClient::__getCookies — Get list of cookies
- SoapClient::__getFunctions — Returns list of available SOAP functions
- SoapClient::__getLastRequest — Returns last SOAP request
- SoapClient::__getLastRequestHeaders — Returns the SOAP headers from the last request
- SoapClient::__getLastResponse — Returns last SOAP response
- SoapClient::__getLastResponseHeaders — Returns the SOAP headers from the last response
- SoapClient::__getTypes — Returns a list of SOAP types
- SoapClient::__setCookie — Defines a cookie for SOAP requests
- SoapClient::__setLocation — Sets the location of the Web service to use
- SoapClient::__setSoapHeaders — Sets SOAP headers for subsequent calls
- SoapClient::__soapCall — Calls a SOAP function

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.soapclient.php
