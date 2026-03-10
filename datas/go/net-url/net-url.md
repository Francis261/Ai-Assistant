# Package url

Source: https://devdocs.io/go/net/url/index

- import "net/url"
- Overview
- Index
- Examples

## Overview

## Index

- func JoinPath(base string, elem ...string) (result string, err error)
- func PathEscape(s string) string
- func PathUnescape(s string) (string, error)
- func QueryEscape(s string) string
- func QueryUnescape(s string) (string, error)
- type Error
- func (e *Error) Error() string
- func (e *Error) Temporary() bool
- func (e *Error) Timeout() bool
- func (e *Error) Unwrap() error
- type EscapeError
- func (e EscapeError) Error() string
- type InvalidHostError
- func (e InvalidHostError) Error() string
- type URL
- func Parse(rawURL string) (*URL, error)
- func ParseRequestURI(rawURL string) (*URL, error)
- func (u *URL) AppendBinary(b []byte) ([]byte, error)
- func (u *URL) EscapedFragment() string
- func (u *URL) EscapedPath() string
- func (u *URL) Hostname() string
- func (u *URL) IsAbs() bool
- func (u *URL) JoinPath(elem ...string) *URL
- func (u *URL) MarshalBinary() (text []byte, err error)
- func (u *URL) Parse(ref string) (*URL, error)
- func (u *URL) Port() string
- func (u *URL) Query() Values
- func (u *URL) Redacted() string
- func (u *URL) RequestURI() string
- func (u *URL) ResolveReference(ref *URL) *URL
- func (u *URL) String() string
- func (u *URL) UnmarshalBinary(text []byte) error
- type Userinfo
- func User(username string) *Userinfo
- func UserPassword(username, password string) *Userinfo
- func (u *Userinfo) Password() (string, bool)
- func (u *Userinfo) String() string
- func (u *Userinfo) Username() string
- type Values
- func ParseQuery(query string) (Values, error)
- func (v Values) Add(key, value string)
- func (v Values) Del(key string)
- func (v Values) Encode() string
- func (v Values) Get(key string) string
- func (v Values) Has(key string) bool
- func (v Values) Set(key, value string)

### Examples

### Package files

encoding_table.go url.go

## func JoinPath 1.19

```
func JoinPath(base string, elem ...string) (result string, err error)
```

JoinPath returns a URL string with the provided path elements joined to the existing path of base and the resulting path cleaned of any ./ or ../ elements. Path elements must already be in escaped form, as produced by PathEscape.

## func PathEscape 1.8

```
func PathEscape(s string) string
```

PathEscape escapes the string so it can be safely placed inside a URL path segment, replacing special characters (including /) with %XX sequences as needed.

#### Example

Code:

```
path := url.PathEscape("my/cool+blog&about,stuff")
fmt.Println(path)
```

Output:

```
my%2Fcool+blog&about%2Cstuff
```

## func PathUnescape 1.8

```
func PathUnescape(s string) (string, error)
```

PathUnescape does the inverse transformation of PathEscape, converting each 3-byte encoded substring of the form "%AB" into the hex-decoded byte 0xAB. It returns an error if any % is not followed by two hexadecimal digits.

PathUnescape is identical to QueryUnescape except that it does not unescape '+' to ' ' (space).

#### Example

Code:

```
escapedPath := "my%2Fcool+blog&about%2Cstuff"
path, err := url.PathUnescape(escapedPath)
if err != nil {
    log.Fatal(err)
}
fmt.Println(path)
```

Output:

```
my/cool+blog&about,stuff
```

## func QueryEscape

```
func QueryEscape(s string) string
```

QueryEscape escapes the string so it can be safely placed inside a URL query.

#### Example

Code:

```
query := url.QueryEscape("my/cool+blog&about,stuff")
fmt.Println(query)
```

Output:

```
my%2Fcool%2Bblog%26about%2Cstuff
```

## func QueryUnescape

```
func QueryUnescape(s string) (string, error)
```

