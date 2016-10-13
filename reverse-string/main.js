var reverseString = function(string) {
  return string.split('').reverse().join('');
}

var input = prompt("Enter a string and I'll reverse it");
alert(reverseString(input));
