<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<style>
.login{
  width: 360px;
  padding: 8% 0 0;
  margin: auto;
}
.form {
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.form input {
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
.form button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #4CAF50;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
</style>
<body>

<div class="login">
  <div class="form">
    <form action="register" method="post" onsubmit="return Check()" name="registerForm">
      <input id="email" type="email" name="email_id" placeholder="Email Address"/>
      <input id="pass" type="password" name="password" placeholder="Password"/>
      <input id="name" type="text" name="user_name" placeholder="Name"/>
      <button>Register</button>
      <p class="message">Already registered? <a href="Validate.jsp">Sign In</a></p>
      <a href="index.html">Home</a>   
      <p id="alert"></p>
    </form>
    </div>
    </div>
    <script>
      function Check(){
        var user=document.forms["registerForm"]["email_id"].value;
        var password=document.forms["registerForm"]["password"].value;
        var name=document.forms["registerForm"]["user_name"].value;
        var msg=document.getElementById("alert");
        msg.innerHTML="";
        if(user==""){
          msg.innerHTML="Email not given";
          return false;
        }
        if(password==""){
          msg.innerHTML="Password not given";
          return false;
        }
      }
        var a=document.getElementById("email");
        var b=document.getElementById("pass");
        var c=document.getElementById("name");

        function event(){
          document.getElementById("alert").innerHTML="";
        }
        a.addEventListener("click",event);
        b.addEventListener("click",event);
        c.addEventListener("click",event);
    </script>
</body>
</html>