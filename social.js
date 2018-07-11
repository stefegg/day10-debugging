alert('Welcome to FaceHugger!')

userOne = {
  name: 'Eat Me',
  postS: { postOne : 'Today I fell down a flight of stairs, it was super fun!',
postTwo: 'Today I ate an entire person, awesome!',
postThree: 'Look at me, I am super cute!'
}
}

for(x in userOne){
  var x = document.getElementById('outPut');
  x.innerHTML = 'Posted 7.9.18 @ 10:10 AM: ' + userOne.postS.postOne + '\nPosted By: ' + userOne.name;
};

for(x in userOne){
  var x = document.getElementById('outPut2');
  x.innerHTML = 'Posted 7.11.18 @ 7:16 PM: ' + userOne.postS.postTwo + '\nPosted By: ' + userOne.name;
};
for(x in userOne){
  var x = document.getElementById('outPut3');
  document.getElementById('image').src="images/user1.jpg"
  x.innerHTML = 'Posted 7.14.18 @ 9:38 AM: ' + userOne.postS.postThree + '\nPosted By: ' + userOne.name;
};
//reactive add users
// totalUsers = 0;
// users = {}
//
// function createUser(name , email) {
//
//   totalUsers += 1;
//   var propertyName = 'user' + totalUsers;
//
//   users[[propertyName]] = propertyName
//
//   users[totalUsers] = {
//     name: name,
//     email: email,
//     id: totalUsers
//   }
// }