QueryUnescape does the inverse transformation of QueryEscape, converting each 3-byte encoded substring of the form "%AB" into the hex-decoded byte 0xAB. It returns an error if any % is not followed by two hexadecimal digits.

#### Example

Code:

```
escapedQuery := "my%2Fcool%2Bblog%26about%2Cstuff"
query, err := url.QueryUnescape(escapedQuery)
if err != nil {
    log.Fatal(err)
}
fmt.Println(query)
```

Output:

```
my/cool+blog&about,stuff
```

## type Error

Error reports an error and the operation and URL that caused it.

```
type Error struct {
    Op  string
    URL string
    Err error
}
```

### func (*Error) Error

```
func (e *Error) Error() string
```

### func (*Error) Temporary 1.6

```
func (e *Error) Temporary() bool
```

### func (*Error) Timeout 1.6

```
func (e *Error) Timeout() bool
```

### func (*Error) Unwrap 1.13

```
func (e *Error) Unwrap() error
```

## type EscapeError

```
type EscapeError string
```

### func (EscapeError) Error

```
func (e EscapeError) Error() string
```

## type InvalidHostError 1.6

```
type InvalidHostError string
```

### func (InvalidHostError) Error 1.6

```
func (e InvalidHostError) Error() string
```

## type URL

A URL represents a parsed URL (technically, a URI reference).

The general form represented is:

```
[scheme:][//[userinfo@]host][/]path[?query][#fragment]
```

URLs that do not start with a slash after the scheme are interpreted as:

```
scheme:opaque[?query][#fragment]
```

The Host field contains the host and port subcomponents of the URL. When the port is present, it is separated from the host with a colon. When the host is an IPv6 address, it must be enclosed in square brackets: "[fe80::1]:80". The net.JoinHostPort function combines a host and port into a string suitable for the Host field, adding square brackets to the host when necessary.

Note that the Path field is stored in decoded form: /%47%6f%2f becomes /Go/. A consequence is that it is impossible to tell which slashes in the Path were slashes in the raw URL and which were %2f. This distinction is rarely important, but when it is, the code should use the URL.EscapedPath method, which preserves the original encoding of Path. The Fragment field is also stored in decoded form, use URL.EscapedFragment to retrieve the original encoding.

The URL.String method uses the URL.EscapedPath method to obtain the path.

```
type URL struct {
    Scheme   string
    Opaque   string    // encoded opaque data
    User     *Userinfo // username and password information
    Host     string    // "host" or "host:port" (see Hostname and Port methods)
    Path     string    // path (relative paths may omit leading slash)
    Fragment string    // fragment for references (without '#')

    // RawQuery contains the encoded query values, without the initial '?'.
    // Use URL.Query to decode the query.
    RawQuery string

    // RawPath is an optional field containing an encoded path hint.
    // See the EscapedPath method for more details.
    //
    // In general, code should call EscapedPath instead of reading RawPath.
    RawPath string // Go 1.5

    // RawFragment is an optional field containing an encoded fragment hint.
    // See the EscapedFragment method for more details.
    //
    // In general, code should call EscapedFragment instead of reading RawFragment.
    RawFragment string // Go 1.15

    // ForceQuery indicates whether the original URL contained a query ('?') character.
    // When set, the String method will include a trailing '?', even when RawQuery is empty.
    ForceQuery bool // Go 1.7

    // OmitHost indicates the URL has an empty host (authority).
    // When set, the String method will not include the host when it is empty.
    OmitHost bool // Go 1.19
}
```

#### Example

Code:

```
u, err := url.Parse("http://bing.com/search?q=dotnet")
if err != nil {
    log.Fatal(err)
}
u.Scheme = "https"
u.Host = "google.com"
q := u.Query()
q.Set("q", "golang")
u.RawQuery = q.Encode()
fmt.Println(u)
```

Output:

```
https://google.com/search?q=golang
```

#### Example (Roundtrip)

Code:

