# Incorrect Usage of $inc Operator in MongoDB Update Operation
This repository demonstrates a common error when using the `$inc` operator in MongoDB update operations.  The `$inc` operator is designed to increment numeric fields. Attempting to increment a field with a non-numeric value will result in an error.

## Bug Description
The provided code snippet incorrectly uses the `$inc` operator with a non-numeric value ("incorrectValue") for the `field2` property.  This leads to a MongoDB error.

## Solution
The solution involves ensuring that only numeric values are passed to the `$inc` operator.  This ensures that the update operation functions as expected.
