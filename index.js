function updateObjectWithKeyAndValue(object, key, value){
  //object[key]= value;
  var newObj = Object.assign({object}, {[key]: value } );
  return newObj;
  //return object;
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object [key]=value;
  return object;
}
function deleteFromObjectByKey(object, key){
  //var newObj = object.assign ({object}, object);
  delete newObj.key;

}
function destructivelyDeleteFromObjectByKey(object, key){
  //var newObj = object.assign ({object}, object)
  //delete newObj.key;
  return object;
}
