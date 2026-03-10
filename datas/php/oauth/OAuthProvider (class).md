# The OAuthProvider class

Source: https://devdocs.io/php/class.oauthprovider

## Introduction

(PECL OAuth >= 1.0.0)

Manages an OAuth provider class.

See also an external in-depth tutorial titled » Writing an OAuth Provider Service, which takes a hands-on approach to providing this service. There are also » OAuth provider examples within the OAuth extensions sources.

## Class synopsis

```
final public addRequiredParameter(string $req_params): bool
```

```
public callconsumerHandler(): void
```

```
public callTimestampNonceHandler(): void
```

```
public calltokenHandler(): void
```

```
public checkOAuthRequest(string $uri = ?, string $method = ?): void
```

```
public __construct(array $params_array = ?)
```

```
public consumerHandler(callable $callback_function): void
```

```
final public static generateToken(int $size, bool $strong = false): string
```

```
public is2LeggedEndpoint(mixed $params_array): void
```

```
public isRequestTokenEndpoint(bool $will_issue_request_token): void
```

```
final public removeRequiredParameter(string $req_params): bool
```

```
final public static reportProblem(string $oauthexception, bool $send_headers = true): string
```

```
final public setParam(string $param_key, mixed $param_val = ?): bool
```

```
final public setRequestTokenPath(string $path): bool
```

```
public timestampNonceHandler(callable $callback_function): void
```

```
public tokenHandler(callable $callback_function): void
```

## Table of Contents

- OAuthProvider::addRequiredParameter — Add required parameters
- OAuthProvider::callconsumerHandler — Calls the consumerNonceHandler callback
- OAuthProvider::callTimestampNonceHandler — Calls the timestampNonceHandler callback
- OAuthProvider::calltokenHandler — Calls the tokenNonceHandler callback
- OAuthProvider::checkOAuthRequest — Check an oauth request
- OAuthProvider::__construct — Constructs a new OAuthProvider object
- OAuthProvider::consumerHandler — Set the consumerHandler handler callback
- OAuthProvider::generateToken — Generate a random token
- OAuthProvider::is2LeggedEndpoint — is2LeggedEndpoint
- OAuthProvider::isRequestTokenEndpoint — Sets isRequestTokenEndpoint
- OAuthProvider::removeRequiredParameter — Remove a required parameter
- OAuthProvider::reportProblem — Report a problem
- OAuthProvider::setParam — Set a parameter
- OAuthProvider::setRequestTokenPath — Set request token path
- OAuthProvider::timestampNonceHandler — Set the timestampNonceHandler handler callback
- OAuthProvider::tokenHandler — Set the tokenHandler handler callback

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.oauthprovider.php
