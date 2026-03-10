# The ImagickKernel class

Source: https://devdocs.io/php/class.imagickkernel

## Introduction

(PECL imagick >= 3.3.0)

## Class synopsis

```
public addKernel(ImagickKernel $ImagickKernel): void
```

```
public addUnityKernel(float $scale): void
```

```
public static fromBuiltin(int $kernelType, string $kernelString): ImagickKernel
```

```
public static fromMatrix(array $matrix, array $origin = ?): ImagickKernel
```

```
public getMatrix(): array
```

```
public scale(float $scale, int $normalizeFlag = ?): void
```

```
public separate(): array
```

## Table of Contents

- ImagickKernel::addKernel — Attach another kernel to a kernel list
- ImagickKernel::addUnityKernel — Adds a Unity Kernel to the kernel list
- ImagickKernel::fromBuiltIn — Create a kernel from a builtin in kernel
- ImagickKernel::fromMatrix — Create a kernel from a 2d matrix of values
- ImagickKernel::getMatrix — Get the 2d matrix of values used in this kernel
- ImagickKernel::scale — Scales a kernel list by the given amount
- ImagickKernel::separate — Separates a linked set of kernels and returns an array of ImagickKernels

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.imagickkernel.php
