# The Yaf_Route_Static class

Source: https://devdocs.io/php/class.yaf-route-static

## Introduction

(Yaf >=1.0.0)

Defaultly, Yaf_Router only have a Yaf_Route_Static as its default route.

And Yaf_Route_Static is designed to handle the 80% requirement.

please *NOTE* that it is unnecessary to instance a Yaf_Route_Static, also unecesary to add it into Yaf_Router's routes stack, since there is always be one in Yaf_Router's routes stack, and always be called at the last time.

## Class synopsis

```
public assemble(array $info, array $query = ?): string
```

```
public match(string $uri): void
```

```
public route(Yaf_Request_Abstract $request): bool
```

## Table of Contents

- Yaf_Route_Static::assemble — Assemble a url
- Yaf_Route_Static::match — The match purpose
- Yaf_Route_Static::route — Route a request

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.yaf-route-static.php
