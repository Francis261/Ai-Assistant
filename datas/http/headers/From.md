# From

Source: https://devdocs.io/http/headers/from

# From

The From request header contains an Internet email address for a human user who controls the requesting user agent.

If you are running a robotic user agent (e.g. a crawler), the From header must be sent, so you can be contacted if problems occur on servers, such as if the robot is sending excessive, unwanted, or invalid requests.

Warning: You must not use the From header for access control or authentication.

## Syntax

```
From: <email>
```

## Directives

A machine-usable email address.

## Examples

```
From: webmaster@example.org
```

## Specifications

## Browser compatibility

## See also

- Host

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/From
