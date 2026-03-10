# The DOMElement class

Source: https://devdocs.io/php/class.domelement

## Class synopsis

(PHP 5, PHP 7, PHP 8)

```
public after(DOMNode|string ...$nodes): void
```

```
public append(DOMNode|string ...$nodes): void
```

```
public before(DOMNode|string ...$nodes): void
```

```
public getAttribute(string $qualifiedName): string
```

```
public getAttributeNames(): array
```

```
public getAttributeNode(string $qualifiedName): DOMAttr|DOMNameSpaceNode|false
```

```
public getAttributeNodeNS(?string $namespace, string $localName): DOMAttr|DOMNameSpaceNode|null
```

```
public getAttributeNS(?string $namespace, string $localName): string
```

```
public getElementsByTagName(string $qualifiedName): DOMNodeList
```

```
public getElementsByTagNameNS(?string $namespace, string $localName): DOMNodeList
```

```
public hasAttribute(string $qualifiedName): bool
```

```
public hasAttributeNS(?string $namespace, string $localName): bool
```

```
public insertAdjacentElement(string $where, DOMElement $element): ?DOMElement
```

```
public insertAdjacentText(string $where, string $data): void
```

```
public prepend(DOMNode|string ...$nodes): void
```

```
public remove(): void
```

```
public removeAttribute(string $qualifiedName): bool
```

```
public removeAttributeNode(DOMAttr $attr): DOMAttr|false
```

```
public removeAttributeNS(?string $namespace, string $localName): void
```

```
public replaceChildren(DOMNode|string ...$nodes): void
```

```
public replaceWith(DOMNode|string ...$nodes): void
```

```
public setAttribute(string $qualifiedName, string $value): DOMAttr|bool
```

```
public setAttributeNode(DOMAttr $attr): DOMAttr|null|false
```

```
public setAttributeNodeNS(DOMAttr $attr): DOMAttr|null|false
```

```
public setAttributeNS(?string $namespace, string $qualifiedName, string $value): void
```

```
public setIdAttribute(string $qualifiedName, bool $isId): void
```

```
public setIdAttributeNode(DOMAttr $attr, bool $isId): void
```

```
public setIdAttributeNS(string $namespace, string $qualifiedName, bool $isId): void
```

```
public toggleAttribute(string $qualifiedName, ?bool $force = null): bool
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

The number of child elements.

First child element or null.

Last child element or null.

The next sibling element or null.

The previous sibling element or null.

Not implemented yet, always return null

The element name

A string representing the classes of the element separated by spaces.

Reflects the element ID through the "id" attribute.

## Changelog

## Notes

Note:

The DOM extension uses UTF-8 encoding. Use mb_convert_encoding(), UConverter::transcode(), or iconv() to handle other encodings.

## Table of Contents

- DOMElement::after — Adds nodes after the element
- DOMElement::append — Appends nodes after the last child node
- DOMElement::before — Adds nodes before the element
- DOMElement::__construct — Creates a new DOMElement object
- DOMElement::getAttribute — Returns value of attribute
- DOMElement::getAttributeNames — Get attribute names
- DOMElement::getAttributeNode — Returns attribute node
- DOMElement::getAttributeNodeNS — Returns attribute node
- DOMElement::getAttributeNS — Returns value of attribute
- DOMElement::getElementsByTagName — Gets elements by tagname
- DOMElement::getElementsByTagNameNS — Get elements by namespaceURI and localName
- DOMElement::hasAttribute — Checks to see if attribute exists
- DOMElement::hasAttributeNS — Checks to see if attribute exists
- DOMElement::insertAdjacentElement — Insert adjacent element
- DOMElement::insertAdjacentText — Insert adjacent text
- DOMElement::prepend — Prepends nodes before the first child node
- DOMElement::remove — Removes the element
- DOMElement::removeAttribute — Removes attribute
- DOMElement::removeAttributeNode — Removes attribute
- DOMElement::removeAttributeNS — Removes attribute
- DOMElement::replaceChildren — Replace children in element
- DOMElement::replaceWith — Replaces the element with new nodes
- DOMElement::setAttribute — Adds new or modifies existing attribute
- DOMElement::setAttributeNode — Adds new attribute node to element
- DOMElement::setAttributeNodeNS — Adds new attribute node to element
- DOMElement::setAttributeNS — Adds new attribute
- DOMElement::setIdAttribute — Declares the attribute specified by name to be of type ID
- DOMElement::setIdAttributeNode — Declares the attribute specified by node to be of type ID
- DOMElement::setIdAttributeNS — Declares the attribute specified by local name and namespace URI to be of type ID
- DOMElement::toggleAttribute — Toggle attribute

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.domelement.php
