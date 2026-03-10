# The SVMModel class

Source: https://devdocs.io/php/class.svmmodel

## Introduction

(PECL svm >= 0.1.0)

The SVMModel is the end result of the training process. It can be used to classify previously unseen data.

## Class synopsis

```
public checkProbabilityModel(): bool
```

```
public getLabels(): array
```

```
public getNrClass(): int
```

```
public getSvmType(): int
```

```
public getSvrProbability(): float
```

```
public load(string $filename): bool
```

```
public predict(array $data): float
```

```
public predict_probability(array $data): float
```

```
public save(string $filename): bool
```

## Table of Contents

- SVMModel::checkProbabilityModel — Returns true if the model has probability information
- SVMModel::__construct — Construct a new SVMModel
- SVMModel::getLabels — Get the labels the model was trained on
- SVMModel::getNrClass — Returns the number of classes the model was trained with
- SVMModel::getSvmType — Get the SVM type the model was trained with
- SVMModel::getSvrProbability — Get the sigma value for regression types
- SVMModel::load — Load a saved SVM Model
- SVMModel::predict — Predict a value for previously unseen data
- SVMModel::predict_probability — Return class probabilities for previous unseen data
- SVMModel::save — Save a model to a file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.svmmodel.php
