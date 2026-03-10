# The ReturnTypeWillChange attribute

Source: https://devdocs.io/php/class.returntypewillchange

## Introduction

(PHP 8 >= 8.1.0)

Most non-final internal methods now require overriding methods to declare a compatible return type, otherwise a deprecated notice is emitted during inheritance validation. In case the return type cannot be declared for an overriding method due to PHP cross-version compatibility concerns, a #[\ReturnTypeWillChange] attribute can be added to silence the deprecation notice.

## Class synopsis

## See Also

Attributes overview

## Table of Contents

- ReturnTypeWillChange::__construct — Construct a new ReturnTypeWillChange attribute instance

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.returntypewillchange.php
