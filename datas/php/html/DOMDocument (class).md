# The DOMDocument class

Source: https://devdocs.io/php/class.domdocument

## Introduction

(PHP 5, PHP 7, PHP 8)

Represents an entire HTML or XML document; serves as the root of the document tree.

## Class synopsis

```
public adoptNode(DOMNode $node): DOMNode|false
```

```
public append(DOMNode|string ...$nodes): void
```

```
public createAttribute(string $localName): DOMAttr|false
```

```
public createAttributeNS(?string $namespace, string $qualifiedName): DOMAttr|false
```

```
public createCDATASection(string $data): DOMCdataSection|false
```

```
public createComment(string $data): DOMComment
```

```
public createDocumentFragment(): DOMDocumentFragment
```

```
public createElement(string $localName, string $value = ""): DOMElement|false
```

```
public createElementNS(?string $namespace, string $qualifiedName, string $value = ""): DOMElement|false
```

```
public createEntityReference(string $name): DOMEntityReference|false
```

```
public createProcessingInstruction(string $target, string $data = ""): DOMProcessingInstruction|false
```

```
public createTextNode(string $data): DOMText
```

```
public getElementById(string $elementId): ?DOMElement
```

```
public getElementsByTagName(string $qualifiedName): DOMNodeList
```

```
public getElementsByTagNameNS(?string $namespace, string $localName): DOMNodeList
```

```
public importNode(DOMNode $node, bool $deep = false): DOMNode|false
```

```
public load(string $filename, int $options = 0): bool
```

```
public loadHTML(string $source, int $options = 0): bool
```

```
public loadHTMLFile(string $filename, int $options = 0): bool
```

```
public loadXML(string $source, int $options = 0): bool
```

```
public normalizeDocument(): void
```

```
public prepend(DOMNode|string ...$nodes): void
```

```
public registerNodeClass(string $baseClass, ?string $extendedClass): true
```

```
public relaxNGValidate(string $filename): bool
```

```
public relaxNGValidateSource(string $source): bool
```

```
public replaceChildren(DOMNode|string ...$nodes): void
```

```
public save(string $filename, int $options = 0): int|false
```

```
public saveHTML(?DOMNode $node = null): string|false
```

```
public saveHTMLFile(string $filename): int|false
```

```
public saveXML(?DOMNode $node = null, int $options = 0): string|false
```

```
public schemaValidate(string $filename, int $flags = 0): bool
```

```
public schemaValidateSource(string $source, int $flags = 0): bool
```

```
public validate(): bool
```

```
public xinclude(int $options = 0): int|false
```

```
public DOMNode::appendChild(DOMNode $node): DOMNode|false
```

```
public DOMNode::C14N(
 bool $exclusive = false,
 bool $withComments = false,
 ?array $xpath = null,
 ?array $nsPrefixes = null
): string|false
```

```
public DOMNode::C14NFile(
 string $uri,
 bool $exclusive = false,
 bool $withComments = false,
 ?array $xpath = null,
 ?array $nsPrefixes = null
): int|false
```

```
public DOMNode::cloneNode(bool $deep = false): DOMNode|false
```

```
public DOMNode::compareDocumentPosition(DOMNode $other): int
```

```
public DOMNode::contains(DOMNode|DOMNameSpaceNode|null $other): bool
```

```
public DOMNode::getLineNo(): int
```

```
public DOMNode::getNodePath(): ?string
```

```
public DOMNode::getRootNode(?array $options = null): DOMNode
```

```
public DOMNode::hasAttributes(): bool
```

```
public DOMNode::hasChildNodes(): bool
```

```
public DOMNode::insertBefore(DOMNode $node, ?DOMNode $child = null): DOMNode|false
```

```
public DOMNode::isDefaultNamespace(string $namespace): bool
```

```
public DOMNode::isEqualNode(?DOMNode $otherNode): bool
```

```
public DOMNode::isSameNode(DOMNode $otherNode): bool
```

```
public DOMNode::isSupported(string $feature, string $version): bool
```

```
public DOMNode::lookupNamespaceURI(?string $prefix): ?string
```

```
public DOMNode::lookupPrefix(string $namespace): ?string
```

```
public DOMNode::normalize(): void
```

```
public DOMNode::removeChild(DOMNode $child): DOMNode|false
```

```
public DOMNode::replaceChild(DOMNode $node, DOMNode $child): DOMNode|false
```

```
public DOMNode::__sleep(): array
```

```
public DOMNode::__wakeup(): void
```

## Properties

Deprecated as of PHP 8.4.0. Actual encoding of the document, is a readonly equivalent to encoding.

The number of child elements.

