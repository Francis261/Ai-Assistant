# Data URLs

Source: https://devdocs.io/http/basics_of_http/data_urls

# Data URLs

Data URLs, URLs prefixed with the data: scheme, allow content creators to embed small files inline in documents. They were formerly known as "data URIs" until that name was retired by the WHATWG.

Note: Data URLs are treated as unique opaque origins by modern browsers, rather than inheriting the origin of the settings object responsible for the navigation.

## Syntax

Data URLs are composed of four parts: a prefix (data:), a MIME type indicating the type of data, an optional base64 token if non-textual, and the data itself:

```
data:[<mediatype>][;base64],<data>
```

The mediatype is a MIME type string, such as 'image/jpeg' for a JPEG image file. If omitted, defaults to text/plain;charset=US-ASCII

If the data contains characters defined in RFC 3986 as reserved characters, or contains space characters, newline characters, or other non-printing characters, those characters must be percent-encoded (aka "URL-encoded").

If the data is textual, you can embed the text (using the appropriate entities or escapes based on the enclosing document's type). Otherwise, you can specify base64 to embed base64-encoded binary data. You can find more info on MIME types here and here.

A few examples:

The text/plain data Hello, World!. Note how the comma is percent-encoded as %2C, and the space character as %20.

base64-encoded version of the above

An HTML document with <h1>Hello, World!</h1>

An HTML document with <script>alert('hi');</script> that executes a JavaScript alert. Note that the closing script tag is required.

## Encoding data into base64 format

Base64 is a group of binary-to-text encoding schemes that represent binary data in an ASCII string format by translating it into a radix-64 representation. By consisting only of ASCII characters, base64 strings are generally url-safe, and that's why they can be used to encode data in Data URLs.

### Encoding in JavaScript

The Web APIs have native methods to encode or decode to base64: Base64 encoding and decoding.

### Encoding on a Unix system

Base64 encoding of a file or string on Linux and macOS systems can be achieved using the command-line base64 (or, as an alternative, the uuencode utility with -m argument).

```
echo -n hello|base64
# outputs to console: aGVsbG8=

echo -n hello>a.txt
base64 a.txt
# outputs to console: aGVsbG8=

base64 a.txt>b.txt
# outputs to file b.txt: aGVsbG8=
```

### Encoding on Microsoft Windows

On Windows, Convert.ToBase64String from PowerShell can be used to perform the Base64 encoding:

```
[convert]::ToBase64String([Text.Encoding]::UTF8.GetBytes("hello"))
# outputs to console: aGVsbG8=
```

Alternatively, a GNU/Linux shell (such as WSL) provides the utility base64:

```
bash$ echo -n hello | base64
# outputs to console: aGVsbG8=
```

## Common problems

This section describes problems that commonly occur when creating and using data URLs.

```
data:text/html,lots of text…<p><a name%3D"bottom">bottom</a>?arg=val</p>
```

This represents an HTML resource whose contents are:

```
lots of text…
<p><a name="bottom">bottom</a>?arg=val</p>
```

The format for data URLs is very simple, but it's easy to forget to put a comma before the "data" segment, or to incorrectly encode the data into base64 format.

A data URL provides a file within a file, which can potentially be very wide relative to the width of the enclosing document. As a URL, the data should be formattable with whitespace (linefeed, tab, or spaces), but there are practical issues that arise when using base64 encoding.

Browsers are not required to support any particular maximum length of data. For example, the Opera 11 browser limited URLs to 65535 characters long which limits data URLs to 65529 characters (65529 characters being the length of the encoded data, not the source, if you use the plain data:, without specifying a MIME type). Firefox version 97 and newer supports data URLs of up to 32MB (before 97 the limit was close to 256MB). Chromium objects to URLs over 512MB, and Webkit (Safari) to URLs over 2048MB.

Invalid parameters in media, or typos when specifying 'base64', are ignored, but no error is provided.

The data portion of a data URL is opaque, so an attempt to use a query string (page-specific parameters, with the syntax <url>?parameter-data) with a data URL will just include the query string in the data the URL represents.

A number of security issues (for example, phishing) have been associated with data URLs, and navigating to them in the browser's top level. To mitigate such issues, top-level navigation to data: URLs is blocked in all modern browsers. See this blog post from the Mozilla Security Team for more details.

## Specifications

## Browser compatibility

## See also

- Base64 encoding and decoding
- Percent encoding
- atob()
- btoa()
- CSS url()
- URI

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs
