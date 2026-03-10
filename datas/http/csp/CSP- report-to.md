# CSP: report-to

Source: https://devdocs.io/http/headers/content-security-policy/report-to

# CSP: report-to

The Content-Security-Policy Report-To HTTP response header field instructs the user agent to store reporting endpoints for an origin.

```
Content-Security-Policy: …; report-to groupname
```

The directive has no effect in and of itself, but only gains meaning in combination with other directives.

## Syntax

```
Content-Security-Policy: report-to <json-field-value>;
```

## Examples

See Content-Security-Policy-Report-Only for more information and examples.

```
Report-To: { "group": "csp-endpoint",
              "max_age": 10886400,
              "endpoints": [
                { "url": "https://example.com/csp-reports" }
              ] },
            { "group": "hpkp-endpoint",
              "max_age": 10886400,
              "endpoints": [
                { "url": "https://example.com/hpkp-reports" }
              ] }
Content-Security-Policy: …; report-to csp-endpoint
```

```
Report-To: { "group": "endpoint-1",
              "max_age": 10886400,
              "endpoints": [
                { "url": "https://example.com/reports" },
                { "url": "https://backup.com/reports" }
              ] }

Content-Security-Policy: …; report-to endpoint-1
```

```
Reporting-Endpoints: endpoint-1="https://example.com/reports"

Content-Security-Policy: …; report-to endpoint-1
```

## Specifications

## Browser compatibility

## See also

- Content-Security-Policy
- Content-Security-Policy-Report-Only

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/report-to
