# Package cookiejar

Source: https://devdocs.io/go/net/http/cookiejar/index

- import "net/http/cookiejar"
- Overview
- Index
- Examples

## Overview

Package cookiejar implements an in-memory RFC 6265-compliant http.CookieJar.

## Index

- type Jar
- func New(o *Options) (*Jar, error)
- func (j *Jar) Cookies(u *url.URL) (cookies []*http.Cookie)
- func (j *Jar) SetCookies(u *url.URL, cookies []*http.Cookie)
- type Options
- type PublicSuffixList

### Examples

### Package files

jar.go punycode.go

## type Jar 1.1

Jar implements the http.CookieJar interface from the net/http package.

```
type Jar struct {
    // contains filtered or unexported fields
}
```

### func New 1.1

```
func New(o *Options) (*Jar, error)
```

New returns a new cookie jar. A nil *Options is equivalent to a zero Options.

#### Example

Code:

```
// Start a server to give us cookies.
ts := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
    if cookie, err := r.Cookie("Flavor"); err != nil {
        http.SetCookie(w, &http.Cookie{Name: "Flavor", Value: "Chocolate Chip"})
    } else {
        cookie.Value = "Oatmeal Raisin"
        http.SetCookie(w, cookie)
    }
}))
defer ts.Close()

u, err := url.Parse(ts.URL)
if err != nil {
    log.Fatal(err)
}

// All users of cookiejar should import "golang.org/x/net/publicsuffix"
jar, err := cookiejar.New(&cookiejar.Options{PublicSuffixList: publicsuffix.List})
if err != nil {
    log.Fatal(err)
}

client := &http.Client{
    Jar: jar,
}

if _, err = client.Get(u.String()); err != nil {
    log.Fatal(err)
}

fmt.Println("After 1st request:")
for _, cookie := range jar.Cookies(u) {
    fmt.Printf("  %s: %s\n", cookie.Name, cookie.Value)
}

if _, err = client.Get(u.String()); err != nil {
    log.Fatal(err)
}

fmt.Println("After 2nd request:")
for _, cookie := range jar.Cookies(u) {
    fmt.Printf("  %s: %s\n", cookie.Name, cookie.Value)
}
```

Output:

```
After 1st request:
  Flavor: Chocolate Chip
After 2nd request:
  Flavor: Oatmeal Raisin
```

### func (*Jar) Cookies 1.1

```
func (j *Jar) Cookies(u *url.URL) (cookies []*http.Cookie)
```

Cookies implements the Cookies method of the http.CookieJar interface.

It returns an empty slice if the URL's scheme is not HTTP or HTTPS.

### func (*Jar) SetCookies 1.1

```
func (j *Jar) SetCookies(u *url.URL, cookies []*http.Cookie)
```

SetCookies implements the SetCookies method of the http.CookieJar interface.

It does nothing if the URL's scheme is not HTTP or HTTPS.

## type Options 1.1

Options are the options for creating a new Jar.

```
type Options struct {
    // PublicSuffixList is the public suffix list that determines whether
    // an HTTP server can set a cookie for a domain.
    //
    // A nil value is valid and may be useful for testing but it is not
    // secure: it means that the HTTP server for foo.co.uk can set a cookie
    // for bar.co.uk.
    PublicSuffixList PublicSuffixList
}
```

## type PublicSuffixList 1.1

PublicSuffixList provides the public suffix of a domain. For example:

- the public suffix of "example.com" is "com",
- the public suffix of "foo1.foo2.foo3.co.uk" is "co.uk", and
- the public suffix of "bar.pvt.k12.ma.us" is "pvt.k12.ma.us".

Implementations of PublicSuffixList must be safe for concurrent use by multiple goroutines.

An implementation that always returns "" is valid and may be useful for testing but it is not secure: it means that the HTTP server for foo.com can set a cookie for bar.com.

A public suffix list implementation is in the package golang.org/x/net/publicsuffix.

```
type PublicSuffixList interface {
    // PublicSuffix returns the public suffix of domain.
    //
    // TODO: specify which of the caller and callee is responsible for IP
    // addresses, for leading and trailing dots, for case sensitivity, and
    // for IDN/Punycode.
    PublicSuffix(domain string) string

    // String returns a description of the source of this public suffix
    // list. The description will typically contain something like a time
    // stamp or version number.
    String() string
}
```

© Google, Inc.Licensed under the Creative Commons Attribution License 3.0.
 http://golang.org/pkg/net/http/cookiejar/
