# Timing-Allow-Origin

Source: https://devdocs.io/http/headers/timing-allow-origin

# Timing-Allow-Origin

The Timing-Allow-Origin response header specifies origins that are allowed to see values of attributes retrieved via features of the Resource Timing API, which would otherwise be reported as zero due to cross-origin restrictions.

## Syntax

```
Timing-Allow-Origin: *
Timing-Allow-Origin: <origin>[, <origin>]*
```

## Directives

The server may specify "*" as a wildcard, thereby allowing any origin to see timing resources.

Specifies a URI that may see the timing resources. You can specify multiple origins, separated by commas.

## Examples

To allow any resource to see timing resources:

```
Timing-Allow-Origin: *
```

To allow https://developer.mozilla.org to see timing resources, you can specify:

```
Timing-Allow-Origin: https://developer.mozilla.org
```

## Specifications

## Browser compatibility

## See also

- Resource Timing API
- Using the Resource Timing API
- Vary

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Timing-Allow-Origin