```
// Parse + String preserve the original encoding.
u, err := url.Parse("https://example.com/foo%2fbar")
if err != nil {
    log.Fatal(err)
}
fmt.Println(u.Path)
fmt.Println(u.RawPath)
fmt.Println(u.String())
```

Output:

```
/foo/bar
/foo%2fbar
https://example.com/foo%2fbar
```

### func Parse

```
func Parse(rawURL string) (*URL, error)
```

Parse parses a raw url into a URL structure.

The url may be relative (a path, without a host) or absolute (starting with a scheme). Trying to parse a hostname and path without a scheme is invalid but may not necessarily return an error, due to parsing ambiguities.

### func ParseRequestURI

```
func ParseRequestURI(rawURL string) (*URL, error)
```

ParseRequestURI parses a raw url into a URL structure. It assumes that url was received in an HTTP request, so the url is interpreted only as an absolute URI or an absolute path. The string url is assumed not to have a #fragment suffix. (Web browsers strip #fragment before sending the URL to a web server.)

### func (*URL) AppendBinary 1.24

```
func (u *URL) AppendBinary(b []byte) ([]byte, error)
```

### func (*URL) EscapedFragment 1.15

```
func (u *URL) EscapedFragment() string
```

EscapedFragment returns the escaped form of u.Fragment. In general there are multiple possible escaped forms of any fragment. EscapedFragment returns u.RawFragment when it is a valid escaping of u.Fragment. Otherwise EscapedFragment ignores u.RawFragment and computes an escaped form on its own. The URL.String method uses EscapedFragment to construct its result. In general, code should call EscapedFragment instead of reading u.RawFragment directly.

#### Example

Code:

```
u, err := url.Parse("http://example.com/#x/y%2Fz")
if err != nil {
    log.Fatal(err)
}
fmt.Println("Fragment:", u.Fragment)
fmt.Println("RawFragment:", u.RawFragment)
fmt.Println("EscapedFragment:", u.EscapedFragment())
```

Output:

```
Fragment: x/y/z
RawFragment: x/y%2Fz
EscapedFragment: x/y%2Fz
```

### func (*URL) EscapedPath 1.5

```
func (u *URL) EscapedPath() string
```

EscapedPath returns the escaped form of u.Path. In general there are multiple possible escaped forms of any path. EscapedPath returns u.RawPath when it is a valid escaping of u.Path. Otherwise EscapedPath ignores u.RawPath and computes an escaped form on its own. The URL.String and URL.RequestURI methods use EscapedPath to construct their results. In general, code should call EscapedPath instead of reading u.RawPath directly.

#### Example

Code:

```
u, err := url.Parse("http://example.com/x/y%2Fz")
if err != nil {
    log.Fatal(err)
}
fmt.Println("Path:", u.Path)
fmt.Println("RawPath:", u.RawPath)
fmt.Println("EscapedPath:", u.EscapedPath())
```

Output:

```
Path: /x/y/z
RawPath: /x/y%2Fz
EscapedPath: /x/y%2Fz
```

### func (*URL) Hostname 1.8

```
func (u *URL) Hostname() string
```

Hostname returns u.Host, stripping any valid port number if present.

If the result is enclosed in square brackets, as literal IPv6 addresses are, the square brackets are removed from the result.

#### Example

Code:

```
u, err := url.Parse("https://example.org:8000/path")
if err != nil {
    log.Fatal(err)
}
fmt.Println(u.Hostname())
u, err = url.Parse("https://[2001:0db8:85a3:0000:0000:8a2e:0370:7334]:17000")
if err != nil {
    log.Fatal(err)
}
fmt.Println(u.Hostname())
```

Output:

```
example.org
2001:0db8:85a3:0000:0000:8a2e:0370:7334
```

### func (*URL) IsAbs

```
func (u *URL) IsAbs() bool
```

IsAbs reports whether the URL is absolute. Absolute means that it has a non-empty scheme.

#### Example

Code:

