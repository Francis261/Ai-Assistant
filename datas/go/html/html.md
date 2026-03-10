# Package html

Source: https://devdocs.io/go/html/index

- import "html"
- Overview
- Index
- Examples
- Subdirectories

## Overview

Package html provides functions for escaping and unescaping HTML text.

## Index

- func EscapeString(s string) string
- func UnescapeString(s string) string

### Examples

### Package files

entity.go escape.go

## func EscapeString

```
func EscapeString(s string) string
```

EscapeString escapes special characters like "<" to become "&lt;". It escapes only five such characters: <, >, &, ' and ". UnescapeString(EscapeString(s)) == s always holds, but the converse isn't always true.

#### Example

Code:

```
const s = `"Fran & Freddie's Diner" <tasty@example.com>`
fmt.Println(html.EscapeString(s))
```

Output:

```
&#34;Fran &amp; Freddie&#39;s Diner&#34; &lt;tasty@example.com&gt;
```

## func UnescapeString

```
func UnescapeString(s string) string
```

UnescapeString unescapes entities like "&lt;" to become "<". It unescapes a larger range of entities than EscapeString escapes. For example, "&aacute;" unescapes to "á", as does "&#225;" and "&#xE1;". UnescapeString(EscapeString(s)) == s always holds, but the converse isn't always true.

#### Example

Code:

```
const s = `&quot;Fran &amp; Freddie&#39;s Diner&quot; &lt;tasty@example.com&gt;`
fmt.Println(html.UnescapeString(s))
```

Output:

```
"Fran & Freddie's Diner" <tasty@example.com>
```

## Subdirectories

© Google, Inc.Licensed under the Creative Commons Attribution License 3.0.
 http://golang.org/pkg/html/
