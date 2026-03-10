# The SVM class

Source: https://devdocs.io/php/class.svm

## Introduction

(PECL svm >= 0.1.0)

## Class synopsis

```
public svm::crossvalidate(array $problem, int $number_of_folds): float
```

```
public getOptions(): array
```

```
public setOptions(array $params): bool
```

```
public svm::train(array $problem, array $weights = ?): SVMModel
```

## Predefined Constants

## SVM Constants

The basic C_SVC SVM type. The default, and a good starting point

The NU_SVC type uses a different, more flexible, error weighting

One class SVM type. Train just on a single class, using outliers as negative examples

A SVM type for regression (predicting a value rather than just a class)

A NU style SVM regression type

A very simple kernel, can work well on large document classification problems

A polynomial kernel

The common Gaussian RBD kernel. Handles non-linear problems well and is a good default for classification

A kernel based on the sigmoid function. Using this makes the SVM very similar to a two layer sigmoid based neural network

A precomputed kernel - currently unsupported.

The options key for the SVM type

The options key for the kernel type

Training parameter, boolean, for whether to use the shrinking heuristics

Training parameter, boolean, for whether to collect and use probability estimates

Algorithm parameter for Poly, RBF and Sigmoid kernel types.

The option key for the nu parameter, only used in the NU_ SVM types

The option key for the Epsilon parameter, used in epsilon regression

Training parameter used by Episilon SVR regression

Algorithm parameter for poly and sigmoid kernels

The option for the cost parameter that controls tradeoff between errors and generality - effectively the penalty for misclassifying training examples.

Memory cache size, in MB

## Table of Contents

- SVM::__construct — Construct a new SVM object
- SVM::crossvalidate — Test training params on subsets of the training data
- SVM::getOptions — Return the current training parameters
- SVM::setOptions — Set training parameters
- SVM::train — Create a SVMModel based on training data

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.svm.php
