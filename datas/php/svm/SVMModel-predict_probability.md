# SVMModel::predict_probability

Source: https://devdocs.io/php/svmmodel.predict-probability

(PECL svm >= 0.1.4)

SVMModel::predict_probability — Return class probabilities for previous unseen data

### Description

```
public SVMModel::predict_probability(array $data): float
```

This function accepts an array of data and attempts to predict the class, as with the predict function. Additionally, however, this function returns an array of probabilities, one per class in the model, which represent the estimated chance of the data supplied being a member of that class. Requires that the model to be used has been trained with the probability parameter set to true.

### Parameters

The array to be classified. This should be a series of key => value pairs in increasing key order, but not necessarily continuous.

The supplied value will be filled with the probabilities. This will be either null, in the case of a model without probability information, or an array where the index is the class name and the value the predicted probability.

### Return Values

Float the predicted value. This will be a class label in the case of classification, a real value in the case of regression. Throws SVMException on error

### See Also

- SVM::predict()

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/svmmodel.predict-probability.php
