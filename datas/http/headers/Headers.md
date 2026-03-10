# Headers

Source: https://devdocs.io/http/headers

# HTTP headers

HTTP headers let the client and the server pass additional information with an HTTP request or response. An HTTP header consists of its case-insensitive name followed by a colon (:), then by its value. Whitespace before the value is ignored.

Custom proprietary headers have historically been used with an X- prefix, but this convention was deprecated in June 2012 because of the inconveniences it caused when nonstandard fields became standard in RFC 6648; others are listed in an IANA registry, whose original content was defined in RFC 4229. IANA also maintains a registry of proposed new HTTP headers.

Headers can be grouped according to their contexts:

- Request headers contain more information about the resource to be fetched, or about the client requesting the resource.
- Response headers hold additional information about the response, like its location or about the server providing it.
- Representation headers contain information about the body of the resource, like its MIME type, or encoding/compression applied.
- Payload headers contain representation-independent information about payload data, including content length and the encoding used for transport.

Headers can also be grouped according to how proxies handle them:

- Connection
- Keep-Alive
- Proxy-Authenticate
- Proxy-Authorization
- TE
- Trailer
- Transfer-Encoding
- Upgrade (see also Protocol upgrade mechanism).

These headers must be transmitted to the final recipient of the message: the server for a request, or the client for a response. Intermediate proxies must retransmit these headers unmodified and caches must store them.

These headers are meaningful only for a single transport-level connection, and must not be retransmitted by proxies or cached. Note that only hop-by-hop headers may be set using the Connection header.

## Authentication

Defines the authentication method that should be used to access a resource.

Contains the credentials to authenticate a user-agent with a server.

Defines the authentication method that should be used to access a resource behind a proxy server.

Contains the credentials to authenticate a user agent with a proxy server.

## Caching

The time, in seconds, that the object has been in a proxy cache.

Directives for caching mechanisms in both requests and responses.

Clears browsing data (e.g. cookies, storage, cache) associated with the requesting website.

The date/time after which the response is considered stale.

Implementation-specific header that may have various effects anywhere along the request-response chain. Used for backwards compatibility with HTTP/1.0 caches where the Cache-Control header is not yet present.

General warning information about possible problems.

## Client hints

HTTP Client hints are a set of request headers that provide useful information about the client such as device type and network conditions, and allow servers to optimize what is served for those conditions.

Servers proactively requests the client hint headers they are interested in from the client using Accept-CH. The client may then choose to include the requested headers in subsequent requests.

Servers can advertise support for Client Hints using the Accept-CH header field or an equivalent HTML <meta> element with http-equiv attribute.

Servers can ask the client to remember the set of Client Hints that the server supports for a specified period of time, to enable delivery of Client Hints on subsequent requests to the server's origin.

The different categories of client hints are listed below.

### User agent client hints

The UA client hints are request headers that provide information about the user agent and the platform/architecture on which it is running:

User agent's branding and version.

User agent's underlying platform architecture.

User agent's underlying CPU architecture bitness (for example "64" bit).

User agent's full semantic version string.

Full version for each brand in the user agent's brand list.

User agent is running on a mobile device or, more generally, prefers a "mobile" user experience.

User agent's device model.

User agent's underlying operation system/platform.

User agent's underlying operation system version.

### Device client hints

Response header used to confirm the image device to pixel ratio in requests where the DPR client hint was used to select an image resource.

Approximate amount of available client RAM memory. This is part of the Device Memory API.

Client device pixel ratio (DPR), which is the number of physical device pixels corresponding to every CSS pixel.

A number that indicates the layout viewport width in CSS pixels. The provided pixel value is a number rounded to the smallest following integer (i.e. ceiling value).

A number that indicates the desired resource width in physical pixels (i.e. intrinsic size of an image).

### Network client hints

Network client hints allow a server to choose what information is sent based on the user choice and network bandwidth and latency.

Approximate bandwidth of the client's connection to the server, in Mbps. This is part of the Network Information API.

The effective connection type ("network profile") that best matches the connection's latency and bandwidth. This is part of the Network Information API.

Application layer round trip time (RTT) in milliseconds, which includes the server processing time. This is part of the Network Information API.

A boolean that indicates the user agent's preference for reduced data usage.

## Conditionals

The last modification date of the resource, used to compare several versions of the same resource. It is less accurate than ETag, but easier to calculate in some environments. Conditional requests using If-Modified-Since and If-Unmodified-Since use this value to change the behavior of the request.

A unique string identifying the version of the resource. Conditional requests using If-Match and If-None-Match use this value to change the behavior of the request.

Makes the request conditional, and applies the method only if the stored resource matches one of the given ETags.

Makes the request conditional, and applies the method only if the stored resource doesn't match any of the given ETags. This is used to update caches (for safe requests), or to prevent uploading a new resource when one already exists.

