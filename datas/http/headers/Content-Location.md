# Content-Location

Source: https://devdocs.io/http/headers/content-location

# Content-Location

The Content-Location header indicates an alternate location for the returned data. The principal use is to indicate the URL of a resource transmitted as the result of content negotiation.

Location and Content-Location are different. Location indicates the URL of a redirect, while Content-Location indicates the direct URL to use to access the resource, without further content negotiation in the future. Location is a header associated with the response, while Content-Location is associated with the data returned. This distinction may seem abstract without examples.

## Syntax

```
Content-Location: <url>
```

## Directives

A relative (to the request URL) or absolute URL.

## Examples

### Requesting data from a server in different formats

Let's say a site's API can return data in JSON, XML, or CSV formats. If the URL for a particular document is at https://example.com/documents/foo, the site could return different URLs for Content-Location depending on the request's Accept header:

These URLs are examples — the site could serve the different filetypes with any URL patterns it wishes, such as a query string parameter: /documents/foo?format=json, /documents/foo?format=xml, and so on.

Then the client could remember that the JSON version is available at that particular URL, skipping content negotiation the next time it requests that document.

The server could also consider other content negotiation headers, such as Accept-Language.

### Pointing to a new document (HTTP 201 Created)

Say you're creating a new blog post through a site's API:

```
POST /new/post
Host: example.com
Content-Type: text/markdown

# My first blog post!

I made this through `example.com`'s API. I hope it worked.
```

The site returns the published post in the response body. The server specifies where the new post is with the Content-Location header, indicating that this location refers to the content (the body) of this response:

```
HTTP/1.1 201 Created
Content-Type: text/markdown
Content-Location: /my-first-blog-post

# My first blog post

I made this through `example.com`'s API. I hope it worked.
```

### Indicating the URL of a transaction's result

Say you have a <form> for sending money to another user of a site.

```
<form action="/send-payment" method="post">
  <p>
    <label>Who do you want to send the money to?
      <input type="text" name="recipient" />
    </label>
  </p>

  <p>
    <label>How much?
      <input type="number" name="amount" />
    </label>
  </p>

  <button type="submit">Send Money</button>
</form>
```

When the form is submitted, the site generates a receipt for the transaction. The server could use Content-Location to indicate that receipt's URL for future access.

```
HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Content-Location: /my-receipts/38

<!doctype html>
(Lots of HTML…)

<p>You sent $38.00 to ExampleUser.</p>

(Lots more HTML…)
```

## Specifications

## Browser compatibility

## See also

- Location

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Location