```
u := url.URL{Host: "example.com", Path: "foo"}
fmt.Println(u.IsAbs())
u.Scheme = "http"
fmt.Println(u.IsAbs())
```

Output:

```
false
true
```

### func (*URL) JoinPath 1.19

```
func (u *URL) JoinPath(elem ...string) *URL
```

JoinPath returns a new URL with the provided path elements joined to any existing path and the resulting path cleaned of any ./ or ../ elements. Any sequences of multiple / characters will be reduced to a single /. Path elements must already be in escaped form, as produced by PathEscape.

#### Example

Code:

```
u, err := url.Parse("https://example.com/foo/bar")
if err != nil {
    log.Fatal(err)
}

fmt.Println(u.JoinPath("baz", "qux"))
```

Output:

```
https://example.com/foo/bar/baz/qux
```

### func (*URL) MarshalBinary 1.8

```
func (u *URL) MarshalBinary() (text []byte, err error)
```

#### Example

Code:

```
u, _ := url.Parse("https://example.org")
b, err := u.MarshalBinary()
if err != nil {
    log.Fatal(err)
}
fmt.Printf("%s\n", b)
```

Output:

```
https://example.org
```

### func (*URL) Parse

```
func (u *URL) Parse(ref string) (*URL, error)
```

Parse parses a URL in the context of the receiver. The provided URL may be relative or absolute. Parse returns nil, err on parse failure, otherwise its return value is the same as URL.ResolveReference.

#### Example

Code:

```
u, err := url.Parse("https://example.org")
if err != nil {
    log.Fatal(err)
}
rel, err := u.Parse("/foo")
if err != nil {
    log.Fatal(err)
}
fmt.Println(rel)
_, err = u.Parse(":foo")
if _, ok := err.(*url.Error); !ok {
    log.Fatal(err)
}
```

Output:

```
https://example.org/foo
```

### func (*URL) Port 1.8

```
func (u *URL) Port() string
```

Port returns the port part of u.Host, without the leading colon.

If u.Host doesn't contain a valid numeric port, Port returns an empty string.

#### Example

Code:

```
u, err := url.Parse("https://example.org")
if err != nil {
    log.Fatal(err)
}
fmt.Println(u.Port())
u, err = url.Parse("https://example.org:8080")
if err != nil {
    log.Fatal(err)
}
fmt.Println(u.Port())
```

Output:

```
8080
```

### func (*URL) Query

```
func (u *URL) Query() Values
```

Query parses RawQuery and returns the corresponding values. It silently discards malformed value pairs. To check errors use ParseQuery.

#### Example

Code:

```
u, err := url.Parse("https://example.org/?a=1&a=2&b=&=3&&&&")
if err != nil {
    log.Fatal(err)
}
q := u.Query()
fmt.Println(q["a"])
fmt.Println(q.Get("b"))
fmt.Println(q.Get(""))
```

Output:

```
[1 2]

3
```

### func (*URL) Redacted 1.15

```
func (u *URL) Redacted() string
```

Redacted is like URL.String but replaces any password with "xxxxx". Only the password in u.User is redacted.

#### Example

Code:

```
u := &url.URL{
    Scheme: "https",
    User:   url.UserPassword("user", "password"),
    Host:   "example.com",
    Path:   "foo/bar",
}
fmt.Println(u.Redacted())
u.User = url.UserPassword("me", "newerPassword")
fmt.Println(u.Redacted())
```

Output:

```
https://user:xxxxx@example.com/foo/bar
https://me:xxxxx@example.com/foo/bar
```

### func (*URL) RequestURI

```
func (u *URL) RequestURI() string
```

RequestURI returns the encoded path?query or opaque?query string that would be used in an HTTP request for u.

#### Example

Code:

```
u, err := url.Parse("https://example.org/path?foo=bar")
if err != nil {
    log.Fatal(err)
}
fmt.Println(u.RequestURI())
```

Output:

```
/path?foo=bar
```

### func (*URL) ResolveReference

```
func (u *URL) ResolveReference(ref *URL) *URL
```

