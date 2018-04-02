angular.module("login",['firebase'])
    .controller("firstCtrl",firstCtrl)

    function firstCtrl($firebaseAuth,$firebaseStorage)
    {
        var first = this

        var auth = $firebaseAuth();
      

       
      
          
        first.check=function()
        {
          if (first.user) {
            console.log("Signed in as:", first.user.uid);
            console.log("false")
            return false;
          } else {
            console.log("Signed out");
            console.log("true")
            return true;
          }

          
        }

        var firebaseUser=auth.$getAuth();

        first.googlelogin = function()
        {console.log("google")
            auth.$signInWithPopup("google").then(function(result) {
    
                first.user = result.user
                console.log(first.user)
                console.log("Signed in as:", result.user.uid);
              }).catch(function(error) {
                console.error("Authentication failed:", error);
              });

              
        
        if (firebaseUser) {
          console.log("Signed in as:", firebaseUser.uid);
         
        } else {
          console.log("Signed out");
         
        }
             
         }

         first.facebooklogin = function()
         {console.log("facebook")
            auth.$signInWithPopup("facebook").then(function(result) {
    
                first.user = result.user
                console.log("Signed in as:", result.user.uid);
              }).catch(function(error) {
                console.error("Authentication failed:", error);
              });
         }

         first.twitterlogin = function()
         {console.log("twitter")
            auth.$signInWithPopup("twitter").then(function(result) {
    
                first.user = result.user
                console.log("Signed in as:", result.user.uid);
              }).catch(function(error) {
                console.error("Authentication failed:", error);
              });
         }
     
         first.githublogin = function()
         {console.log("github")
            auth.$signInWithPopup("github").then(function(result) {
    
                first.user = result.user
                console.log("Signed in as:", result.user.uid);
              }).catch(function(error) {
                console.error("Authentication failed:", error);
              });
         }

    }