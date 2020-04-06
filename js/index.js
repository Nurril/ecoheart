var firebaseConfig = 

    {
    
    apiKey: "AIzaSyAhcs_OWjltDDJmxK3ivRaeqjOt59emqSg",
    authDomain: "ecoheart-2.firebaseapp.com",
    databaseURL: "https://ecoheart-2.firebaseio.com",
    projectId: "ecoheart-2",
    storageBucket: "ecoheart-2.appspot.com",
    messagingSenderId: "154304967504",
    appId: "1:154304967504:web:9a06bf547902734a043255",
    measurementId: "G-FST2C9WPNX"
  };

  firebase.initializeApp(firebaseConfig);


  firebase.auth.Auth.Persistence.LOCAL;

  $("#btn-login").click(function()
    {
    var email = $("#email").val();
    var password = $("#password").val();

    if(email != "" && password != "")
    {
        var result = firebase.auth().signInWithEmailAndPassword(email, password);

        result.catch(function(error)
        {
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(errorCode);
            onsole.log(errorMessage);

            window.alert("Message: "+ errorMessage);
        });
    }
    else
    {
        window.alert("Please fill up all fields.");

    }
  });
      

 
  
  $("#btn-logout").click(function()
  {
      firebase.auth().signOut();
  });

  
  $("#btn-signup").click(function()
  {
    var email = $("#email").val();
    var password = $("#password").val();
    var cpassword = $("#confirm-password").val();


    if(email != "" && password != "" && cpassword != "")
    {
        

        result.catch(function(error)
        {
            if (password == cpassword )
            {
                var errorCode = error.code;
            var errorMessage = error.message;

            console.log(errorCode);
            onsole.log(errorMessage);

            window.alert("Message: "+ errorMessage);

            var result = firebase.auth().createUserWithEmailAndPassword(email, password);

            }
            else
            {
                window.alert("Password do not match")
                location.reload(true);
               
            }
        });

    }
    
    else
    {
        window.alert("Please fill up all fields.");
        location.reload(true);
     

    }
    
  });

  $("#btn-resetPassword").click(function()
  {
     var auth = firebase.auth();
     var email =   $("#email").val();

     if(email != "")
     {
        auth.sendPasswordResetEmail(email).then(function()
        {
            window.alert("Email has been sent to you, Please chech and verify");
        })
        .catch(function(error)
        {
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(errorCode);
            onsole.log(errorMessage);

            window.alert("Message: "+ errorMessage);
        });
     }
     else
     {
         window.alert("Please write your email")
     }
  });