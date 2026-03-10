# The mysqli_driver class

Source: https://devdocs.io/php/class.mysqli-driver

## Introduction

(PHP 5, PHP 7, PHP 8)

The mysqli_driver class is an instance of the monostate pattern, i.e. there is only one driver which can be accessed though an arbitrary amount of mysqli_driver instances.

## Class synopsis

## Properties

The Client API header version

The Client version

The MySQLi Driver version

This property has been deprecated as of PHP 8.1.0. Relying on this property is highly discouraged.

Whether MySQLi Embedded support is enabled

This property has been removed as of PHP 8.0.0.

Allow or prevent reconnect (see the mysqli.reconnect INI directive)

This property has been removed along with the mysqli.reconnect INI directive as of PHP 8.2.0.

Set to MYSQLI_REPORT_OFF, MYSQLI_REPORT_ALL or any combination of MYSQLI_REPORT_STRICT (throw Exceptions for errors), MYSQLI_REPORT_ERROR (report errors) and MYSQLI_REPORT_INDEX (errors regarding indexes). See also mysqli_report().

## Changelog

## Table of Contents

- mysqli_driver::embedded_server_end — Stop embedded server
- mysqli_driver::embedded_server_start — Initialize and start embedded server
- mysqli_driver::$report_mode — Sets mysqli error reporting mode

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.mysqli-driver.php
