```javascript
//Incorrect usage of $inc operator in MongoDB update operation
db.collection('myCollection').updateOne({"_id":ObjectId("651234567890")},{$inc:{field1:1,field2:"incorrectValue"}});
```