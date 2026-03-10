# The SplStack class

Source: https://devdocs.io/php/class.splstack

## Introduction

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

The SplStack class provides the main functionalities of a stack implemented using a doubly linked list by setting the iterator mode to SplDoublyLinkedList::IT_MODE_LIFO.

## Class synopsis

```
public SplDoublyLinkedList::add(int $index, mixed $value): void
```

```
public SplDoublyLinkedList::bottom(): mixed
```

```
public SplDoublyLinkedList::count(): int
```

```
public SplDoublyLinkedList::current(): mixed
```

```
public SplDoublyLinkedList::getIteratorMode(): int
```

```
public SplDoublyLinkedList::isEmpty(): bool
```

```
public SplDoublyLinkedList::key(): int
```

```
public SplDoublyLinkedList::next(): void
```

```
public SplDoublyLinkedList::offsetExists(int $index): bool
```

```
public SplDoublyLinkedList::offsetGet(int $index): mixed
```

```
public SplDoublyLinkedList::offsetSet(?int $index, mixed $value): void
```

```
public SplDoublyLinkedList::offsetUnset(int $index): void
```

```
public SplDoublyLinkedList::pop(): mixed
```

```
public SplDoublyLinkedList::prev(): void
```

```
public SplDoublyLinkedList::push(mixed $value): void
```

```
public SplDoublyLinkedList::rewind(): void
```

```
public SplDoublyLinkedList::serialize(): string
```

```
public SplDoublyLinkedList::setIteratorMode(int $mode): int
```

```
public SplDoublyLinkedList::shift(): mixed
```

```
public SplDoublyLinkedList::top(): mixed
```

```
public SplDoublyLinkedList::unserialize(string $data): void
```

```
public SplDoublyLinkedList::unshift(mixed $value): void
```

```
public SplDoublyLinkedList::valid(): bool
```

## Examples

Example #1 SplStack example

```
<?php
$q = new SplStack();
$q[] = 1;
$q[] = 2;
$q[] = 3;
foreach ($q as $elem)  {
 echo $elem."\n";
}
?>
```

The above example will output:

```
3
2
1
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.splstack.php
