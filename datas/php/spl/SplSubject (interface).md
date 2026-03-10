# The SplSubject interface

Source: https://devdocs.io/php/class.splsubject

## Introduction

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

The SplSubject interface is used alongside SplObserver to implement the Observer Design Pattern.

## Interface synopsis

```
public attach(SplObserver $observer): void
```

```
public detach(SplObserver $observer): void
```

```
public notify(): void
```

## Table of Contents

- SplSubject::attach — Attach an SplObserver
- SplSubject::detach — Detach an observer
- SplSubject::notify — Notify an observer

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.splsubject.php
