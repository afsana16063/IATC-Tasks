function convertAsciiToWord(asciiCodes) {

    var characters = asciiCodes.map(code => String.fromCharCode(code)); //convert ASCII to char
    
    
    var word = characters.join(""); //join chars
    
    return word;
  }
  
  // Test the function with an example
  var asciiCode1a = [104, 101, 108, 108, 111, 32, 119, 111, 114, 108, 100];
  console.log(convertAsciiToWord(asciiCode1a)); 
  
  var asciiCode1b = [83, 97, 108, 97, 109, 32, 65, 122, 101, 114, 98, 97, 121, 99, 97, 110];
  console.log(convertAsciiToWord(asciiCode1b)); 
  
  var asciiCode1c = [106, 97, 118, 97, 115, 99, 114, 105, 112, 116, 32, 105, 115, 32, 98, 111, 109, 98, 97]
  console.log(convertAsciiToWord(asciiCode1c)); 





  function convertStringToAscii(string) {
    
    var asciiCodes = []; //initialize
  
    for (var i = 0; i < string.length; i++) {  //iteration

      
      var asciiCode = string.charCodeAt(i); //get ASCII code
      
      
      asciiCodes.push(asciiCode);    //ASCII to array
    }
  
    
    return asciiCodes;  //return array 
  }
  
  var string2a = "hello world";
  console.log(convertStringToAscii(string2a)); 
  
  
  var string2b = "Salam Azerbaycan";
  console.log(convertStringToAscii(string2b)); 
  
  var string2c = "javascript is bomba";
  console.log(convertStringToAscii(string2c)); 






  //task 3


  function convertStringToCharacters(string) {
    
    var characters = string.split("");   //split
  

    return characters;
  }
  
  
  var string = "hello world";
  console.log(convertStringToCharacters(string)); 
  
  var string = "this is a nice joke";
  console.log(convertStringToCharacters(string));








  //Task 4

  function dropVowels(string) {

    var result = string.replace(/[aeiou]/gi, '');   //remove both upper and lower vowels from the word
  
    
    return result;
  }
  
  
  var string = "hello world";
  console.log(dropVowels(string)); 
  
  var string = "I have failed my classes";
  console.log(dropVowels(string)); 
  
  
  