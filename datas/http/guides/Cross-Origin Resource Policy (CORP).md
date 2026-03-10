# Cross-Origin Resource Policy (CORP)

Source: https://devdocs.io/http/cross-origin_resource_policy_(corp)

# Cross-Origin Resource Policy (CORP)

Cross-Origin Resource Policy is a policy set by the Cross-Origin-Resource-Policy HTTP header that lets web sites and applications opt in to protection against certain requests from other origins (such as those issued with elements like <script> and <img>), to mitigate speculative side-channel attacks, like Spectre, as well as Cross-Site Script Inclusion attacks.

CORP is an additional layer of protection beyond the default same-origin policy. Cross-Origin Resource Policy complements Cross-Origin Read Blocking (CORB), which is a mechanism to prevent some cross-origin reads by default.

Note: The policy is only effective for no-cors requests, which are issued by default for CORS-safelisted methods/headers.

As this policy is expressed via a response header, the actual request is not prevented—rather, the browser prevents the result from being leaked by stripping the response body.

## Usage

Note: Due to a bug in Chrome, setting Cross-Origin-Resource-Policy can break PDF rendering, preventing visitors from being able to read past the first page of some PDFs. Exercise caution using this header in a production environment.

Web applications set a Cross-Origin Resource Policy via the Cross-Origin-Resource-Policy HTTP response header, which accepts one of three values:

Only requests from the same Site can read the resource.

Warning: This is less secure than an origin. The algorithm for checking if two origins are same site is defined in the HTML standard and involves checking the registrable domain.

Only requests from the same origin (i.e. scheme + host + port) can read the resource.

Requests from any origin (both same-site and cross-site) can read the resource. This is useful when COEP is used (see below).

```
Cross-Origin-Resource-Policy: same-site | same-origin | cross-origin
```

During a cross-origin resource policy check, if the header is set, the browser will deny no-cors requests issued from a different origin/site.

## Relationship to cross-origin embedder policy (COEP)

The Cross-Origin-Embedder-Policy HTTP response header, when used upon a document, can be used to require subresources to either be same-origin with the document, or come with a Cross-Origin-Resource-Policy HTTP response header to indicate they are okay with being embedded. This is why the cross-origin value exists.

## History

The concept was originally proposed in 2012 (as From-Origin), but resurrected in Q2 of 2018 and implemented in Safari and Chromium.

In early 2018, two side-channel hardware vulnerabilities known as Meltdown and Spectre were disclosed. These vulnerabilities allowed sensitive data disclosure due to a race condition which arose as part of speculative execution functionality, designed to improve performance.

In response, Chromium shipped Cross-Origin Read Blocking, which automatically protects certain resources (of Content-Type HTML, JSON and XML) against cross-origin reads. If the application does not serve a no-sniff directive, Chromium will attempt to guess the Content-Type and apply the protection anyway.

Cross-Origin-Resource-Policy is an opt-in response header which can protect any resource; there is no need for browsers to sniff MIME types.

## Specifications

## Browser compatibility

## See also

- Cross-Origin-Resource-Policy HTTP Header

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Cross-Origin_Resource_Policy_(CORP)
