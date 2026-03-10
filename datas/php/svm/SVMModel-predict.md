# SVMModel::predict

Source: https://devdocs.io/php/svmmodel.predict

(PECL svm >= 0.1.0)

SVMModel::predict — Predict a value for previously unseen data

### Description

```
public SVMModel::predict(array $data): float
```

This function accepts an array of data and attempts to predict the class or regression value based on the model extracted from previously trained data.

### Parameters

The array to be classified. This should be a series of key => value pairs in increasing key order, but not necessarily continuous.

### Return Values

Float the predicted value. This will be a class label in the case of classification, a real value in the case of regression. Throws SVMException on error

### See Also

- SVM::train() - Create a SVMModel based on training data

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/svmmodel.predict.php
