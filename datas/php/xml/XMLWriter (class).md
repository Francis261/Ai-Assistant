# The XMLWriter class

Source: https://devdocs.io/php/class.xmlwriter

## Introduction

(PHP 5 >= 5.1.2, PHP 7, PHP 8, PECL xmlwriter >= 0.1.0)

## Class synopsis

```
public endAttribute(): bool
```

```
public endCdata(): bool
```

```
public endComment(): bool
```

```
public endDocument(): bool
```

```
public endDtd(): bool
```

```
public endDtdAttlist(): bool
```

```
public endDtdElement(): bool
```

```
public endDtdEntity(): bool
```

```
public endElement(): bool
```

```
public endPi(): bool
```

```
public flush(bool $empty = true): string|int
```

```
public fullEndElement(): bool
```

```
public openMemory(): bool
```

```
public openUri(string $uri): bool
```

```
public outputMemory(bool $flush = true): string
```

```
public setIndent(bool $enable): bool
```

```
public setIndentString(string $indentation): bool
```

```
public startAttribute(string $name): bool
```

```
public startAttributeNs(?string $prefix, string $name, ?string $namespace): bool
```

```
public startCdata(): bool
```

```
public startComment(): bool
```

```
public startDocument(?string $version = "1.0", ?string $encoding = null, ?string $standalone = null): bool
```

```
public startDtd(string $qualifiedName, ?string $publicId = null, ?string $systemId = null): bool
```

```
public startDtdAttlist(string $name): bool
```

```
public startDtdElement(string $qualifiedName): bool
```

```
public startDtdEntity(string $name, bool $isParam): bool
```

```
public startElement(string $name): bool
```

```
public startElementNs(?string $prefix, string $name, ?string $namespace): bool
```

```
public startPi(string $target): bool
```

```
public text(string $content): bool
```

```
public static toMemory(): static
```

```
public static toStream(resource $stream): static
```

```
public static toUri(string $uri): static
```

```
public writeAttribute(string $name, string $value): bool
```

```
public writeAttributeNs(
 ?string $prefix,
 string $name,
 ?string $namespace,
 string $value
): bool
```

```
public writeCdata(string $content): bool
```

```
public writeComment(string $content): bool
```

```
public writeDtd(
 string $name,
 ?string $publicId = null,
 ?string $systemId = null,
 ?string $content = null
): bool
```

```
public writeDtdAttlist(string $name, string $content): bool
```

```
public writeDtdElement(string $name, string $content): bool
```

```
public writeDtdEntity(
 string $name,
 string $content,
 bool $isParam = false,
 ?string $publicId = null,
 ?string $systemId = null,
 ?string $notationData = null
): bool
```

```
public writeElement(string $name, ?string $content = null): bool
```

```
public writeElementNs(
 ?string $prefix,
 string $name,
 ?string $namespace,
 ?string $content = null
): bool
```

```
public writePi(string $target, string $content): bool
```

```
public writeRaw(string $content): bool
```

## Table of Contents

- XMLWriter::endAttribute — End attribute
- XMLWriter::endCdata — End current CDATA
- XMLWriter::endComment — Create end comment
- XMLWriter::endDocument — End current document
- XMLWriter::endDtd — End current DTD
- XMLWriter::endDtdAttlist — End current DTD AttList
- XMLWriter::endDtdElement — End current DTD element
- XMLWriter::endDtdEntity — End current DTD Entity
- XMLWriter::endElement — End current element
- XMLWriter::endPi — End current PI
- XMLWriter::flush — Flush current buffer
- XMLWriter::fullEndElement — End current element
- XMLWriter::openMemory — Create new xmlwriter using memory for string output
- XMLWriter::openUri — Create new xmlwriter using source uri for output
- XMLWriter::outputMemory — Returns current buffer
- XMLWriter::setIndent — Toggle indentation on/off
- XMLWriter::setIndentString — Set string used for indenting
- XMLWriter::startAttribute — Create start attribute
- XMLWriter::startAttributeNs — Create start namespaced attribute
- XMLWriter::startCdata — Create start CDATA tag
- XMLWriter::startComment — Create start comment
- XMLWriter::startDocument — Create document tag
- XMLWriter::startDtd — Create start DTD tag
- XMLWriter::startDtdAttlist — Create start DTD AttList
- XMLWriter::startDtdElement — Create start DTD element
- XMLWriter::startDtdEntity — Create start DTD Entity
- XMLWriter::startElement — Create start element tag
- XMLWriter::startElementNs — Create start namespaced element tag
- XMLWriter::startPi — Create start PI tag
- XMLWriter::text — Write text
- XMLWriter::toMemory — Create new XMLWriter using memory for string output
- XMLWriter::toStream — Create new XMLWriter using a stream for output
- XMLWriter::toUri — Create new XMLWriter using a URI for output
- XMLWriter::writeAttribute — Write full attribute
- XMLWriter::writeAttributeNs — Write full namespaced attribute
- XMLWriter::writeCdata — Write full CDATA tag
- XMLWriter::writeComment — Write full comment tag
- XMLWriter::writeDtd — Write full DTD tag
- XMLWriter::writeDtdAttlist — Write full DTD AttList tag
- XMLWriter::writeDtdElement — Write full DTD element tag
- XMLWriter::writeDtdEntity — Write full DTD Entity tag
- XMLWriter::writeElement — Write full element tag
- XMLWriter::writeElementNs — Write full namespaced element tag
- XMLWriter::writePi — Writes a PI
- XMLWriter::writeRaw — Write a raw XML text

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.xmlwriter.php