Makes the request conditional, and expects the resource to be transmitted only if it has been modified after the given date. This is used to transmit data only when the cache is out of date.

Makes the request conditional, and expects the resource to be transmitted only if it has not been modified after the given date. This ensures the coherence of a new fragment of a specific range with previous ones, or to implement an optimistic concurrency control system when modifying existing documents.

Determines how to match request headers to decide whether a cached response can be used rather than requesting a fresh one from the origin server.

## Connection management

Controls whether the network connection stays open after the current transaction finishes.

Controls how long a persistent connection should stay open.

## Content negotiation

Content negotiation headers.

Informs the server about the types of data that can be sent back.

The encoding algorithm, usually a compression algorithm, that can be used on the resource sent back.

Informs the server about the human language the server is expected to send back. This is a hint and is not necessarily under the full control of the user: the server should always pay attention not to override an explicit user choice (like selecting a language from a dropdown).

## Controls

Indicates expectations that need to be fulfilled by the server to properly handle the request.

When using TRACE, indicates the maximum number of hops the request can do before being reflected to the sender.

## Cookies

Contains stored HTTP cookies previously sent by the server with the Set-Cookie header.

Send cookies from the server to the user-agent.

## CORS

Learn more about CORS here.

Indicates whether the response can be shared.

Indicates whether the response to the request can be exposed when the credentials flag is true.

Used in response to a preflight request to indicate which HTTP headers can be used when making the actual request.

Specifies the methods allowed when accessing the resource in response to a preflight request.

Indicates which headers can be exposed as part of the response by listing their names.

Indicates how long the results of a preflight request can be cached.

Used when issuing a preflight request to let the server know which HTTP headers will be used when the actual request is made.

Used when issuing a preflight request to let the server know which HTTP method will be used when the actual request is made.

Indicates where a fetch originates from.

Specifies origins that are allowed to see values of attributes retrieved via features of the Resource Timing API, which would otherwise be reported as zero due to cross-origin restrictions.

## Downloads

Indicates if the resource transmitted should be displayed inline (default behavior without the header), or if it should be handled like a download and the browser should present a "Save As" dialog.

## Message body information

The size of the resource, in decimal number of bytes.

Indicates the media type of the resource.

Used to specify the compression algorithm.

Describes the human language(s) intended for the audience, so that it allows a user to differentiate according to the users' own preferred language.

Indicates an alternate location for the returned data.

## Proxies

Contains information from the client-facing side of proxy servers that is altered or lost when a proxy is involved in the path of the request.

Identifies the originating IP addresses of a client connecting to a web server through an HTTP proxy or a load balancer.

Identifies the original host requested that a client used to connect to your proxy or load balancer.

Identifies the protocol (HTTP or HTTPS) that a client used to connect to your proxy or load balancer.

Added by proxies, both forward and reverse proxies, and can appear in the request headers and the response headers.

## Redirects

Indicates the URL to redirect a page to.

## Request context

Contains an Internet email address for a human user who controls the requesting user agent.

Specifies the domain name of the server (for virtual hosting), and (optionally) the TCP port number on which the server is listening.

The address of the previous web page from which a link to the currently requested page was followed.

Governs which referrer information sent in the Referer header should be included with requests made.

Contains a characteristic string that allows the network protocol peers to identify the application type, operating system, software vendor or software version of the requesting software user agent. See also the Firefox user agent string reference.

## Response context

Lists the set of HTTP request methods supported by a resource.

Contains information about the software used by the origin server to handle the request.

## Range requests

Indicates if the server supports range requests, and if so in which unit the range can be expressed.

Indicates the part of a document that the server should return.

Creates a conditional range request that is only fulfilled if the given etag or date matches the remote resource. Used to prevent downloading two ranges from incompatible version of the resource.

Indicates where in a full body message a partial message belongs.

## Security

Allows a server to declare an embedder policy for a given document.

Prevents other domains from opening/controlling a window.

Prevents other domains from reading the response of the resources to which this header is applied.

Controls resources the user agent is allowed to load for a given page.

Allows web developers to experiment with policies by monitoring, but not enforcing, their effects. These violation reports consist of JSON documents sent via an HTTP POST request to the specified URI.

Allows sites to opt in to reporting and/or enforcement of Certificate Transparency requirements, which prevents the use of misissued certificates for that site from going unnoticed. When a site enables the Expect-CT header, they are requesting that Chrome check that any certificate for that site appears in public CT logs.

Provides a mechanism to allow and deny the use of browser features in its own frame, and in iframes that it embeds.

Provides a mechanism to allow web applications to isolate their origins.

Force communication using HTTPS instead of HTTP.

Sends a signal to the server expressing the client's preference for an encrypted and authenticated response, and that it can successfully handle the upgrade-insecure-requests directive.

