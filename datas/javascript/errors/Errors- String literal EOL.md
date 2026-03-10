# SyntaxError: string literal contains an unescaped line break

Source: https://devdocs.io/javascript/errors/string_literal_eol

The JavaScript error "string literal contains an unescaped line break" occurs when there is an unterminated string literal somewhere. String literals must be enclosed by single (') or double (") quotes and cannot split across multiple lines.

## Message

```
SyntaxError: Invalid or unexpected token (V8-based)
SyntaxError: '' string literal contains an unescaped line break (Firefox)
SyntaxError: Unexpected EOF (Safari)
```

## Error type

## What went wrong?

There is an unterminated string literal somewhere. String literals must be enclosed by single (') or double (") quotes. JavaScript makes no distinction between single-quoted strings and double-quoted strings. Escape sequences work in strings created with either single or double quotes. To fix this error, check if:

- you have opening and closing quotes (single or double) for your string literal,
- you have escaped your string literal correctly,
- your string literal isn't split across multiple lines.

## Examples

### Multiple lines

You can't split a string across multiple lines like this in JavaScript:

```
const longString = "This is a very long string which needs
                    to wrap across multiple lines because
                    otherwise my code is unreadable.";
// SyntaxError: unterminated string literal
```

Instead, use the + operator, a backslash, or template literals. The + operator variant looks like this:

```
const longString =
  "This is a very long string which needs " +
  "to wrap across multiple lines because " +
  "otherwise my code is unreadable.";
```

Or you can use the backslash character ("\") at the end of each line to indicate that the string will continue on the next line. Make sure there is no space or any other character after the backslash (except for a line break), or as an indent; otherwise it will not work. That form looks like this:

```
const longString =
  "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.";
```

Another possibility is to use template literals.

```
const longString = `This is a very long string which needs 
to wrap across multiple lines because 
otherwise my code is unreadable.`;
```

## See also

- string literal
- Template literals

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/String_literal_EOL
