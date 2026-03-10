# The Dom\DocumentType class

Source: https://devdocs.io/php/class.dom-documenttype

## Introduction

(PHP 8 >= 8.4.0)

Each Dom\Document has a doctype attribute whose value is either null or a Dom\DocumentType object.

This is the modern, spec-compliant equivalent of DOMImplementation.

## Class synopsis

## Properties

The public identifier of the external subset.

The system identifier of the external subset. This may be an absolute URI or not.

The name of DTD; i.e., the name immediately following the DOCTYPE keyword.

The internal subset as a string, or null if there is none. This does not contain the delimiting square brackets.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.dom-documenttype.php
