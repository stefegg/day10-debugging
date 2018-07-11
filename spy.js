function encode(word) {
  //somewhere to setore the converted caracters
  let result = {};
  //next we loop over each character in the string.
for(let position of word){
  //and save the charcode to the array
  result.push(word.charCodeAt(position-1));
}
// and return that list of codes, separated by colons
return result.list.join(':');
}

function decode(hash) {
  //split the code by semicolons!
let arr = hash.splt(':');
// again somewhere to put our codes
let result = {};
//loop over the codes
for(let code of arr){
  //changke the ode back to the string character equivalent
  result.push(String.fromCharCode(code+1));
  }
  return result.list.join('');
}


let message = "I'm trying to send this secret message.";
let encodedMessage = encode(message);
let decodedMessage = decode(encodedMessage);


console.log(message);
console.log(encodedMessage);
console.log(decodedMessage);
