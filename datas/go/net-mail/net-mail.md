# Package mail

Source: https://devdocs.io/go/net/mail/index

- import "net/mail"
- Overview
- Index
- Examples

## Overview

Package mail implements parsing of mail messages.

For the most part, this package follows the syntax as specified by RFC 5322 and extended by RFC 6532. Notable divergences:

- Obsolete address formats are not parsed, including addresses with embedded route information.
- The full range of spacing (the CFWS syntax element) is not supported, such as breaking addresses across lines.
- No unicode normalization is performed.
- A leading From line is permitted, as in mbox format (RFC 4155).

## Index

- Variables
- func ParseDate(date string) (time.Time, error)
- type Address
- func ParseAddress(address string) (*Address, error)
- func ParseAddressList(list string) ([]*Address, error)
- func (a *Address) String() string
- type AddressParser
- func (p *AddressParser) Parse(address string) (*Address, error)
- func (p *AddressParser) ParseList(list string) ([]*Address, error)
- type Header
- func (h Header) AddressList(key string) ([]*Address, error)
- func (h Header) Date() (time.Time, error)
- func (h Header) Get(key string) string
- type Message
- func ReadMessage(r io.Reader) (msg *Message, err error)

### Examples

### Package files

message.go

## Variables

```
var ErrHeaderNotPresent = errors.New("mail: header not in message")
```

## func ParseDate 1.8

```
func ParseDate(date string) (time.Time, error)
```

ParseDate parses an RFC 5322 date string.

#### Example

Code:

```
dateStr := "Wed, 09 Oct 2024 09:55:06 -0700"

t, err := mail.ParseDate(dateStr)
if err != nil {
    log.Fatalf("Failed to parse date: %v", err)
}

fmt.Println(t.Format(time.RFC3339))
```

Output:

```
2024-10-09T09:55:06-07:00
```

## type Address

Address represents a single mail address. An address such as "Barry Gibbs <bg@example.com>" is represented as Address{Name: "Barry Gibbs", Address: "bg@example.com"}.

```
type Address struct {
    Name    string // Proper name; may be empty.
    Address string // user@domain
}
```

### func ParseAddress 1.1

```
func ParseAddress(address string) (*Address, error)
```

ParseAddress parses a single RFC 5322 address, e.g. "Barry Gibbs <bg@example.com>"

#### Example

Code:

```
e, err := mail.ParseAddress("Alice <alice@example.com>")
if err != nil {
    log.Fatal(err)
}

fmt.Println(e.Name, e.Address)
```

Output:

```
Alice alice@example.com
```

### func ParseAddressList 1.1

```
func ParseAddressList(list string) ([]*Address, error)
```

ParseAddressList parses the given string as a list of addresses.

#### Example

Code:

```
const list = "Alice <alice@example.com>, Bob <bob@example.com>, Eve <eve@example.com>"
emails, err := mail.ParseAddressList(list)
if err != nil {
    log.Fatal(err)
}

for _, v := range emails {
    fmt.Println(v.Name, v.Address)
}
```

Output:

```
Alice alice@example.com
Bob bob@example.com
Eve eve@example.com
```

### func (*Address) String

```
func (a *Address) String() string
```

String formats the address as a valid RFC 5322 address. If the address's name contains non-ASCII characters the name will be rendered according to RFC 2047.

## type AddressParser 1.5

An AddressParser is an RFC 5322 address parser.

```
type AddressParser struct {
    // WordDecoder optionally specifies a decoder for RFC 2047 encoded-words.
    WordDecoder *mime.WordDecoder
}
```

### func (*AddressParser) Parse 1.5

```
func (p *AddressParser) Parse(address string) (*Address, error)
```

Parse parses a single RFC 5322 address of the form "Gogh Fir <gf@example.com>" or "foo@example.com".

### func (*AddressParser) ParseList 1.5

```
func (p *AddressParser) ParseList(list string) ([]*Address, error)
```

ParseList parses the given string as a list of comma-separated addresses of the form "Gogh Fir <gf@example.com>" or "foo@example.com".

## type Header

A Header represents the key-value pairs in a mail message header.

```
type Header map[string][]string
```

### func (Header) AddressList

```
func (h Header) AddressList(key string) ([]*Address, error)
```

AddressList parses the named header field as a list of addresses.

### func (Header) Date

```
func (h Header) Date() (time.Time, error)
```

Date parses the Date header field.

### func (Header) Get

```
func (h Header) Get(key string) string
```

Get gets the first value associated with the given key. It is case insensitive; CanonicalMIMEHeaderKey is used to canonicalize the provided key. If there are no values associated with the key, Get returns "". To access multiple values of a key, or to use non-canonical keys, access the map directly.

## type Message

A Message represents a parsed mail message.

```
type Message struct {
    Header Header
    Body   io.Reader
}
```

### func ReadMessage

```
func ReadMessage(r io.Reader) (msg *Message, err error)
```

ReadMessage reads a message from r. The headers are parsed, and the body of the message will be available for reading from msg.Body.

#### Example

Code:

```
msg := `Date: Mon, 23 Jun 2015 11:40:36 -0400
From: Gopher <from@example.com>
To: Another Gopher <to@example.com>
Subject: Gophers at Gophercon

Message body
`

r := strings.NewReader(msg)
m, err := mail.ReadMessage(r)
if err != nil {
    log.Fatal(err)
}

header := m.Header
fmt.Println("Date:", header.Get("Date"))
fmt.Println("From:", header.Get("From"))
fmt.Println("To:", header.Get("To"))
fmt.Println("Subject:", header.Get("Subject"))

body, err := io.ReadAll(m.Body)
if err != nil {
    log.Fatal(err)
}
fmt.Printf("%s", body)
```

Output:

```
Date: Mon, 23 Jun 2015 11:40:36 -0400
From: Gopher <from@example.com>
To: Another Gopher <to@example.com>
Subject: Gophers at Gophercon
Message body
```

© Google, Inc.Licensed under the Creative Commons Attribution License 3.0.
 http://golang.org/pkg/net/mail/
