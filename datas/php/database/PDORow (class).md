# The PDORow class

Source: https://devdocs.io/php/class.pdorow

## Introduction

(PHP 5 >= 5.1.0, PHP 7, PHP 8, PECL pdo >= 1.0.0)

Represents a row from a result set returned by PDOStatement::fetch() called with PDO::FETCH_LAZY fetch mode.

Objects of this class cannot be instantiated and are not serializable.

The PDORow object allows access to the returned data as if both PDO::FETCH_OBJ and PDO::FETCH_BOTH mode was used. This means that the returned data can be accessed as object properties, and as an array both indexed by the column name and a column offset number.

Accessing an undefined property returns null without emitting a warning.

## Class synopsis

## Properties

Query string used by the PDOStatement that returned the PDORow object.

## Errors/Exceptions

Throws an Error when trying to write to or unset() any property.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.pdorow.php
