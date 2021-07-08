var userAge = prompt("How old are you?");
console.log(userAge);

if (userAge <= 15){
  alert("Need parental supervision!");
}

if (userAge >= 15){
  alert("Welcome to the site all about Shiba-Inu");
}

var experienced = prompt("Would you like to dable in Crypto Currency?");
console.log(experienced);

if (experienced == "yes"){
  alert("Awesome!");
}
 
if (experienced == "no"){
  alert("Let's change your mind!");
  window.stop();
}

  //user logs onto website
  //ask user's age
  //ask user is they would like to dable in crypto?
  //if user wants to learn more, then they may learn more about crypto.
  //if user says "yes" then "let's get started".

  var askAssist;
  while (askAssist != "yes") {
    askAssist = prompt("Would you like more info about Crypto.. Yes? No?");
  }

  if(askAssist == "yes"){
    alert("Let's Get Started!!!");
  }
  
  var amount = prompt("How many stars would you rate this webpage 1-5?");
  for(let i = 0; i < amount; i++){
    document.write("<img src='https://lh3.googleusercontent.com/proxy/9c6OD2ECzg11mWHzdGcqdeTn4xlYzpkY9UJn1-PFXhFGtdJ5NtosIvB6J2jhvReCy3_xVyUVcwxw6eODenGA-8P3Fo2NkscAHOK-DFw3JfWs_JadToGl0g'>");
  }