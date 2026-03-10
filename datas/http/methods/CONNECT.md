# CONNECT

Source: https://devdocs.io/http/methods/connect

# CONNECT

The CONNECT starts two-way communications with the requested resource. It can be used to open a tunnel.

For example, the CONNECT method can be used to access websites that use SSL (HTTPS). The client asks an HTTP Proxy server to tunnel the TCP connection to the desired destination. The server then proceeds to make the connection on behalf of the client. Once the connection has been established by the server, the Proxy server continues to proxy the TCP stream to and from the client.

CONNECT is a hop-by-hop method.

## Syntax

```
CONNECT www.example.com:443 HTTP/1.1
```

## Example

Some proxy servers might need authority to create a tunnel. See also the Proxy-Authorization header.

```
CONNECT server.example.com:80 HTTP/1.1
Host: server.example.com:80
Proxy-Authorization: basic aGVsbG86d29ybGQ=
```

## Specifications

## Browser compatibility

## See also

- Proxy server
- Proxy-Authorization

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/CONNECT
