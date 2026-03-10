# The Dom\Entity class

Source: https://devdocs.io/php/class.dom-entity

## Introduction

(PHP 8 >= 8.4.0)

This interface represents a known entity, either parsed or unparsed, in an XML document.

This is the modern, spec-compliant equivalent of DOMEntity.

## Class synopsis

## Properties

The public identifier associated with the entity if specified, and null otherwise.

The system identifier associated with the entity if specified, and null otherwise. This may be an absolute URI or not.

For unparsed entities, the name of the notation for the entity. For parsed entities, this is null.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.dom-entity.php
