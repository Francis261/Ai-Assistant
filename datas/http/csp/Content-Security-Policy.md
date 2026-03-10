# Content-Security-Policy

Source: https://devdocs.io/http/headers/content-security-policy

# Content-Security-Policy

The HTTP Content-Security-Policy response header allows web site administrators to control resources the user agent is allowed to load for a given page. With a few exceptions, policies mostly involve specifying server origins and script endpoints. This helps guard against cross-site scripting attacks (Cross-site_scripting).

For more information, see the introductory article on Content Security Policy (CSP).

## Syntax

```
Content-Security-Policy: <policy-directive>; <policy-directive>
```

where <policy-directive> consists of: <directive> <value> with no internal punctuation.

## Directives

### Fetch directives

Fetch directives control the locations from which certain resource types may be loaded.

Defines the valid sources for web workers and nested browsing contexts loaded using elements such as <frame> and <iframe>.

Warning: Instead of child-src, if you want to regulate nested browsing contexts and workers, you should use the frame-src and worker-src directives, respectively.

Restricts the URLs which can be loaded using script interfaces

Serves as a fallback for the other fetch directives.

Specifies valid sources for fonts loaded using @font-face.

Specifies valid sources for nested browsing contexts loading using elements such as <frame> and <iframe>.

Specifies valid sources of images and favicons.

Specifies valid sources of application manifest files.

Specifies valid sources for loading media using the <audio> , <video> and <track> elements.

Specifies valid sources for the <object>, <embed>, and <applet> elements.

Note: Elements controlled by object-src are perhaps coincidentally considered legacy HTML elements and are not receiving new standardized features (such as the security attributes sandbox or allow for <iframe>). Therefore it is recommended to restrict this fetch-directive (e.g., explicitly set object-src 'none' if possible).

Specifies valid sources to be prefetched or prerendered.

Specifies valid sources for JavaScript and WebAssembly resources.

Specifies valid sources for JavaScript <script> elements.

Specifies valid sources for JavaScript inline event handlers.

Specifies valid sources for stylesheets.

Specifies valid sources for stylesheets <style> elements and <link> elements with rel="stylesheet".

Specifies valid sources for inline styles applied to individual DOM elements.

Specifies valid sources for Worker, SharedWorker, or ServiceWorker scripts.

### Document directives

Document directives govern the properties of a document or worker environment to which a policy applies.

Restricts the URLs which can be used in a document's <base> element.

Enables a sandbox for the requested resource similar to the <iframe> sandbox attribute.

### Navigation directives

Navigation directives govern to which locations a user can navigate or submit a form, for example.

Restricts the URLs which can be used as the target of a form submissions from a given context.

Specifies valid parents that may embed a page using <frame>, <iframe>, <object>, <embed>, or <applet>.

Restricts the URLs to which a document can initiate navigation by any means, including <form> (if form-action is not specified), <a>, window.location, window.open, etc.

### Reporting directives

Reporting directives control the reporting process of CSP violations. See also the Content-Security-Policy-Report-Only header.

Instructs the user agent to report attempts to violate the Content Security Policy. These violation reports consist of JSON documents sent via an HTTP POST request to the specified URI.

Warning: Though the report-to directive is intended to replace the deprecated report-uri directive, report-to is not supported in most browsers yet. So for compatibility with current browsers while also adding forward compatibility when browsers get report-to support, you can specify both report-uri and report-to:

```
Content-Security-Policy: …; report-uri https://endpoint.example.com; report-to groupname
```

In browsers that support report-to, the report-uri directive will be ignored.

Fires a SecurityPolicyViolationEvent.

### Other directives

Requires the use of SRI for scripts or styles on the page.

Enforces Trusted Types at the DOM XSS injection sinks.

Used to specify an allow-list of Trusted Types policies. Trusted Types allows applications to lock down DOM XSS injection sinks to only accept non-spoofable, typed values in place of strings.

Instructs user agents to treat all of a site's insecure URLs (those served over HTTP) as though they have been replaced with secure URLs (those served over HTTPS). This directive is intended for websites with large numbers of insecure legacy URLs that need to be rewritten.

### Deprecated directives

Prevents loading any assets using HTTP when the page is loaded using HTTPS.

Restricts the set of plugins that can be embedded into a document by limiting the types of resources which can be loaded.

Used to specify information in the Referer (sic) header for links away from a page. Use the Referrer-Policy header instead.

