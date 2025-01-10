```javascript
function findDocuments(array) {
  if (array.length === 0) {
    // Handle empty array case
    return db.collection.find({}); // Returns all documents
  } else {
    return db.collection.find({ field: { $in: array } });
  }
}
```