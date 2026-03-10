# The Yaf_Route_Map class

Source: https://devdocs.io/php/class.yaf-route-map

## Introduction

(Yaf >=1.0.0)

Yaf_Route_Map is a built-in route, it simply convert a URI endpoint (that part of the URI which comes after the base URI: see Yaf_Request_Abstract::setBaseUri()) to a controller name or action name(depends on the parameter passed to Yaf_Route_Map::__construct()) in following rule: A => controller A. A/B/C => controller A_B_C. A/B/C/D/E => controller A_B_C_D_E.

If the second parameter of Yaf_Route_Map::__construct() is specified, then only the part before delimiter of URI will used to routing, the part after it is used to routing request parameters (see the example section of Yaf_Route_Map::__construct()).

## Class synopsis

```
public assemble(array $info, array $query = ?): string
```

```
public route(Yaf_Request_Abstract $request): bool
```

## Properties

## Table of Contents

- Yaf_Route_Map::assemble — Assemble a url
- Yaf_Route_Map::__construct — The __construct purpose
- Yaf_Route_Map::route — The route purpose

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.yaf-route-map.php
