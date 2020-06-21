  var reg =   /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   
     var msg = document.getElementById("message");
     var error = document.getElementById("error");
     
    
     form.addEventListener('submit' , (e)=> {
        var email = document.getElementById('email').value;
        if(email === '' || !reg.test(email)){
        //prevent submiting
         e.preventDefault();
         msg.style.visibility = "visible";
         error.style.visibility = "visible"; 
         document.getElementById('email').style.border = "1px solid #fc6461";
         console.log("email: " + email);            
      } else if( reg.test(email)){
        console.log("email2: " + email); 
         msg.style.visibility = "hidden";
         error.style.visibility = "hidden";  
         document.getElementById('email').style.border = "1px solid #c79e9c";
      }
     });