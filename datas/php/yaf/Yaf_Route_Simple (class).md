# The Yaf_Route_Simple class

Source: https://devdocs.io/php/class.yaf-route-simple

## Introduction

(Yaf >=1.0.0)

Yaf_Route_Simple will match the query string, and find the route info.

all you need to do is tell Yaf_Route_Simple what key in the $_GET is module, what key is controller, and what key is action.

Yaf_Route_Simple::route() will always return true, so it is important put Yaf_Route_Simple in the front of the Route stack, otherwise all the other routes will not be called.

## Class synopsis

```
public assemble(array $info, array $query = ?): string
```

```
public route(Yaf_Request_Abstract $request): bool
```

## Properties

## Table of Contents

- Yaf_Route_Simple::assemble — Assemble a url
- Yaf_Route_Simple::__construct — Yaf_Route_Simple constructor
- Yaf_Route_Simple::route — Route a request

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.yaf-route-simple.php
