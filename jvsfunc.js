
var usersname = document.getElementById( "username" );
var usersnameresponse = document.getElementById ("uname_response")
var input = document.getElementById("psw");
var reinput = document.getElementById("psw-repeat");
var cnfrm = document.getElementById("cnfrm");
var pswsymbol = document.getElementById("pswsymbol");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

//func pswee and pswresee for the toggle visibility
function pswsee() {
  var x = document.getElementById("psw");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function pswresee() {
  var x = document.getElementById("psw-repeat");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

// Checks username availabilty with AJAX jquiry

$(document).ready(function(){
   $("#username").keyup(function(){
      var username = $(this).val().trim();
      if(username != ''){
         $.ajax({
            url: 'ajaxfile.php',
            type: 'post',
            data: {username: username},
            success: function(response){
               $("#uname_response").html(response);
             }
         });
      }else{
         $("#uname_response").html("");
      }
    });

 });



// When the user clicks on the password field, show the message box
input.onfocus = function() {
  document.getElementById("message").style.display = "block";
}
reinput.onfocus = function() {
  document.getElementById("message2").style.display = "block";
}


// When the user clicks outside of the password field, hide the message box
input.onblur = function() {
  document.getElementById("message").style.display = "none";
}
reinput.onblur = function() {
  document.getElementById("message2").style.display = "none";
}


// When the user starts to type something inside the password field
input.onkeyup = function() {

  // Validate symbols
  var symboletters = /[!@#$%^&*-]/g;
  if(input.value.match(symboletters)) {
    input.setCustomValidity("");
    pswsymbol.classList.remove("invalid");
    pswsymbol.classList.add("valid");
  } else {
    input.setCustomValidity("Invalid password");
    pswsymbol.classList.remove("valid");
    pswsymbol.classList.add("invalid");
}

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(input.value.match(upperCaseLetters)) {
    input.setCustomValidity("");
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    input.setCustomValidity("Invalid password");
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(input.value.match(numbers)) {
    input.setCustomValidity("");
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    input.setCustomValidity("Invalid password");
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if(input.value.length >= 8) {
    input.setCustomValidity("");
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    input.setCustomValidity("Invalid password");
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}
// Validates confirm password on input change
input.onchange = function (){
  if(input.value != reinput.value) {
    reinput.setCustomValidity("Passwords Don't Match");
    cnfrm.classList.remove("valid");
    cnfrm.classList.add("invalid");
  } else {
    reinput.setCustomValidity('');
    cnfrm.classList.remove("invalid");
    cnfrm.classList.add("valid");
  }
}

// Validate password
reinput.onkeyup = function (){
  if(input.value != reinput.value) {
    reinput.setCustomValidity("Passwords Don't Match");
    cnfrm.classList.remove("valid");
    cnfrm.classList.add("invalid");
  } else {
    reinput.setCustomValidity('');
    cnfrm.classList.remove("invalid");
    cnfrm.classList.add("valid");
  }
}

//function to log in and display wrong username and password
$(document).ready(function(){
  $("#login").click(function(){
      var username = $("#uname").val().trim();
      var password = $("#psw").val().trim();
      var msg = "";

      if( username != "" && password != "" ){
          $.ajax({
              url:'loginin.php',
              type:'post',
              data:{username:username,password:password},
              success:function(response){
              }
          });
      }
  });
});

