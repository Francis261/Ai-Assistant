# The SensitiveParameterValue class

Source: https://devdocs.io/php/class.sensitiveparametervalue

## Introduction

(PHP 8 >= 8.2.0)

The SensitiveParameterValue class allows wrapping sensitive values to protect them against accidental exposure.

Values of parameters having the SensitiveParameter attribute will automatically be wrapped inside of a SensitiveParameterValue object within stack traces.

## Class synopsis

```
public __debugInfo(): array
```

```
public getValue(): mixed
```

## Properties

The sensitive value to be protected against accidental exposure.

## Table of Contents

- SensitiveParameterValue::__construct — Constructs a new SensitiveParameterValue object
- SensitiveParameterValue::__debugInfo — Protects the sensitive value against accidental exposure
- SensitiveParameterValue::getValue — Returns the sensitive value

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.sensitiveparametervalue.php