## Values

An overview of the allowed values are listed below. For detailed reference see CSP Source Values and the documentation for individual directives.

### Keyword values

Won't allow loading of any resources.

Only allow resources from the current origin.

The trust granted to a script in the page due to an accompanying nonce or hash is extended to the scripts it loads.

Require a sample of the violating code to be included in the violation report.

### Unsafe keyword values

Allow use of inline resources.

Allow use of dynamic code evaluation such as eval, setImmediate Non-standard , and window.execScript Non-standard .

Allows enabling specific inline event handlers.

TBD

### Hosts values

- Host
  - Only allow loading of resources from a specific host, with optional scheme, port, and path. e.g. example.com, *.example.com, https://*.example.com:12/path/to/file.js
  - Path parts in the CSP that end in / match any path they are a prefix of. e.g. example.com/api/ will match URLs like example.com/api/users/new.
  - Other path parts in the CSP are matched exactly e.g. example.com/file.js will match http://example.com/file.js and https://example.com/file.js, but not https://example.com/file.js/file2.js
- Scheme
  - Only allow loading of resources over a specific scheme, should always end with ":". e.g. https:, http:, data: etc.

- Only allow loading of resources from a specific host, with optional scheme, port, and path. e.g. example.com, *.example.com, https://*.example.com:12/path/to/file.js
- Path parts in the CSP that end in / match any path they are a prefix of. e.g. example.com/api/ will match URLs like example.com/api/users/new.
- Other path parts in the CSP are matched exactly e.g. example.com/file.js will match http://example.com/file.js and https://example.com/file.js, but not https://example.com/file.js/file2.js

- Only allow loading of resources over a specific scheme, should always end with ":". e.g. https:, http:, data: etc.

### Other values

A cryptographic nonce (only used once) to allow scripts. The server must generate a unique nonce value each time it transmits a policy. It is critical to provide a nonce that cannot be guessed as bypassing a resource's policy is otherwise trivial. This is used in conjunction with the script tag nonce attribute. e.g. nonce-DhcnhD3khTMePgXwdayK9BsMqXjhguVV

sha256, sha384, or sha512. followed by a dash and then the sha* value. e.g. sha256-jzgBGA4UWFFmpOBq0JpdsySukE1FrEN5bUpoK8Z29fY=

## CSP in workers

Workers are in general not governed by the content security policy of the document (or parent worker) that created them. To specify a content security policy for the worker, set a Content-Security-Policy response header for the request which requested the worker script itself.

The exception to this is if the worker script's origin is a globally unique identifier (for example, if its URL has a scheme of data or blob). In this case, the worker does inherit the content security policy of the document or worker that created it.

## Multiple content security policies

The CSP mechanism allows multiple policies being specified for a resource, including via the Content-Security-Policy header, the Content-Security-Policy-Report-Only header and a <meta> element.

You can use the Content-Security-Policy header more than once, as in the example below. Pay special attention to the connect-src directive here. Even though the second policy would allow the connection, the first policy contains connect-src 'none'. Adding additional policies can only further restrict the capabilities of the protected resource, which means that there will be no connection allowed and, as the strictest policy, connect-src 'none' is enforced.

```
Content-Security-Policy: default-src 'self' http://example.com;
                          connect-src 'none';
Content-Security-Policy: connect-src http://example.com/;
                          script-src http://example.com/
```

## Examples

Example: Disable unsafe inline/eval, only allow loading of resources (images, fonts, scripts, etc.) over https:

### Using the HTTP header

```
Content-Security-Policy: default-src https:
```

### Using the HTML meta element

```
<meta http-equiv="Content-Security-Policy" content="default-src https:" />
```

Example: Pre-existing site that uses too much inline code to fix but wants to ensure resources are loaded only over HTTPS and to disable plugins:

```
Content-Security-Policy: default-src https: 'unsafe-eval' 'unsafe-inline'; object-src 'none'
```

Example: Do not implement the above policy yet; instead just report violations that would have occurred:

```
Content-Security-Policy-Report-Only: default-src https:; report-uri /csp-violation-report-endpoint/
```

See Mozilla Web Security Guidelines for more examples.

## Specifications

## Browser compatibility

## See also

- Content-Security-Policy-Report-Only
- Learn about: Content Security Policy
- Content Security in WebExtensions
- Adopting a strict policy
- CSP Evaluator - Evaluate your Content Security Policy

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy
