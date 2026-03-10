# Server

Source: https://devdocs.io/http/headers/server

# Server

The Server header describes the software used by the origin server that handled the request — that is, the server that generated the response.

Warning: Avoid overly-detailed Server values, as they can reveal information that may make it (slightly) easier for attackers to exploit known security holes.

## Syntax

```
Server: <product>
```

## Directives

A name of the software or the product that handled the request. Usually in a format similar to User-Agent.

How much detail to include is an interesting balance to strike; exposing the OS version is probably a bad idea, as mentioned in the earlier warning about overly-detailed values. However, exposed Apache versions helped browsers to work around a bug of the versions with Content-Encoding and Range in combination.

## Examples

```
Server: Apache/2.4.1 (Unix)
```

## Specifications

## Browser compatibility

## See also

- Allow

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Server
