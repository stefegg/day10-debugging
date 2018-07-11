// alert('Stop here');

firstName = "Stephen";
console.log(firstName);


document.getElementById('page').style.backgroundColor = 'red';

var x = document.getElementsByClassName('main-text');

var i = 0;
for (i=0; i < x.length; i++) {
  x[i].style.backgroundColor = 'blue'
}

// x became an array, so we access it like an element in an array1
// it became an array and needed a loop because we're trying to hit up mad p tags

//step one - get an erorr
//step two - refer to stack trace (right side of console that lists lines)
// step three - look where that stacktrace told you to look in your code
//step four - determine if it's an actual error you can solve on your own
//step five - refer to documentation for SPECIFICALLY what you're trying to do
//step six - implement documentation
//step seven - console.log different values of your application to see which
//work or are being properly recorded to determine the specifc point you're
//failing at
//step 8 - determine if you're getting expected output
// step 9 - if output is not expected, google your error name - freak the fuck out for a while.
