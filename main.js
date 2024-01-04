// YOUR CODE GOES HERE!!!
/*************************/
function getFirstName(obj){
  // for(let item of obj)
  return obj.firstName
} 
function getLastName(obj){
  return obj.lastName
}
function getFullName(obj){
  return obj.firstName + " " + obj.lastName
}
function setFirstName(obj, str){
  // if(name === "Michael"){
  //   obj.firstName = "Michael"
  // } else {
  //   obj.firstName = "Olivia"
  // }
  // if (pbj.firstName === "John"){
  //   pbj.firstName = "Michael"
  // } else {
  //   pbj.firstName = "Olivia"
  // }
  obj.firstName = str
  return obj
}
function setAge(obj, str){
  // if(pbj.firstName === "John"){
  //   pbj.age = 45
  // } else {
  //   pbj.age = 35
  // }
  obj.age = str
  return obj
}
function giveBirthday(obj){
  if (!obj.age){
    obj.age = 1
  } else {
    obj.age += 1
  }
  return obj
}
function marry(person1 , person2){
  person1.married = true
  person2.married = true
  person1.spouseName = getFullName(person2)
  person2.spouseName = getFullName(person1)
}
function divorce(person1 , person2){
  person1.married = false
  person2.married = false
  delete person1.spouseName
  delete person2.spouseName
}


/****************************/
// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}



module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
