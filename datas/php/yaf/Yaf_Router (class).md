# The Yaf_Router class

Source: https://devdocs.io/php/class.yaf-router

## Introduction

(Yaf >=1.0.0)

Yaf_Router is the standard framework router. Routing is the process of taking a URI endpoint (that part of the URI which comes after the base URI: see Yaf_Request_Abstract::setBaseUri()) and decomposing it into parameters to determine which module, controller, and action of that controller should receive the request. This values of the module, controller, action and other parameters are packaged into a Yaf_Request_Abstract object which is then processed by Yaf_Dispatcher. Routing occurs only once: when the request is initially received and before the first controller is dispatched. Yaf_Router is designed to allow for mod_rewrite-like functionality using pure PHP structures. It is very loosely based on Ruby on Rails routing and does not require any prior knowledge of webserver URL rewriting. It is designed to work with a single Apache mod_rewrite rule (one of):

Example #1 Rewrite rule for Apache

```
RewriteEngine on
RewriteRule !\.(js|ico|gif|jpg|png|css|html)$ index.php
```

Example #2 Rewrite rule for Apache

```
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} -s [OR]
RewriteCond %{REQUEST_FILENAME} -l [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^.*$ - [NC,L]
RewriteRule ^.*$ index.php [NC,L]
```

Example #3 Rewrite rule for Lighttpd

```
url.rewrite-once = (
  ".*\?(.*)$" => "/index.php?$1",
  ".*\.(js|ico|gif|jpg|png|css|html)$" => "$0",
  "" => "/index.php"
)
```

Example #4 Rewrite rule for Nginx

```
server {
  listen ****;
  server_name  yourdomain.com;
  root   document_root;
  index  index.php index.html;

  if (!-e $request_filename) {
    rewrite ^/(.*)  /index.php/$1 last;
  }
}
```

## Default route

Yaf_Router comes preconfigured with a default route Yaf_Route_Static, which will match URIs in the shape of controller/action. Additionally, a module name may be specified as the first path element, allowing URIs of the form module/controller/action. Finally, it will also match any additional parameters appended to the URI by default - controller/action/var1/value1/var2/value2.

Note:

Module name must be defined in config, considering application.module="Index,Foo,Bar", in this case, only index, foo and bar can be considered as a module name. if doesn't config, there is only one module named "Index".

Some examples of how such routes are matched:

Example #5 Yaf_Route_Static(default route)example

```
// Assuming the following configure:
$conf = array(
   "application" => array(
      "modules" => "Index,Blog",
   ),
);

Controller only:
http://example/news
    controller == news
Action only(when defined yaf.action_prefer=1 in php.ini)
    action  == news
 
Invalid module maps to controller name:
http://example/foo
    controller == foo
 
Module + controller:
http://example/blog/archive
    module     == blog
    controller == archive
 
Module + controller + action:
http://example/blog/archive/list
    module     == blog
    controller == archive
    action     == list
 
Module + controller + action + params:
http://example/blog/archive/list/sort/alpha/date/desc
    module     == blog
    controller == archive
    action     == list
    sort       == alpha
    date       == desc
```

## Class synopsis

```
public addConfig(Yaf_Config_Abstract $config): bool
```

```
public addRoute(string $name, Yaf_Route_Abstract $route): bool
```

```
public getCurrentRoute(): string
```

```
public getRoute(string $name): Yaf_Route_Interface
```

```
public getRoutes(): mixed
```

```
public route(Yaf_Request_Abstract $request): bool
```

## Properties

registered routes stack

after routing phase, this indicated the name of which route is used to route current request. you can get this name by Yaf_Router::getCurrentRoute().

## Table of Contents

- Yaf_Router::addConfig — Add config-defined routes into Router
- Yaf_Router::addRoute — Add new Route into Router
- Yaf_Router::__construct — Yaf_Router constructor
- Yaf_Router::getCurrentRoute — Get the effective route name
- Yaf_Router::getRoute — Retrieve a route by name
- Yaf_Router::getRoutes — Retrieve registered routes
- Yaf_Router::route — The route purpose

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.yaf-router.php
