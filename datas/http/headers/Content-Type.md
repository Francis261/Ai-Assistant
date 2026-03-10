# Content-Type

Source: https://devdocs.io/http/headers/content-type

# Content-Type

The Content-Type representation header is used to indicate the original media type of the resource (prior to any content encoding applied for sending).

In responses, a Content-Type header provides the client with the actual content type of the returned content. This header's value may be ignored, for example when browsers perform MIME sniffing; set the X-Content-Type-Options header value to nosniff to prevent this behavior.

In requests, (such as POST or PUT), the client tells the server what type of data is actually sent.

## Syntax

```
Content-Type: text/html; charset=utf-8
Content-Type: multipart/form-data; boundary=something
```

## Directives

The MIME type of the resource or the data.

The character encoding standard. Case insensitive, lowercase is preferred.

For multipart entities the boundary directive is required. The directive consists of 1 to 70 characters from a set of characters (and not ending with white space) known to be very robust through email gateways. It is used to encapsulate the boundaries of the multiple parts of the message. Often, the header boundary is prepended with two dashes and the final boundary has two dashes appended at the end.

## Examples

### Content-Type in HTML forms

In a POST request, resulting from an HTML form submission, the Content-Type of the request is specified by the enctype attribute on the <form> element.

```
<form action="/" method="post" enctype="multipart/form-data">
  <input type="text" name="description" value="some text" />
  <input type="file" name="myFile" />
  <button type="submit">Submit</button>
</form>
```

The request looks something like this (less interesting headers are omitted here):

```
POST /foo HTTP/1.1
Content-Length: 68137
Content-Type: multipart/form-data; boundary=---------------------------974767299852498929531610575

-----------------------------974767299852498929531610575
Content-Disposition: form-data; name="description"

some text
-----------------------------974767299852498929531610575
Content-Disposition: form-data; name="myFile"; filename="foo.txt"
Content-Type: text/plain

(content of the uploaded file foo.txt)
-----------------------------974767299852498929531610575--
```

## Specifications

## Browser compatibility

## See also

- Accept
- Content-Disposition
- 206 Partial Content
- X-Content-Type-Options

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type