Deprecated as of PHP 8.4.0. Configuration used when DOMDocument::normalizeDocument() is invoked.

The Document Type Declaration associated with this document.

The DOMElement object that is the first document element. If not found, this evaluates to null.

The location of the document or null if undefined.

Encoding of the document, as specified by the XML declaration. This attribute is not present in the final DOM Level 3 specification, but is the only way of manipulating XML document encoding in this implementation.

First child element or null.

Nicely formats output with indentation and extra space. This has no effect if the document was loaded with preserveWhitespace enabled.

The DOMImplementation object that handles this document.

Last child element or null.

Do not remove redundant white space. Default to true. Setting this to false has the same effect as passing LIBXML_NOBLANKS as option to DOMDocument::load() etc.

Proprietary. Enables recovery mode, i.e. trying to parse non-well formed documents. This attribute is not part of the DOM specification and is specific to libxml.

Set it to true to load external entities from a doctype declaration. This is useful for including character entities in your XML document.

Deprecated. Whether or not the document is standalone, as specified by the XML declaration, corresponds to xmlStandalone.

Throws DOMException on errors. Default to true.

Proprietary. Whether or not to substitute entities. This attribute is not part of the DOM specification and is specific to libxml. Default to false.

Enabling entity substitution may facilitate XML External Entity (XXE) attacks.

Loads and validates against the DTD. Default to false.

Enabling validating the DTD may facilitate XML External Entity (XXE) attacks.

Deprecated. Version of XML, corresponds to xmlVersion.

An attribute specifying, as part of the XML declaration, the encoding of this document. This is null when unspecified or when it is not known, such as when the Document was created in memory.

An attribute specifying, as part of the XML declaration, whether this document is standalone. This is false when unspecified. A standalone document is one where there are no external markup declarations. An example of such a markup declaration is when the DTD declares an attribute with a default value.

An attribute specifying, as part of the XML declaration, the version number of this document. If there is no declaration and if this document supports the "XML" feature, the value is "1.0".

## Changelog

## Notes

Note:

The DOM extension uses UTF-8 encoding. Use mb_convert_encoding(), UConverter::transcode(), or iconv() to handle other encodings.

Note:

When using json_encode() on a DOMDocument object the result will be that of encoding an empty object.

## See Also

- » W3C specification for Document

## Table of Contents

- DOMDocument::adoptNode — Transfer a node from another document
- DOMDocument::append — Appends nodes after the last child node
- DOMDocument::__construct — Creates a new DOMDocument object
- DOMDocument::createAttribute — Create new attribute
- DOMDocument::createAttributeNS — Create new attribute node with an associated namespace
- DOMDocument::createCDATASection — Create new cdata node
- DOMDocument::createComment — Create new comment node
- DOMDocument::createDocumentFragment — Create new document fragment
- DOMDocument::createElement — Create new element node
- DOMDocument::createElementNS — Create new element node with an associated namespace
- DOMDocument::createEntityReference — Create new entity reference node
- DOMDocument::createProcessingInstruction — Creates new PI node
- DOMDocument::createTextNode — Create new text node
- DOMDocument::getElementById — Searches for an element with a certain id
- DOMDocument::getElementsByTagName — Searches for all elements with given local tag name
- DOMDocument::getElementsByTagNameNS — Searches for all elements with given tag name in specified namespace
- DOMDocument::importNode — Import node into current document
- DOMDocument::load — Load XML from a file
- DOMDocument::loadHTML — Load HTML from a string
- DOMDocument::loadHTMLFile — Load HTML from a file
- DOMDocument::loadXML — Load XML from a string
- DOMDocument::normalizeDocument — Normalizes the document
- DOMDocument::prepend — Prepends nodes before the first child node
- DOMDocument::registerNodeClass — Register extended class used to create base node type
- DOMDocument::relaxNGValidate — Performs relaxNG validation on the document
- DOMDocument::relaxNGValidateSource — Performs relaxNG validation on the document
- DOMDocument::replaceChildren — Replace children in document
- DOMDocument::save — Dumps the internal XML tree back into a file
- DOMDocument::saveHTML — Dumps the internal document into a string using HTML formatting
- DOMDocument::saveHTMLFile — Dumps the internal document into a file using HTML formatting
- DOMDocument::saveXML — Dumps the internal XML tree back into a string
- DOMDocument::schemaValidate — Validates a document based on a schema. Only XML Schema 1.0 is supported.
- DOMDocument::schemaValidateSource — Validates a document based on a schema
- DOMDocument::validate — Validates the document based on its DTD
- DOMDocument::xinclude — Substitutes XIncludes in a DOMDocument Object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.domdocument.php
