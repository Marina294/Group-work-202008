'use strict';

document.addEventListener('DOMContentLoaded', function() {
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let pass = document.getElementById("pass");
  // let submitButton = document.getElementById("submit-button");
  
  // name.addEventListener("change", function(){
  //   if(name.value !== ""){
  //     name.style.borderColor = "#E30246";
  //   }else if (name.value === ""){
  //     name.style.borderColor = "#555555";
  //   }
  // },false);
  
  email.addEventListener("change", function(){
    if(email.value !== ""){
      email.style.borderColor = "#E30246";
    }else if (email.value === ""){
      email.style.borderColor = "#555555";
    }
  },false);

  pass.addEventListener("change", function(){
    if(pass.value !== ""){
      pass.style.borderColor = "#E30246";
    }else if (pass.value === ""){
      pass.style.borderColor = "#555555";
    }
  },false);

  // document.querySelectorAll("input").addEventListener('change', function(){ 
  //   if(name.value !== "" && email.value !== "" && pass.value !== ""){
  //     submitButton.style.background = "#E30246";
  //   }else{
  //     submitButton.style.background = "#555555";    
  //   }
  // },false);
}, false);