Disables MIME sniffing and forces browser to use the type given in Content-Type.

The X-Download-Options HTTP header indicates that the browser (Internet Explorer) should not display the option to "Open" a file that has been downloaded from an application, to prevent phishing attacks as the file otherwise would gain access to execute in the context of the application.

Indicates whether a browser should be allowed to render a page in a <frame>, <iframe>, <embed> or <object>.

Specifies if a cross-domain policy file (crossdomain.xml) is allowed. The file may define a policy to grant clients, such as Adobe's Flash Player (now obsolete), Adobe Acrobat, Microsoft Silverlight (now obsolete), or Apache Flex, permission to handle data across domains that would otherwise be restricted due to the Same-Origin Policy. See the Cross-domain Policy File Specification for more information.

May be set by hosting environments or other frameworks and contains information about them while not providing any usefulness to the application or its visitors. Unset this header to avoid exposing potential vulnerabilities.

Enables cross-site scripting filtering.

### Fetch metadata request headers

Fetch metadata request headers provides information about the context from which the request originated. This allows a server to make decisions about whether a request should be allowed based on where the request came from and how the resource will be used.

It is a request header that indicates the relationship between a request initiator's origin and its target's origin. It is a Structured Header whose value is a token with possible values cross-site, same-origin, same-site, and none.

It is a request header that indicates the request's mode to a server. It is a Structured Header whose value is a token with possible values cors, navigate, no-cors, same-origin, and websocket.

It is a request header that indicates whether or not a navigation request was triggered by user activation. It is a Structured Header whose value is a boolean so possible values are ?0 for false and ?1 for true.

It is a request header that indicates the request's destination to a server. It is a Structured Header whose value is a token with possible values audio, audioworklet, document, embed, empty, font, image, manifest, object, paintworklet, report, script, serviceworker, sharedworker, style, track, video, worker, and xslt.

A request header sent in preemptive request to fetch() a resource during service worker boot. The value, which is set with NavigationPreloadManager.setHeaderValue(), can be used to inform a server that a different resource should be returned than in a normal fetch() operation.

## Server-sent events

TBD

Defines a mechanism that enables developers to declare a network error reporting policy.

TBD

TBD

Used to specify a server endpoint for the browser to send warning and error reports to.

## Transfer coding

Specifies the form of encoding used to safely transfer the resource to the user.

Specifies the transfer encodings the user agent is willing to accept.

Allows the sender to include additional fields at the end of chunked message.

## WebSockets

TBD

TBD

TBD

TBD

TBD

## Other

A client can express the desired push policy for a request by sending an Accept-Push-Policy header field in the request.

A client can send the Accept-Signature header field to indicate intention to take advantage of any available signatures and to indicate what kinds of signatures it supports.

Used to list alternate ways to reach this service.

Contains the date and time at which the message was originated.

Indicates that the request has been conveyed in TLS early data.

Tells the browser that the page being loaded is going to want to perform a large allocation.

The Link entity-header field provides a means for serializing one or more links in HTTP headers. It is semantically equivalent to the HTML <link> element.

A Push-Policy defines the server behavior regarding push when processing a request.

Indicates how long the user agent should wait before making a follow-up request.

The Signature header field conveys a list of signatures for an exchange, each one accompanied by information about how to determine the authority of and refresh that signature.

The Signed-Headers header field identifies an ordered list of response header fields to include in a signature.

Communicates one or more metrics and descriptions for the given request-response cycle.

Used to remove the path restriction by including this header in the response of the Service Worker script.

Links generated code to a source map.

The relevant RFC document for the Upgrade header field is RFC 9110, section 7.8. The standard establishes rules for upgrading or changing to a different protocol on the current client, server, transport protocol connection. For example, this header standard allows a client to change from HTTP 1.1 to WebSocket, assuming the server decides to acknowledge and implement the Upgrade header field. Neither party is required to accept the terms specified in the Upgrade header field. It can be used in both client and server headers. If the Upgrade header field is specified, then the sender MUST also send the Connection header field with the upgrade option specified. For details on the Connection header field please see section 7.6.1 of the aforementioned RFC.

Controls DNS prefetching, a feature by which browsers proactively perform domain name resolution on both links that the user may choose to follow as well as URLs for items referenced by the document, including images, CSS, JavaScript, and so forth.

TBD

TBD

TBD

The X-Robots-Tag HTTP header is used to indicate how a web page is to be indexed within public search engine results. The header is effectively equivalent to <meta name="robots" content="…">.

Used by Internet Explorer to signal which document mode to use.

## Contributing

You can help by writing new entries or improving the existing ones.

## See also

- Wikipedia page on List of HTTP headers
- IANA registry
- HTTP Working Group

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
