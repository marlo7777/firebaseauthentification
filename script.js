
//checks constantly if user is logged in
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    document.getElementById("login-div").style.display="none";
    document.getElementById("user-div").style.display="block";
    var user = firebase.auth().currentUser;
    if(user != null){
    	var email = user.email;
    	document.getElementById('user').style.visibility="visible";
    	document.getElementById('user').innerHTML=email;


    }

  } else {
    // No user is signed in.
    document.getElementById("login-div").style.display="block";
    document.getElementById("user-div").style.display="none";
  }
});


function login(){
	var userEmail = document.getElementById('emailText').value;
	var userPassword = document.getElementById('passwordText').value;
    firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
		  // Handle Errors here.
		  var errorCode = error.code;
		  var errorMessage = error.message;
		  alert(errorMessage);
		})
}

function logout(){
	firebase.auth().signOut();

}