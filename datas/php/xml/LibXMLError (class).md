# The LibXMLError class

Source: https://devdocs.io/php/class.libxmlerror

## Introduction

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

Contains various information about errors thrown by libxml. The error codes are described within the official » xmlError API documentation.

## Class synopsis

## Properties

the severity of the error (one of the following constants: LIBXML_ERR_WARNING, LIBXML_ERR_ERROR or LIBXML_ERR_FATAL)

The error's code.

The column where the error occurred.

Note:

This property isn't entirely implemented in libxml and therefore 0 is often returned.

The error message, if any.

The filename, or empty if the XML was loaded from a string.

The line where the error occurred.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.libxmlerror.php
