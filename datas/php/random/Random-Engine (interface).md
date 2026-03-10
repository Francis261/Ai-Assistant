# The Random\Engine interface

Source: https://devdocs.io/php/class.random-engine

## Introduction

(PHP 8 >= 8.2.0)

A Random\Engine provides a low-level source of randomness by returning random bytes that are consumed by high-level APIs to perform their operations. The Random\Engine interface allows swapping out the algorithm used to generate randomness, because each algorithm makes different tradeoffs to fit specific use-cases. Some algorithms are very fast, but generate lower-quality randomness, whereas other algorithms are slower, but generate better randomness, up to cryptographically secure randomness as provided by the Random\Engine\Secure engine.

PHP provides several Random\Engines out of the box to accomodate different use-cases. The Random\Engine\Secure engine that is backed by a CSPRNG is the recommended safe default choice, unless the application requires either reproducible sequences or very high performance.

## Interface synopsis

```
public generate(): string
```

## Table of Contents

- Random\Engine::generate — Generates randomness

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.random-engine.php
