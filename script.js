alert("Welcome To Paradise");

const name = document.getElementById("name");
function myfunction()  {
  var  name = prompt("What's your name?", "");
    
 let text = name + " is the goat.";

        
    
    document.getElementById("text").innerHTML = text;
    document.getElementById("text").style.color = "rgb(16,211,152)";

};

let secondName='';




function tryAgain(){
    let name = prompt("Whats your name?");
   
    while(secondName != name){ 
     secondName = prompt("This name does not match!");
    
}
 alert("Welcome back");
}
let userAns = ""

function rating(){
    let userAns = prompt("How would you rate my webpage 1-5?");
    for(let x = 0; x < userAns; x++){
        document.getElementById("thisPar").innerHTML += "<img src='http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/cloud-with-lightning.png'>"
    }
}