ResolveReference resolves a URI reference to an absolute URI from an absolute base URI u, per RFC 3986 Section 5.2. The URI reference may be relative or absolute. ResolveReference always returns a new URL instance, even if the returned URL is identical to either the base or reference. If ref is an absolute URL, then ResolveReference ignores base and returns a copy of ref.

#### Example

Code:

```
u, err := url.Parse("../../..//search?q=dotnet")
if err != nil {
    log.Fatal(err)
}
base, err := url.Parse("http://example.com/directory/")
if err != nil {
    log.Fatal(err)
}
fmt.Println(base.ResolveReference(u))
```

Output:

```
http://example.com/search?q=dotnet
```

### func (*URL) String

```
func (u *URL) String() string
```

String reassembles the URL into a valid URL string. The general form of the result is one of:

```
scheme:opaque?query#fragment
scheme://userinfo@host/path?query#fragment
```

If u.Opaque is non-empty, String uses the first form; otherwise it uses the second form. Any non-ASCII characters in host are escaped. To obtain the path, String uses u.EscapedPath().

In the second form, the following rules apply:

- if u.Scheme is empty, scheme: is omitted.
- if u.User is nil, userinfo@ is omitted.
- if u.Host is empty, host/ is omitted.
- if u.Scheme and u.Host are empty and u.User is nil, the entire scheme://userinfo@host/ is omitted.
- if u.Host is non-empty and u.Path begins with a /, the form host/path does not add its own /.
- if u.RawQuery is empty, ?query is omitted.
- if u.Fragment is empty, #fragment is omitted.

#### Example

Code:

```
u := &url.URL{
    Scheme:   "https",
    User:     url.UserPassword("me", "pass"),
    Host:     "example.com",
    Path:     "foo/bar",
    RawQuery: "x=1&y=2",
    Fragment: "anchor",
}
fmt.Println(u.String())
u.Opaque = "opaque"
fmt.Println(u.String())
```

Output:

```
https://me:pass@example.com/foo/bar?x=1&y=2#anchor
https:opaque?x=1&y=2#anchor
```

### func (*URL) UnmarshalBinary 1.8

```
func (u *URL) UnmarshalBinary(text []byte) error
```

#### Example

Code:

```
u := &url.URL{}
err := u.UnmarshalBinary([]byte("https://example.org/foo"))
if err != nil {
    log.Fatal(err)
}
fmt.Printf("%s\n", u)
```

Output:

```
https://example.org/foo
```

## type Userinfo

The Userinfo type is an immutable encapsulation of username and password details for a URL. An existing Userinfo value is guaranteed to have a username set (potentially empty, as allowed by RFC 2396), and optionally a password.

```
type Userinfo struct {
    // contains filtered or unexported fields
}
```

### func User

```
func User(username string) *Userinfo
```

User returns a Userinfo containing the provided username and no password set.

### func UserPassword

```
func UserPassword(username, password string) *Userinfo
```

UserPassword returns a Userinfo containing the provided username and password.

This functionality should only be used with legacy web sites. RFC 2396 warns that interpreting Userinfo this way “is NOT RECOMMENDED, because the passing of authentication information in clear text (such as URI) has proven to be a security risk in almost every case where it has been used.”

### func (*Userinfo) Password

```
func (u *Userinfo) Password() (string, bool)
```

Password returns the password in case it is set, and whether it is set.

### func (*Userinfo) String

```
func (u *Userinfo) String() string
```

String returns the encoded userinfo information in the standard form of "username[:password]".

### func (*Userinfo) Username

```
func (u *Userinfo) Username() string
```

Username returns the username.

## type Values

Values maps a string key to a list of values. It is typically used for query parameters and form values. Unlike in the http.Header map, the keys in a Values map are case-sensitive.

```
type Values map[string][]string
```

#### Example

Code:

