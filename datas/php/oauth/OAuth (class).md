# The OAuth class

Source: https://devdocs.io/php/class.oauth

## Introduction

(PECL OAuth >= 0.99.1)

The OAuth extension provides a simple interface to interact with data providers using the OAuth HTTP specification to protect private resources.

## Class synopsis

```
public __destruct(): void
```

```
public disableDebug(): bool
```

```
public disableRedirects(): bool
```

```
public disableSSLChecks(): bool
```

```
public enableDebug(): bool
```

```
public enableRedirects(): bool
```

```
public enableSSLChecks(): bool
```

```
public fetch(
 string $protected_resource_url,
 array $extra_parameters = ?,
 string $http_method = ?,
 array $http_headers = ?
): mixed
```

```
public generateSignature(string $http_method, string $url, mixed $extra_parameters = ?): string|false
```

```
public getAccessToken(
 string $access_token_url,
 string $auth_session_handle = ?,
 string $verifier_token = ?,
 string $http_method = ?
): array
```

```
public getCAPath(): array
```

```
public getLastResponse(): string
```

```
public getLastResponseHeaders(): string|false
```

```
public getLastResponseInfo(): array
```

```
public getRequestHeader(string $http_method, string $url, mixed $extra_parameters = ?): string|false
```

```
public getRequestToken(string $request_token_url, string $callback_url = ?, string $http_method = ?): array
```

```
public setAuthType(int $auth_type): bool
```

```
public setCAPath(string $ca_path = ?, string $ca_info = ?): mixed
```

```
public setNonce(string $nonce): mixed
```

```
public setRequestEngine(int $reqengine): void
```

```
public setRSACertificate(string $cert): mixed
```

```
public setSSLChecks(int $sslcheck): bool
```

```
public setTimestamp(string $timestamp): mixed
```

```
public setToken(string $token, string $token_secret): bool
```

```
public setVersion(string $version): bool
```

## Properties

## Table of Contents

- OAuth::__construct — Create a new OAuth object
- OAuth::__destruct — The destructor
- OAuth::disableDebug — Turn off verbose debugging
- OAuth::disableRedirects — Turn off redirects
- OAuth::disableSSLChecks — Turn off SSL checks
- OAuth::enableDebug — Turn on verbose debugging
- OAuth::enableRedirects — Turn on redirects
- OAuth::enableSSLChecks — Turn on SSL checks
- OAuth::fetch — Fetch an OAuth protected resource
- OAuth::generateSignature — Generate a signature
- OAuth::getAccessToken — Fetch an access token
- OAuth::getCAPath — Gets CA information
- OAuth::getLastResponse — Get the last response
- OAuth::getLastResponseHeaders — Get headers for last response
- OAuth::getLastResponseInfo — Get HTTP information about the last response
- OAuth::getRequestHeader — Generate OAuth header string signature
- OAuth::getRequestToken — Fetch a request token
- OAuth::setAuthType — Set authorization type
- OAuth::setCAPath — Set CA path and info
- OAuth::setNonce — Set the nonce for subsequent requests
- OAuth::setRequestEngine — The setRequestEngine purpose
- OAuth::setRSACertificate — Set the RSA certificate
- OAuth::setSSLChecks — Tweak specific SSL checks for requests
- OAuth::setTimestamp — Set the timestamp
- OAuth::setToken — Sets the token and secret
- OAuth::setVersion — Set the OAuth version

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.oauth.php
