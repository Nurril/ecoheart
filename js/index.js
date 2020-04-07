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

  var database = firebase.database();

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
            console.log(errorMessage);

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
        

        
            if (password == cpassword )
            {
                var result = firebase.auth().createUserWithEmailAndPassword(email, password);
                
                result.catch(function(error)
                {
                    var errorCode = error.code;
                    var errorMessage = error.message;
        
                    console.log(errorCode);
                    console.log(errorMessage);
        
                    window.alert("Message: "+ errorMessage);
                });

            

            }
            else
            {
                window.alert("Password do not match")
                location.reload(true);
               
            }
       

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
            console.log(errorMessage);

            window.alert("Message: "+ errorMessage);
        });
     }
     else
     {
         window.alert("Please write your email")
     }
  });


  $("#btn-update").click(function()
  {

   var phone = $("#phone").val();
   var address = $("#address").val();
   var bio = $("#bio").val();
   var fname = $("#firstName").val();
   var secondName=$("#secondName").val();
   var country = $("#country").val();
   var gender = $("#gender").val();
     
    
    
    var userId = firebase.auth().currentUser.uid;
    

    if(fname!="" && secondName!="" && country!="" && gender!="" && phone!="" && address!="" && bio!="" )
    {
       
        var rootRef = firebase.database().ref(userId).child("user");


        rootRef.set({
        Phone:$("#phone").val(),
        Address:$("#address").val(),
        Bio:$("#bio").val(),
        fname:$("#firstName").val(),
        secondName:$("#secondName").val(),
        country:$("#country").val(),
        gender:$("#gender").val(),
    })
 

        var db = firebase.database();
        var ref = db.ref(userId).child("Users");  
        
        

      ref.set({
        
        fname : $('#firstName').val(),
        sname : $('#secondName').val(),
        phone : $('#phone').val(),
        address : $('#address').val(),
        gender : $('#gender').val(),
        country : $('#country').val(),
        bio : $('#bio').val(),
       
       
       
        
    
       });
           
     
        
        ref.once("value", function(snapshot)
         {
            var data = snapshot.val();   //Data is in JSON format.
            console.log(data);
         }); 
             
         firebase.auth().onAuthStateChanged(function(user)
         {
             if(user)
             {
                 
                 var userID = firebase.auth().currentUser.uid;
                 firebase.database().ref(userID).once('value').then(function(snapshot)
                 {
                     if(snapshot.val())
                     {
                         window.location.href = "MainPage.html";
                     }
                 
                 })
                
             }
         });
              (function(error)
                 { 
                if(error)
                {
                var errorCode = error.code;
                var errorMessage = error.message;

                 console.log(errorCode);
                 console.log(errorMessage);

                 window.alert("Message: "+ errorMessage);

                }
                else
                {
                  window.location.href ="MainPage.html";
                }
                });
        }
         else
        {
        window.alert("Please fill up all fields.");
        location.reload(true);
        }
    });

    setInterval(function() {
        var newVal = Math.floor((Math.random() * 179) + 1);
      
        $('.gauge--3 .semi-circle--mask').attr({
          style: '-webkit-transform: rotate(' + newVal + 'deg);' +
          '-moz-transform: rotate(' + newVal + 'deg);' +
          'transform: rotate(' + newVal + 'deg);'
         });				
      }, 1000);
     

  