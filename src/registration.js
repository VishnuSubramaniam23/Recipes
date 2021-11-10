function registration()

{
  var user = new Object();

    user.name= document.getElementsByClassName("name").value;
    user.email= document.getElementsByClassName("email").value;
    user.username = document.getElementsByClassName("usname").value;
    user.pwd= document.getElementsByClassName("pswd").value;
    user.cpwd = document.getElementsByClassName("cpwd").value;
        


    var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    var letters =  /^[A-Z][a-z]|[a-zA-Z]+( [a-zA-Z]+)+$/i;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

      if(user.name=='')
      {
        alert("Please enter your name");
       
      }
      else if(!letters.test(user.name))
      {
        alert("Name field required only alphabet characters");
        
      }
      else if(user.email=='')
      {
        alert("Please enter your Email Id");
       
      }
      else if (!filter.test(user.email))
      {
        alert("Invalid Email");
       
      }
      else if(user.username == '')
      {
    
        alert("User Name required.");
      
      }
       else if (user.pwd == '')
      {
        alert("Password required.");
      
      }
        else if(!pwd_expression.test(user.pwd))
      {
        alert ('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
      }
        else if(user.pwd != user.cpwd)
      {
        alert("Password does not match.");
      }
     else{
        for (var key in localStorage)
        {  
          // console.log(key);  
          if(key == user.username) 
          { 
            alert('Username: ' + key +  ' is already taken!'); 
          }
        
        
        }
      
      localStorage.setItem(user.username, user.pwd);
    
      document.getElementsByClassName("usname").value = "";
      document.getElementsByClassName("pswd").value = "";
      document.getElementsByClassName("cpwd").value = "";
      
      alert("Hey! " + user.username + "   Thanks for registration")
      window.location = "http://localhost:3000/"; 
     }

    }
    export default registration;