```
v := url.Values{}
v.Set("name", "Ava")
v.Add("friend", "Jess")
v.Add("friend", "Sarah")
v.Add("friend", "Zoe")
fmt.Println(v.Encode())
fmt.Println(v.Get("name"))
fmt.Println(v.Get("friend"))
fmt.Println(v["friend"])
```

Output:

```
friend=Jess&friend=Sarah&friend=Zoe&name=Ava
Ava
Jess
[Jess Sarah Zoe]
```

### func ParseQuery

```
func ParseQuery(query string) (Values, error)
```

ParseQuery parses the URL-encoded query string and returns a map listing the values specified for each key. ParseQuery always returns a non-nil map containing all the valid query parameters found; err describes the first decoding error encountered, if any.

Query is expected to be a list of key=value settings separated by ampersands. A setting without an equals sign is interpreted as a key set to an empty value. Settings containing a non-URL-encoded semicolon are considered invalid.

#### Example

Code:

```
m, err := url.ParseQuery(`x=1&y=2&y=3`)
if err != nil {
    log.Fatal(err)
}
fmt.Println(toJSON(m))
```

Output:

```
{"x":["1"], "y":["2", "3"]}
```

### func (Values) Add

```
func (v Values) Add(key, value string)
```

Add adds the value to key. It appends to any existing values associated with key.

#### Example

Code:

```
v := url.Values{}
v.Add("cat sounds", "meow")
v.Add("cat sounds", "mew")
v.Add("cat sounds", "mau")
fmt.Println(v["cat sounds"])
```

Output:

```
[meow mew mau]
```

### func (Values) Del

```
func (v Values) Del(key string)
```

Del deletes the values associated with key.

#### Example

Code:

```
v := url.Values{}
v.Add("cat sounds", "meow")
v.Add("cat sounds", "mew")
v.Add("cat sounds", "mau")
fmt.Println(v["cat sounds"])

v.Del("cat sounds")
fmt.Println(v["cat sounds"])
```

Output:

```
[meow mew mau]
[]
```

### func (Values) Encode

```
func (v Values) Encode() string
```

Encode encodes the values into “URL encoded” form ("bar=baz&foo=quux") sorted by key.

#### Example

Code:

```
v := url.Values{}
v.Add("cat sounds", "meow")
v.Add("cat sounds", "mew/")
v.Add("cat sounds", "mau$")
fmt.Println(v.Encode())
```

Output:

```
cat+sounds=meow&cat+sounds=mew%2F&cat+sounds=mau%24
```

### func (Values) Get

```
func (v Values) Get(key string) string
```

Get gets the first value associated with the given key. If there are no values associated with the key, Get returns the empty string. To access multiple values, use the map directly.

#### Example

Code:

```
v := url.Values{}
v.Add("cat sounds", "meow")
v.Add("cat sounds", "mew")
v.Add("cat sounds", "mau")
fmt.Printf("%q\n", v.Get("cat sounds"))
fmt.Printf("%q\n", v.Get("dog sounds"))
```

Output:

```
"meow"
""
```

### func (Values) Has 1.17

```
func (v Values) Has(key string) bool
```

Has checks whether a given key is set.

#### Example

Code:

```
v := url.Values{}
v.Add("cat sounds", "meow")
v.Add("cat sounds", "mew")
v.Add("cat sounds", "mau")
fmt.Println(v.Has("cat sounds"))
fmt.Println(v.Has("dog sounds"))
```

Output:

```
true
false
```

### func (Values) Set

```
func (v Values) Set(key, value string)
```

Set sets the key to value. It replaces any existing values.

#### Example

Code:

```
v := url.Values{}
v.Add("cat sounds", "meow")
v.Add("cat sounds", "mew")
v.Add("cat sounds", "mau")
fmt.Println(v["cat sounds"])

v.Set("cat sounds", "meow")
fmt.Println(v["cat sounds"])
```

Output:

```
[meow mew mau]
[meow]
```

© Google, Inc.Licensed under the Creative Commons Attribution License 3.0.
 http://golang.org/pkg/net/url/
