# The Random\Engine\PcgOneseq128XslRr64 class

Source: https://devdocs.io/php/class.random-engine-pcgoneseq128xslrr64

## Introduction

(PHP 8 >= 8.2.0)

Implements a » Permuted congruential generator (PCG) with 128 bits of state, XSL and RR output transformations, and 64 bits of output.

## Class synopsis

```
public __debugInfo(): array
```

```
public generate(): string
```

```
public jump(int $advance): void
```

```
public __serialize(): array
```

```
public __unserialize(array $data): void
```

## Table of Contents

- Random\Engine\PcgOneseq128XslRr64::__construct — Constructs a new PCG Oneseq 128 XSL RR 64 engine
- Random\Engine\PcgOneseq128XslRr64::__debugInfo — Returns the internal state of the engine
- Random\Engine\PcgOneseq128XslRr64::generate — Generate 64 bits of randomness
- Random\Engine\PcgOneseq128XslRr64::jump — Efficiently move the engine ahead multiple steps
- Random\Engine\PcgOneseq128XslRr64::__serialize — Serializes the PcgOneseq128XslRr64 object
- Random\Engine\PcgOneseq128XslRr64::__unserialize — Deserializes the data parameter into a PcgOneseq128XslRr64 object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.random-engine-pcgoneseq128xslrr64.php
