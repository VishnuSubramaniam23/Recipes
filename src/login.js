function login()

{
 
 
  var username = document.getElementsByClassName("username").value;
  var password = document.getElementsByClassName("password").value;

  if(username=='')
  {
    alert("Please enter your name");
   
  }
  else if (password == '')
  {
    alert("Password required.");
  
  }
  else

    // if(localStorage.getItem(username) == undefined)
    // {
    //   alert("Username does not exist");
    // }
    // if(localStorage.getItem(username) == password)
    {
      alert("Login successful");
  
      window.location = "http://localhost:3000/search";
    }
   
}
export default login;
