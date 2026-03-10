# The XMLReader class

Source: https://devdocs.io/php/class.xmlreader

## Introduction

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

The XMLReader extension is an XML Pull parser. The reader acts as a cursor going forward on the document stream and stopping at each node on the way.

## Class synopsis

```
public close(): true
```

```
public expand(?DOMNode $baseNode = null): DOMNode|false
```

```
public static fromStream(
 resource $stream,
 ?string $encoding = null,
 int $flags = 0,
 ?string $documentUri = null
): static
```

```
public static fromString(string $source, ?string $encoding = null, int $flags = 0): static
```

```
public static fromUri(string $uri, ?string $encoding = null, int $flags = 0): static
```

```
public getAttribute(string $name): ?string
```

```
public getAttributeNo(int $index): ?string
```

```
public getAttributeNs(string $name, string $namespace): ?string
```

```
public getParserProperty(int $property): bool
```

```
public isValid(): bool
```

```
public lookupNamespace(string $prefix): ?string
```

```
public moveToAttribute(string $name): bool
```

```
public moveToAttributeNo(int $index): bool
```

```
public moveToAttributeNs(string $name, string $namespace): bool
```

```
public moveToElement(): bool
```

```
public moveToFirstAttribute(): bool
```

```
public moveToNextAttribute(): bool
```

```
public next(?string $name = null): bool
```

```
public static open(string $uri, ?string $encoding = null, int $flags = 0): XMLReader
```

```
public open(string $uri, ?string $encoding = null, int $flags = 0): bool
```

```
public read(): bool
```

```
public readInnerXml(): string
```

```
public readOuterXml(): string
```

```
public readString(): string
```

```
public setParserProperty(int $property, bool $value): bool
```

```
public setRelaxNGSchema(?string $filename): bool
```

```
public setRelaxNGSchemaSource(?string $source): bool
```

```
public setSchema(?string $filename): bool
```

```
public static XML(string $source, ?string $encoding = null, int $flags = 0): XMLReader
```

```
public XML(string $source, ?string $encoding = null, int $flags = 0): bool
```

## Properties

The number of attributes on the node

The base URI of the node

Depth of the node in the tree, starting at 0

Indicates if node has attributes

Indicates if node has a text value

Indicates if attribute is defaulted from DTD

Indicates if node is an empty element tag

The local name of the node

The qualified name of the node

The URI of the namespace associated with the node

The node type for the node

The prefix of the namespace associated with the node

The text value of the node

The xml:lang scope which the node resides

## Predefined Constants

## XMLReader Node Types

No node type

Start element

Attribute node

Text node

CDATA node

Entity Reference node

Entity Declaration node

Processing Instruction node

Comment node

Document node

Document Type node

Document Fragment node

Notation node

Whitespace node

Significant Whitespace node

End Element

End Entity

XML Declaration node

## XMLReader Parser Options

Load DTD but do not validate

Load DTD and default attributes but do not validate

Load DTD and validate while parsing

Substitute entities and expand references

## Changelog

## Table of Contents

- XMLReader::close — Close the XMLReader input
- XMLReader::expand — Returns a copy of the current node as a DOM object
- XMLReader::fromStream — Creates an XMLReader from a stream to read from
- XMLReader::fromString — Creates an XMLReader from an XML string
- XMLReader::fromUri — Creates an XMLReader from a URI to read from
- XMLReader::getAttribute — Get the value of a named attribute
- XMLReader::getAttributeNo — Get the value of an attribute by index
- XMLReader::getAttributeNs — Get the value of an attribute by localname and URI
- XMLReader::getParserProperty — Indicates if specified property has been set
- XMLReader::isValid — Indicates if the parsed document is valid
- XMLReader::lookupNamespace — Lookup namespace for a prefix
- XMLReader::moveToAttribute — Move cursor to a named attribute
- XMLReader::moveToAttributeNo — Move cursor to an attribute by index
- XMLReader::moveToAttributeNs — Move cursor to a named attribute
- XMLReader::moveToElement — Position cursor on the parent Element of current Attribute
- XMLReader::moveToFirstAttribute — Position cursor on the first Attribute
- XMLReader::moveToNextAttribute — Position cursor on the next Attribute
- XMLReader::next — Move cursor to next node skipping all subtrees
- XMLReader::open — Set the URI containing the XML to parse
- XMLReader::read — Move to next node in document
- XMLReader::readInnerXml — Retrieve XML from current node
- XMLReader::readOuterXml — Retrieve XML from current node, including itself
- XMLReader::readString — Reads the contents of the current node as a string
- XMLReader::setParserProperty — Set parser options
- XMLReader::setRelaxNGSchema — Set the filename or URI for a RelaxNG Schema
- XMLReader::setRelaxNGSchemaSource — Set the data containing a RelaxNG Schema
- XMLReader::setSchema — Validate document against XSD
- XMLReader::XML — Set the data containing the XML to parse

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.xmlreader.php
