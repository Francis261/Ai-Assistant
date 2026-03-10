# The Generator class

Source: https://devdocs.io/php/class.generator

## Introduction

(PHP 5 >= 5.5.0, PHP 7, PHP 8)

Generator objects are returned from generators.

Generator objects cannot be instantiated via new.

## Class synopsis

```
public current(): mixed
```

```
public getReturn(): mixed
```

```
public key(): mixed
```

```
public next(): void
```

```
public rewind(): void
```

```
public send(mixed $value): mixed
```

```
public throw(Throwable $exception): mixed
```

```
public valid(): bool
```

```
public __wakeup(): void
```

## See Also

See also object iteration.

## Table of Contents

- Generator::current — Get the yielded value
- Generator::getReturn — Get the return value of a generator
- Generator::key — Get the yielded key
- Generator::next — Resume execution of the generator
- Generator::rewind — Rewind the generator to the first yield
- Generator::send — Send a value to the generator
- Generator::throw — Throw an exception into the generator
- Generator::valid — Check if the iterator has been closed
- Generator::__wakeup — Serialize callback

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.generator.php
