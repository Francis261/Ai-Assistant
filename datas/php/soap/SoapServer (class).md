# The SoapServer class

Source: https://devdocs.io/php/class.soapserver

## Introduction

(PHP 5, PHP 7, PHP 8)

The SoapServer class provides a server for the » SOAP 1.1 and » SOAP 1.2 protocols. It can be used with or without a WSDL service description.

## Class synopsis

```
public addFunction(array|string|int $functions): void
```

```
public addSoapHeader(SoapHeader $header): void
```

```
public fault(
 string $code,
 string $string,
 string $actor = "",
 mixed $details = null,
 string $name = ""
): void
```

```
public getFunctions(): array
```

```
public __getLastResponse(): ?string
```

```
public handle(?string $request = null): void
```

```
public setClass(string $class, mixed ...$args): void
```

```
public setObject(object $object): void
```

```
public setPersistence(int $mode): void
```

## Properties

## Table of Contents

- SoapServer::addFunction — Adds one or more functions to handle SOAP requests
- SoapServer::addSoapHeader — Add a SOAP header to the response
- SoapServer::__construct — SoapServer constructor
- SoapServer::fault — Issue SoapServer fault indicating an error
- SoapServer::getFunctions — Returns list of defined functions
- SoapServer::__getLastResponse — Returns last SOAP response
- SoapServer::handle — Handles a SOAP request
- SoapServer::setClass — Sets the class which handles SOAP requests
- SoapServer::setObject — Sets the object which will be used to handle SOAP requests
- SoapServer::setPersistence — Sets SoapServer persistence mode

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.soapserver.php
